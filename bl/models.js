

var models = {};

models.node = function(title, content, startDate, endDate){
	var self = this;
	self.title = title;
	self.content = content;
	self.startDate = startDate;
	self.endDate = endDate;
}


module.exports = models;