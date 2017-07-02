var User = require('./User.js');

// Pass down a specsheet which is essentially a save file of the game

function Game() {
	console.log('instanciating Game engine...');
	this.users = [];
	this.map = [];
	this.time = 0;
}

Game.prototype.commandReceived = function(command) {
	// Find the user
	// call his eat method
	// dispatch new method afterwards
	console.log(command);
};

Game.prototype.addUser = function(username) {
	var user = new User(username);
	this.users.push(user);
	return user;
};

module.exports = Game;
