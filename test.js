var fs = require('fs');
var path = require('path');
//var custom_module = require('./custom_module.js');
var http = require('http');
var net = require('net');

console.log("START");

var server = http.createServer (
	function (request, response)
	{
		var readStream = fs.createReadStream("./server/test.js");
		readStream.pipe(response);
	}
);

server.listen(8888);

console.log("END");