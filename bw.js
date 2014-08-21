var http = require('http');
var fs = require('fs');


var uint32View = new Uint32Array(1);
uint32View[0] = process.argv[2];
//var dataView = new DataView(uint32View.buffer);
//dataView.setUint32(0, process.argv[2]);
var uint16View = new Uint16Array(uint32View.buffer);
console.log(JSON.stringify(uint16View));


/*
var buf = new ArrayBuffer(4);

var uint32View = new Uint32Array(buf, 0, 1);
var uint16View = new Uint16View(buf, 0, 1);
*/

/*
process.stdin.on
(
	'data',
	function (data)
	{
		var buf = new ArrayBuffer(data.length);
		var uint8View = new Uint8Array(buf);
		var i = 0;
		Array.apply([], uint8View)
			.forEach
			(
				function (ch)
				{
					uint8View[i] = data[i];
					i++;
				}
			);
		console.log(JSON.stringify(uint8View));
	}
);
*/
/*
process.stdin.on
(
	'end',
	function ()
	{
		
	}
);
*/



/*
var bufArr = new Array();

process.stdin.on
(
	'data',
	function (data)
	{
		//console.log("DATA");
		bufArr.push(data);
		//console.log("bufArr[0]: " + bufArr[0]);
	}
);

process.stdin.on
(
	'end',
	function ()
	{
		//console.log("END");
		
		console.log(Buffer.concat(bufArr));
	}
);
*/

/*
//line splitter
fs.readFileSync(process.argv[2], {encoding: 'utf8'})
	.split('\n')
	.forEach
	(
		function (line)
		{
			console.log(new Buffer(line));
		}
	);
*/

/*
process.stdin.on
(
	'data',
	function (data)
	{
		for (var i = 0; i < data.length; i++)
		{
			if (data[i] === 46)
				data[i] = 33;
		}
		console.log(data);
		/*
		data.toString('utf8').split('').map
		(
			function (ch)
			{
				if (ch === '.')
					ch = '!';
			}
		);
		console.log(data.toString());
		*/
/*	}
);
*/

/*
var numbers = process.argv.slice(2).map(parseFloat);
console.log(new Buffer(numbers).toString('hex'));
*/

/*
console.log(new Buffer('bytewiser'));
*/