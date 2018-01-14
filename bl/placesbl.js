
var webclient = require("../helper/webclient").client;
var urlencode = require('querystring');
var secrets = require('./../clientSecret').client; 


var textsearch = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
var autocomplete = "https://maps.googleapis.com/maps/api/place/queryautocomplete/json?";
var placedetails = "https://maps.googleapis.com/maps/api/place/details/json?";
var photo = "https://maps.googleapis.com/maps/api/place/photo?";
var places_key = secrets.google_places_key;
var places = {};

places.photo = function(id, callback){
	var url = photo;
	//url += "maxwidth=400";
	url += "&photoreference="+id;
	url += "&key=" + places_key;
	webclient.getImage(url, function(err, result){
		if(err){
			callback(err);
			return;
		}
		//var json = JSON.parse(result);
		callback(null, result);
	});
}

places.placedetails = function(id, callback){
	var url = placedetails + "placeid=" + id;
	url += "&key=" + places_key;

	webclient.get(url, function(err, result){
		if(err){
			callback(err);
			return;
		}
		var json = JSON.parse(result);
		var details = json.result;
		
		callback(null, json);
		return;
		// todo: find a way to get a photo somewhere :)
		if(details && details.photos && details.photos.length > 0){
			var photoid = details.photos[0].photo_reference;
			places.photo(photoid, function(err, result){
				json.result.photo = result;
				callback(null, json);
			});
		}else{
			callback(null, json);
		}
		
	});
}

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
	input = input.split(" ").join("+");
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