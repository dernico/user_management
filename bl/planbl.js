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
        var userplan = new models.userPlan();
        userplan.userId = userid.toString();
        userplan.planId = planning._id.toString();
        userplan.save(function(err){
            if(err){
                cb(err);
                return;
            }

            cb(null, planning);
        });
    });
}


module.exports = plan;