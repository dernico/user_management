var crypto = require('crypto'); 
var rand = require('csprng'); 
var mongoose = require('mongoose'); 
var models = require('./models');   
var jwt = require('jsonwebtoken'); 


module.exports.register = function(email,password,callback) {  

	var x = email; 
	if(!(x.indexOf("@") == x.length)){ 
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && 
			password.length > 4 && 
			password.match(/[0-9]/) && 
			password.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) {  

			var temp =rand(160, 36); 
			var newpass = temp + password; 
			//var token = crypto.createHash('sha512').update(email +rand).digest("hex"); 
			var hashed_password = crypto.createHash('sha512').update(newpass).digest("hex");  

			/*
	authProvider: String,
	authProviderId: String,
    email : String,     
    displayName : String,     
	firstname: String,
	lastname: String,
	gender: String,
	picture: String,
	tokens: {
		access_token: String,
		refresh_token: String,
		expiry_date: Number,
		id_token: String,
		token_type: String
	},
	jwt: String
			*/

			var authProvider = 'email';
			var newuser = new models.user({
				authProvider: authProvider,
				email: email,
				displayname: email,
				picture: "/nothere.jpg",
			    hashed_password: hashed_password,
				salt :temp 
			});  
			var payload = {id: newuser.id , authProvider: authProvider};
			var token = jwt.sign(payload, process.env.JWT_SECRET,
			{
				//expiresIn: '1h'
			});
			newuser.authProviderId = newuser.id;
			newuser.jwt = token;

			models.user.find({email: email},function(err,users){  

				var len = users.length;  

				if(len == 0){   
				    newuser.save(function (err) {

				    	if(err) {
				    		console.error(err);
				    		callback({'success': false, 'response': "Error creating"});
				    	}else{
							callback({'success': true, token: token, 'response':"Sucessfully Registered"}); 
				    	}
					}); 
				}else{    
	     			callback({'success': false, token: token, 'response':"Email already Registered"});  
				}
			});
		}else{      
	     callback({'success': false, 'response':"Password Weak"});  
		}
	}else{    
		callback({'success': false, 'response':"Email Not Valid"});  
	} 
}