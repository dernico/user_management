var models = require('../config/models');  
var mongoose = require('mongoose'); 

var plan = {};

plan.getPlannings = function(user, cb){
    var query = { userId: user._id.toString() };
    models.userPlan.find(query, function(err, userPlans){
        var planids = [];
        userPlans.forEach(userPlan => {
            planids.push(mongoose.Types.ObjectId(userPlan.planId));
        });
        
        models.plan.find( { '_id': { $in: planids } }).lean().exec(function(err, plannings){
            updateUsers(err, user, plannings, cb);
        } );
    });
}

function updateUsers(err, user, plannings, cb){
    if(err){
        return;
    }
    if(plannings){
        var counter = 0;
        plannings.forEach(plan => {
            //var plan = plannings[i];
            var userids = [];
            if('users' in plan){
                plan.users.forEach(user => {
                    userids.push(mongoose.Types.ObjectId(user._id));
                });
            }
            models.user.find({'_id': { $in: userids }}).lean().exec(function(err, users){
                counter++;
                if(err){
                    console.log(err);
                }
                var _users = [];
                if(users){
                    users.forEach(u => {
                        _users.push({
                            '_id': u._id.toString(),
                            email: u.email,
                            displayName: u.displayName,
                            firstname: u.firstname,
                            lastname: u.lastname,
                            gender: u.gender,
                            picture: u.picture
                        });
                    });
                }
                plan.loggedInUser = {
                    '_id': user._id,
                    email: user.email,
                    displayName: user.displayName,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    gender: user.gender,
                    picture: user.picture
                };
                plan.users = _users;

                // when all is done call callback
                if(counter == plannings.length){
                    cb(err, plannings);
                }
            });
        });
    }
}

plan.createOrUpdatePlanning = function(user, plan, cb){
    var planning;
    if('_id' in plan){
        updatePlanning(plan, cb);
    }else{
        createPlanning(user, plan, cb);
    }
}
var updatePlanning = function(plan, cb){
    var query = {_id: plan._id};
    models.plan.findOne(query, function(err, _plan){
        if(err){
            cb(err);
            return;
        }
        models.plan.update(query, plan, cb);
    });
}

var createPlanning = function(user, plan, cb) {
    planning = new models.plan();
    planning.title = plan.title;
    
    user._id = user._id.toString(); // i want the string here
    planning.users = [user];
    planning.save(function(err){
        if(err){
            cb(err);
            return;
        }
        createNewUserPlan(user._id.toString(), planning._id.toString(), function(err, userplan){
            cb(err, planning);
        });
    });
}

/*
shareObj:{
	email: the email you want to share to
	planid: the planning you want to share
}
*/
plan.share = function(fromUserId, shareObj, cb){
	// 1. check if email exists and if not create new user with just the email adress
    // 3. create a new entry in userPlan
    if(!shareObj.email || !shareObj.planid){
        cb({error: "no email or no planid"});
        return;
    }
    models.user.findOne({email: shareObj.email}).lean().exec(function(err, u){
        if(err){
            cb(err);
            return;
        }
        if(u == null){
            var newUser = new models.user();
            newUser.email = shareObj.email;
            newUser.firstname = shareObj.email;
            newUser.displayName = shareObj.email;
            newUser.picture = "/nothere.jpg";
            newUser.save(function(err, data){
                if(err){
                    cb(err);
                    return;
                }
                linkUserAndPlan(newUser, shareObj, cb);
            });
        }
        else{
            linkUserAndPlan(u, shareObj, cb);
        }
    });
}

function linkUserAndPlan(user, shareObj, cb){
    
    var query = { 
        userId: user._id.toString(),
        planId: shareObj.planid
    };

    models.plan.findById(mongoose.Types.ObjectId(query.planId), function(err, plan){
        if(err){
            cb(err);
            return;
        }
        plan.users = plan.users.concat([user]);
        plan.save(function(err){
            if(err){
                cb(err);
                return;
            }   
            models.userPlan.find(query, function(err, userplans){
                if(err){
                    cb(err);
                    return;
                }
                if(userplans.length === 0){
                    createNewUserPlan(query.userId, query.planId, cb);
                }
            });
        });
    });
}

function createNewUserPlan(userid, planid, cb){
    var userplan = new models.userPlan();
        userplan.userId = userid;
        userplan.planId = planid;
        userplan.save(function(err){
            if(err){
                cb(err);
                return;
            }

            cb(null, userplan);
        });
}

module.exports = plan;