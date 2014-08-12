var fs = require('fs');
var path = require('path');
/*
function listFilesInDirectory (err, list)
{
	//console.log("CALLBACK");
	if (err)
	{
		return console.log("ERR: " + err);
	}
	else
	{
		//console.log("NO ERR");
		//console.log("list: " + list);
		//console.log("process.argv[3]: " + process.argv[3]);
		var logString = "";
		for (var i = 0; i < list.length; i++)
		{
			//console.log("list[" + i + "]: " + list[i]);
			if (('.' + process.argv[3]) === path.extname(list[i]))
				logString += list[i] + "\n";
		}
		//console.log(logString);
		//console.log("NO ERR END");
		return logString;
	}
}
*/


module.exports = function (dir, ext, callback)
{
	//console.log("MODULE");
	fs.readdir(dir, 
		function (err, list) 
		{
			if (err)
			{
				return callback(err, []);
			}
			var results = [];
			list.forEach(
				function (listIndex)
				{
					if (('.' + ext) === path.extname(listIndex))
						results.push(listIndex);
				}
			);
			
			callback (null, results);
		}
	);
	//console.log("MODULE END");
	//return 
}
