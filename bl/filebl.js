var models = require('../config/models');  
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var mkdir = require('mkdir-recursive');

var file = {};

file.loadFiles = function(userid, planid, cb){
    findUserPlan(userid, planid, function(err, userplan){
        
        if(err){
            cb(err);
            return;
        }
        var _files = [];
        var _planid = mongoose.Types.ObjectId(userplan.planId);
        models.fileStore.find({ link: userplan.planId }, function(err, files){
            if(err){
                //todo: logging
                console.log(err);
                return;
            }
            files.forEach(function(file){
                _files.push(file);
            });
            
            models.plan.findOne({_id: _planid}, function(err, plan){
                if(err){
                    //todo: logging
                    console.log(err);
                    return;
                }
                if(plan.steps){
                    var stepids = [];
                    for(var i=0; i < plan.steps.length; i++){
                        stepids.push(plan.steps[i]._id.toString());
                    }
                    models.fileStore.find({link: {$in: stepids}}, function(err, files){
                        if(err){
                            //todo: logging
                            console.log(err);
                            return;
                        }
                        files.forEach(function(file){
                            _files.push(file);
                        });
                        cb(null, _files);
                    });
                }
            });
        });
    });
}

function findUserPlan(userid, planid, cb){
    var query = {userId: userid, planId: planid };
    models.userPlan.findOne(query, function(err, userplan){
        if(err){
            cb(err);
            return;
        }
        if(!userplan){
            cb({message: "not allowed"});
            return;
        }
        
        cb(null, userplan);
    });
}

file.saveFiles = function(form, user, fields, files, cb){
    var old_path = files.file.path,
    file_size = files.file.size,
    file_ext = files.file.name.split('.').pop(),
    index = old_path.lastIndexOf('/') + 1,
    file_name = files.file.name.split('.').shift(),
    new_dir = path.join(process.cwd(), '/uploads/', user.id);
    new_path = path.join(new_dir, '/', files.file.name);

    mkdir.mkdir(new_dir, function(err){
        if(err){
            cb(err);
        }
        fs.readFile(old_path, function(err, data) {
            if(err){
                cb(err);
            }
            fs.writeFile(new_path, data, function(err) {
                if(err){
                    cb(err);
                }
                fs.unlink(old_path, function(err) {
                    if (err) {
                        cb(err);
                    } else {
                        findFile(fields.link, function(err, _file){
                            if(err){
                                cb(err);
                                return;
                            }
                            if(_file){
                                cb(null, _file);
                                return;
                            }
                            var file = new models.fileStore();
                            file.filename = file_name;
                            file.extension = file_ext;
                            file.filepath = new_path;
                            file.link = fields.link; // todo: verify link exists (plan, step, todo)
                            file.save(function(err){
                                if(err){
                                    cb(err);
                                    return;
                                }
                        
                                cb(null, file);
                            });
                        });
                    }
                });
            });
        });
    });
}

function findFile(link, cb){
    var query = {link: link};
    models.fileStore.findOne(query, function(err, _file){
        if(err){
            cb(err);
            return;
        }
        cb(err, _file);
    });
}

module.exports = file;