console.log("SERVER START");

var http = require("http");

var i = 0;

function onRequest (request, response)
{
	//console.log("request received");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write(i.toString());
	response.end();
	i++;
}

http.createServer(onRequest).listen(8888);

console.log("SERVER CREATED");

//console.log("HELLO WORLD");