var mongoose = require('mongoose');  

var Schema = mongoose.Schema;  

var userSchema = mongoose.Schema({    
     token : String,     
     email: String,  
     hashed_password: String,    
     salt : String,  
     temp_str:String 
});

var userNoteSchema = mongoose.Schema({
	userId: String,
	noteId: String
});

var noteSchema = mongoose.Schema({
	title: String,
	content: String,
	startDate: Date,
	endDate: Date,
});

mongoose.connect('mongodb://localhost:27017/userManagement'); 
var models = {};
models.user = mongoose.model('users', userSchema);
models.userNotes = mongoose.model('userNotes', userNoteSchema);
models.note = mongoose.model('notes', noteSchema);

module.exports = models;