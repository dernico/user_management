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

notes.updateNote = function(note, callback){
	var id = mongoose.Types.ObjectId(note._id);
	var set = {
		title: note.title,
		content: note.content,
		startDate: note.startDate,
		endDate: note.endDate
	};
	models.note.findByIdAndUpdate( id, {$set: set}, callback);
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
				noteId: savedNote._id
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

	//TODO: Add security check on ever usernote if one usernote is at least
	// ownt by a user

	models.userNotes.find({noteId: noteid}, function(err, usernotes){
		if(err){
			callback(err);
			return;
		}
		if(usernotes.length > 0) {
			models.note.findById(noteid, function(err, note){
				if(err){
					callback(err);
					return;
				}
				if(!note){
					callback({error: "note nicht gefunden"});
					return;
				}


				models.note.findById(noteid).remove(function(err){
					if(err){
						callback(err);
						return;
					}
					callback(err);
				}).exec();
			});
		}else{
			console.log("No usernote found or too much.");
			callback({error: "no usernote found"});
		}

	}).remove().exec();
};

notes.shareNote = function(shareEmail, noteid, callback){

	models.user.find({email: shareEmail}, function(err, users){
		if(err){
			callback(err);
			return;
		}
		if(users.length == 0){
			callback({error: "no user found"});
			return;
		}
		if(users.length > 1){
			//TODO: Possible? Hopefully not :D
		}
		var shareid = users[0]._id;

		models.userNotes.find({userId: shareid, noteId: noteid}, function(err, usernotes){
			if(err){
				callback(err);
				return;
			}
			if(usernotes.length == 1){
				callback({error: "already shared"});
				return;
			}

			var newUserNote = new models.userNotes({
				userId: shareid,
				noteId: noteid
			});
			newUserNote.save(function(err){
				if(err){
					callback(err);
					return;
				}
				callback({message: "successful shared"});
			});

		});
	});
}

module.exports = notes;