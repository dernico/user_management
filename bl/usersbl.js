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

users.findByQuery = function(query, cb){
	
	//models.db.on('error', console.error.bind(console, 'connection error:'));
	//models.db.once('open', function() {
		models.user.find(query).lean().exec(function(err,users){ 
			if(err){
				cb(err);
				return;
			}
			if(users.length != 0){
				var user = users[0];
				cb(null, user);
			}
			else {  
				cb({error: "do not know the user .."});
			} 
		});
	//});
}

users.createOrUpdate = function(user, cb){

	// models.db.on('error', console.error.bind(console, 'connection error:'));

	// models.db.once('open', function() {
		var query = {
			authProvider: user.authProvider, 
			authProviderId: user.authProviderId
		};
		models.user
			.find()
			.and([
				//{authProvider: user.authProvider},
				{$or: [query, {email: user.email}]}
			])
			.exec(function(err, u){
			if(err){
				cb(err);
				return;
			}
	
			if(u.length === 0){
				user.save(cb);
			}else if(u.length === 1){
				models.user.update({_id: u[0]._id},
					{ 
						authProvider: user.authProvider,
						authProviderId: user.authProviderId,
						email: user.email,
						displayName : user.displayName,
						firstname: user.firstname,
						lastname: user.lastname,
						gender: user.gender,
						picture: user.picture,
						tokens: user.tokens,
						jwt: user.jwt
					},
					{multi: true}, cb);
			}
			else{
				cb({error: "something went wrong ... to much users."});
			}
		});

	//});

}

module.exports = users;