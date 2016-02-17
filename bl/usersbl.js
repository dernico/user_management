var models = require('../config/models');    

var users = {};
users.findByToken = function(token, callback) {  

	models.user.find({token: token},function(err,users){  

		if(users.length > 0){ 
 			callback(users[0]);    
		}else{    
 			callback(undefined);  
		}
	});
};

module.exports = users;