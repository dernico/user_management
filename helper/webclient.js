var http = require('http');
var https = require('https');
var logger = require('../logger');


function get(url, callback){
	/*var options = {
		host: host,
		port: 80,
		path: path
	};
	*/
	logger.log("Waiting for " + url + " to responde");
	if(url.indexOf("https") != -1){
		httpsGet(url, callback);
	}else{
		httpGet(url, callback);
	}
}

function httpGet (url, callback) {
	http.get(url, function(resp){

		var data = "";
		resp.on('data', function(chunk){
			data += chunk;
		});
		resp.on('end', function(){
			callback(null, data);
		});

	}).on("error", function(e){
		logger.log("Got error: " + e.message);
		callback(e);
	});
}

function httpsGet(url, callback){
	https.get(url, function(resp){

		var data = "";
		resp.on('data', function(chunk){
			data += chunk;
		});
		resp.on('end', function(){
			callback(null, data);
		});

	}).on("error", function(e){
		logger.log("Got error: " + e.message);
		callback(e);
	});
}


function httpGetImage (url, callback) {
	https.get(url, function(resp){

		resp.setEncoding('base64');
		body = "data:" + resp.headers["content-type"] + ";base64,";
		resp.on('data', function(chunk){
			body += chunk;
		});
		resp.on('end', function(){
			callback(null, body);
		});

	}).on("error", function(e){
		logger.log("Got error: " + e.message);
		callback(e);
	});
}

exports.client = {
	get: get,
	getImage: httpGetImage
};