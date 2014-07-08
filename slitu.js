//
//
//
//

;(function ( slitu, undefined ) {

	// Current version
	slitu.VERSION = '';

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

	// Public API
	// ----------

	// Array methods
	// -------------

	slitu.at = function ( arr, index ) {
		if ( !slitu.isArray(index) && isInt(index) ) {
			return arr[index];
		} else if ( slitu.isArray(index) ) {
			var matched = [],
				i,
				len = index.length;

			for ( i = 0; i < len; i += 1 ) {
				matched.push(arr[index[i]]);
			}
		} else {
			throw new SlituException('Parameter "index" is not an array or integer', 'TypeException');
		}
	};

	slitu.average = function ( arr ) {
		if ( slitu.isHomogeneous(arr, 'number') ) {

		}
	};

	slitu.contains = function ( arr, value ) {
		var len = arr.length, i;

		for ( i = 0; i < len; i += 1 )
			if ( arr[i] === value )
				return true;

		return false;
	};

	slitu.count = function ( arr, value ) {
		var len = arr.length,
			count = 0,
			i;

		for ( i = 0; i < len; i += 1 )
			if ( arr[i] === value )
				count++;

		return count;
	};

	slitu.difference = function ( arr1, arr2 ) {

	};

	slitu.empty = function ( arr ) {
		var len = arr.length, i;

		for ( i = 0; i < len; i += 1 )
			arr[i] = undefined;

		return arr;
	};

	slitu.first = function ( arr, count ) {
		var len = arr.length;

		if ( !(index instanceof Array) )
			throw new SlituException('');

		if ( typeof count === 'undefined' )
			return arr[0];
		else {
			if ( count > len )
				throw new SlituException('');
			else {
				var matched = [], i;

				for ( i = 0; i < count; i += 1 )
					matched.push(arr[i]);
			}
		}
	};

	slitu.getByType = function ( arr, type ) {

	};

	slitu.initial = function ( arr, count ) {
		var m = count ? arr.length - count : arr.length - 1,
			matched = [],
			i;

		for ( i = 0; i < m; i += 1 )
			matched.push(arr[i]);

		return matched;
	};

	slitu.insert = function ( arr, value, index ) {

	};

	slitu.intersection = function ( arr1, arr2 ) {

	};

	slitu.last = function ( arr, count ) {
		return count ? Array.prototype.slice.call(arr, arr.length-count, arr.length) : arr[arr.length-1];
	};

	slitu.max = function ( arr ) {

	};

	slitu.min = function ( arr ) {

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

	};

	slitu.union = function () {
		return slitu.unique(Array.prototype.concat.apply(Array.prototype, arguments));
	};

	slitu.unique = function( arr ) {

	};

	slitu.without = function ( arr, values ) {
		arr.filter(function (v) { if (!slitu.contains(values, v)) return true; })
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
	
	// Miscellaneous
	// -------------

	slitu.isString = function ( obj ) {
		return typeof obj === "string" && {}.toString.call(obj) === "[object String]";
	};

	slitu.isHomogeneous = function ( arr, type ) {
		if ( arr.length === 0 ) throw new SlituException('', 'EmptyArrayException');

		var len = arr.length, i;

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

	slitu.isNaN = function (obj) {
		return typeof obj === "number" && obj !== obj;
	};

	slitu.isNull = function (obj) {
		return {}.toString.call(obj) === "[object Null]";
	};

	slitu.isArray = function (obj) {
		return {}.toString.call(obj) === "[object Array]";
	};

	slitu.isBool = function (obj) {
		return {}.toString.call(obj) === "[object Boolean]";
	};

	slitu.isDate = function (obj) {
		return {}.toString.call(obj) === "[object Date]" || obj instanceof Date;
	};

	slitu.isFalsy = function (obj) {
		return (slitu.isUndefined(obj) || slitu.isNull(obj) || slitu.isNaN(obj) ||
			obj === "" || obj === 0 || (slitu.isBool(obj) && Boolean(obj) === false));
	};

})(window.slitu = window.slitu || {});