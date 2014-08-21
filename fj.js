function curryN (fn, n)
{
	n = n || fn.length;
	if (n)
		return curryN (fn, --n);
	else
		return fn ();
};

module.exports = curryN;


/*
function getDependencies(tree, arr)
{
	if (!arr)
		arr = [];
		
	if(tree.dependencies)
	{
		Object.keys(tree.dependencies).forEach
		(
			function (value, index)
			{
				if(arr.indexOf(value + '@' + tree.dependencies[value].version) < 0)
				{
					arr.push(value + '@' + tree.dependencies[value].version);
					getDependencies(tree.dependencies[value], arr);
				}
			}
		);
	}
	return arr.sort();
};

module.exports = getDependencies;
*/

/*
function loadUsers (usersIds, load, done)
{
	var completed = 0;
	var users = [];
	usersIds.forEach
	(
		function (id, index)
		{
			load
			(
				id,
				function (user)
				{
					users[index] = user;
					if (++completed === usersIds.length)
						return done(users);
				}
			)
		}
	);
	//done(users);
};
module.exports = loadUsers;
*/
/*
function loadUsers (usersIds, load, done)
{
	var users = [];
	usersIds.forEach
	(
		function (id)
		{
			//console.log("id: " + id);
			load
			(
				id, 
				//(
					//function (index)
					//{
						/*return*/ //function (user)
/*						{
							console.log("user: " + user);
							users[id] = user;
						}
					//}
				//)(id)
			);
		}
	);
	//console.log("users: " + users);
	done(users);
};
module.exports = loadUsers;
/*


	(
		function (index) 
		{ // build a closure with `i`
			return function (user) 
			{
				users[index] = user;
			}
		}
	)(i)
);
*/

/*
loadUsers 
(
	[0, 1, 2, 3, 4], 
	function (id, callback) 
	{
		callback ({'id': id});
	},
	function (arr)
	{
		arr.forEach (function (value) {console.log("user.id: " + value.id)});
	}
);
*/

/*
function repeat(operation, num)
{
	setTimeout
	(
		function () 
		{
			if (num <= 0) return;
			operation();
			return repeat(operation, --num);
		}	
		, 0
	);
}
module.exports = repeat;
//
function fn (operation, num)
{
	setTimeout 
	(
		function ()
		{
			if (num <= 0)
				return;
			operation();
			return fn (operation, --num);
		}
		, 0
	);
};

module.exports = fn;
*/

/*
function fn (func, method)
{
	var self = this;
	this.count = 0;
	var origFunc = func[method];
	func[method] = function ()
	{
		self.count++;
		return origFunc.apply(func, arguments);
	};
	return this;
};

module.exports = fn;
*/

/*
module.exports = function (arr, callback)
{
	retArr = [];
	arr.reduce 
	(
		function (retArrIn, currItem)
		{
			retArr.push(callback(currItem));
		},
		{}
	);
	return retArr;
};
*/

/*
module.exports = function (namespace)
{
	return console.log.bind(undefined, namespace);
};
*/

/*
module.exports = function (namespace)
{
	//n = namespace;
	//console.log("+" + logOrig.namespace);
	//logOrig.apply(null, ["TEST"]);
	return function()
	{
		arguments[0] = namespace + ' ' + arguments[0];
		console.log.apply
		(
			null, 
			arguments
		);
	};
};
*/

/*
module.exports = function ()
{
	return Array.prototype.slice.call(arguments).filter
	(
		function (value)
		{
			return Object.prototype.hasOwnProperty.call(value, 'quack');
		}
	).length;
};
*/

/*
module.exports = function (inputWords)
{
	return inputWord.reduce
	(
		function (countMap, word)
		{
			countMap[word] = ++countMap[word] || 1;
			return countMap;
		},
		new Object ()
	);
};
*/

/*
module.exports = function (usersArr)
{
	return function (usersToCheckArr)
	{
		//this.users = usersArr;
		//var exactMatch = false;
		return usersToCheckArr.every
		(
			function (element, index, array)
			{
				return usersArr.some
				(
					function (element1, index1, array1)
					{
						return element.id === element1.id;
					}
				);
			}
		);
	};
};
*/