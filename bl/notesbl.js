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
			callback(err);
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

module.exports = notes;