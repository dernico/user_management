var models = require('../config/models');  
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var mkdir = require('mkdir-recursive');
var crypto = require('crypto');

var uploadFolder = 'uploads'
var saveOnFileSystem = false;

var file = {};

file.deleteFile = function(fileid, cb){

    if(saveOnFileSystem){
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
    else{
        var query = {fileId: fileid};
        models.fileStore.remove(query, function(err){
            cb(err);
        });
    }
}

file.getFile = function(fileid, cb){

    if(saveOnFileSystem){
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
    }else{
        var query = {fileId: fileid};
        models.fileStore.findOne(query, function(err, file){
            cb(err, file);
        });
    }

}

file.saveFiles = function(form, user, fields, files, cb){
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


function saveFile(user, fields, file, cb){

    if(saveOnFileSystem){
        saveOnFileSystem(fields, file, cb);
        return;
    }

    saveInMongo(fields, file, user, cb);
}

function saveInMongo(fields, file, user, cb){
    var file_size = file.size,
    old_path = file.path,
    fileExt = file.name.split('.').pop(),
    fileName = file.name.split('.').shift(),
    fileId = crypto.createHash('md5').update(file.name + user.id).digest('hex');

    var query = {fileId: fileId};
    models.fileStore.findOne(query, function(err, _file){
        if(err){
            cb(err);
            return;
        }
        if(!_file){
            var newFileData = new models.fileStore();
            newFileData.fileId = fileId;
            newFileData.data = fs.readFileSync(old_path);
            newFileData.save(function(err, file){        
                var fileDto = {};
                fileDto.filename = fileName;
                fileDto.extension = fileExt;
                fileDto.fileId = fileId;
                fileDto.url = fields.url + "/" + fileId;
                cb(null, fileDto);
            });
        }else{
            var fileDto = {};
            fileDto.filename = fileName;
            fileDto.extension = fileExt;
            fileDto.fileId = fileId;
            fileDto.url = fields.url + "/" + fileId;
            cb(null, fileDto);
        }
    });
}

function saveOnFileSystem(fields, file, cb){
    var file_size = file.size,
    fileExt = file.name.split('.').pop(),
    fileName = file.name.split('.').shift(),
    fileId = crypto.createHash('md5').update(file.name + user.id).digest('hex'),
    old_path = file.path,
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
                            _file.filename = fileName;
                            _file.extension = fileExt;
                            _file.fileId = fileId;
                            _file.url = fields.url + "/" + fileId;
                            cb(null, _file);
                    }
                });
            });
        });
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