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
	endDate: Date
});

var connection = process.env.MONGOLAB_URI;
console.log("connection to mongodb: " + connection);
//mongoose.connect('mongodb://localhost:27017/userManagement'); 
mongoose.connect(connection);
var models = {};
models.user = mongoose.model('users', userSchema);
models.userNotes = mongoose.model('userNotes', userNoteSchema);
models.note = mongoose.model('notes', noteSchema);

module.exports = models;