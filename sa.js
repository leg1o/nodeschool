//var fs = require('fs');
//var concat = require('concat-stream');
//var http = require('http');
//var ws = require('websocket-stream');
//var stream = require('stream');
//var trumpet = require('trumpet');
//var through = require('through');
//var spawn = require('child_process').spawn;
//var duplex = require('duplexer');
//var through = require('through');
//var combine = require('stream-combiner');
//var split = require('split');
//var zlib = require('zlib');

var crypto = require('crypto');
var stream = crypto.createDecipher('aes256', process.argv[2]);
process.stdin.pipe(stream).pipe(process.stdout);



/*
module.exports = function (counter)
{
	var count = {};
	var wrStream = through 
	(
		function (buf)		// write
		{
			count[buf.country] = count[buf.country] ? count[buf.country] + 1 : 1;
		},
		function ()			// end
		{
			counter.setCounts(count)
		}
	);
	return duplex(wrStream, counter);
};
*/

/*
module.exports = function (cmd, args)
{
	var proc = spawn(cmd, args);
	return duplex(proc.stdin, proc.stdout);
};
*/

/*
var tr = trumpet ();
var stream = tr.select('.loud').createStream();

process.stdin.pipe(tr).pipe(process.stdout);
stream
	.pipe(through(function (buf) {this.queue(buf.toString().toUpperCase());}))
	.pipe(stream);
*/

/*
//console.log("START");

var stream = ws('ws://localhost:8000');
//console.log("stream-constructor: " + (stream1 instanceof (require('stream'))));
stream.end('hello\n');

//console.log("END");
*/

/*
var options =
{
	hostname: 'localhost',
	port: 8000,
	method: 'POST'
};

var req = http.request
(
	options, 
	function (response)
	{
		response.pipe(process.stdout);
	}
);

process.stdin.pipe(req);
*/

/*
http.createServer
(
	function (request, response)
	{
		console.log("createServer");
		request.pipe(response);
		console.log("createServer2");
		/*
		if (request.method === "POST")
		{
			console.log("POST");
			request.pipe(response);
		}
		request.on
		(
			'response',
			function (inc)
			{
				console.log("response");
			}
		);
		*/
/*	}
).listen(process.argv[2]);

/*
process.stdin.on
{
	'readable',
	function ()
	{
		console.log("readable");
		process.stdout.write(new Buffer("readable-write"));
		/*
		//console.log(inputData);
		console.log("a");
		var a = process.stdin.read().toString();
		console.log("b");
		console.log("string: " + a);
		process.stdout.write(new Buffer(a));
		*/
/*	}
};
process.stdin.on
{
	'data',
	function (data)
	{
		console.log("data");
		process.stdout.write(new Buffer("data-write"));
	}
};
process.stdin.on
{
	'end',
	function ()
	{
		console.log("end");
		process.stdout.write(new Buffer("end-write"));
	}
};
console.log("END");
*/





/*
var odd = true;

process.stdin.on
(
	'data',
	function (inputData)
	{
		//console.log("+++++" + inputData.toString());
		var linesArray = inputData.toString().split('\n');
		if (linesArray.length === 1)
		{
			//console.log("+++++");
			if(odd)
				linesArray[0] = linesArray[0].toLowerCase();
			else
				linesArray[0] = linesArray[0].toUpperCase();
			
			process.stdout.write(new Buffer(linesArray[0]));
			
		}
		else
		{
			var i = 0;
			linesArray.forEach 
			(
				function (line)
				{
					if(odd)
						linesArray[i] = linesArray[i].toLowerCase();
					else
						linesArray[i] = linesArray[i].toUpperCase();
					
					if (i !== (linesArray.length - 1))
					{
						linesArray[i] += '\n';
						odd = !odd;
					}
					
					process.stdout.write(new Buffer(linesArray[i]));
					i++;
					
						
					
				}
			)
		}
	}
);
*/

/*
process.stdin.on
(
	'data',
	function (data)
	{
		var inputData = data.toString();
		inputData = inputData.toUpperCase();
		//console.log("data: " + data);
		var outputData = new Buffer(inputData);
		process.stdout.write(outputData);
	}
);
*/

/*
fs.createReadStream(process.argv[2]).pipe(process.stdout);
*/