var models = require('../config/models');
var blModels = require('../bl/models');
var mongoose = require('mongoose');
var prototypes = require('../prototypes');


var nodes = {};

/*
	callback(error, nodes);
*/
nodes.getNodes = function(userid, callback){
	models.userNodes.find( {userId: userid}, function(err, usernodes){
		if(err || usernodes.length == 0) {
			callback(err, []);
			return;
		}

		var nodeids = [];
		usernodes.each(function(usernode){
			usernode.nodeId = mongoose.Types.ObjectId(usernode.nodeId);

			console.log(usernode.nodeId);
			nodeids.push(usernode.nodeId);
		});



		models.node.find({ _id: {$in: nodeids} }, function(err, nodes){
			if(err){
				callback(err, [])
			}
			callback(undefined, nodes);
		});
		
	});
}

nodes.addNode = function(userid, blNode, callback){
	var newNode = new models.node({
		title: blNode.title,
		content: blNode.content,
		startDate: blNode.startDate,
		endDate: blNode.endDate
	});

	newNode.save(function(err, savedNode){
		if(err){
			callback(err);
		}
		else{

			var newUserNode = new models.userNodes({
				userId: userid,
				nodeId: savedNode._id
			});

			newUserNode.save(function(err){
				if(err){
					callback(err);
				}
				else{
					callback();
				}
			});
		}
	});
};

module.exports = nodes;