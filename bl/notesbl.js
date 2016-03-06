var models = require('../config/models');
var blModels = require('../bl/models');
var mongoose = require('mongoose');
var prototypes = require('../prototypes');


var notes = {};

/*
	callback(error, notes);
*/
notes.getNotes = function(userid, callback){
	models.userNotes.find( {userId: userid}, function(err, usernotes){
		if(err || usernotes.length == 0) {
			callback(err, []);
			return;
		}

		var noteids = [];
		usernotes.each(function(usernote){
			usernote.noteId = mongoose.Types.ObjectId(usernote.noteId);

			console.log(usernote.noteId);
			noteids.push(usernote.noteId);
		});



		models.note.find({ _id: {$in: noteids} }, function(err, notes){
			if(err){
				callback(err, [])
			}
			callback(undefined, notes);
		});
		
	});
}

notes.addNote = function(userid, blNote, callback){
	var newNote = new models.note({
		title: blNote.title,
		content: blNote.content,
		startDate: blNote.startDate,
		endDate: blNote.endDate
	});

	newNote.save(function(err, savedNote){
		if(err){
			models.notes.findById(userid).remove(function(removeError){
				console.log(removeError);
				callback(err);
			});
		}
		else{

			var newUserNote = new models.userNotes({
				userId: userid,
				noteId: savedNote._id,
				deleted: false
			});

			newUserNote.save(function(err){
				if(err){
					callback(err);
				}
				else{
					callback();
				}
			});
		}
	});
};

notes.deleteNote = function(userid, noteid, callback){
	console.log("delete userid: " + userid + " noteid: " + noteid);

	models.userNotes.find({userId: userid, noteId: noteid}, function(err, usernote){
		if(err){
			callback(err);
			return;
		}
		if(usernote.length == 1) {
			models.note.findById(noteid, function(err, note){
				if(err){
					callback(err);
					return;
				}
				if(!note){
					callback({error: "note nicht gefunden"});
					return;
				}

				models.userNotes.findById(usernote[0]._id).remove(function(err){
					if(err){
						callback(err);
						return;
					}
					models.note.findById(noteid).remove(function(err){
						if(err){
							callback(err);
							return;
						}
						callback(err);
					});
					
				});

				
			});
		}else{
			console.log("No usernote found or too much.");
			callback({error: "no usernote found"});
		}

	});
};

module.exports = notes;