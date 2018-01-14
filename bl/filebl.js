var models = require('../config/models');  
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var mkdir = require('mkdir-recursive');

var file = {};

file.saveFiles = function(form, user, fields, files, cb){
    var old_path = files.file.path,
    file_size = files.file.size,
    file_ext = files.file.name.split('.').pop(),
    index = old_path.lastIndexOf('/') + 1,
    file_name = old_path.substr(index),
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
                        var file = new models.fileStore();
                        file.filename = file_name;
                        file.filepath = new_path;
                        file.link = fields.link; // todo: verify link exists (plan, step, todo)
                        file.save(function(err){
                            if(err){
                                cb(err);
                                return;
                            }
                    
                            cb(null, file);
                        });
                    }
                });
            });
        });
    });
    
}

module.exports = file;