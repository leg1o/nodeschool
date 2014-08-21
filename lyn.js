
var fs = require('fs');
var path = require('path');
//var custom_module = require('./custom_module.js');
var http = require('http');
var net = require('net');
var url = require('url');

console.log("START");

function toUnixTime(date)
{
	return date.getTime();
};

function parse(date)
{
	return 
	{ 
		"hour": date.getHours(), 
		"minute": date.getMinutes(), 
		"second": date.getSeconds()
	};
};

http.createServer
(
	function(request, response)
	{
		var incomingURL = url.parse(request.url, true);
		console.log("incomingURL: " + incomingURL);
		var path = incomingURL.pathname;
		console.log("path: " + path);
		//console.log("incomingURL.query: " + incomingURL.query);
		var date = new Date(incomingURL.query.iso);
		console.log("date: " + date);
		
		if (path === "/api/unixtime")
		{
			response.writeHead(200, { "Content-Type": "application/json"});
			response.end(JSON.stringify({ "unixtime": toUnixTime(date)}));
		}
		else if (path === "/api/parsetime")
		{
			response.writeHead(200, { "Content-Type": "application/json"});
			response.end(JSON.stringify(parse(date)));
		}
		else
		{
			response.writeHead(404);
			response.end("");
		}
	}
).listen(process.argv[2]);













/*
var server = http.createServer
(
	
);

server.on
(
	'request',
	function (request, response)
	{
		if (request.method === "GET")
		{
			console.log("request.url: " + request.url);
			var jsonObj = {};
			var urlString = request.url;
			var timeFormat = urlString.substring (urlString.indexOf('/') + 5, urlString.indexOf('?'));
			urlString = urlString.substring (urlString.indexOf('T') + 1, urlString.indexOf('.'));
			console.log("timeFormat: " + timeFormat);
			if (timeFormat === "parsetime")
			{
				var timeArray = urlString.split (':');
			
				timeArray.forEach (function (time) {console.log("time: " + time);});
				/*
				var jsonString = 	"{" +
								"\"hour\": "  		+ timeArray[0].toString() + "," +
								"\"minute\": " 	+ timeArray[1].toString() + "," + 
								"\"second\": " 	+ timeArray[2].toString() + 
								"}";
				*/
/*				jsonObj = 
				{
					"hour": 	(parseInt(timeArray[0]) + 2),
					"minute": 	parseInt(timeArray[1]),
					"second": 	parseInt(timeArray[2])
				};
			}
			else if (timeFormat === "unixtime")
			{
				/*
				urlString = urlString.substring (urlString.indexOf('T') + 1, urlString.indexOf('.'));
				var timeArray = urlString.split (':');
			
				timeArray.forEach (function (time) {console.log("time: " + time);});
				/*
				var jsonString = 	"{" +
								"\"hour\": "  		+ timeArray[0].toString() + "," +
								"\"minute\": " 	+ timeArray[1].toString() + "," + 
								"\"second\": " 	+ timeArray[2].toString() + 
								"}";
				*/
				
				//urlString = urlString. ()
/*				var unixDate = Date.parse(urlString)
				console.log("unixDate: " + unixDate.toLocaleString());
				//Date.parse(urlString);
				
				jsonObj = 
				{
					"unixtime": unixDate
				};
				
				
			}
			
			var jsonString = JSON.stringify(jsonObj);
			//var jsonObject = JSON.parse(jsonString);
			console.log("jsonString: " + jsonString);
			
			response.writeHead (200, { 'Content-Type': 'application/JSON'});
			response.write(jsonString);
			response.end();
		}
		/*
		request.on
		(
			'data',
			function (data)
			{
				
			}
		);
		*/
/*	}
);

server.listen(process.argv[2]);
console.log("END");
*/

/*
console.log("START");
var server = http.createServer
(
		/*
		console.log("request: " + request);
		console.log("createServer() callback START");
		console.log("request.method: " + request.method);
		console.log("HEADER: " + request.headers);
		if (request.method === "POST")
		{
			console.log("HEADER: " + request.headers);
			//console.log("BODY: " + request.);
			//request.pipe(response);
		}
		console.log("createServer() callback END");
		*/
/*	
);

server.listen(process.argv[2]);
server.on
(
	'request', 
	function (request, response)
	{
		console.log("request received");
		console.log("request.headers: " + request.headers);
		console.log("request.method: " + request.method);
		var stringTemp = "";
		if(request.method === "POST")
		{
			console.log("request: " + request);
			//server.close();
		}
		
		request.on
		(
			'data', 
			function (data)
			{
				if(request.method === "POST")
				{
					stringTemp += data;
					console.log("data: " + data);
				}
			}
		);
		request.on
		(
			'end', 
			function ()
			{
				console.log("onEnd");
				//server.close();
				stringTemp = stringTemp.toUpperCase();
				response.end(stringTemp);
			}
		);
		
		console.log("request received END");
	}
);
console.log("END");
//setTimeout(function (){}, 5000);
*/
/*
var server = http.createServer (
	function (request, response)
	{
		var readStream = fs.createReadStream(process.argv[3]);
		readStream.pipe(response);
	}
);

server.listen(process.argv[2]);
*/

/*
var server = net.createServer
(
	function onCreate(socket)
	{
		socket.write(getTimeStamp());
		socket.write('\n');
		socket.end();
	}
).listen(process.argv[2]);

function getTimeStamp()
{
	var timeStamp = "";
	var date = new Date();
	timeStamp += 	date.getFullYear() + "-" + 
					(date.getMonth() < 10 ? ('0' + (date.getMonth() + 1)) : date.getMonth()) + "-" + 
					(date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()) + " " + 
					(date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()) + ":" + 
					(date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes());
	return timeStamp;
	//console.log(timeStamp);
}
*/

/*
server.listen(process.argv[2], 
	function logTimeStamp()
	{
		var timeStamp = "";
		var date = new Date();
		timeStamp += 	date.getFullYear() + "-" + 
						(date.getMonth() < 10 ? ('0' + date.getMonth()) : date.getMonth()) + "-" + 
						(date.getDate() < 10 ? ('0' + date.getDate()) : date.getDate()) + " " + 
						date.getHours() + ":" + 
						date.getMinutes();
		console.log(timeStamp);
	}
);
*/

/*
var argv = process.argv.slice(2);
argv.forEach 
(
	function(adress)
	{
		http.get( adress, 
			function(res)
			{
				var reqString = "";
				res.setEncoding('utf8');
				res.on('error', console.error);
				res.on('data', 
					function(data)
					{
						reqString += data;
					}
				);
				res.on('end', 
					function()
					{
						console.log(reqString);
					}
				);
			}
		);
	}
);
*/

/*
var getString = "";

http.get(process.argv[2], 
	function (res)
	{
		res.setEncoding('utf8');
		res.on('error', console.error);
		res.on('data', onData);
		res.on('end', onEnd);
	}
);

function onData (data)
{
	getString += data;
}

function onEnd ()
{
	console.log(getString.length);
	console.log(getString);
}
*/

/*
//fs.readdir(process.argv[2], listFilesInDirectory);
//console.log("START");
custom_module(process.argv[2], process.argv[3], 
	function (err, data)
	{
		if(err)
			return console.log("ERR: " + err);
		
		//var logString = "";
		data.forEach 
		(
			function (fileDir)
			{
				console.log (fileDir);
				//logString += fileDir;
			}
		);
		//console.log (fileDir);
	}
);
//console.log("END");
*/
/*
var fs = require("fs");

function countNewLinesCallback (err, data)
{
	var stringBuf = data.toString();
	var stringArr = stringBuf.split('\n');
	var countLines = stringArr.length - 1;

	console.log (countLines);
}
//var fileDir = process.argv[2];
var fileBuf = fs.readFile(process.argv[2], 'utf8', countNewLinesCallback);
*/

/*
var fs = require("fs");

//var fileDir = process.argv[2];
var fileBuf = fs.readFileSync(process.argv[2]);
var stringBuf = fileBuf.toString();
var stringArr = stringBuf.split('\n');
var countLines = stringArr.length;

console.log (countLines);
*/

/*
var sum = 0;
for (var i = 2; i < process.argv.length; i++)
{
	//console.log(sum);
	sum += Number(process.argv[i]);
}
console.log(sum);
*/