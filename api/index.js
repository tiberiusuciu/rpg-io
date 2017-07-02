var express = require('express');
var path = require('path');
var webpackConfig = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');
var Game = require('./engine/Game.js');
var config = require('../config.js');

var app = express();

// Socket.io
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleWare(compiler, {noInfo: true, publicPath: webpackConfig.output.publicPath}));
app.use(webpackHotMiddleWare(compiler));

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('app/index.html'));
});

var port = 3000;

var game = new Game();

server.listen(port, function(error) {
	if (error) throw error;
	console.log("Express server listening on port", port);
});

io.on('connection', function (socket) {

	// Making new user here
	let user = game.addUser('CoreProxy');
	socket.emit('action', {type: config.actionConst.NEW_USER, user});

	socket.on("action", function (action) {
		switch (action.type) {
			case config.actionConst.SEND_COMMAND:
				game.commandReceived(action.parsedCommand);
				// io.emit('action', {type: 'NEW_SHIT', meta: {remote: true}, message: 'hello bitches!!!'})
		}
	})

	socket.on("disconnect", function () {
		console.log('A user has disconnected!');
	})
});
