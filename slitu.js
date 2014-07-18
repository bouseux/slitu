//	Slitu.js [version]
//	[website]
//	Authors: Edbali Ossama
//	Slitu is licensed under MIT license

;(function ( slitu, undefined ) {

	// Library info
	// ------------

	slitu.VERSION = 'version';
	slitu.AUTHORS = ['Edbali Ossama'];

	// Private methods
	// ---------------

	function isInt ( x ) {
		var y = parseInt(x, 10);
		return !isNaN(y) && x == y && x.toString() == y.toString();
	}

	function SlituException ( message, type ) {
		this.message = message;
		this.type = type;
	}

	// Array methods
	// -------------

	slitu.at = function ( arr, index ) {
		if ( !slitu.isArray(index) && isInt(index) ) {
			if ( index >= arr.length )
				throw new SlituException('', '')
			else
				return arr[index];
		} else if ( slitu.isArray(index) ) {
			var matched = [],
				i,
				len = index.length;

			for ( i = 0; i < len; i += 1 ) {
				matched.push(arr[index[i]]);
			}

			return matched;
		} else
			throw new SlituException('Parameter "index" is not an array or integer', 'TypeException');
	};

	slitu.average = function ( arr ) {
		return slitu.sum(arr) / arr.length;
	};

	slitu.contains = function ( arr, value ) {
		var len = arr.length, i;

		for ( i = 0; i < len; i += 1 )
			if ( arr[i] === value ) // isEqual!!!!
				return true;

		return false;
	};

	slitu.count = function ( arr, value ) {
		var len = arr.length,
			count = 0,
			i;

		for ( i = 0; i < len; i += 1 )
			if ( arr[i] === value ) // isEqual!!!!
				count++;

		return count;
	};

	slitu.difference = function ( arr1, arr2 ) {

	};

	slitu.empty = function ( arr ) {
		var len = arr.length, i;

		for ( i = 0; i < len; i += 1 )
			arr[i] = undefined;
	};

	slitu.first = function ( arr, count ) {
		if ( !slitu.isArray(arr) )
			throw new SlituException('', '');

		if ( typeof count === 'undefined' )
			return arr[0];
		else {
			var len = arr.length;

			if ( count > len )
				throw new SlituException('', '');
			else {
				var matched = [], i;

				for ( i = 0; i < count; i += 1 )
					matched.push(arr[i]);

				return matched;
			}
		}
	};

	slitu.getByType = function ( arr, type ) {
		var matched = [],
			len = arr.length,
			i;

		for ( i = 0; i < len; i += 1 ) {
			if ( typeof arr === type )
				matched.push(arr[i])
		}

		return matched;
	};

	slitu.infiniteIterator = function () {
		var index = 0;

		return {
			next: function () {
				return index++;
			}
		};
	};

	slitu.insert = function ( arr, value, index ) {

	};

	slitu.intersection = function ( arr1, arr2 ) {

	};

	slitu.iterator = function ( arr ) {
		var nextIndex = 0;

		return {
			next: function () {
				return nextIndex < arr.length ?
				{value: arr[nextIndex++], done: false} :
				{done: true};
			}
		};
	};

	slitu.last = function ( arr, count ) {
		return count ? Array.prototype.slice.call(arr, arr.length-count, arr.length) : arr[arr.length-1];
	};

	slitu.max = function ( arr ) {
		if ( !slitu.isArray(arr) )
			throw new SlituException('', '');

		if ( !slitu.isHomogeneous(arr, 'number') )
			throw new SlituException('', 'TypeException');

		var _max = arr[0];

		for ( i = 1; i < arr.length; i += 1 ) {
			if ( arr[i] > _max ) {
				_max = arr[i];
			}
		}

		return _max;
	};

	slitu.min = function ( arr ) {
		if ( !slitu.isArray(arr) )
			throw new SlituException('', '');

		if ( !slitu.isHomogeneous(arr, 'number') )
			throw new SlituException('', 'TypeException');

		var _min = arr[0];

		for ( i = 1; i < arr.length; i += 1 ) {
			if ( arr[i] < _min ) {
				_min = arr[i];
			}
		}

		return _min;
	};

	slitu.remove = function ( arr, value ) {
		/*//removes 1 element from index 3
		removed = myFish.splice(3, 1);
		//myFish is ["angel", "clown", "drum", "surgeon"]
		//removed is ["mandarin"]

		var index = arr.indexOf(value);
		arr.splice(1)
		return arr;*/
	};

	slitu.sortBy = function ( arr, fn ) {

	};

	slitu.sum = function ( arr ) {
		if ( slitu.isHomogeneous(arr, 'number') ) {
			var sum = 0,
				len = arr.length,
				i;

			for ( i = 0; i < len; i += 1 ) {
				sum += arr[i];
			}

			return sum;
		} else
			throw new SlituException('"arr" is not a homogeneous array', 'TypeException');
	};

	slitu.union = function () {
		return slitu.unique(Array.prototype.concat.apply(Array.prototype, arguments));
	};

	slitu.unique = function( arr ) {

	};

	slitu.without = function ( arr, values ) {
		arr.filter(function (v) { if (!slitu.contains(values, v)) return true; })
	};

	slitu.zeros = function ( n ) {

	};

	// Function methods
	// ----------------

	slitu.after = function ( fn, n ) {
		fn.n = fn.after = n;
		return function () {
			if ( fn.n > 1 ) {

			} else {
				fn.apply( this, arguments );
				fn.n = fn.after;
			}
		};
	};

	slitu.delay = function ( fn, ms ) {
		return function () {
			var args = arguments;
			setTimeout(function () {
				return fn.apply(null, args);
			}, ms);
		}
	};

	slitu.once = function ( fn ) {
		fn.n = fn.once = 1;
		return function () {
			if ( fn.n ) {
				fn.n--;
				return fn.apply(this, arguments);
			}
		};
	};

	slitu.times = function ( fn, n ) {
		fn.n = n;
		return function () {
			for ( var i = 0; i < fn.n; i += 1 ) {
				fn.apply(this, arguments);
			}
		};
	};

	// Number methods
	// --------------

	slitu.range = function ( start, stop, step ) {
		var step = step || 1,
			arr = [],
			stop = stop || start;
			start = (arguments.length === 1) ? 0 : start;
			i;

		if ( !(isInt(start) && isInt(stop)) ) {
			throw SlituException('start and stop parameters must be integers', 'TypeException');
		}

		for ( i = start; i < stop; i += step ) {
			arr.push(i);
		}

		return arr;
	};

	// Object methods
	// --------------

	slitu.isEqual = function ( obj1, obj2 ) {

	};

	slitu.isString = function ( obj ) {
		return typeof obj === "string" && {}.toString.call(obj) === "[object String]";
	};

	slitu.isHomogeneous = function ( arr, type ) {
		if ( !slitu.isArray(arr) )
			throw new SlituException('', 'TypeException');

		var len = arr.length, i;
		type = type || typeof arr[0]

		for ( i = 0; i < len; i += 1 )
			if ( typeof arr[i] !== type )
				return false;

		return true;
	};

	slitu.isEmpty = function ( arr ) {
		return (arr instanceof Array && arr.length === 0 );
	};

	slitu.isFunction = function ( obj ) {
		return {}.toString.call(obj) === "[object Function]";
	};

	slitu.isObject = function ( obj ) {
		return typeof obj === "object";
	};

	slitu.isUndefined = function ( obj ) {
		return typeof obj === "undefined";
	};

	slitu.isNumber = function ( obj ) {
		return {}.toString.call(obj) === "[object Number]";
	};

	slitu.isNaN = function ( obj ) {
		return typeof obj === "number" && obj !== obj;
	};

	slitu.isNull = function ( obj ) {
		return {}.toString.call(obj) === "[object Null]";
	};

	slitu.isArray = function ( obj ) {
		return {}.toString.call(obj) === "[object Array]";
	};

	slitu.isBool = function ( obj ) {
		return {}.toString.call(obj) === "[object Boolean]";
	};

	slitu.isDate = function ( obj ) {
		return {}.toString.call(obj) === "[object Date]" || obj instanceof Date;
	};

	slitu.isFalsy = function ( obj ) {
		return (slitu.isUndefined(obj) || slitu.isNull(obj) || slitu.isNaN(obj) ||
			obj === "" || obj === 0 || (slitu.isBool(obj) && Boolean(obj) === false));
	};


	//_.module('Earth.places.ocean')
	// => {Earth: {places: {ocean: {}}}}
	slitu.namespace = function ( ns_string, obj ) {
		var parts = ns_string.split('.'),
			parent = obj,
			i;

		// Strip redundant leading global
		if ( parts[0] === "MYAPP" ) { // change MYAPP
			parts = parts.slice(1);
		}

		for (i = 0; i < parts.length; i += 1) {
			if (typeof parent[parts[i]] === "undefined") {
				parent[parts[i]] = {};
			}
			parent = parent[parts[i]];
		}

		return parent;
	};

	slitu.toQueryString = function ( obj ) {
		var str = '';

		for ( var key in obj )
			str += (key + '=' + obj[key] + '&');

		return str.slice(0, -1);
	};

	// String methods
	// --------------



})(window.slitu = window.slitu || {});