var User = require('./User.js');

// Pass down a specsheet which is essentially a save file of the game

var Game = function() {
	console.log('instanciating Game engine...');
	this.users = [];
	this.map = [];
	this.time = 0;
}

Game.prototype.commandReceived = function(command) {
	console.log(command);
};

Game.prototype.addUser = function() {
	var user = User();
	this.users.push(user);
	return user;
};

module.exports = Game;
