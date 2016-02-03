var models = require('../config/models');    

var users = {};
users.findByToken = function(token, callback) {  

	models.user.find({token: token},function(err,users){  

		var len = users.length;  

		if(len == 0){ 
 			callback(false);    
		}else{    
 			callback(true);  
		}
	});
};

module.exports = users;