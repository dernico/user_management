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

users.createOrUpdate = function(user, cb){

	//models.db.on('error', console.error.bind(console, 'connection error:'));

	//models.db.once('open', function() {
		var query = {authProvider: user.authProvider, authProviderId: user.authProviderId};
		models.user.find(query, function(err, u){
			if(err){
				cb(err);
				return;
			}
	
			if(u.length === 0){
				user.save(cb);
			}else{
				models.user.update(query, user, {multi: true}, cb)
			}
		});

	//});

}

module.exports = users;