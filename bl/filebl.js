var models = require('../config/models');  
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var mkdir = require('mkdir-recursive');
var crypto = require('crypto');

var uploadFolder = 'uploads'

var file = {};

file.deleteFile = function(fileid, cb){
    // todo: dont just use fileid -> use userid and planid, too
    var folderPath = path.join(process.cwd(), uploadFolder);
    var filepath = path.join(folderPath, fileid);

    fs.exists(filepath, function(exists){
        if(exists){
            //cb(null, fs.createReadStream(filepath), filepath);
            fs.unlink(filepath, cb);
        }    
    });
}

file.getFile = function(fileid, cb){
    // todo: dont just use fileid -> use userid and planid, too
    var folderPath = path.join(process.cwd(), uploadFolder);
    var filepath = path.join(folderPath, fileid);

    fs.exists(filepath, function(exists){
        if(exists){
            //cb(null, fs.createReadStream(filepath), filepath);
            cb(null, null, filepath);
        }else{
            cb({error: "not found"});
        }        
    });

}

file.saveImages = function(form, user, fields, files, cb){
    var _files = [];
    var saveCount = 0;
    var fileCount = 0;
    for(var file in files){
        fileCount++;
    }
    if(fileCount == 0){
        cb("no files");
    }

    for(var file in files){
        saveFile(user, fields, files[file], function(err, file){
            saveCount++;
            if(err) return;

            _files.push(file);
            if(saveCount == fileCount){
                cb(null, _files);
            }
        });
    }
}

file.saveFiles = function(form, user, fields, files, cb){
    saveFile(user, fields, files.file0, cb);
}


function saveFile(user, fields, file, cb){
    var old_path = file.path,
    file_size = file.size,
    file_ext = file.name.split('.').pop(),
    file_name = file.name.split('.').shift(),
    fileId = crypto.createHash('md5').update(file.name + user.id).digest('hex'),
    new_dir = path.join(process.cwd(), uploadFolder),
    new_path = path.join(new_dir, '/', fileId);

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
                            var _file = {};
                            _file.filename = file_name;
                            _file.extension = file_ext;
                            _file.fileId = fileId;
                            _file.url = fields.url + "/" + fileId;
                            cb(null, _file);
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


// file.deleteFile = function(fileid, cb){
//     var query = {_id: mongoose.Types.ObjectId(fileid)};
//     models.fileStore.remove(query, function(err){
//         if(err){
//             cb(err);
//             return;
//         }
//         cb(null);
//     });
// }

// file.loadFiles = function(userid, planid, cb){
//     findUserPlan(userid, planid, function(err, userplan){
        
//         if(err){
//             cb(err);
//             return;
//         }
//         var _files = [];
//         var _planid = mongoose.Types.ObjectId(userplan.planId);
//         models.fileStore.find({ link: userplan.planId }, function(err, files){
//             if(err){
//                 //todo: logging
//                 console.log(err);
//                 return;
//             }
//             files.forEach(function(file){
//                 _files.push(file);
//             });
            
//             models.plan.findOne({_id: _planid}, function(err, plan){
//                 if(err){
//                     //todo: logging
//                     console.log(err);
//                     return;
//                 }
//                 if(plan.steps){
//                     var stepids = [];
//                     for(var i=0; i < plan.steps.length; i++){
//                         stepids.push(plan.steps[i]._id.toString());
//                     }
//                     models.fileStore.find({link: {$in: stepids}}, function(err, files){
//                         if(err){
//                             //todo: logging
//                             console.log(err);
//                             return;
//                         }
//                         files.forEach(function(file){
//                             _files.push(file);
//                         });
//                         cb(null, _files);
//                     });
//                 }
//             });
//         });
//     });
// }

// function findUserPlan(userid, planid, cb){
//     var query = {userId: userid, planId: planid };
//     models.userPlan.findOne(query, function(err, userplan){
//         if(err){
//             cb(err);
//             return;
//         }
//         if(!userplan){
//             cb({message: "not allowed"});
//             return;
//         }
        
//         cb(null, userplan);
//     });
// }


module.exports = file;