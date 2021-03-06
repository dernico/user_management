var mongoose = require('mongoose');  

var Schema = mongoose.Schema;  

var userSchema = mongoose.Schema({
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
	jwt: String,
	hashed_password: String,
	salt: String 
});

var planSchema = mongoose.Schema({    
	title : String,
	startDate: Date,
	endDate: Date,
	comments: Array,
	users: Array, // array of userids
	costs: [{
		amount: Number,
		for: String,
		from: {
			_id: String,
			email: String,
			displayName: String,
			firstname: String,
			lastname: String,
			gender: String,
			picture: String
		}
	}],
	files: [{
		filename: String,
		extension: String,
		fileId: String,
		url: String
	}],
	images: [{
		filename: String,
		extension: String,
		fileId: String,
		url: String
	}],
	steps: [{
		title: String,
		description: String,
		files: [{
			filename: String,
			extension: String,
			fileId: String,
			url: String
		}],
		todos:[{ 
			title: String,
			description: String,
			costs: Number,
			infos: Object,
			location: {lat: Number, lng: Number},
			order: Number
		}],
		location: {lat: Number, lng: Number},
		distance: {
			distance: {text: String, value: Number},
			duration: {text: String, value: Number}
		},
		days: Number,
		order: Number
	}]
});


var fileStoreSchema = mongoose.Schema({
	fileId: String,
	data: Buffer
});

var userPlanSchema = mongoose.Schema({
	userId: String,
	planId: String
});


// var noteSchema = mongoose.Schema({
// 	title: String,
// 	content: String,
// 	startDate: Date,
// 	endDate: Date
// });

var connection = process.env.MONGOLAB_URI;
console.log("connection to mongodb: " + connection);
//mongoose.connect('mongodb://localhost:27017/userManagement'); 
mongoose.connect(connection, {
	useMongoClient: true,
	socketTimeoutMS: 30 * 1000,
	connectTimeoutMS: 30 * 1000
});
mongoose.Promise = global.Promise;

var models = {};
models.db = mongoose.connection;
models.user = mongoose.model('users', userSchema);
models.plan = mongoose.model('plan', planSchema);
models.userPlan = mongoose.model('userPlan', userPlanSchema);
models.fileStore = mongoose.model('fileStore', fileStoreSchema);
//models.userNotes = mongoose.model('userNotes', userNoteSchema);
//models.note = mongoose.model('notes', noteSchema);

module.exports = models;