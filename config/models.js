var mongoose = require('mongoose');  

var Schema = mongoose.Schema;  

var userSchema = mongoose.Schema({    
     token : String,     
     email: String,  
     hashed_password: String,    
     salt : String,  
     temp_str:String 
});  

mongoose.connect('mongodb://localhost:27017/userManagement'); 
var models = {};
models.user = mongoose.model('users', userSchema);

module.exports = models;