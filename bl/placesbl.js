
var webclient = require("../helper/webclient");
var urlencode = require('querystring');
var secrets = require('./../clientSecret').client; 


var textsearch = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
var autocomplete = "https://maps.googleapis.com/maps/api/place/autocomplete/json?";
var places_key = secrets.google_places_key;
var places = {};

places.textsearch = function(query, callback){
	query = query.split(" ").join("+");
	var url = textsearch + "query=" + query;
	url += "&key=" + places_key;

	webclient.get(url, function(err, result){
		if(err){
			callback(err);
			return;
		}
		callback(null, JSON.parse(result));
	});
}

places.autocomplete = function(input, callback){
	input = urlencode.escape(input);
	var url = autocomplete + "input=" + input;
	url += "&key=" + places_key;

	webclient.get(url, function(err, result){
		if(err){
			callback(err);
			return;
		}
		callback(null, JSON.parse(result));
	});
}

module.exports = places;