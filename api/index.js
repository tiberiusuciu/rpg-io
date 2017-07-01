var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleWare = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');
var Game = require('../engine/Game.js');

var app = express();
// Socket.io
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var compiler = webpack(config);
app.use(webpackDevMiddleWare(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleWare(compiler));

app.use(express.static('./dist'));

app.use('/', function (req, res) {
    res.sendFile(path.resolve('app/index.html'));
});

var port = 3000;

var game = Game();

server.listen(port);

// app.listen(port, function(error) {
//   if (error) throw error;
//   console.log("Express server listening on port", port);
// });


io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
	socket.on('command', function (data) {
		console.log(data);
	});
});
