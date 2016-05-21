var crypto = require('crypto'); 
var rand = require('csprng'); 
var mongoose = require('mongoose'); 
var models = require('./models');    


module.exports.register = function(email,password,callback) {  

	var x = email; 
	if(!(x.indexOf("@") == x.length)){ 
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/) && 
			password.length > 4 && 
			password.match(/[0-9]/) && 
			password.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)) {  

			var temp =rand(160, 36); 
			var newpass = temp + password; 
			var token = crypto.createHash('sha512').update(email +rand).digest("hex"); 
			var hashed_password = crypto.createHash('sha512').update(newpass).digest("hex");  

			var newuser = new models.user({    
			     token: token,   
			     email: email,   
			     hashed_password: hashed_password,   
			     salt :temp });  

			models.user.find({email: email},function(err,users){  

				var len = users.length;  

				if(len == 0){   
				    newuser.save(function (err) {

				    	if(err) {
				    		console.error(err);
				    		callback({'success': false, 'response': "Error creating"});
				    	}else{
				    		callback({'success': true, 'response':"Sucessfully Registered"});  
				    	}
					}); 
				}else{    
	     			callback({'success': false, 'response':"Email already Registered"});  
				}
			});
		}else{      
	     callback({'success': false, 'response':"Password Weak"});  
		}
	}else{    
		callback({'success': false, 'response':"Email Not Valid"});  
	} 
}