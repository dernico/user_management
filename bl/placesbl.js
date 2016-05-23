
var webclient = require("../helper/webclient");
var urlencode = require('querystring');


var textsearch = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
var places_key = urlencode.escape(process.env.GOOGLE_PLACES_KEY);
var places = {};

places.textsearch = function(query, callback){
	query = urlencode.escape(query);
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

module.exports = places;