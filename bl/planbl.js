var models = require('../config/models');  
var mongoose = require('mongoose'); 

var plan = {};

plan.getPlannings = function(userid, cb){
    var query = { userId: userid.toString() };
    models.userPlan.find(query, function(err, userPlans){
        var planids = [];
        userPlans.forEach(userPlan => {
            planids.push(mongoose.Types.ObjectId(userPlan.planId));
        });
        
        models.plan.find( { '_id': { $in: planids } }, function(err, plannings){
            cb(err, plannings);
        } );
    });
}

plan.createOrUpdatePlanning = function(userid, plan, cb){
    var planning;
    if('_id' in plan){
        updatePlanning(plan, cb);
    }else{
        createPlanning(userid, plan, cb);
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

var createPlanning = function(userid, plan, cb) {
    planning = new models.plan();
    planning.title = plan.title;

    planning.save(function(err){
        if(err){
            cb(err);
            return;
        }
        createNewUserPlan(userid.toString(), planning._id.toString(), function(err, userplan){
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
    models.user.findOne({email: shareObj.email}, function(err, u){
        if(err){
            cb(err);
            return;
        }
        if(u == null){
            var newUser = new models.user();
            newUser.email = shareObj.email;
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
    models.userPlan.find(query, function(err, userplans){
        if(err){
            cb(err);
            return;
        }
        if(userplans.length === 0){
            createNewUserPlan(query.userId, query.planId, cb);
        }
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