/*!
{
  "author": "Graham Fairweather",
  "copywrite": "Copyright (c) 2017",
  "date": "2019-07-15T19:27:02.387Z",
  "describe": "",
  "description": "Like Reflect.ownKeys but gets only enumerable properties.",
  "file": "get-own-enumerable-keys-x.js",
  "hash": "ae325e2bec73088e92af",
  "license": "MIT",
  "version": "2.0.0"
}
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["getOwnEnumerableKeysX"] = factory();
	else
		root["getOwnEnumerableKeysX"] = factory();
})((function () {
  'use strict';

  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof window !== 'undefined') {
    return window;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return Function('return this')();
}()), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__(42)();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Constructors cached from literals.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module cached-constructors-x
 */



/**
 * Constructors cached from literals.
 *
 * @type Object
 * @example
 * var constructors = require('cached-constructors-x');
 */
module.exports = {
  Array: [].constructor,
  Boolean: true.constructor,
  Function: function () {}.constructor,
  Number: (0).constructor,
  Object: {}.constructor,
  RegExp: (/(?:)/).constructor,
  String: ''.constructor
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for RequireObjectCoercible.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-requireobjectcoercible|7.2.1 RequireObjectCoercible ( argument )}
 * @version 1.4.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module require-object-coercible-x
 */



var isNil = __webpack_require__(25);

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} value - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 * @example
 * var RequireObjectCoercible = require('require-object-coercible-x');
 *
 * RequireObjectCoercible(); // TypeError
 * RequireObjectCoercible(null); // TypeError
 * RequireObjectCoercible('abc'); // 'abc'
 * RequireObjectCoercible(true); // true
 * RequireObjectCoercible(Symbol('foo')); // Symbol('foo')
 */
module.exports = function RequireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError('Cannot call method on ' + value);
  }

  return value;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
*
*	VALIDATE: undefined
*
*
*	DESCRIPTION:
*		- Validates if a value is undefined.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/



/**
* FUNCTION: isUndefined( value )
*	Validates if a value is undefined.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is undefined
*/
function isUndefined( value ) {
	return value === void 0;
} // end FUNCTION isUndefined()


// EXPORTS //

module.exports = isUndefined;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Invokes function, returning an object of the results.
 * @version 1.1.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module attempt-x
 */



var getArgs = function _getArgs(args) {
  var length = args.length >>> 0;
  var array = [];
  var argLength = length - 1;
  if (argLength < 1) {
    return array;
  }

  array.length = argLength;
  for (var index = 1; index < length; index += 1) {
    array[index - 1] = args[index];
  }

  return array;
};

/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} fn - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {Object} Returns an object of the result.
 * @example
 * var attempt = require('attempt-x');
 *
 * function thrower() {
 *   throw new Error('Threw');
 * }
 *
 * attempt(thrower, 1, 2);
 * // {
 * //   threw: true,
 * //   value: // Error('Threw') object
 * // }
 *
 * function sumArgs(a, b) {
 *   return a + b;
 * }
 *
 * attempt(sumArgs, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 3
 * // }
 *
 * var thisArg = [];
 * function pusher(a, b) {
 *   return this.push(a, b);
 * }
 *
 * attempt.call(thisArg, pusher, 1, 2);
 * // {
 * //   threw: false,
 * //   value: 2
 * // }
 * // thisArg => [1, 2];
 */
module.exports = function attempt(fn) {
  try {
    return {
      threw: false,
      value: fn.apply(this, getArgs(arguments))
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Tests if ES6 Symbol is supported.
 * @version 1.4.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-symbol-support-x
 */



/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */
module.exports = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file List of ECMAScript white space characters.
 * @version 3.0.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module white-space-x
 */



/**
 * A record of a white space character.
 *
 * @typedef {Object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @private
 * @type Array.<CharRecord>
 */
var list = [
  {
    code: 0x0009,
    description: 'Tab',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u0009'
  },
  {
    code: 0x000a,
    description: 'Line Feed',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000a'
  },
  {
    code: 0x000b,
    description: 'Vertical Tab',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000b'
  },
  {
    code: 0x000c,
    description: 'Form Feed',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000c'
  },
  {
    code: 0x000d,
    description: 'Carriage Return',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u000d'
  },
  {
    code: 0x0020,
    description: 'Space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u0020'
  },
  /*
  {
    code: 0x0085,
    description: 'Next line',
    es5: false,
    es2015: false,
    es2016: false,
    es2017: false,
    es2018: false,
    string: '\u0085'
  }
  */
  {
    code: 0x00a0,
    description: 'No-break space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u00a0'
  },
  {
    code: 0x1680,
    description: 'Ogham space mark',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u1680'
  },
  {
    code: 0x180e,
    description: 'Mongolian vowel separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: false,
    es2018: false,
    string: '\u180e'
  },
  {
    code: 0x2000,
    description: 'En quad',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2000'
  },
  {
    code: 0x2001,
    description: 'Em quad',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2001'
  },
  {
    code: 0x2002,
    description: 'En space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2002'
  },
  {
    code: 0x2003,
    description: 'Em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2003'
  },
  {
    code: 0x2004,
    description: 'Three-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2004'
  },
  {
    code: 0x2005,
    description: 'Four-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2005'
  },
  {
    code: 0x2006,
    description: 'Six-per-em space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2006'
  },
  {
    code: 0x2007,
    description: 'Figure space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2007'
  },
  {
    code: 0x2008,
    description: 'Punctuation space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2008'
  },
  {
    code: 0x2009,
    description: 'Thin space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2009'
  },
  {
    code: 0x200a,
    description: 'Hair space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u200a'
  },
  /*
  {
    code: 0x200b,
    description: 'Zero width space',
    es5: false,
    es2015: false,
    es2016: false,
    es2017: false,
    es2018: false,
    string: '\u200b'
  },
  */
  {
    code: 0x2028,
    description: 'Line separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2028'
  },
  {
    code: 0x2029,
    description: 'Paragraph separator',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u2029'
  },
  {
    code: 0x202f,
    description: 'Narrow no-break space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u202f'
  },
  {
    code: 0x205f,
    description: 'Medium mathematical space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u205f'
  },
  {
    code: 0x3000,
    description: 'Ideographic space',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\u3000'
  },
  {
    code: 0xfeff,
    description: 'Byte Order Mark',
    es5: true,
    es2015: true,
    es2016: true,
    es2017: true,
    es2018: true,
    string: '\ufeff'
  }
];

var stringES2016 = '';
var stringES2018 = '';
var length = list.length;
for (var i = 0; i < length; i += 1) {
  if (list[i].es2016) {
    stringES2016 += list[i].string;
  }

  if (list[i].es2018) {
    stringES2018 += list[i].string;
  }
}

module.exports = {
  /**
   * An array of the whitespace char codes, string, descriptions and language
   * presence in the specifications.
   *
   * @type Array.<CharRecord>
   * @example
   * var whiteSpace = require('white-space-x');
   * whiteSpaces.list.foreach(function (item) {
   *   console.log(lib.description, item.code, item.string);
   * });
   */
  list: list,
  /**
   * A string of the ES2017 to ES2018 whitespace characters.
   *
   * @type string
   */
  string: stringES2018,

  /**
   * A string of the ES5 to ES2016 whitespace characters.
   *
   * @type string
   */
  string5: stringES2016,

  /**
   * A string of the ES5 to ES2016 whitespace characters.
   *
   * @type string
   */
  string2015: stringES2016,

  /**
   * A string of the ES5 to ES2016 whitespace characters.
   *
   * @type string
   * @example
   * var whiteSpace = require('white-space-x');
   * var characters = [
   *   '\u0009',
   *   '\u000a',
   *   '\u000b',
   *   '\u000c',
   *   '\u000d',
   *   '\u0020',
   *   '\u00a0',
   *   '\u1680',
   *   '\u180e',
   *   '\u2000',
   *   '\u2001',
   *   '\u2002',
   *   '\u2003',
   *   '\u2004',
   *   '\u2005',
   *   '\u2006',
   *   '\u2007',
   *   '\u2008',
   *   '\u2009',
   *   '\u200a',
   *   '\u2028',
   *   '\u2029',
   *   '\u202f',
   *   '\u205f',
   *   '\u3000',
   *   '\ufeff'
   * ];
   * var ws = characters.join('');
   * var re1 = new RegExp('^[' + whiteSpace.string2016 + ']+$)');
   * re1.test(ws); // true
   */
  string2016: stringES2016,

  /**
   * A string of the ES2017 to ES2018 whitespace characters.
   *
   * @type string
   */
  string2017: stringES2018,

  /**
   * A string of the ES2017 to ES2018 whitespace characters.
   *
   * @type string
   * @example
   * var whiteSpace = require('white-space-x');
   * var characters = [
   *   '\u0009',
   *   '\u000a',
   *   '\u000b',
   *   '\u000c',
   *   '\u000d',
   *   '\u0020',
   *   '\u00a0',
   *   '\u1680',
   *   '\u2000',
   *   '\u2001',
   *   '\u2002',
   *   '\u2003',
   *   '\u2004',
   *   '\u2005',
   *   '\u2006',
   *   '\u2007',
   *   '\u2008',
   *   '\u2009',
   *   '\u200a',
   *   '\u2028',
   *   '\u2029',
   *   '\u202f',
   *   '\u205f',
   *   '\u3000',
   *   '\ufeff'
   * ];
   * var ws = characters.join('');
   * var re1 = new RegExp('^[' + whiteSpace.string2018 + ']+$)');
   * re1.test(ws); // true
   */
  string2018: stringES2018
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') { return true; }
	if (typeof value !== 'object') { return false; }
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateObject(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) { return false; }
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Converts argument to a value of type Number.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-number-x
 */



var cachedCtrs = __webpack_require__(1);
var castNumber = cachedCtrs.Number;
var Rx = cachedCtrs.RegExp;
var toPrimitive = __webpack_require__(27);
var libTrim = __webpack_require__(30);
var trim2016 = libTrim.trim2016;
var trim2018 = libTrim.trim2018;
var libParseInt = __webpack_require__(48);
var $parseInt2016 = libParseInt.parseInt2016;
var $parseInt2018 = libParseInt.parseInt2018;
var pStrSlice = cachedCtrs.String.prototype.slice;
var NAN = __webpack_require__(31);

var binaryRegex = /^0b[01]+$/i;
// Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.
var test = binaryRegex.test;
var isBinary = function _isBinary(value) {
  return test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;
var isOctal = function _isOctal(value) {
  return test.call(octalRegex, value);
};

var nonWSregex2016 = new Rx('[\u0085\u200b\ufffe]', 'g');
var hasNonWS2016 = function _hasNonWS(value) {
  return test.call(nonWSregex2016, value);
};

var nonWSregex2018 = new Rx('[\u0085\u180e\u200b\ufffe]', 'g');
var hasNonWS2018 = function _hasNonWS(value) {
  return test.call(nonWSregex2018, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;
var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return test.call(invalidHexLiteral, value);
};

var $toNumber2016 = function toNumber2016(argument) {
  var value = toPrimitive(argument, Number);
  if (typeof value === 'symbol') {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2016($parseInt2016(pStrSlice.call(value, 2), 2));
    }

    if (isOctal(value)) {
      return toNumber2016($parseInt2016(pStrSlice.call(value, 2), 8));
    }

    if (hasNonWS2016(value) || isInvalidHexLiteral(value)) {
      return NAN;
    }

    var trimmed = trim2016(value);
    if (trimmed !== value) {
      return toNumber2016(trimmed);
    }
  }

  return castNumber(value);
};

var $toNumber2018 = function toNumber2018(argument) {
  var value = toPrimitive(argument, Number);
  if (typeof value === 'symbol') {
    throw new TypeError('Cannot convert a Symbol value to a number');
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2018($parseInt2018(pStrSlice.call(value, 2), 2));
    }

    if (isOctal(value)) {
      return toNumber2018($parseInt2018(pStrSlice.call(value, 2), 8));
    }

    if (hasNonWS2018(value) || isInvalidHexLiteral(value)) {
      return NAN;
    }

    var trimmed = trim2018(value);
    if (trimmed !== value) {
      return toNumber2018(trimmed);
    }
  }

  return castNumber(value);
};

module.exports = {
  /**
   * reference to toNumber2018.
   */
  toNumber: $toNumber2018,

  /**
   * This method converts argument to a value of type Number. (ES2016)

   * @param {*} argument - The argument to convert to a number.
   * @throws {TypeError} - If argument is a Symbol or not coercible.
   * @returns {*} The argument converted to a number.
   * @example
   * var toNumber = require('to-number-x').toNumber2016;
   *
   * toNumber('1'); // 1
   * toNumber(null); // 0
   * toNumber(true); // 1
   * toNumber('0o10'); // 8
   * toNumber('0b10'); // 2
   * toNumber('0xF'); // 16
   *
   * toNumber(' 1 '); // 1
   *
   * toNumber(Symbol('')) // TypeError
   * toNumber(Object.create(null)) // TypeError
   */
  toNumber2016: $toNumber2016,

  /**
   * This method converts argument to a value of type Number. (ES2018)

   * @param {*} argument - The argument to convert to a number.
   * @throws {TypeError} - If argument is a Symbol or not coercible.
   * @returns {*} The argument converted to a number.
   * @example
   * var toNumber = require('to-number-x').toNumber2018;
   *
   * toNumber('1'); // 1
   * toNumber(null); // 0
   * toNumber(true); // 1
   * toNumber('0o10'); // 8
   * toNumber('0b10'); // 2
   * toNumber('0xF'); // 16
   *
   * toNumber(' 1 '); // 1
   *
   * toNumber(Symbol('')) // TypeError
   * toNumber(Object.create(null)) // TypeError
   */
  toNumber2018: $toNumber2018
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



// see http://jsperf.com/testing-value-is-primitive/7
module.exports = function isPrimitive(value) {
  return value == null || (typeof value !== 'function' && typeof value !== 'object');
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for ToString.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tostring|7.1.12 ToString ( argument )}
 * @version 1.4.5
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-x
 */



var castString = __webpack_require__(1).String;
var isSymbol = __webpack_require__(0);

/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} value - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 * @example
 * var $toString = require('to-string-x');
 *
 * $toString(); // 'undefined'
 * $toString(null); // 'null'
 * $toString('abc'); // 'abc'
 * $toString(true); // 'true'
 * $toString(Symbol('foo')); // TypeError
 * $toString(Symbol.iterator); // TypeError
 * $toString(Object(Symbol.iterator)); // TypeError
 * $toString(Object.create(null)); // TypeError
 */
module.exports = function ToString(value) {
  if (isSymbol(value)) {
    throw new TypeError('Cannot convert a Symbol value to a string');
  }

  return castString(value);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Used to determine whether an object has an own property with the specified property key.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-hasownproperty|7.3.11 HasOwnProperty (O, P)}
 * @version 3.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-own-property-x
 */



var toObject = __webpack_require__(57);
var toPropertyKey = __webpack_require__(16);
var hop = __webpack_require__(1).Object.prototype.hasOwnProperty;

/**
 * The `hasOwnProperty` method returns a boolean indicating whether
 * the `object` has the specified `property`. Does not attempt to fix known
 * issues in older browsers, but does ES6ify the method.
 *
 * @param {!Object} object - The object to test.
 * @throws {TypeError} If object is null or undefined.
 * @param {string|Symbol} property - The name or Symbol of the property to test.
 * @returns {boolean} `true` if the property is set on `object`, else `false`.
 * @example
 * var hasOwnProperty = require('has-own-property-x');
 * var o = {
 *   foo: 'bar'
 * };
 *
 *
 * hasOwnProperty(o, 'bar'); // false
 * hasOwnProperty(o, 'foo'); // true
 * hasOwnProperty(undefined, 'foo');
 *                   // TypeError: Cannot convert undefined or null to object
 */
module.exports = function hasOwnProperty(object, property) {
  return hop.call(toObject(object), toPropertyKey(property));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Converts argument to a value that can be used as a property key.
 * @version 2.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-property-key-x
 */



var hasSymbols = __webpack_require__(7);
var toPrimitive = __webpack_require__(27);
var toStr = __webpack_require__(14);

/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to onvert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|symbol} The converted argument.
 * @example
 * var toPropertyKey = require('to-property-key-x');
 *
 * toPropertyKey(); // 'undefined'
 * toPropertyKey(1); // '1'
 * toPropertyKey(true); // 'true'
 *
 * var symbol = Symbol('a');
 * toPropertyKey(symbol); // symbol
 *
 * toPropertyKey(Object.create(null)); // TypeError
 */
module.exports = function toPropertyKey(argument) {
  var key = toPrimitive(argument, String);
  return hasSymbols && typeof key === 'symbol' ? key : toStr(key);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Get an object's ES6 @@toStringTag.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring|19.1.3.6 Object.prototype.toString ( )}
 * @version 1.4.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-tag-x
 */



var isNull = __webpack_require__(26);
var isUndefined = __webpack_require__(5);
var toStr = {}.toString;

/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} value - The object of which to get the object type string.
 * @returns {string} The object type string.
 * @example
 * var toStringTag = require('to-string-tag-x');
 *
 * var o = new Object();
 * toStringTag(o); // returns '[object Object]'
 */
module.exports = function toStringTag(value) {
  if (isNull(value)) {
    return '[object Null]';
  }

  if (isUndefined(value)) {
    return '[object Undefined]';
  }

  return toStr.call(value);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ToInteger converts 'argument' to an integral numeric value.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger|7.1.4 ToInteger ( argument )}
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-integer-x
 */



var libToNumber = __webpack_require__(12);
var toNumber2016 = libToNumber.toNumber2016;
var toNumber2018 = libToNumber.toNumber2018;
var numberIsNaN = __webpack_require__(24);
var numberIsFinite = __webpack_require__(49);
var libMathSign = __webpack_require__(51);
var mathSign2016 = libMathSign.sign2016;
var mathSign2018 = libMathSign.sign2018;
var mathFloor = Math.floor;
var mathAbs = Math.abs;

var $toInteger2016 = function toInteger2016(value) {
  var number = toNumber2016(value);
  if (numberIsNaN(number)) {
    return 0;
  }

  if (number === 0 || numberIsFinite(number) === false) {
    return number;
  }

  return mathSign2016(number) * mathFloor(mathAbs(number));
};

var $toInteger2018 = function toInteger2018(value) {
  var number = toNumber2018(value);
  if (numberIsNaN(number)) {
    return 0;
  }

  if (number === 0 || numberIsFinite(number) === false) {
    return number;
  }

  return mathSign2018(number) * mathFloor(mathAbs(number));
};

module.exports = {
  /**
   * Reference to toInteger2018.
   */
  toInteger: $toInteger2018,

  /**
   * Converts `value` to an integer. (ES2016)
   *
   * @param {*} value - The value to convert.
   * @returns {number} Returns the converted integer.
   *
   * @example
   * var toInteger = require('to-integer-x').toInteger2016;
   * toInteger(3); // 3
   * toInteger(Number.MIN_VALUE); // 0
   * toInteger(Infinity); // 1.7976931348623157e+308
   * toInteger('3'); // 3
   */
  toInteger2016: $toInteger2016,

  /**
   * Converts `value` to an integer. (ES2018)
   *
   * @param {*} value - The value to convert.
   * @returns {number} Returns the converted integer.
   *
   * @example
   * var toInteger = require('to-integer-x').toInteger2018;
   * toInteger(3); // 3
   * toInteger(Number.MIN_VALUE); // 0
   * toInteger(Infinity); // 1.7976931348623157e+308
   * toInteger('3'); // 3
   */
  toInteger2018: $toInteger2018
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Determine whether a given value is a function object.
 * @version 3.3.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-function-x
 */



var attempt = __webpack_require__(6);
var fToString = Function.prototype.toString;
var toBoolean = __webpack_require__(28);
var isFalsey = __webpack_require__(21);
var toStringTag = __webpack_require__(18);
var hasToStringTag = __webpack_require__(29);
var isPrimitive = __webpack_require__(13);
var normalise = __webpack_require__(45).normalizeSpace;
var deComment = __webpack_require__(47);
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;

var hasNativeClass = attempt(function () {
  // eslint-disable-next-line no-new-func
  return Function('"use strict"; return class My {};')();
}).threw === false;

var testClassstring = function _testClassstring(value) {
  return test.call(ctrRx, normalise(deComment(fToString.call(value), ' ')));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt(testClassstring, value);

  return result.threw === false && result.value;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */
var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt.call(value, fToString).threw === false;
};

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 * @example
 * var isFunction = require('is-function-x');
 *
 * isFunction(); // false
 * isFunction(Number.MIN_VALUE); // false
 * isFunction('abc'); // false
 * isFunction(true); // false
 * isFunction({ name: 'abc' }); // false
 * isFunction(function () {}); // true
 * isFunction(new Function ()); // true
 * isFunction(function* test1() {}); // true
 * isFunction(function test2(a, b) {}); // true
 * isFunction(async function test3() {}); // true
 * isFunction(class Test {}); // false
 * isFunction(class Test {}, true); // true
 * isFunction((x, y) => {return this;}); // true
 */
module.exports = function isFunction(value) {
  if (isPrimitive(value)) {
    return false;
  }

  if (hasToStringTag) {
    return tryFuncToString(value, toBoolean(arguments[1]));
  }

  if (hasNativeClass && isFalsey(arguments[1]) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = toStringTag(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Test if a given value is falsey.
 * @version 1.0.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-falsey-x
 */



var toBoolean = __webpack_require__(28);

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 * @example
 * var isFalsey = require('is-falsey-x');
 *
 * isFalsey(); // true
 * isFalsey(0); // true
 * isFalsey(''); // true
 * isFalsey(false); // true
 * isFalsey(null); // true
 *
 * isFalsey(true); // false
 * isFalsey([]); // false
 * isFalsey(1); // false
 * isFalsey(function () {}); // false
 */
module.exports = function isFalsey(value) {
  return toBoolean(value) === false;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file This method removes whitespace from the left end of a string.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-left-x
 */



var requireCoercibleToString = __webpack_require__(23);
var Rx = __webpack_require__(1).RegExp;
var reLeft2016 = new Rx('^[' + __webpack_require__(8).string2016 + ']+');
var reLeft2018 = new Rx('^[' + __webpack_require__(8).string2018 + ']+');
var replace = ''.replace;

var $trimLeft2016 = function trimLeft2016(string) {
  return replace.call(requireCoercibleToString(string), reLeft2016, '');
};

var $trimLeft2018 = function trimLeft2018(string) {
  return replace.call(requireCoercibleToString(string), reLeft2018, '');
};

module.exports = {
  /**
   * A reference to leftTrim2018.
   */
  trimLeft: $trimLeft2018,

  /**
   * This method removes whitespace from the left end of a string. (ES2016)
   *
   * @param {string} string - The string to trim the left end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The left trimmed string.
   * @example
   * var trimLeft = require('trim-left-x').trimLeft2016;
   *
   * trimLeft(' \t\na \t\n') === 'a \t\n'; // true
   */
  trimLeft2016: $trimLeft2016,

  /**
   * This method removes whitespace from the left end of a string. (ES2018)
   *
   * @param {string} string - The string to trim the left end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The left trimmed string.
   * @example
   * var trimLeft = require('trim-left-x').trimLeft2018;
   *
   * trimLeft(' \t\na \t\n') === 'a \t\n'; // true
   */
  trimLeft2018: $trimLeft2018
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Requires an argument is corecible then converts using ToString.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module require-coercible-to-string-x
 */



var requireObjectCoercible = __webpack_require__(2);
var toStr = __webpack_require__(14);

/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} value - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 * @example
 * var requireCoercibleToString = require('require-coercible-to-string-x');
 *
 * requireCoercibleToString(); // TypeError
 * requireCoercibleToString(null); // TypeError
 * requireCoercibleToString(Symbol('')); // TypeError
 * requireCoercibleToString(Object.create(null)); // TypeError
 * requireCoercibleToString(1); // '1'
 * requireCoercibleToString(true); // 'true'
 */
module.exports = function requireCoercibleToString(value) {
  return toStr(requireObjectCoercible(value));
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for Number.isNaN - the global isNaN returns false positives.
 * @version 1.0.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-nan-x
 */



/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} value - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 * @example
 * var numberIsNaN = require('is-nan-x');
 *
 * numberIsNaN(NaN);        // true
 * numberIsNaN(Number.NaN); // true
 * numberIsNaN(0 / 0);      // true
 *
 * // e.g. these would have been true with global isNaN()
 * numberIsNaN('NaN');      // false
 * numberIsNaN(undefined);  // false
 * numberIsNaN({});         // false
 * numberIsNaN('blabla');   // false
 *
 * // These all return false
 * numberIsNaN(true);
 * numberIsNaN(null);
 * numberIsNaN(37);
 * numberIsNaN('37');
 * numberIsNaN('37.37');
 * numberIsNaN('');
 * numberIsNaN(' ');
 */
module.exports = function isNaN(value) {
  return value !== value;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Checks if `value` is `null` or `undefined`.
 * @version 1.4.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-nil-x
 */



var isUndefined = __webpack_require__(5);
var isNull = __webpack_require__(26);

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 * var isNil = require('is-nil-x');
 *
 * isNil(null); // => true
 * isNil(void 0); // => true
 * isNil(NaN); // => false
 */
module.exports = function isNil(value) {
  return isNull(value) || isUndefined(value);
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * lodash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

module.exports = isNull;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Converts a JavaScript object to a primitive value.
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-primitive-x
 */



var hasSymbols = __webpack_require__(7);
var isPrimitive = __webpack_require__(13);
var isDate = __webpack_require__(10);
var isSymbol = __webpack_require__(0);
var isFunction = __webpack_require__(20);
var requireObjectCoercible = __webpack_require__(2);
var isNil = __webpack_require__(25);
var isUndefined = __webpack_require__(5);
var symToPrimitive = hasSymbols && Symbol.toPrimitive;
var symValueOf = hasSymbols && Symbol.prototype.valueOf;

var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;

var ordinaryToPrimitive = function _ordinaryToPrimitive(O, hint) {
  requireObjectCoercible(O);
  if (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === 'string' ? toStringOrder : toNumberOrder;
  var method;
  var result;
  for (var i = 0; i < orderLength; i += 1) {
    method = O[methodNames[i]];
    if (isFunction(method)) {
      result = method.call(O);
      if (isPrimitive(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};

var getMethod = function _getMethod(O, P) {
  var func = O[P];
  if (isNil(func) === false) {
    if (isFunction(func) === false) {
      throw new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');
    }

    return func;
  }

  return void 0;
};

// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive

/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {constructor} [prefferedtype] - The preffered type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @example
 * var toPrimitive = require('to-primitive-x');
 *
 * var date = new Date(0);
 * toPrimitive(date)); // Thu Jan 01 1970 01:00:00 GMT+0100 (CET)
 * toPrimitive(date, String)); // Thu Jan 01 1970 01:00:00 GMT+0100 (CET)
 * toPrimitive(date, Number)); // 0
 */
module.exports = function toPrimitive(input, preferredType) {
  if (isPrimitive(input)) {
    return input;
  }

  var hint = 'default';
  if (arguments.length > 1) {
    if (preferredType === String) {
      hint = 'string';
    } else if (preferredType === Number) {
      hint = 'number';
    }
  }

  var exoticToPrim;
  if (hasSymbols) {
    if (symToPrimitive) {
      exoticToPrim = getMethod(input, symToPrimitive);
    } else if (isSymbol(input)) {
      exoticToPrim = symValueOf;
    }
  }

  if (isUndefined(exoticToPrim) === false) {
    var result = exoticToPrim.call(input, hint);
    if (isPrimitive(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  if (hint === 'default' && (isDate(input) || isSymbol(input))) {
    hint = 'string';
  }

  return ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Converts argument to a value of type Boolean.
 * @version 1.0.3
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-boolean-x
 */



/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} value - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 * @example
 * var toBoolean = require('to-boolean-x');
 *
 * toBoolean(null); // false
 * toBoolean(''); // false
 * toBoolean(1); // true
 * toBoolean('0'); // true
 */
module.exports = function toBoolean(value) {
  return !!value;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Tests if ES6 @@toStringTag is supported.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-@@tostringtag|26.3.1 @@toStringTag}
 * @version 1.4.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-to-string-tag-x
 */



/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */
module.exports = __webpack_require__(7) && typeof Symbol.toStringTag === 'symbol';


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file This method removes whitespace from the left and right end of a string.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-x
 */



var libTrimLeft = __webpack_require__(22);
var trimLeft2016 = libTrimLeft.trimLeft2016;
var trimLeft2018 = libTrimLeft.trimLeft2018;
var libTrimRight = __webpack_require__(46);
var trimRight2016 = libTrimRight.trimRight2016;
var trimRight2018 = libTrimRight.trimRight2016;

var $trim2016 = function trim2016(string) {
  return trimLeft2016(trimRight2016(string));
};

var $trim2018 = function trim2018(string) {
  return trimLeft2018(trimRight2018(string));
};

module.exports = {
  /**
   * A reference to trim2018.
   */
  trim: $trim2018,

  /**
   * This method removes whitespace from the left and right end of a string.
   * (ES2016)
   * @param {string} string - The string to trim the whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The trimmed string.
   * @example
   * var trim = require('trim-x');
   *
   * trim(' \t\na \t\n') === 'a'; // true
   */
  trim2016: $trim2016,

  /**
   * This method removes whitespace from the left and right end of a string.
   * (ES2018)
   *
   * @param {string} string - The string to trim the whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The trimmed string.
   * @example
   * var trim = require('trim-x');
   *
   * trim(' \t\na \t\n') === 'a'; // true
   */
  trim2018: $trim2018
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file The constant NaN derived mathematically by 0 / 0.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module nan-x
 */



/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 * @example
 * var NAN = require('nan-x');
 *
 * NAN !== NAN; // true
 * NAN === NAN; // false
 */
module.exports = 0 / 0;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = 9007199254740991;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Tests if a value is a string with the boxed bug; splits to an array.
 * @version 1.1.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module split-if-boxed-bug-x
 */



var strSplit;
var isString;
if (__webpack_require__(53) === false) {
  strSplit = ''.split;
  isString = typeof strSplit === 'function' && __webpack_require__(9);
}

/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} value - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 * @example
 * var splitIfBoxedBug = require('split-if-boxed-bug-x');
 *
 * // No boxed bug
 * splitIfBoxedBug('abc'); // 'abc'
 *
 * // Boxed bug
 * splitIfBoxedBug('abc'); // ['a', 'b', 'c']
 */
module.exports = function splitIfBoxedBug(value) {
  return isString && isString(value) ? strSplit.call(value, '') : value;
};



/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6 abstract ToString with Symbol conversion support.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tostring|7.1.12 ToString ( argument )}
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-string-symbols-supported-x
 */



var castString = __webpack_require__(1).String;
var pToString = __webpack_require__(7) && Symbol.prototype.toString;
var isSymbol = typeof pToString === 'function' && __webpack_require__(0);

/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} value - The value to convert to a string.
 * @returns {string} The converted value.
 * @example
 * var toStringSymbolsSupported = require('to-string-symbols-supported-x');
 *
 * toStringSymbolsSupported(); // 'undefined'
 * toStringSymbolsSupported(null); // 'null'
 * toStringSymbolsSupported('abc'); // 'abc'
 * toStringSymbolsSupported(true); // 'true'
 * toStringSymbolsSupported(Symbol('foo')); // 'Symbol('foo')'
 * toStringSymbolsSupported(Object(Symbol('foo'))); // 'Symbol('foo')'
 * toStringSymbolsSupported(Object.create(null)); // TypeError
 */
module.exports = function toStringSymbolsSupported(value) {
  return isSymbol && isSymbol(value) ? pToString.call(value) : castString(value);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file An ES6 Object.keys shim.
 * @version 2.5.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module object-keys-x
 */



var toObject = __webpack_require__(37);
var nativeKeys = typeof Object.keys === 'function' && Object.keys;

var isWorking;
var throwsWithNull;
var worksWithPrim;
var worksWithRegex;
var worksWithArgs;
var worksWithStr;
if (nativeKeys) {
  var attempt = __webpack_require__(6);
  var isArray = __webpack_require__(38);
  var isCorrectRes = function _isCorrectRes(r, length) {
    return r.threw === false && isArray(r.value) && r.value.length === length;
  };

  var either = function _either(r, a, b) {
    var x = r.value[0];
    var y = r.value[1];
    return (x === a && y === b) || (x === b && y === a);
  };

  var testObj = { a: 1, b: 2 };
  var res = attempt(nativeKeys, testObj);
  isWorking = isCorrectRes(res, 2) && either(res, 'a', 'b');

  if (isWorking) {
    testObj = Object('a');
    testObj.y = 1;
    res = attempt(nativeKeys, testObj);
    isWorking = isCorrectRes(res, 2) && either(res, '0', 'y');
  }

  if (isWorking) {
    throwsWithNull = attempt(nativeKeys, null).threw;
    worksWithPrim = isCorrectRes(attempt(nativeKeys, 42), 0);
    worksWithRegex = attempt(nativeKeys, /a/g).threw === false;

    res = attempt(nativeKeys, (function () {
      return arguments;
    }(1, 2)));

    worksWithArgs = isCorrectRes(res, 2) && either(res, '0', '1');

    res = attempt(nativeKeys, Object('ab'));
    worksWithStr = isCorrectRes(res, 2) && either(res, '0', '1');
  }
}

var objectKeys;
if (isWorking) {
  if (throwsWithNull && worksWithPrim && worksWithRegex && worksWithArgs && worksWithStr) {
    objectKeys = nativeKeys;
  } else {
    var isArguments = worksWithArgs !== true && __webpack_require__(39);
    var arraySlice = isArguments && __webpack_require__(40);
    var splitIfBoxed = worksWithStr !== true && __webpack_require__(33);
    var isString = splitIfBoxed && __webpack_require__(9);
    var isRegexp = worksWithRegex !== true && __webpack_require__(54);
    var has = isRegexp && __webpack_require__(15);

    objectKeys = function keys(object) {
      var obj = toObject ? toObject(object) : object;
      if (isArguments && isArguments(obj)) {
        obj = arraySlice(obj);
      } else if (isString && isString(obj)) {
        obj = splitIfBoxed(obj);
      } else if (isRegexp && isRegexp(obj)) {
        var regexKeys = [];
        // eslint-disable-next-line no-restricted-syntax
        for (var k in obj) {
          if (has(obj, k)) {
            regexKeys[regexKeys.length] = k;
          }
        }

        return regexKeys;
      }

      return nativeKeys(obj);
    };
  }
} else {
  var objKeys = __webpack_require__(67);
  objectKeys = function keys(object) {
    return objKeys(toObject(object));
  };
}

/**
 * This method returns an array of a given object's own enumerable properties,
 * in the same order as that provided by a for...in loop (the difference being
 * that a for-in loop enumerates properties in the prototype chain as well).
 *
 * @param {*} obj The object of which the enumerable own properties are to be returned.
 * @return {Array} An array of strings that represent all the enumerable properties of the given object.
 * @example
 * var objectKeys = require('object-keys-x');
 *
 * var obj = {
 *   arr: [],
 *   bool: true,
 *   'null': null,
 *   num: 42,
 *   obj: { },
 *   str: 'boz',
 *   undefined: void 0
 * };
 *
 * objectKeys(obj); // ['arr', 'bool', 'null', 'num', 'obj', 'str', 'undefined']
 */
module.exports = objectKeys;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for ToObject.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-toobject|7.1.13 ToObject ( argument )}
 * @version 1.5.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-object-x
 */



var requireObjectCoercible = __webpack_require__(2);
var castObject = __webpack_require__(1).Object;

/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!Object} The `value` converted to an object.
 * @example
 * var ToObject = require('to-object-x');
 *
 * ToObject(); // TypeError
 * ToObject(null); // TypeError
 * ToObject('abc'); // Object('abc')
 * ToObject(true); // Object(true)
 * ToObject(Symbol('foo')); // Object(Symbol('foo'))
 */
module.exports = function toObject(value) {
  return castObject(requireObjectCoercible(value));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Determines whether the passed value is an Array.
 * @version 1.2.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-array-x
 */



var nativeIsArray = typeof Array.isArray === 'function' && Array.isArray;

var testRes = nativeIsArray && __webpack_require__(6)(function () {
  return nativeIsArray([]) === true && nativeIsArray({ length: 0 }) === false;
});

var $isArray;
if (testRes && testRes.threw === false && testRes.value === true) {
  $isArray = nativeIsArray;
} else {
  var toStringTag = __webpack_require__(18);
  $isArray = function isArray(obj) {
    return toStringTag(obj) === '[object Array]';
  };
}

/**
 * The isArray() function determines whether the passed value is an Array.
 *
 * @param {*} obj - The object to be checked..
 * @returns {boolean} `true` if the object is an Array; otherwise, `false`.
 * @example
 * var isArray = require('is-array-x');
 *
 * isArray([]); // true
 * isArray({}); // false
 */
module.exports = $isArray;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Cross-browser array-like slicer.
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module array-like-slice-x
 */



var toObject = __webpack_require__(41);
var toInteger = __webpack_require__(19).toInteger2018;
var toLength = __webpack_require__(52).toLength2018;
var isUndefined = __webpack_require__(5);
var splitIfBoxedBug = __webpack_require__(33);

var getMax = function _getMax(a, b) {
  return a >= b ? a : b;
};

var getMin = function _getMin(a, b) {
  return a <= b ? a : b;
};

var setRelative = function _setRelative(value, length) {
  return value < 0 ? getMax(length + value, 0) : getMin(value, length);
};

/**
 * The slice() method returns a shallow copy of a portion of an array into a new
 * array object selected from begin to end (end not included). The original
 * array will not be modified.
 *
 * @param {!Object} argsObject - The `arguments` to slice.
 * @param {number} [start] - Zero-based index at which to begin extraction.
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. slice(-2) extracts the last two elements in the sequence.
 *  If begin is undefined, slice begins from index 0.
 * @param {number} [end] - Zero-based index before which to end extraction.
 *  Slice extracts up to but not including end. For example, slice([0,1,2,3,4],1,4)
 *  extracts the second element through the fourth element (elements indexed
 *  1, 2, and 3).
 *  A negative index can be used, indicating an offset from the end of the
 *  sequence. slice(2,-1) extracts the third element through the second-to-last
 *  element in the sequence.
 *  If end is omitted, slice extracts through the end of the sequence (arr.length).
 *  If end is greater than the length of the sequence, slice extracts through
 *  the end of the sequence (arr.length).
 * @returns {Array} A new array containing the extracted elements.
 * @example
 * var arrayLikeSlice = require('array-like-slice-x');
 * var args = (function () {
    return arguments;
 * }('Banana', 'Orange', 'Lemon', 'Apple', 'Mango'));
 *
 * var citrus = arrayLikeSlice(args, 1, 3);
 *
 * // args contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
 * // citrus contains ['Orange','Lemon']
 */
module.exports = function slice(arrayLike, start, end) {
  var iterable = splitIfBoxedBug(toObject(arrayLike));
  var length = toLength(iterable.length);
  var k = setRelative(toInteger(start), length);
  var relativeEnd = isUndefined(end) ? length : toInteger(end);
  var finalEnd = setRelative(relativeEnd, length);
  var val = [];
  val.length = getMax(finalEnd - k, 0);
  var next = 0;
  while (k < finalEnd) {
    if (k in iterable) {
      val[next] = iterable[k];
    }

    next += 1;
    k += 1;
  }

  return val;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for ToObject.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-toobject|7.1.13 ToObject ( argument )}
 * @version 1.5.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-object-x
 */



var requireObjectCoercible = __webpack_require__(2);
var castObject = __webpack_require__(1).Object;

/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!Object} The `value` converted to an object.
 * @example
 * var ToObject = require('to-object-x');
 *
 * ToObject(); // TypeError
 * ToObject(null); // TypeError
 * ToObject('abc'); // Object('abc')
 * ToObject(true); // Object(true)
 * ToObject(Symbol('foo')); // Object(Symbol('foo'))
 */
module.exports = function toObject(value) {
  return castObject(requireObjectCoercible(value));
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__(44);

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(43)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Trims and replaces sequences of whitespace characters by a single space.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module normalize-space-x
 */



var libTrim = __webpack_require__(30);
var trim2016 = libTrim.trim2016;
var trim2018 = libTrim.trim2018;
var Rx = __webpack_require__(1).RegExp;
var libWhiteSpace = __webpack_require__(8);
var reNormalize2016 = new Rx('[' + libWhiteSpace.string2016 + ']+', 'g');
var reNormalize2018 = new Rx('[' + libWhiteSpace.string2018 + ']+', 'g');
var replace = ''.replace;

var $normalizeSpace2016 = function normalizeSpace2016(string) {
  return replace.call(trim2016(string), reNormalize2016, ' ');
};

var $normalizeSpace2018 = function normalizeSpace2018(string) {
  return replace.call(trim2018(string), reNormalize2018, ' ');
};

module.exports = {
  /**
   * Reference to normalizeSpace2018.
   */
  normalizeSpace: $normalizeSpace2018,

  /**
   * This method strips leading and trailing white-space from a string,
   * replaces sequences of whitespace characters by a single space,
   * and returns the resulting string. (ES2016)
   *
   * @param {string} string - The string to be normalized.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The normalized string.
   * @example
   * var normalizeSpace = require('normalize-space-x');
   *
   * normalizeSpace(' \t\na \t\nb \t\n') === 'a b'; // true
   */
  normalizeSpace2016: $normalizeSpace2016,

  /**
   * This method strips leading and trailing white-space from a string,
   * replaces sequences of whitespace characters by a single space,
   * and returns the resulting string. (ES2018)
   *
   * @param {string} string - The string to be normalized.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The normalized string.
   * @example
   * var normalizeSpace = require('normalize-space-x');
   *
   * normalizeSpace(' \t\na \t\nb \t\n') === 'a b'; // true
   */
  normalizeSpace2018: $normalizeSpace2018
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file This method removes whitespace from the right end of a string.
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module trim-right-x
 */



var requireCoercibleToString = __webpack_require__(23);
var Rx = __webpack_require__(1).RegExp;
var reRight2016 = new Rx('[' + __webpack_require__(8).string2016 + ']+$');
var reRight2018 = new Rx('[' + __webpack_require__(8).string2018 + ']+$');
var replace = ''.replace;

var $trimRight2016 = function trimRight2016(string) {
  return replace.call(requireCoercibleToString(string), reRight2016, '');
};

var $trimRight2018 = function trimRight2018(string) {
  return replace.call(requireCoercibleToString(string), reRight2018, '');
};

module.exports = {
  /**
   * A reference to trimRight2018.
   */
  trimRight: $trimRight2018,

  /**
   * This method removes whitespace from the right end of a string. (ES2016)
   *
   * @param {string} string - The string to trim the right end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The right trimmed string.
   * @example
   * var trimRight = require('trim-right-x');
   *
   * trimRight(' \t\na \t\n') === ' \t\na'; // true
   */
  trimRight2016: $trimRight2016,

  /**
   * This method removes whitespace from the right end of a string. (ES2018)
   *
   * @param {string} string - The string to trim the right end whitespace from.
   * @throws {TypeError} If string is null or undefined or not coercible.
   * @returns {string} The right trimmed string.
   * @example
   * var trimRight = require('trim-right-x');
   *
   * trimRight(' \t\na \t\n') === ' \t\na'; // true
   */
  trimRight2018: $trimRight2018
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Replace the comments in a string.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module replace-comments-x
 */



var toStr = __webpack_require__(14);
var requireCoercibleToString = __webpack_require__(23);
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
var replace = ''.replace;

/**
 * This method replaces comments in a string.
 *
 * @param {string} string - The string to be stripped.
 * @param {string} [replacement] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 * @example
 * var replaceComments = require('replace-comments-x');
 *
 * replaceComments(test;/* test * /, ''), // 'test;'
 * replaceComments(test; // test, ''), // 'test;'
 */
module.exports = function replaceComments(string) {
  return replace.call(requireCoercibleToString(string), STRIP_COMMENTS, arguments.length > 1 ? toStr(arguments[1]) : '');
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Parses a string argument and returns an integer of the specified radix.
 * @version 2.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module parse-int-x
 */



var nativeParseInt = parseInt;
var NAN = __webpack_require__(31);
var toStr = __webpack_require__(14);
var trimLeft2016 = __webpack_require__(22).trimLeft2016;
var trimLeft2018 = __webpack_require__(22).trimLeft2018;
var chachedCtrs = __webpack_require__(1);
var castNumber = chachedCtrs.Number;
var charAt = chachedCtrs.String.prototype.charAt;
var hexRegex = /^[-+]?0[xX]/;
var test = hexRegex.test;

var $parseInt2016 = function parseInt2016(string, radix) {
  var str = trimLeft2016(toStr(string));

  return nativeParseInt(str, castNumber(radix) || (test.call(hexRegex, str) ? 16 : 10));
};

var $parseInt2018 = function parseInt2018(string, radix) {
  var str = trimLeft2018(toStr(string));
  if (charAt.call(str, 0) === '\u180E') {
    return NAN;
  }

  return nativeParseInt(str, castNumber(radix) || (test.call(hexRegex, str) ? 16 : 10));
};

module.exports = {
  /**
   * Reference to parseInt2018.
   */
  parseInt: $parseInt2018,

  /**
   * This method parses a string argument and returns an integer of the specified
   * radix (the base in mathematical numeral systems). (ES2016)
   *
   * @param {string} string - The value to parse. If the string argument is not a
   *  string, then it is converted to a string (using the ToString abstract
   *  operation). Leading whitespace in the string argument is ignored.
   * @param {number} radix - An integer between 2 and 36 that represents the radix
   *  (the base in mathematical numeral systems) of the above mentioned string.
   *  Specify 10 for the decimal numeral system commonly used by humans. Always
   *  specify this parameter to eliminate reader confusion and to guarantee
   *  predictable behavior. Different implementations produce different results
   *  when a radix is not specified, usually defaulting the value to 10.
   * @throws {TypeError} If target is a Symbol or is not coercible.
   * @returns {number} An integer number parsed from the given string. If the first
   *  character cannot be converted to a number, NaN is returned.
   * @example
   * var $parseInt = require('parse-int-x').parseInt2016;
   *
   * // The following examples all return 15
   * $parseInt(' 0xF', 16);
   * $parseInt(' F', 16);
   * $parseInt('17', 8);
   * $parseInt(021, 8);
   * $parseInt('015', 10);   // $parseInt(015, 10); will return 15
   * $parseInt(15.99, 10);
   * $parseInt('15,123', 10);
   * $parseInt('FXX123', 16);
   * $parseInt('1111', 2);
   * $parseInt('15 * 3', 10);
   * $parseInt('15e2', 10);
   * $parseInt('15px', 10);
   * $parseInt('12', 13);
   *
   * //The following examples all return NaN:
   * $parseInt('Hello', 8); // Not a number at all
   * $parseInt('546', 2);   // Digits are not valid for binary representations
   */
  parseInt2016: $parseInt2016,

  /**
   * This method parses a string argument and returns an integer of the specified
   * radix (the base in mathematical numeral systems). (ES2018)
   *
   * @param {string} string - The value to parse. If the string argument is not a
   *  string, then it is converted to a string (using the ToString abstract
   *  operation). Leading whitespace in the string argument is ignored.
   * @param {number} radix - An integer between 2 and 36 that represents the radix
   *  (the base in mathematical numeral systems) of the above mentioned string.
   *  Specify 10 for the decimal numeral system commonly used by humans. Always
   *  specify this parameter to eliminate reader confusion and to guarantee
   *  predictable behavior. Different implementations produce different results
   *  when a radix is not specified, usually defaulting the value to 10.
   * @throws {TypeError} If target is a Symbol or is not coercible.
   * @returns {number} An integer number parsed from the given string. If the first
   *  character cannot be converted to a number, NaN is returned.
   * @example
   * var $parseInt = require('parse-int-x').parseInt2018;
   *
   * // The following examples all return 15
   * $parseInt(' 0xF', 16);
   * $parseInt(' F', 16);
   * $parseInt('17', 8);
   * $parseInt(021, 8);
   * $parseInt('015', 10);   // $parseInt(015, 10); will return 15
   * $parseInt(15.99, 10);
   * $parseInt('15,123', 10);
   * $parseInt('FXX123', 16);
   * $parseInt('1111', 2);
   * $parseInt('15 * 3', 10);
   * $parseInt('15e2', 10);
   * $parseInt('15px', 10);
   * $parseInt('12', 13);
   *
   * //The following examples all return NaN:
   * $parseInt('Hello', 8); // Not a number at all
   * $parseInt('546', 2);   // Digits are not valid for binary representations
   */
  parseInt2018: $parseInt2018
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for Number.isFinite.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-number.isfinite|20.1.2.2 Number.isFinite ( number )}
 * @version 3.0.4
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-finite-x
 */



var numberIsNaN = __webpack_require__(24);
var INFINITY = __webpack_require__(50);

/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} number - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 * @example
 * var numIsFinite = require('is-finite-x');
 *
 * numIsFinite(Infinity);  // false
 * numIsFinite(NaN);       // false
 * numIsFinite(-Infinity); // false
 *
 * numIsFinite(0);         // true
 * numIsFinite(2e64);      // true
 *
 * numIsFinite('0');       // false, would've been true with
 *                         // global isFinite('0')
 * numIsFinite(null);      // false, would've been true with
 */
module.exports = function isFinite(number) {
  return typeof number === 'number' && numberIsNaN(number) === false && number !== INFINITY && number !== -INFINITY;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file The constant value Infinity.
 * @version 1.0.2
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module infinity-x
 */



/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 * @example
 * var INFINITY = require('infinity-x');
 *
 * INFINITY === Infinity; // true
 * -INFINITY === -Infinity; // true
 * INFINITY === -Infinity; // false
 */
module.exports = 1 / 0;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Shim for Math.sign.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-math.sign|20.2.2.29 Math.sign(x)}
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module math-sign-x
 */



var libToNumber = __webpack_require__(12);
var toNumber2016 = libToNumber.toNumber2016;
var toNumber2018 = libToNumber.toNumber2018;
var numberIsNaN = __webpack_require__(24);

var $sign2016 = function sign2016(x) {
  var n = toNumber2016(x);
  if (n === 0 || numberIsNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

var $sign2018 = function sign2018(x) {
  var n = toNumber2018(x);
  if (n === 0 || numberIsNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
};

module.exports = {
  /**
   * Reference to sign2018.
   */
  sign: $sign2018,

  /**
   * This method returns the sign of a number, indicating whether the number is positive,
   * negative or zero. (ES2016)
   *
   * @param {*} x - A number.
   * @returns {number} A number representing the sign of the given argument. If the argument
   * is a positive number, negative number, positive zero or negative zero, the function will
   * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
   * @example
   * var mathSign = require('math-sign-x').sign2016;
   *
   * mathSign(3);     //  1
   * mathSign(-3);    // -1
   * mathSign('-3');  // -1
   * mathSign(0);     //  0
   * mathSign(-0);    // -0
   * mathSign(NaN);   // NaN
   * mathSign('foo'); // NaN
   * mathSign();      // NaN
   */
  sign2016: $sign2016,

  /**
   * This method returns the sign of a number, indicating whether the number is positive,
   * negative or zero. (ES2018)
   *
   * @param {*} x - A number.
   * @returns {number} A number representing the sign of the given argument. If the argument
   * is a positive number, negative number, positive zero or negative zero, the function will
   * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
   * @example
   * var mathSign = require('math-sign-x').sign2018;
   *
   * mathSign(3);     //  1
   * mathSign(-3);    // -1
   * mathSign('-3');  // -1
   * mathSign(0);     //  0
   * mathSign(-0);    // -0
   * mathSign(NaN);   // NaN
   * mathSign('foo'); // NaN
   * mathSign();      // NaN
   */
  sign2018: $sign2018
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Shim for ToLength.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-tolength|7.1.15 ToLength ( argument )}
 * @version 3.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-length-x
 */



var libToInteger = __webpack_require__(19);
var toInteger2016 = libToInteger.toInteger2016;
var toInteger2018 = libToInteger.toInteger2018;
var MAX_SAFE_INTEGER = __webpack_require__(32);

var $toLength2016 = function toLength2016(value) {
  var len = toInteger2016(value);
  // includes converting -0 to +0
  if (len <= 0) {
    return 0;
  }

  if (len > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER;
  }

  return len;
};

var $toLength2018 = function toLength2018(value) {
  var len = toInteger2018(value);
  // includes converting -0 to +0
  if (len <= 0) {
    return 0;
  }

  if (len > MAX_SAFE_INTEGER) {
    return MAX_SAFE_INTEGER;
  }

  return len;
};

module.exports = {
  /**
   * Reference to toLength2018.
   */
  toLength: $toLength2018,

  /**
   * Converts `value` to an integer suitable for use as the length of an
   * array-like object. (ES2016)
   *
   * @param {*} value - The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   * var toLength = require('to-length-x').toLength2016;
   * toLength(3); // 3
   * toLength(Number.MIN_VALUE); // 0
   * toLength(Infinity); // Number.MAX_SAFE_INTEGER
   * toLength('3'); // 3
   */
  toLength2016: $toLength2016,

  /**
   * Converts `value` to an integer suitable for use as the length of an
   * array-like object. (ES2018)
   *
   * @param {*} value - The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   * var toLength = require('to-length-x').toLength2018;
   * toLength(3); // 3
   * toLength(Number.MIN_VALUE); // 0
   * toLength(Infinity); // Number.MAX_SAFE_INTEGER
   * toLength('3'); // 3
   */
  toLength2018: $toLength2018
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Check support of by-index access of string characters.
 * @version 1.1.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module has-boxed-string-x
 */



var boxedString = __webpack_require__(1).Object('a');

/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */
module.exports = boxedString[0] === 'a' && (0 in boxedString);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Is this value a JS regex?
 * @version 2.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-regexp-x
 */



var isObjectLike = __webpack_require__(55);

var toStringTag;
var regexClass;
var has;
var gOPD;
var regexExec;
var defineProperty;

if (__webpack_require__(29)) {
  has = __webpack_require__(15);
  gOPD = __webpack_require__(58);
  defineProperty = __webpack_require__(64);
  regexExec = RegExp.prototype.exec;
} else {
  toStringTag = __webpack_require__(18);
  regexClass = '[object RegExp]';
}

var tryRegexExecCall = function tryRegexExec(value, descriptor) {
  try {
    value.lastIndex = 0;
    regexExec.call(value);
    return true;
  } catch (e) {
    return false;
  } finally {
    defineProperty(value, 'lastIndex', descriptor);
  }
};

/**
 * This method tests if a value is a regex.
 *
 * @param {*} value - The value to test.
 * @returns {boolean} `true` if value is a regex; otherwise `false`.
 * @example
 * var isRegex = require('is-regexp-x');
 *
 * isRegex(undefined); // false
 * isRegex(null); // false
 * isRegex(false); // false
 * isRegex(true); // false
 * isRegex(42); // false
 * isRegex('foo'); // false
 * isRegex(function () {}); // false
 * isRegex([]); // false
 * isRegex({})); // false
 *
 * isRegex(/a/g); // true
 * isRegex(new RegExp('a', 'g')); // true
 */
module.exports = function isRegex(value) {
  if (isObjectLike(value) === false) {
    return false;
  }

  if (toStringTag) {
    return toStringTag(value) === regexClass;
  }

  var descriptor = gOPD(value, 'lastIndex');
  var hasLastIndexDataProperty = descriptor && has(descriptor, 'value');
  if (hasLastIndexDataProperty !== true) {
    return false;
  }

  return tryRegexExecCall(value, descriptor);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Determine if a value is object like.
 * @version 1.7.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-object-like-x
 */



var isFunction = __webpack_require__(20);
var isPrimitive = __webpack_require__(56);

/**
 * Checks if `value` is object-like. A value is object-like if it's not a
 * primitive and not a function.
 *
 * @param {*} value - The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 * var isObjectLike = require('is-object-like-x');
 *
 * isObjectLike({});
 * // => true
 *
 * isObjectLike([1, 2, 3]);
 * // => true
 *
 * isObjectLike(_.noop);
 * // => false
 *
 * isObjectLike(null);
 * // => false
 */
module.exports = function isObjectLike(value) {
  return isPrimitive(value) === false && isFunction(value, true) === false;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * is-primitive <https://github.com/jonschlinkert/is-primitive>
 *
 * Copyright (c) 2014-present, Jon Schlinkert.
 * Released under the MIT License.
 */



module.exports = function isPrimitive(val) {
  if (typeof val === 'object') {
    return val === null;
  }
  return typeof val !== 'function';
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for ToObject.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-toobject|7.1.13 ToObject ( argument )}
 * @version 1.5.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-object-x
 */



var requireObjectCoercible = __webpack_require__(2);
var castObject = __webpack_require__(1).Object;

/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!Object} The `value` converted to an object.
 * @example
 * var ToObject = require('to-object-x');
 *
 * ToObject(); // TypeError
 * ToObject(null); // TypeError
 * ToObject('abc'); // Object('abc')
 * ToObject(true); // Object(true)
 * ToObject(Symbol('foo')); // Object(Symbol('foo'))
 */
module.exports = function toObject(value) {
  return castObject(requireObjectCoercible(value));
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Sham for ES6 Object.getOwnPropertyDescriptor
 * @version 3.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module object-get-own-property-descriptor-x
 */



var toObject = __webpack_require__(59);
var toPropertyKey = __webpack_require__(16);
var isFalsey = __webpack_require__(21);
var attempt = __webpack_require__(6);

var nativeGOPD = typeof Object.getOwnPropertyDescriptor === 'function' && Object.getOwnPropertyDescriptor;
var getOPDFallback1;
var getOPDFallback2;

// ES5 15.2.3.3
// http://es5.github.com/#x15.2.3.3

var doesGOPDWork = function (object, prop) {
  object[toPropertyKey(prop)] = 0;
  var testResult = attempt(nativeGOPD, object, prop);
  return testResult.threw === false && testResult.value.value === 0;
};

// check whether getOwnPropertyDescriptor works if it's given. Otherwise, shim partially.
var $getOwnPropertyDescriptor;
if (nativeGOPD) {
  var doc = typeof document !== 'undefined' && document;
  var getOPDWorksOnDom = doc ? doesGOPDWork(doc.createElement('div'), 'sentinel') : true;
  if (getOPDWorksOnDom) {
    var res = attempt(nativeGOPD, Object('abc'), 1);
    var worksWithStr = res.threw === false && res.value && res.value.value === 'b';
    if (worksWithStr) {
      var getOPDWorksOnObject = doesGOPDWork({}, 'sentinel');
      if (getOPDWorksOnObject) {
        var worksWithPrim = attempt(nativeGOPD, 42, 'name').threw === false;
        var worksWithObjSym = __webpack_require__(7) && doesGOPDWork({}, Object(Symbol('')));
        // eslint-disable-next-line max-depth
        if (worksWithObjSym) {
          // eslint-disable-next-line max-depth
          if (worksWithPrim) {
            $getOwnPropertyDescriptor = nativeGOPD;
          } else {
            $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
              return nativeGOPD(toObject(object), property);
            };
          }
        } else if (worksWithPrim) {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(object, toPropertyKey(property));
          };
        } else {
          $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
            return nativeGOPD(toObject(object), toPropertyKey(property));
          };
        }
      } else {
        getOPDFallback1 = nativeGOPD;
      }
    } else {
      getOPDFallback2 = nativeGOPD;
    }
  }
}

if (isFalsey($getOwnPropertyDescriptor) || getOPDFallback1 || getOPDFallback2) {
  var owns = __webpack_require__(15);
  var isPrimitive = __webpack_require__(13);
  var isString = __webpack_require__(9);
  var isIndex = __webpack_require__(60);
  var propertyIsEnumerable = __webpack_require__(62);
  var prototypeOfObject = Object.prototype;

  // If JS engine supports accessors creating shortcuts.
  var lookupGetter;
  var lookupSetter;
  var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
  if (supportsAccessors) {
    // eslint-disable-next-line no-underscore-dangle
    var lg = prototypeOfObject.__lookupGetter__;
    // eslint-disable-next-line no-underscore-dangle
    var ls = prototypeOfObject.__lookupSetter__;
    lookupGetter = function (object, property) {
      return lg.call(object, property);
    };

    lookupSetter = function (object, property) {
      return ls.call(object, property);
    };
  }

  $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
    var obj = toObject(object);
    var propKey = toPropertyKey(property);

    var result;
    // make a valiant attempt to use the real getOwnPropertyDescriptor for I8's DOM elements.
    if (getOPDFallback1) {
      result = attempt.call(Object, getOPDFallback1, obj, propKey);
      if (result.threw === false) {
        return result.value;
      }
      // try the shim if the real one doesn't work
    }

    var isStringIndex = isString(obj) && isIndex(propKey, obj.length);
    if (getOPDFallback2 && isStringIndex === false) {
      result = attempt.call(Object, getOPDFallback2, obj, propKey);
      if (result.threw === false) {
        return result.value;
      }
      // try the shim if the real one doesn't work
    }

    var descriptor;
    // If object does not owns property return undefined immediately.
    if (isStringIndex === false && owns(obj, propKey) === false) {
      return descriptor;
    }

    // If object has a property then it's for sure `configurable`, and
    // probably `enumerable`. Detect enumerability though.
    descriptor = {
      configurable: isPrimitive(object) === false && isStringIndex === false,
      enumerable: propertyIsEnumerable(obj, propKey)
    };

    // If JS engine supports accessor properties then property may be a
    // getter or setter.
    if (supportsAccessors) {
      // Unfortunately `__lookupGetter__` will return a getter even
      // if object has own non getter property along with a same named
      // inherited getter. To avoid misbehavior we temporary remove
      // `__proto__` so that `__lookupGetter__` will return getter only
      // if it's owned by an object.
      // eslint-disable-next-line no-proto
      var prototype = obj.__proto__;
      var notPrototypeOfObject = obj !== prototypeOfObject;
      // avoid recursion problem, breaking in Opera Mini when
      // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
      // or any other Object.prototype accessor
      if (notPrototypeOfObject) {
        // eslint-disable-next-line no-proto
        obj.__proto__ = prototypeOfObject;
      }

      var getter = lookupGetter(obj, propKey);
      var setter = lookupSetter(obj, propKey);

      if (notPrototypeOfObject) {
        // Once we have getter and setter we can put values back.
        // eslint-disable-next-line no-proto
        obj.__proto__ = prototype;
      }

      if (getter || setter) {
        if (getter) {
          descriptor.get = getter;
        }

        if (setter) {
          descriptor.set = setter;
        }

        // If it was accessor property we're done and return here
        // in order to avoid adding `value` to the descriptor.
        return descriptor;
      }
    }

    // If we got this far we know that object has an own property that is
    // not an accessor so we set it as a value and return descriptor.
    if (isStringIndex) {
      descriptor.value = obj.charAt(propKey);
      descriptor.writable = false;
    } else {
      descriptor.value = obj[propKey];
      descriptor.writable = true;
    }

    return descriptor;
  };
}

/**
 * This method returns a property descriptor for an own property (that is,
 * one directly present on an object and not in the object's prototype chain)
 * of a given object.
 *
 * @param {*} object - The object in which to look for the property.
 * @param {*} property - The name of the property whose description is to be retrieved.
 * @returns {Object} A property descriptor of the given property if it exists on the object, undefined otherwise.
 * @example
 * var getOwnPropertyDescriptor = require('object-get-own-property-descriptor-x');
 * var obj = { bar: 42 };
 * var d = getOwnPropertyDescriptor(o, 'bar');
 * // d is {
 * //   configurable: true,
 * //   enumerable: true,
 * //   value: 42,
 * //   writable: true
 * // }
 */
module.exports = $getOwnPropertyDescriptor;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for ToObject.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-toobject|7.1.13 ToObject ( argument )}
 * @version 1.5.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-object-x
 */



var requireObjectCoercible = __webpack_require__(2);
var castObject = __webpack_require__(1).Object;

/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!Object} The `value` converted to an object.
 * @example
 * var ToObject = require('to-object-x');
 *
 * ToObject(); // TypeError
 * ToObject(null); // TypeError
 * ToObject('abc'); // Object('abc')
 * ToObject(true); // Object(true)
 * ToObject(Symbol('foo')); // Object(Symbol('foo'))
 */
module.exports = function toObject(value) {
  return castObject(requireObjectCoercible(value));
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Determine whether the passed value is a zero based index.
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-index-x
 */



var safeToString = __webpack_require__(34);
var toInteger = __webpack_require__(19).toInteger2018;
var toNumber = __webpack_require__(12).toNumber2018;
var mathClamp = __webpack_require__(61);
var MAX_SAFE_INTEGER = __webpack_require__(32);
var reIsUint = /^(?:0|[1-9]\d*)$/;
var rxTest = reIsUint.test;

/**
 * This method determines whether the passed value is a zero based index.
 * JavaScript arrays are zero-indexed: the first element of an array is at
 * index 0, and the last element is at the index equal to the value of the
 * array's length property minus 1.
 *
 * @param {number|string} value - The value to be tested for being a zero based index.
 * @param {number} [length=MAX_SAFE_INTEGER] - The length that sets the upper bound.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 * zero based index within bounds.
 * @example
 * var isIndex = require('is-index-x');
 *
 * isIndex(0);                    // true
 * isIndex(1);                    // true
 * isIndex('10');                 // true
 *
 * isIndex(-100000);              // false
 * isIndex(Math.pow(2, 53));      // false
 * isIndex(0.1);                  // false
 * isIndex(Math.PI);              // false
 * isIndex(NaN);                  // false
 * isIndex(Infinity);             // false
 * isIndex(-Infinity);            // false
 * isIndex(true);                 // false
 * isIndex(false);                // false
 * isIndex([1]);                  // false
 * isIndex(10, 10);               // false
 */
module.exports = function isIndex(value) {
  var string = safeToString(value);
  if (rxTest.call(reIsUint, string) === false) {
    return false;
  }

  var number = toNumber(string);
  if (arguments.length > 1) {
    return number < mathClamp(toInteger(arguments[1]), MAX_SAFE_INTEGER);
  }

  return number < MAX_SAFE_INTEGER;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Clamp a number to limits.
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module math-clamp-x
 */



var toNumber = __webpack_require__(12).toNumber2018;

/**
 * This method clamp a number to min and max limits inclusive.
 *
 * @param {number} value - The number to be clamped.
 * @param {number} [min=0] - The minimum number.
 * @param {number} max - The maximum number.
 * @throws {RangeError} If min > max.
 * @return {number} The clamped number.
 * @example
 * var mathClamp = require('math-clamp-x');
 */
module.exports = function clamp(value) {
  var number = toNumber(value);
  var argsLength = arguments.length;
  if (argsLength < 2) {
    return number;
  }

  var min = toNumber(arguments[1]);
  var max;
  if (argsLength < 3) {
    max = min;
    min = 0;
  } else {
    max = toNumber(arguments[2]);
  }

  if (min > max) {
    throw new RangeError('"min" must be less than "max"');
  }

  if (number < min) {
    return min;
  }

  if (number > max) {
    return max;
  }

  return number;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Indicates whether the specified property is enumerable.
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module property-is-enumerable-x
 */



var toPropertyKey = __webpack_require__(16);
var toObject = __webpack_require__(63);
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

/**
 * This method returns a Boolean indicating whether the specified property is
 * enumerable. Does not attempt to fix bugs in IE<9 or old Opera, otherwise it
 * does ES6ify the method.
 *
 * @param {!Object} object - The object on which to test the property.
 * @param {string|Symbol} property - The name of the property to test.
 * @throws {TypeError} If target is null or undefined.
 * @returns {boolean} A Boolean indicating whether the specified property is
 *  enumerable.
 * @example
 * var propertyIsEnumerable = require('property-is-enumerable-x');
 *
 * var o = {};
 * var a = [];
 * o.prop = 'is enumerable';
 * a[0] = 'is enumerable';
 *
 * propertyIsEnumerable(o, 'prop'); // true
 * propertyIsEnumerable(a, 0); // true
 */
module.exports = function propertyIsEnumerable(object, property) {
  return propIsEnumerable.call(toObject(object), toPropertyKey(property));
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for ToObject.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-toobject|7.1.13 ToObject ( argument )}
 * @version 1.5.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-object-x
 */



var requireObjectCoercible = __webpack_require__(2);
var castObject = __webpack_require__(1).Object;

/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!Object} The `value` converted to an object.
 * @example
 * var ToObject = require('to-object-x');
 *
 * ToObject(); // TypeError
 * ToObject(null); // TypeError
 * ToObject('abc'); // Object('abc')
 * ToObject(true); // Object(true)
 * ToObject(Symbol('foo')); // Object(Symbol('foo'))
 */
module.exports = function toObject(value) {
  return castObject(requireObjectCoercible(value));
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file Sham for Object.defineProperty
 * @version 4.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module object-define-property-x
 */



var attempt = __webpack_require__(6);
var isFalsey = __webpack_require__(21);
var toObject = __webpack_require__(65);
var toPropertyKey = __webpack_require__(16);
var has = __webpack_require__(15);
var isFunction = __webpack_require__(20);
var isUndefined = __webpack_require__(5);
var assertIsObject = __webpack_require__(66);
var nativeDefProp = typeof Object.defineProperty === 'function' && Object.defineProperty;
var definePropertyFallback;

var toPropertyDescriptor = function _toPropertyDescriptor(desc) {
  var object = toObject(desc);
  var descriptor = {};
  if (has(object, 'enumerable')) {
    descriptor.enumerable = Boolean(object.enumerable);
  }

  if (has(object, 'configurable')) {
    descriptor.configurable = Boolean(object.configurable);
  }

  if (has(object, 'value')) {
    descriptor.value = object.value;
  }

  if (has(object, 'writable')) {
    descriptor.writable = Boolean(object.writable);
  }

  if (has(object, 'get')) {
    var getter = object.get;
    if (isUndefined(getter) === false && isFunction(getter) === false) {
      throw new TypeError('getter must be a function');
    }

    descriptor.get = getter;
  }

  if (has(object, 'set')) {
    var setter = object.set;
    if (isUndefined(setter) === false && isFunction(setter) === false) {
      throw new TypeError('setter must be a function');
    }

    descriptor.set = setter;
  }

  if ((has(descriptor, 'get') || has(descriptor, 'set')) && (has(descriptor, 'value') || has(descriptor, 'writable'))) {
    throw new TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');
  }

  return descriptor;
};

// ES5 15.2.3.6
// http://es5.github.com/#x15.2.3.6

// Patch for WebKit and IE8 standard mode
// Designed by hax <hax.github.com>
// related issue: https://github.com/es-shims/es5-shim/issues#issue/5
// IE8 Reference:
//     http://msdn.microsoft.com/en-us/library/dd282900.aspx
//     http://msdn.microsoft.com/en-us/library/dd229916.aspx
// WebKit Bugs:
//     https://bugs.webkit.org/show_bug.cgi?id=36423

var $defineProperty;
// check whether defineProperty works if it's given. Otherwise, shim partially.
if (nativeDefProp) {
  var testWorksWith = function _testWorksWith(object) {
    var testResult = attempt(nativeDefProp, object, 'sentinel', {});
    return testResult.threw === false && testResult.value === object && 'sentinel' in object;
  };

  var doc = typeof document !== 'undefined' && document;
  if (testWorksWith({}) && (isFalsey(doc) || testWorksWith(doc.createElement('div')))) {
    $defineProperty = function defineProperty(object, property, descriptor) {
      return nativeDefProp(assertIsObject(object), toPropertyKey(property), toPropertyDescriptor(descriptor));
    };
  } else {
    definePropertyFallback = nativeDefProp;
  }
}

if (isFalsey(nativeDefProp) || definePropertyFallback) {
  var prototypeOfObject = Object.prototype;

  // If JS engine supports accessors creating shortcuts.
  var defineGetter;
  var defineSetter;
  var lookupGetter;
  var lookupSetter;
  var supportsAccessors = has(prototypeOfObject, '__defineGetter__');
  if (supportsAccessors) {
    /* eslint-disable no-underscore-dangle, no-restricted-properties */
    defineGetter = prototypeOfObject.__defineGetter__;
    defineSetter = prototypeOfObject.__defineSetter__;
    lookupGetter = prototypeOfObject.__lookupGetter__;
    lookupSetter = prototypeOfObject.__lookupSetter__;
    /* eslint-enable no-underscore-dangle, no-restricted-properties */
  }

  $defineProperty = function defineProperty(object, property, descriptor) {
    assertIsObject(object);
    var propKey = toPropertyKey(property);
    var propDesc = toPropertyDescriptor(descriptor);

    // make a valiant attempt to use the real defineProperty for IE8's DOM elements.
    if (definePropertyFallback) {
      var result = attempt.call(Object, definePropertyFallback, object, propKey, propDesc);
      if (result.threw === false) {
        return result.value;
      }
      // try the shim if the real one doesn't work
    }

    // If it's a data property.
    if (has(propDesc, 'value')) {
      // fail silently if 'writable', 'enumerable', or 'configurable' are requested but not supported
      if (supportsAccessors && (lookupGetter.call(object, propKey) || lookupSetter.call(object, propKey))) {
        // As accessors are supported only on engines implementing
        // `__proto__` we can safely override `__proto__` while defining
        // a property to make sure that we don't hit an inherited accessor.
        /* eslint-disable no-proto */
        var prototype = object.__proto__;
        object.__proto__ = prototypeOfObject;
        // Deleting a property anyway since getter / setter may be defined on object itself.
        delete object[propKey];
        object[propKey] = propDesc.value;
        // Setting original `__proto__` back now.
        object.__proto__ = prototype;
        /* eslint-enable no-proto */
      } else {
        object[propKey] = propDesc.value;
      }
    } else {
      if (supportsAccessors === false && (propDesc.get || propDesc.set)) {
        throw new TypeError('getters & setters can not be defined on this javascript engine');
      }

      // If we got that far then getters and setters can be defined !!
      if (propDesc.get) {
        defineGetter.call(object, propKey, propDesc.get);
      }

      if (propDesc.set) {
        defineSetter.call(object, propKey, propDesc.set);
      }
    }

    return object;
  };
}

/**
 * This method defines a new property directly on an object, or modifies an
 * existing property on an object, and returns the object.
 *
 * @param {Object} object - The object on which to define the property.
 * @param {string} property - The name of the property to be defined or modified.
 * @param {Object} descriptor - The descriptor for the property being defined or modified.
 * @returns {Object} The object that was passed to the function.
 * @example
 * var defineProperty = require('object-define-property-x');
 *
 * var o = {}; // Creates a new object
 *
 * defineProperty(o, 'a', {
 *   value: 37,
 *   writable: true
 * });
 */
module.exports = $defineProperty;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file ES6-compliant shim for ToObject.
 * @see {@link http://www.ecma-international.org/ecma-262/6.0/#sec-toobject|7.1.13 ToObject ( argument )}
 * @version 1.5.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module to-object-x
 */



var requireObjectCoercible = __webpack_require__(2);
var castObject = __webpack_require__(1).Object;

/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!Object} The `value` converted to an object.
 * @example
 * var ToObject = require('to-object-x');
 *
 * ToObject(); // TypeError
 * ToObject(null); // TypeError
 * ToObject('abc'); // Object('abc')
 * ToObject(true); // Object(true)
 * ToObject(Symbol('foo')); // Object(Symbol('foo'))
 */
module.exports = function toObject(value) {
  return castObject(requireObjectCoercible(value));
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @file If IsObject(value) is false, throw a TypeError exception.
 * @version 2.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module assert-is-object-x
 */



var safeToString = __webpack_require__(34);
var isPrimitive = __webpack_require__(13);

/**
   * Tests `value` to see if it is an object, throws a `TypeError` if it is
   * not. Otherwise returns the `value`.
   *
   * @param {*} value - The argument to be tested.
   * @throws {TypeError} Throws if `value` is not an object.
   * @returns {*} Returns `value` if it is an object.
   * @example
   * var assertIsObject = require('assert-is-object-x');
   * var primitive = true;
   * var mySymbol = Symbol('mySymbol');
   * var symObj = Object(mySymbol);
   * var object = {};
   * function fn () {}
   *
   * assertIsObject(primitive); // TypeError 'true is not an object'
   * assertIsObject(mySymbol); // TypeError 'Symbol(mySymbol) is not an object'
   * assertIsObject(symObj); // Returns symObj.
   * assertIsObject(object); // Returns object.
   * assertIsObject(fn); // Returns fn.
   */
module.exports = function assertIsObject(value) {
  if (isPrimitive(value)) {
    throw new TypeError(safeToString(value) + ' is not an object');
  }

  return value;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(35);

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(68);

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(35); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/to-object-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/to-object-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function requireObjectCoercible(value) {
  if (isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/to-object-x/dist/to-object-x.esm.js

var castObject = {}.constructor;
/**
 * The abstract operation ToObject converts argument to a value of
 * type Object.
 *
 * @param {*} value - The `value` to convert.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {!object} The `value` converted to an object.
 */

function toObject(value) {
  return castObject(requireObjectCoercible(value));
}


// EXTERNAL MODULE: ./node_modules/object-keys-x/index.js
var object_keys_x = __webpack_require__(36);
var object_keys_x_default = /*#__PURE__*/__webpack_require__.n(object_keys_x);

// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/has-boxed-string-x/dist/has-boxed-string-x.esm.js
var has_boxed_string_x_esm_string = 'a';
var boxedString = {}.constructor(has_boxed_string_x_esm_string);
/**
 * Check failure of by-index access of string characters (IE < 9)
 * and failure of `0 in boxedString` (Rhino).
 *
 * `true` if no failure; otherwise `false`.
 *
 * @type boolean
 */

var hasBoxed = boxedString[0] === has_boxed_string_x_esm_string && 0 in boxedString;
/* harmony default export */ var has_boxed_string_x_esm = (hasBoxed);


// EXTERNAL MODULE: ./node_modules/is-string/index.js
var is_string = __webpack_require__(9);
var is_string_default = /*#__PURE__*/__webpack_require__.n(is_string);

// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/split-if-boxed-bug-x/dist/split-if-boxed-bug-x.esm.js


var EMPTY_STRING = '';
var strSplit = EMPTY_STRING.split;
var isStringFn = has_boxed_string_x_esm === false && typeof strSplit === 'function' && is_string_default.a;
/**
 * This method tests if a value is a string with the boxed bug; splits to an
 * array for iteration; otherwise returns the original value.
 *
 * @param {*} [value] - The value to be tested.
 * @returns {*} An array or characters if value was a string with the boxed bug;
 *  otherwise the value.
 */

function splitIfBoxedBug(value) {
  return isStringFn && isStringFn(value) ? strSplit.call(value, EMPTY_STRING) : value;
}


// EXTERNAL MODULE: ./node_modules/is-symbol/index.js
var is_symbol = __webpack_require__(0);
var is_symbol_default = /*#__PURE__*/__webpack_require__.n(is_symbol);

// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_esm_this = undefined;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var hasSymbolSupport = attempt(function () {
  _newArrowCheck(this, has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_symbol_support_x_esm = (hasSymbolSupport.threw === false && hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/array-filter-x/node_modules/is-primitive/index.js
var is_primitive = __webpack_require__(3);
var is_primitive_default = /*#__PURE__*/__webpack_require__.n(is_primitive);

// EXTERNAL MODULE: ./node_modules/is-date-object/index.js
var is_date_object = __webpack_require__(10);
var is_date_object_default = /*#__PURE__*/__webpack_require__.n(is_date_object);

// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function isFalsey(value) {
  return !toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_to_string_tag_x_esm = (has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function is_nil_x_esm_isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (is_nil_x_esm_isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-string-x/dist/to-string-x.esm.js

var ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var castString = ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(ERROR_MESSAGE);
  }

  return castString(value);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function requireCoercibleToString(value) {
  return ToString(require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var stringES2018 = '';
var white_space_x_esm_length = list.length;

for (var white_space_x_esm_i = 0; white_space_x_esm_i < white_space_x_esm_length; white_space_x_esm_i += 1) {
  if (list[white_space_x_esm_i].es2016) {
    stringES2016 += list[white_space_x_esm_i].string;
  }

  if (list[white_space_x_esm_i].es2018) {
    stringES2018 += list[white_space_x_esm_i].string;
  }
}

var string2018 = stringES2018;
/* harmony default export */ var white_space_x_esm = (string2018);
var string2016 = stringES2016;


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var trim_left_x_esm_EMPTY_STRING = '';
var RegExpCtr = /none/.constructor;
var reLeft2016 = new RegExpCtr("^[".concat(string2016, "]+"));
var reLeft = new RegExpCtr("^[".concat(white_space_x_esm, "]+"));
var replace = trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2016(string) {
  return replace.call(requireCoercibleToString(string), reLeft2016, trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trimLeft2018(string) {
  return replace.call(requireCoercibleToString(string), reLeft, trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var trim_right_x_esm_EMPTY_STRING = '';
var trim_right_x_esm_RegExpCtr = /none/.constructor;
var reRight2016 = new trim_right_x_esm_RegExpCtr("[".concat(string2016, "]+$"));
var reRight2018 = new trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+$"));
var trim_right_x_esm_replace = trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trimRight2016(string) {
  return trim_right_x_esm_replace.call(requireCoercibleToString(string), reRight2016, trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trimRight2018(string) {
  return trim_right_x_esm_replace.call(requireCoercibleToString(string), reRight2018, trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim2016(string) {
  return trimLeft2016(trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim2018(string) {
  return trimLeft2018(trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var SPACE = ' ';
var normalize_space_x_esm_RegExpCtr = /none/.constructor;
var reNormalize2016 = new normalize_space_x_esm_RegExpCtr("[".concat(string2016, "]+"), 'g');
var reNormalize2018 = new normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm, "]+"), 'g');
var normalize_space_x_esm_replace = SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function normalizeSpace2016(string) {
  return normalize_space_x_esm_replace.call(trim2016(string), reNormalize2016, SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function normalizeSpace2018(string) {
  return normalize_space_x_esm_replace.call(trim2018(string), reNormalize2018, SPACE);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var replace_comments_x_esm_EMPTY_STRING = '';
var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_esm_replace = replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function replaceComments(string, replacement) {
  return replace_comments_x_esm_replace.call(requireCoercibleToString(string), STRIP_COMMENTS, arguments.length > 1 ? ToString(replacement) : replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/is-function-x/dist/is-function-x.esm.js
var is_function_x_esm_this = undefined;

function is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var is_function_x_esm_SPACE = ' ';
var fToString = Function.prototype.toString;
var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';
var asyncTag = '[object AsyncFunction]';
var ctrRx = /^class /;
var test = ctrRx.test;
var hasNativeClass = attempt(function () {
  is_function_x_esm_newArrowCheck(this, is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var testClassstring = function _testClassstring(value) {
  return test.call(ctrRx, normalizeSpace2018(replaceComments(fToString.call(value), is_function_x_esm_SPACE)));
};

var isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt(testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var tryFuncToString = function funcToString(value, allowClass) {
  if (hasNativeClass && allowClass === false && isES6ClassFn(value)) {
    return false;
  }

  return attempt.call(value, fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function isFunction(value, allowClass) {
  if (is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x_esm) {
    return tryFuncToString(value, toBoolean(allowClass));
  }

  if (hasNativeClass && isFalsey(allowClass) && isES6ClassFn(value)) {
    return false;
  }

  var strTag = toStringTag(value);
  return strTag === funcTag || strTag === genTag || strTag === asyncTag;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var ZERO = 0;
var ONE = 1;
/* eslint-disable-next-line no-void */

var UNDEFINED = void ZERO;
var NUMBER = 'number';
var STRING = 'string';
var DEFAULT = 'default';
/** @type {StringConstructor} */

var StringCtr = STRING.constructor;
/** @type {NumberConstructor} */

var NumberCtr = ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var symToPrimitive = has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var symValueOf = has_symbol_support_x_esm && Symbol.prototype.valueOf;
var toStringOrder = ['toString', 'valueOf'];
var toNumberOrder = ['valueOf', 'toString'];
var orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== NUMBER && hint !== STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === STRING ? toStringOrder : toNumberOrder;
  var method;
  var result;

  for (var i = ZERO; i < orderLength; i += ONE) {
    method = ordinary[methodNames[i]];

    if (isFunction(method)) {
      result = method.call(ordinary);

      if (is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (is_nil_x_esm_isNil(func) === false) {
    if (isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === StringCtr) {
      return STRING;
    }

    if (value === NumberCtr) {
      return NUMBER;
    }
  }

  return DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (has_symbol_support_x_esm) {
    if (symToPrimitive) {
      return getMethod(value, symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return symValueOf;
    }
  }

  return UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function toPrimitive(input, preferredType) {
  if (is_primitive_default()(input)) {
    return input;
  }

  var hint = getHint(preferredType, arguments.length > ONE);
  var exoticToPrim = to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? STRING : hint;
  return ordinaryToPrimitive(input, newHint === DEFAULT ? NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/nan-x/dist/nan-x.esm.js
/**
 * The constant NaN derived mathematically by 0 / 0.
 *
 * @type number
 */
/* harmony default export */ var nan_x_esm = (0 / 0);


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/parse-int-x/dist/parse-int-x.esm.js



var nativeParseInt = parseInt;
/**  @type {Function} */

var castNumber = 0 .constructor; // noinspection JSPotentiallyInvalidConstructorUsage

var _ref = '',
    charAt = _ref.charAt;
var hexRegex = /^[-+]?0[xX]/;
var parse_int_x_esm_test = hexRegex.test;
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2016).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parseInt2016(string, radix) {
  var str = trimLeft2016(ToString(string));
  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_test.call(hexRegex, str) ? 16 : 10));
}
/**
 * This method parses a string argument and returns an integer of the specified
 * radix (the base in mathematical numeral systems). (ES2018).
 *
 * @param {string} [string] - The value to parse. If the string argument is not a
 *  string, then it is converted to a string (using the ToString abstract
 *  operation). Leading whitespace in the string argument is ignored.
 * @param {number} [radix] - An integer between 2 and 36 that represents the radix
 *  (the base in mathematical numeral systems) of the above mentioned string.
 *  Specify 10 for the decimal numeral system commonly used by humans. Always
 *  specify this parameter to eliminate reader confusion and to guarantee
 *  predictable behavior. Different implementations produce different results
 *  when a radix is not specified, usually defaulting the value to 10.
 * @throws {TypeError} If target is a Symbol or is not coercible.
 * @returns {number} An integer number parsed from the given string. If the first
 *  character cannot be converted to a number, NaN is returned.
 */

function parseInt2018(string, radix) {
  var str = trimLeft2018(ToString(string));

  if (charAt.call(str, 0) === "\u180E") {
    return nan_x_esm;
  }

  return nativeParseInt(str, castNumber(radix) || (parse_int_x_esm_test.call(hexRegex, str) ? 16 : 10));
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-number-x/dist/to-number-x.esm.js





var binaryRadix = 2;
var octalRadix = 8;
var testCharsCount = 2;
var to_number_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a number';
/** @type {NumberConstructor} */

var to_number_x_esm_castNumber = testCharsCount.constructor;
var pStrSlice = to_number_x_esm_ERROR_MESSAGE.slice;
var binaryRegex = /^0b[01]+$/i;
var RegExpConstructor = binaryRegex.constructor; // Note that in IE 8, RegExp.prototype.test doesn't seem to exist: ie, "test" is
// an own property of regexes. wtf.

var to_number_x_esm_test = binaryRegex.test;

var isBinary = function _isBinary(value) {
  return to_number_x_esm_test.call(binaryRegex, value);
};

var octalRegex = /^0o[0-7]+$/i;

var isOctal = function _isOctal(value) {
  return to_number_x_esm_test.call(octalRegex, value);
};

var nonWSregex2016 = new RegExpConstructor("[\x85\u200B\uFFFE]", 'g');

var hasNonWS2016 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2016, value);
};

var nonWSregex2018 = new RegExpConstructor("[\x85\u180E\u200B\uFFFE]", 'g');

var hasNonWS2018 = function _hasNonWS(value) {
  return to_number_x_esm_test.call(nonWSregex2018, value);
};

var invalidHexLiteral = /^[-+]0x[0-9a-f]+$/i;

var isInvalidHexLiteral = function _isInvalidHexLiteral(value) {
  return to_number_x_esm_test.call(invalidHexLiteral, value);
};
/**
 * This method converts argument to a value of type Number. (ES2016).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */


function toNumber2016(argument) {
  var value = toPrimitive(argument, Number);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2016(parseInt2016(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2016(value) || isInvalidHexLiteral(value)) {
      return nan_x_esm;
    }

    var trimmed = trim2016(value);

    if (trimmed !== value) {
      return toNumber2016(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
}
/**
 * This method converts argument to a value of type Number. (ES2018).
 *
 * @param {*} [argument] - The argument to convert to a number.
 * @throws {TypeError} - If argument is a Symbol or not coercible.
 * @returns {*} The argument converted to a number.
 */

function toNumber2018(argument) {
  var value = toPrimitive(argument, to_number_x_esm_castNumber);

  if (is_symbol_default()(value)) {
    throw new TypeError(to_number_x_esm_ERROR_MESSAGE);
  }

  if (typeof value === 'string') {
    if (isBinary(value)) {
      return toNumber2018(parseInt2018(pStrSlice.call(value, testCharsCount), binaryRadix));
    }

    if (isOctal(value)) {
      return toNumber2018(parseInt2018(pStrSlice.call(value, testCharsCount), octalRadix));
    }

    if (hasNonWS2018(value) || isInvalidHexLiteral(value)) {
      return nan_x_esm;
    }

    var trimmed = trim2018(value);

    if (trimmed !== value) {
      return toNumber2018(trimmed);
    }
  }

  return to_number_x_esm_castNumber(value);
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/is-nan-x/dist/is-nan-x.esm.js
/**
 * This method determines whether the passed value is NaN and its type is
 * `Number`. It is a more robust version of the original, global isNaN().
 *
 * @param {*} [value] - The value to be tested for NaN.
 * @returns {boolean} `true` if the given value is NaN and its type is Number;
 *  otherwise, `false`.
 */
function is_nan_x_esm_isNaN(value) {
  /* eslint-disable-next-line no-self-compare */
  return value !== value;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/infinity-x/dist/infinity-x.esm.js
/**
 * The constant value Infinity derived mathematically by 1 / 0.
 *
 * @type number
 */
/* harmony default export */ var infinity_x_esm = (1 / 0);


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/is-finite-x/dist/is-finite-x.esm.js


/**
 * This method determines whether the passed value is a finite number.
 *
 * @param {*} [number] - The value to be tested for finiteness.
 * @returns {boolean} A Boolean indicating whether or not the given value is a finite number.
 */

function is_finite_x_esm_isFinite(number) {
  return typeof number === 'number' && is_nan_x_esm_isNaN(number) === false && number !== infinity_x_esm && number !== -infinity_x_esm;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/math-sign-x/dist/math-sign-x.esm.js


/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2016).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function sign2016(x) {
  var n = toNumber2016(x);

  if (n === 0 || is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}
/**
 * This method returns the sign of a number, indicating whether the number is positive,
 * negative or zero. (ES2018).
 *
 * @param {*} x - A number.
 * @returns {number} A number representing the sign of the given argument. If the argument
 * is a positive number, negative number, positive zero or negative zero, the function will
 * return 1, -1, 0 or -0 respectively. Otherwise, NaN is returned.
 */

function sign2018(x) {
  var n = toNumber2018(x);

  if (n === 0 || is_nan_x_esm_isNaN(n)) {
    return n;
  }

  return n > 0 ? 1 : -1;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-integer-x/dist/to-integer-x.esm.js




var abs = Math.abs,
    floor = Math.floor;
/**
 * Converts `value` to an integer. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toInteger2016(value) {
  var number = toNumber2016(value);

  if (is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return sign2016(number) * floor(abs(number));
}
/**
 * Converts `value` to an integer. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toInteger2018(value) {
  var number = toNumber2018(value);

  if (is_nan_x_esm_isNaN(number)) {
    return 0;
  }

  if (number === 0 || is_finite_x_esm_isFinite(number) === false) {
    return number;
  }

  return sign2018(number) * floor(abs(number));
}


// EXTERNAL MODULE: ./node_modules/array-filter-x/node_modules/max-safe-integer/index.js
var max_safe_integer = __webpack_require__(11);
var max_safe_integer_default = /*#__PURE__*/__webpack_require__.n(max_safe_integer);

// CONCATENATED MODULE: ./node_modules/array-filter-x/node_modules/to-length-x/dist/to-length-x.esm.js


/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2016).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toLength2016(value) {
  var len = toInteger2016(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > max_safe_integer_default.a) {
    return max_safe_integer_default.a;
  }

  return len;
}
/**
 * Converts `value` to an integer suitable for use as the length of an
 * array-like object. (ES2018).
 *
 * @param {*} value - The value to convert.
 * @returns {number} Returns the converted integer.
 */

function toLength2018(value) {
  var len = toInteger2018(value); // includes converting -0 to +0

  if (len <= 0) {
    return 0;
  }

  if (len > max_safe_integer_default.a) {
    return max_safe_integer_default.a;
  }

  return len;
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function is_falsey_x_esm_isFalsey(value) {
  return !to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var dist_has_symbol_support_x_esm_this = undefined;

function has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var has_symbol_support_x_esm_hasSymbolSupport = attempt_x_esm_attempt(function () {
  has_symbol_support_x_esm_newArrowCheck(this, dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var dist_has_symbol_support_x_esm = (has_symbol_support_x_esm_hasSymbolSupport.threw === false && has_symbol_support_x_esm_hasSymbolSupport.value === true);


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var dist_has_to_string_tag_x_esm = (dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// EXTERNAL MODULE: ./node_modules/assert-is-function-x/node_modules/is-primitive/index.js
var node_modules_is_primitive = __webpack_require__(17);
var node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function dist_is_nil_x_esm_isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (dist_is_nil_x_esm_isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/to-string-x/dist/to-string-x.esm.js

var to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var to_string_x_esm_castString = to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(to_string_x_esm_ERROR_MESSAGE);
  }

  return to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return to_string_x_esm_ToString(dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var white_space_x_esm_stringES2018 = '';
var dist_white_space_x_esm_length = white_space_x_esm_list.length;

for (var dist_white_space_x_esm_i = 0; dist_white_space_x_esm_i < dist_white_space_x_esm_length; dist_white_space_x_esm_i += 1) {
  if (white_space_x_esm_list[dist_white_space_x_esm_i].es2016) {
    white_space_x_esm_stringES2016 += white_space_x_esm_list[dist_white_space_x_esm_i].string;
  }

  if (white_space_x_esm_list[dist_white_space_x_esm_i].es2018) {
    white_space_x_esm_stringES2018 += white_space_x_esm_list[dist_white_space_x_esm_i].string;
  }
}

var white_space_x_esm_string2018 = white_space_x_esm_stringES2018;
/* harmony default export */ var dist_white_space_x_esm = (white_space_x_esm_string2018);
var white_space_x_esm_string2016 = white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var dist_trim_left_x_esm_EMPTY_STRING = '';
var trim_left_x_esm_RegExpCtr = /none/.constructor;
var trim_left_x_esm_reLeft2016 = new trim_left_x_esm_RegExpCtr("^[".concat(white_space_x_esm_string2016, "]+"));
var trim_left_x_esm_reLeft = new trim_left_x_esm_RegExpCtr("^[".concat(dist_white_space_x_esm, "]+"));
var trim_left_x_esm_replace = dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trim_left_x_esm_trimLeft2016(string) {
  return trim_left_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_left_x_esm_reLeft2016, dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function trim_left_x_esm_trimLeft2018(string) {
  return trim_left_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_left_x_esm_reLeft, dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var dist_trim_right_x_esm_EMPTY_STRING = '';
var dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var trim_right_x_esm_reRight2016 = new dist_trim_right_x_esm_RegExpCtr("[".concat(white_space_x_esm_string2016, "]+$"));
var trim_right_x_esm_reRight2018 = new dist_trim_right_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm, "]+$"));
var dist_trim_right_x_esm_replace = dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trim_right_x_esm_trimRight2016(string) {
  return dist_trim_right_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_right_x_esm_reRight2016, dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function trim_right_x_esm_trimRight2018(string) {
  return dist_trim_right_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), trim_right_x_esm_reRight2018, dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim_x_esm_trim2016(string) {
  return trim_left_x_esm_trimLeft2016(trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function trim_x_esm_trim2018(string) {
  return trim_left_x_esm_trimLeft2018(trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var normalize_space_x_esm_SPACE = ' ';
var dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var normalize_space_x_esm_reNormalize2016 = new dist_normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_esm_string2016, "]+"), 'g');
var normalize_space_x_esm_reNormalize2018 = new dist_normalize_space_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm, "]+"), 'g');
var dist_normalize_space_x_esm_replace = normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function normalize_space_x_esm_normalizeSpace2016(string) {
  return dist_normalize_space_x_esm_replace.call(trim_x_esm_trim2016(string), normalize_space_x_esm_reNormalize2016, normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function normalize_space_x_esm_normalizeSpace2018(string) {
  return dist_normalize_space_x_esm_replace.call(trim_x_esm_trim2018(string), normalize_space_x_esm_reNormalize2018, normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var dist_replace_comments_x_esm_EMPTY_STRING = '';
var replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var dist_replace_comments_x_esm_replace = dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function replace_comments_x_esm_replaceComments(string, replacement) {
  return dist_replace_comments_x_esm_replace.call(require_coercible_to_string_x_esm_requireCoercibleToString(string), replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? to_string_x_esm_ToString(replacement) : dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/is-function-x/dist/is-function-x.esm.js
var dist_is_function_x_esm_this = undefined;

function dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var dist_is_function_x_esm_SPACE = ' ';
var is_function_x_esm_fToString = Function.prototype.toString;
var is_function_x_esm_funcTag = '[object Function]';
var is_function_x_esm_genTag = '[object GeneratorFunction]';
var is_function_x_esm_asyncTag = '[object AsyncFunction]';
var is_function_x_esm_ctrRx = /^class /;
var is_function_x_esm_test = is_function_x_esm_ctrRx.test;
var is_function_x_esm_hasNativeClass = attempt_x_esm_attempt(function () {
  dist_is_function_x_esm_newArrowCheck(this, dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var is_function_x_esm_testClassstring = function _testClassstring(value) {
  return is_function_x_esm_test.call(is_function_x_esm_ctrRx, normalize_space_x_esm_normalizeSpace2018(replace_comments_x_esm_replaceComments(is_function_x_esm_fToString.call(value), dist_is_function_x_esm_SPACE)));
};

var is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt_x_esm_attempt(is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (is_function_x_esm_hasNativeClass && allowClass === false && is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_esm_attempt.call(value, is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function is_function_x_esm_isFunction(value, allowClass) {
  if (node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (dist_has_to_string_tag_x_esm) {
    return is_function_x_esm_tryFuncToString(value, to_boolean_x_esm_toBoolean(allowClass));
  }

  if (is_function_x_esm_hasNativeClass && is_falsey_x_esm_isFalsey(allowClass) && is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = to_string_tag_x_esm_toStringTag(value);
  return strTag === is_function_x_esm_funcTag || strTag === is_function_x_esm_genTag || strTag === is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/node_modules/to-string-symbols-supported-x/dist/to-string-symbols-supported-x.esm.js


/* eslint-disable-next-line compat/compat */

var pToString = dist_has_symbol_support_x_esm && Symbol.prototype.toString;
var isSymbolFn = typeof pToString === 'function' && is_symbol_default.a;
/** @type {Function} */

var to_string_symbols_supported_x_esm_castString = ''.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String,
 * however the specification states that if the argument is a Symbol then a
 * 'TypeError' is thrown. This version also allows Symbols be converted to
 * a string. Other uncoercible exotics will still throw though.
 *
 * @param {*} [value] - The value to convert to a string.
 * @returns {string} The converted value.
 */

function toStringSymbolsSupported(value) {
  return isSymbolFn && isSymbolFn(value) ? pToString.call(value) : to_string_symbols_supported_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/assert-is-function-x/dist/assert-is-function-x.esm.js



/**
 * Tests `callback` to see if it is a function, throws a `TypeError` if it is
 * not. Otherwise returns the `callback`.
 *
 * @param {*} callback - The argument to be tested.
 * @throws {TypeError} Throws if `callback` is not a function.
 * @returns {*} Returns `callback` if it is function.
 */

function assertIsFunction(callback) {
  if (is_function_x_esm_isFunction(callback) === false) {
    var msg = node_modules_is_primitive_default()(callback) ? toStringSymbolsSupported(callback) : '#<Object>';
    throw new TypeError("".concat(msg, " is not a function"));
  }

  return callback;
}


// CONCATENATED MODULE: ./node_modules/array-filter-x/dist/array-filter-x.esm.js
var array_filter_x_esm_this = undefined;

function array_filter_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }






/** @type {ArrayConstructor} */

var ArrayCtr = [].constructor;
/** @type {ObjectConstructor} */

var array_filter_x_esm_castObject = {}.constructor;
/** @type {BooleanConstructor} */

var castBoolean = true.constructor;
var nativFilter = typeof ArrayCtr.prototype.filter === 'function' && ArrayCtr.prototype.filter;
var isWorking;

if (nativFilter) {
  var spy = 0;
  var res = attempt.call([1, 2], nativFilter, function (item) {
    array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

    spy += item;
    return false;
  }.bind(undefined));
  isWorking = res.threw === false && res.value && res.value.length === 0 && spy === 3;

  if (isWorking) {
    spy = '';
    res = attempt.call(array_filter_x_esm_castObject('abc'), nativFilter, function (item, index) {
      array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

      spy += item;
      return index === 1;
    }.bind(undefined));
    isWorking = res.threw === false && res.value && res.value.length === 1 && res.value[0] === 'b' && spy === 'abc';
  }

  if (isWorking) {
    spy = 0;
    res = attempt.call(function getArgs() {
      /* eslint-disable-next-line prefer-rest-params */
      return arguments;
    }(1, 2, 3), nativFilter, function (item, index) {
      array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

      spy += item;
      return index === 2;
    }.bind(undefined));
    isWorking = res.threw === false && res.value && res.value.length === 1 && res.value[0] === 3 && spy === 6;
  }

  if (isWorking) {
    spy = 0;
    res = attempt.call({
      0: 1,
      1: 2,
      3: 3,
      4: 4,
      length: 4
    }, nativFilter, function (item) {
      array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

      spy += item;
      return false;
    }.bind(undefined));
    isWorking = res.threw === false && res.value && res.value.length === 0 && spy === 6;
  }

  if (isWorking) {
    var doc = typeof document !== 'undefined' && document;

    if (doc) {
      spy = null;
      var fragment = doc.createDocumentFragment();
      var div = doc.createElement('div');
      fragment.appendChild(div);
      res = attempt.call(fragment.childNodes, nativFilter, function (item) {
        array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

        spy = item;
        return item;
      }.bind(undefined));
      isWorking = res.threw === false && res.value && res.value.length === 1 && res.value[0] === div && spy === div;
    }
  }

  if (isWorking) {
    var isStrict = function returnIsStrict() {
      /* eslint-disable-next-line babel/no-invalid-this */
      return castBoolean(this) === false;
    }();

    if (isStrict) {
      spy = null;
      res = attempt.call([1], nativFilter, function () {
        array_filter_x_esm_newArrowCheck(this, array_filter_x_esm_this);

        /* eslint-disable-next-line babel/no-invalid-this */
        spy = typeof this === 'string';
      }.bind(undefined), 'x');
      isWorking = res.threw === false && res.value && res.value.length === 0 && spy === true;
    }
  }

  if (isWorking) {
    spy = {};
    var fn = ['return nativFilter.call("foo", function (_, __, context) {', 'if (castBoolean(context) === false || typeof context !== "object") {', 'spy.value = true;}});'].join('');
    /* eslint-disable-next-line no-new-func */

    res = attempt(Function('nativFilter', 'spy', 'castBoolean', fn), nativFilter, spy);
    isWorking = res.threw === false && res.value && res.value.length === 0 && spy.value !== true;
  }
}
/**
 * This method creates a new array with all elements that pass the test
 * implemented by the provided function.
 *
 * @param {Array} array - The array to iterate over.
 * @param {Function} callBack - Function is a predicate, to test each element.
 * @param {*} [thisArg] - Value to use as this when executing callback.
 * @throws {TypeError} If array is null or undefined.
 * @throws {TypeError} If callBack is not a function.
 * @returns {Array} A new array with the elements that pass the test.
 */


var $filter;

if (nativFilter) {
  $filter = function filter(array, callBack
  /* , thisArg */
  ) {
    var args = [callBack];

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      args[1] = arguments[2];
    }

    return nativFilter.apply(array, args);
  };
} else {
  $filter = function filter(array, callBack
  /* , thisArg */
  ) {
    var object = toObject(array); // If no callback function or if callback is not a callable function

    assertIsFunction(callBack);
    var iterable = splitIfBoxedBug(object);
    var length = toLength2018(iterable.length);
    var thisArg;

    if (arguments.length > 2) {
      /* eslint-disable-next-line prefer-rest-params,prefer-destructuring */
      thisArg = arguments[2];
    }

    var noThis = typeof thisArg === 'undefined';
    var result = [];

    for (var i = 0; i < length; i += 1) {
      if (i in iterable) {
        var item = iterable[i];

        if (noThis ? callBack(item, i, object) : callBack.call(thisArg, item, i, object)) {
          result[result.length] = item;
        }
      }
    }

    return result;
  };
}

var arrayFilter = $filter;
/* harmony default export */ var array_filter_x_esm = (arrayFilter);


// CONCATENATED MODULE: ./node_modules/get-own-property-symbols-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function dist_attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/get-own-property-symbols-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var has_symbol_support_x_dist_has_symbol_support_x_esm_this = undefined;

function dist_has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var dist_has_symbol_support_x_esm_hasSymbolSupport = dist_attempt_x_esm_attempt(function () {
  dist_has_symbol_support_x_esm_newArrowCheck(this, has_symbol_support_x_dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_symbol_support_x_dist_has_symbol_support_x_esm = (dist_has_symbol_support_x_esm_hasSymbolSupport.threw === false && dist_has_symbol_support_x_esm_hasSymbolSupport.value === true);


// CONCATENATED MODULE: ./node_modules/get-own-property-symbols-x/dist/get-own-property-symbols-x.esm.js



var nativeGOPS = {}.constructor.getOwnPropertySymbols;
var get_own_property_symbols_x_esm_isWorking;

if (has_symbol_support_x_dist_has_symbol_support_x_esm && nativeGOPS && typeof nativeGOPS === 'function') {
  /* eslint-disable-next-line compat/compat */
  var get_own_property_symbols_x_esm_symbol = Symbol('');
  var testObj = {
    a: 1
  };
  testObj[get_own_property_symbols_x_esm_symbol] = 2;
  var r = dist_attempt_x_esm_attempt(nativeGOPS, testObj);
  get_own_property_symbols_x_esm_isWorking = r.threw === false && r.value && r.value.length === 1 && r.value[0] === get_own_property_symbols_x_esm_symbol;
}
/**
 * This method creates an array of all symbol properties found directly upon a
 * given object.
 *
 * @param {object} obj - The object whose symbol properties are to be returned.
 * @throws {TypeError} If target is null or undefined.
 * @returns {Array} An array of all symbol properties found directly upon the
 *  given object.
 */


function getOwnPropertySymbols(obj) {
  var object = toObject(obj);
  return get_own_property_symbols_x_esm_isWorking ? nativeGOPS(object) : [];
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/attempt-x/dist/attempt-x.esm.js
/**
 * This method attempts to invoke the function, returning either the result or
 * the caught error object. Any additional arguments are provided to the
 * function when it's invoked.
 *
 * @param {Function} [fn] - The function to attempt.
 * @param {...*} [args] - The arguments to invoke the function with.
 * @returns {object} Returns an object of the result.
 */
function attempt_x_dist_attempt_x_esm_attempt(fn) {
  try {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return {
      threw: false,

      /* eslint-disable-next-line babel/no-invalid-this */
      value: fn.apply(this, args)
    };
  } catch (e) {
    return {
      threw: true,
      value: e
    };
  }
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/has-symbol-support-x/dist/has-symbol-support-x.esm.js
var node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this = undefined;

function has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }



var has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport = attempt_x_dist_attempt_x_esm_attempt(function () {
  has_symbol_support_x_dist_has_symbol_support_x_esm_newArrowCheck(this, node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm_this);

  /* eslint-disable-next-line compat/compat */
  return typeof Symbol === 'function' && is_symbol_default()(Symbol(''));
}.bind(undefined));
/**
 * Indicates if `Symbol`exists and creates the correct type.
 * `true`, if it exists and creates the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm = (has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.threw === false && has_symbol_support_x_dist_has_symbol_support_x_esm_hasSymbolSupport.value === true);


// EXTERNAL MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/is-primitive/index.js
var get_own_enumerable_property_symbols_x_node_modules_is_primitive = __webpack_require__(4);
var get_own_enumerable_property_symbols_x_node_modules_is_primitive_default = /*#__PURE__*/__webpack_require__.n(get_own_enumerable_property_symbols_x_node_modules_is_primitive);

// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/to-boolean-x/dist/to-boolean-x.esm.js
/**
 * The abstract operation ToBoolean converts argument to a value of type Boolean.
 *
 * @param {*} [value] - The value to be converted.
 * @returns {boolean} 'true' if value is truthy; otherwise 'false'.
 */
function dist_to_boolean_x_esm_toBoolean(value) {
  return !!value;
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/is-falsey-x/dist/is-falsey-x.esm.js

/**
 * This method tests if a given value is falsey.
 *
 * @param {*} [value] - The value to test.
 * @returns {boolean} `true` if the value is falsey: otherwise `false`.
 */

function dist_is_falsey_x_esm_isFalsey(value) {
  return !dist_to_boolean_x_esm_toBoolean(value);
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/to-string-tag-x/dist/to-string-tag-x.esm.js
var dist_to_string_tag_x_esm_nativeObjectToString = {}.toString;
/**
 * The `toStringTag` method returns "[object type]", where type is the
 * object type.
 *
 * @param {*} [value] - The object of which to get the object type string.
 * @returns {string} The object type string.
 */

function dist_to_string_tag_x_esm_toStringTag(value) {
  if (value === null) {
    return '[object Null]';
  }

  if (typeof value === 'undefined') {
    return '[object Undefined]';
  }

  return dist_to_string_tag_x_esm_nativeObjectToString.call(value);
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/has-to-string-tag-x/dist/has-to-string-tag-x.esm.js


/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

/* harmony default export */ var has_to_string_tag_x_dist_has_to_string_tag_x_esm = (node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm &&
/* eslint-disable-next-line compat/compat */
is_symbol_default()(Symbol.toStringTag));


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/is-nil-x/dist/is-nil-x.esm.js
/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @param {*} [value] - The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 */
function is_nil_x_dist_is_nil_x_esm_isNil(value) {
  /* eslint-disable-next-line lodash/prefer-is-nil */
  return value === null || typeof value === 'undefined';
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/require-object-coercible-x/dist/require-object-coercible-x.esm.js

/**
 * The abstract operation RequireObjectCoercible throws an error if argument
 * is a value that cannot be converted to an Object using ToObject.
 *
 * @param {*} [value] - The `value` to check.
 * @throws {TypeError} If `value` is a `null` or `undefined`.
 * @returns {string} The `value`.
 */

function require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value) {
  if (is_nil_x_dist_is_nil_x_esm_isNil(value)) {
    throw new TypeError("Cannot call method on ".concat(value));
  }

  return value;
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/to-string-x/dist/to-string-x.esm.js

var dist_to_string_x_esm_ERROR_MESSAGE = 'Cannot convert a Symbol value to a string';
var dist_to_string_x_esm_castString = dist_to_string_x_esm_ERROR_MESSAGE.constructor;
/**
 * The abstract operation ToString converts argument to a value of type String.
 *
 * @param {*} [value] - The value to convert to a string.
 * @throws {TypeError} If `value` is a Symbol.
 * @returns {string} The converted value.
 */

function dist_to_string_x_esm_ToString(value) {
  if (is_symbol_default()(value)) {
    throw new TypeError(dist_to_string_x_esm_ERROR_MESSAGE);
  }

  return dist_to_string_x_esm_castString(value);
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/require-coercible-to-string-x/dist/require-coercible-to-string-x.esm.js


/**
 * This method requires an argument is corecible then converts using ToString.
 *
 * @param {*} [value] - The value to converted to a string.
 * @throws {TypeError} If value is null or undefined.
 * @returns {string} The value as a string.
 */

function dist_require_coercible_to_string_x_esm_requireCoercibleToString(value) {
  return dist_to_string_x_esm_ToString(require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(value));
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/white-space-x/dist/white-space-x.esm.js
/**
 * A record of a white space character.
 *
 * @typedef {object} CharRecord
 * @property {number} code - The character code.
 * @property {string} description - A description of the character.
 * @property {boolean} es5 - Whether the spec lists this as a white space.
 * @property {boolean} es2015 - Whether the spec lists this as a white space.
 * @property {boolean} es2016 - Whether the spec lists this as a white space.
 * @property {boolean} es2017 - Whether the spec lists this as a white space.
 * @property {boolean} es2018 - Whether the spec lists this as a white space.
 * @property {string} string - The character string.
 */

/**
 * An array of the whitespace char codes, string, descriptions and language
 * presence in the specifications.
 *
 * @type Array.<CharRecord>
 */
var dist_white_space_x_esm_list = [{
  code: 0x0009,
  description: 'Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\t"
}, {
  code: 0x000a,
  description: 'Line Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\n"
}, {
  code: 0x000b,
  description: 'Vertical Tab',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\x0B"
}, {
  code: 0x000c,
  description: 'Form Feed',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\f"
}, {
  code: 0x000d,
  description: 'Carriage Return',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\r"
}, {
  code: 0x0020,
  description: 'Space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: " "
},
/*
{
  code: 0x0085,
  description: 'Next line',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u0085'
}
*/
{
  code: 0x00a0,
  description: 'No-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\xA0"
}, {
  code: 0x1680,
  description: 'Ogham space mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u1680"
}, {
  code: 0x180e,
  description: 'Mongolian vowel separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: false,
  es2018: false,
  string: "\u180E"
}, {
  code: 0x2000,
  description: 'En quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2000"
}, {
  code: 0x2001,
  description: 'Em quad',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2001"
}, {
  code: 0x2002,
  description: 'En space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2002"
}, {
  code: 0x2003,
  description: 'Em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2003"
}, {
  code: 0x2004,
  description: 'Three-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2004"
}, {
  code: 0x2005,
  description: 'Four-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2005"
}, {
  code: 0x2006,
  description: 'Six-per-em space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2006"
}, {
  code: 0x2007,
  description: 'Figure space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2007"
}, {
  code: 0x2008,
  description: 'Punctuation space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2008"
}, {
  code: 0x2009,
  description: 'Thin space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2009"
}, {
  code: 0x200a,
  description: 'Hair space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u200A"
},
/*
{
  code: 0x200b,
  description: 'Zero width space',
  es5: false,
  es2015: false,
  es2016: false,
  es2017: false,
  es2018: false,
  string: '\u200b'
},
*/
{
  code: 0x2028,
  description: 'Line separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2028"
}, {
  code: 0x2029,
  description: 'Paragraph separator',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u2029"
}, {
  code: 0x202f,
  description: 'Narrow no-break space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u202F"
}, {
  code: 0x205f,
  description: 'Medium mathematical space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u205F"
}, {
  code: 0x3000,
  description: 'Ideographic space',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\u3000"
}, {
  code: 0xfeff,
  description: 'Byte Order Mark',
  es5: true,
  es2015: true,
  es2016: true,
  es2017: true,
  es2018: true,
  string: "\uFEFF"
}];
/**
 * A string of the ES5 to ES2016 whitespace characters.
 *
 * @type string
 */

var dist_white_space_x_esm_stringES2016 = '';
/**
 * A string of the ES2017 to ES2018 whitespace characters.
 *
 * @type string
 */

var dist_white_space_x_esm_stringES2018 = '';
var white_space_x_dist_white_space_x_esm_length = dist_white_space_x_esm_list.length;

for (var white_space_x_dist_white_space_x_esm_i = 0; white_space_x_dist_white_space_x_esm_i < white_space_x_dist_white_space_x_esm_length; white_space_x_dist_white_space_x_esm_i += 1) {
  if (dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].es2016) {
    dist_white_space_x_esm_stringES2016 += dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].string;
  }

  if (dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].es2018) {
    dist_white_space_x_esm_stringES2018 += dist_white_space_x_esm_list[white_space_x_dist_white_space_x_esm_i].string;
  }
}

var dist_white_space_x_esm_string2018 = dist_white_space_x_esm_stringES2018;
/* harmony default export */ var white_space_x_dist_white_space_x_esm = (dist_white_space_x_esm_string2018);
var dist_white_space_x_esm_string2016 = dist_white_space_x_esm_stringES2016;


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/trim-left-x/dist/trim-left-x.esm.js


var trim_left_x_dist_trim_left_x_esm_EMPTY_STRING = '';
var dist_trim_left_x_esm_RegExpCtr = /none/.constructor;
var dist_trim_left_x_esm_reLeft2016 = new dist_trim_left_x_esm_RegExpCtr("^[".concat(dist_white_space_x_esm_string2016, "]+"));
var dist_trim_left_x_esm_reLeft = new dist_trim_left_x_esm_RegExpCtr("^[".concat(white_space_x_dist_white_space_x_esm, "]+"));
var dist_trim_left_x_esm_replace = trim_left_x_dist_trim_left_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the left end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function dist_trim_left_x_esm_trimLeft2016(string) {
  return dist_trim_left_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_left_x_esm_reLeft2016, trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the left end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the left end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The left trimmed string.
 */

function dist_trim_left_x_esm_trimLeft2018(string) {
  return dist_trim_left_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_left_x_esm_reLeft, trim_left_x_dist_trim_left_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/trim-right-x/dist/trim-right-x.esm.js


var trim_right_x_dist_trim_right_x_esm_EMPTY_STRING = '';
var trim_right_x_dist_trim_right_x_esm_RegExpCtr = /none/.constructor;
var dist_trim_right_x_esm_reRight2016 = new trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm_string2016, "]+$"));
var dist_trim_right_x_esm_reRight2018 = new trim_right_x_dist_trim_right_x_esm_RegExpCtr("[".concat(white_space_x_dist_white_space_x_esm, "]+$"));
var trim_right_x_dist_trim_right_x_esm_replace = trim_right_x_dist_trim_right_x_esm_EMPTY_STRING.replace;
/**
 * This method removes whitespace from the right end of a string. (ES2016).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function dist_trim_right_x_esm_trimRight2016(string) {
  return trim_right_x_dist_trim_right_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_right_x_esm_reRight2016, trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}
/**
 * This method removes whitespace from the right end of a string. (ES2018).
 *
 * @param {string} [string] - The string to trim the right end whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The right trimmed string.
 */

function dist_trim_right_x_esm_trimRight2018(string) {
  return trim_right_x_dist_trim_right_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_trim_right_x_esm_reRight2018, trim_right_x_dist_trim_right_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/trim-x/dist/trim-x.esm.js


/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2016).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function dist_trim_x_esm_trim2016(string) {
  return dist_trim_left_x_esm_trimLeft2016(dist_trim_right_x_esm_trimRight2016(string));
}
/**
 * This method removes whitespace from the left and right end of a string.
 * (ES2018).
 *
 * @param {string} [string] - The string to trim the whitespace from.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The trimmed string.
 */

function dist_trim_x_esm_trim2018(string) {
  return dist_trim_left_x_esm_trimLeft2018(dist_trim_right_x_esm_trimRight2018(string));
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/normalize-space-x/dist/normalize-space-x.esm.js


var dist_normalize_space_x_esm_SPACE = ' ';
var normalize_space_x_dist_normalize_space_x_esm_RegExpCtr = /none/.constructor;
var dist_normalize_space_x_esm_reNormalize2016 = new normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(dist_white_space_x_esm_string2016, "]+"), 'g');
var dist_normalize_space_x_esm_reNormalize2018 = new normalize_space_x_dist_normalize_space_x_esm_RegExpCtr("[".concat(white_space_x_dist_white_space_x_esm, "]+"), 'g');
var normalize_space_x_dist_normalize_space_x_esm_replace = dist_normalize_space_x_esm_SPACE.replace;
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2016).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @returns {string} The normalized string.
 */

function dist_normalize_space_x_esm_normalizeSpace2016(string) {
  return normalize_space_x_dist_normalize_space_x_esm_replace.call(dist_trim_x_esm_trim2016(string), dist_normalize_space_x_esm_reNormalize2016, dist_normalize_space_x_esm_SPACE);
}
/**
 * This method strips leading and trailing white-space from a string,
 * replaces sequences of whitespace characters by a single space,
 * and returns the resulting string. (ES2018).
 *
 * @param {string} [string] - The string to be normalized.
 * @throws {TypeError} If string is null or undefined or not coercible.
 */

function dist_normalize_space_x_esm_normalizeSpace2018(string) {
  return normalize_space_x_dist_normalize_space_x_esm_replace.call(dist_trim_x_esm_trim2018(string), dist_normalize_space_x_esm_reNormalize2018, dist_normalize_space_x_esm_SPACE);
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/replace-comments-x/dist/replace-comments-x.esm.js


var replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING = '';
var dist_replace_comments_x_esm_STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
var replace_comments_x_dist_replace_comments_x_esm_replace = replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING.replace;
/**
 * This method replaces comments in a string.
 *
 * @param {string} [string] - The string to be stripped.
 * @param {string} [replacement=''] - The string to be used as a replacement.
 * @throws {TypeError} If string is null or undefined or not coercible.
 * @throws {TypeError} If replacement is not coercible.
 * @returns {string} The new string with the comments replaced.
 */

function dist_replace_comments_x_esm_replaceComments(string, replacement) {
  return replace_comments_x_dist_replace_comments_x_esm_replace.call(dist_require_coercible_to_string_x_esm_requireCoercibleToString(string), dist_replace_comments_x_esm_STRIP_COMMENTS, arguments.length > 1 ? dist_to_string_x_esm_ToString(replacement) : replace_comments_x_dist_replace_comments_x_esm_EMPTY_STRING);
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/is-function-x/dist/is-function-x.esm.js
var is_function_x_dist_is_function_x_esm_this = undefined;

function is_function_x_dist_is_function_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }









var is_function_x_dist_is_function_x_esm_SPACE = ' ';
var dist_is_function_x_esm_fToString = Function.prototype.toString;
var dist_is_function_x_esm_funcTag = '[object Function]';
var dist_is_function_x_esm_genTag = '[object GeneratorFunction]';
var dist_is_function_x_esm_asyncTag = '[object AsyncFunction]';
var dist_is_function_x_esm_ctrRx = /^class /;
var dist_is_function_x_esm_test = dist_is_function_x_esm_ctrRx.test;
var dist_is_function_x_esm_hasNativeClass = attempt_x_dist_attempt_x_esm_attempt(function () {
  is_function_x_dist_is_function_x_esm_newArrowCheck(this, is_function_x_dist_is_function_x_esm_this);

  /* eslint-disable-next-line no-new-func */
  return Function('"use strict"; return class My {};')();
}.bind(undefined)).threw === false;

var dist_is_function_x_esm_testClassstring = function _testClassstring(value) {
  return dist_is_function_x_esm_test.call(dist_is_function_x_esm_ctrRx, dist_normalize_space_x_esm_normalizeSpace2018(dist_replace_comments_x_esm_replaceComments(dist_is_function_x_esm_fToString.call(value), is_function_x_dist_is_function_x_esm_SPACE)));
};

var dist_is_function_x_esm_isES6ClassFn = function isES6ClassFunc(value) {
  var result = attempt_x_dist_attempt_x_esm_attempt(dist_is_function_x_esm_testClassstring, value);
  return result.threw === false && result.value;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @private
 * @param {*} value - The value to check.
 * @param {boolean} allowClass - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


var dist_is_function_x_esm_tryFuncToString = function funcToString(value, allowClass) {
  if (dist_is_function_x_esm_hasNativeClass && allowClass === false && dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  return attempt_x_dist_attempt_x_esm_attempt.call(value, dist_is_function_x_esm_fToString).threw === false;
};
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @param {*} value - The value to check.
 * @param {boolean} [allowClass=false] - Whether to filter ES6 classes.
 * @returns {boolean} Returns `true` if `value` is correctly classified,
 * else `false`.
 */


function dist_is_function_x_esm_isFunction(value, allowClass) {
  if (get_own_enumerable_property_symbols_x_node_modules_is_primitive_default()(value)) {
    return false;
  }

  if (has_to_string_tag_x_dist_has_to_string_tag_x_esm) {
    return dist_is_function_x_esm_tryFuncToString(value, dist_to_boolean_x_esm_toBoolean(allowClass));
  }

  if (dist_is_function_x_esm_hasNativeClass && dist_is_falsey_x_esm_isFalsey(allowClass) && dist_is_function_x_esm_isES6ClassFn(value)) {
    return false;
  }

  var strTag = dist_to_string_tag_x_esm_toStringTag(value);
  return strTag === dist_is_function_x_esm_funcTag || strTag === dist_is_function_x_esm_genTag || strTag === dist_is_function_x_esm_asyncTag;
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/to-primitive-x/dist/to-primitive-x.esm.js







var to_primitive_x_esm_ZERO = 0;
var to_primitive_x_esm_ONE = 1;
/* eslint-disable-next-line no-void */

var to_primitive_x_esm_UNDEFINED = void to_primitive_x_esm_ZERO;
var to_primitive_x_esm_NUMBER = 'number';
var to_primitive_x_esm_STRING = 'string';
var to_primitive_x_esm_DEFAULT = 'default';
/** @type {StringConstructor} */

var to_primitive_x_esm_StringCtr = to_primitive_x_esm_STRING.constructor;
/** @type {NumberConstructor} */

var to_primitive_x_esm_NumberCtr = to_primitive_x_esm_ZERO.constructor;
/* eslint-disable-next-line compat/compat */

var to_primitive_x_esm_symToPrimitive = node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.toPrimitive;
/* eslint-disable-next-line compat/compat */

var to_primitive_x_esm_symValueOf = node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && Symbol.prototype.valueOf;
var to_primitive_x_esm_toStringOrder = ['toString', 'valueOf'];
var to_primitive_x_esm_toNumberOrder = ['valueOf', 'toString'];
var to_primitive_x_esm_orderLength = 2;
/**
 * @param {*} ordinary - The ordinary to convert.
 * @param {*} hint - The hint.
 * @returns {*} - The primitive.
 */

var to_primitive_x_esm_ordinaryToPrimitive = function _ordinaryToPrimitive(ordinary, hint) {
  require_object_coercible_x_dist_require_object_coercible_x_esm_requireObjectCoercible(ordinary);

  if (typeof hint !== 'string' || hint !== to_primitive_x_esm_NUMBER && hint !== to_primitive_x_esm_STRING) {
    throw new TypeError('hint must be "string" or "number"');
  }

  var methodNames = hint === to_primitive_x_esm_STRING ? to_primitive_x_esm_toStringOrder : to_primitive_x_esm_toNumberOrder;
  var method;
  var result;

  for (var i = to_primitive_x_esm_ZERO; i < to_primitive_x_esm_orderLength; i += to_primitive_x_esm_ONE) {
    method = ordinary[methodNames[i]];

    if (dist_is_function_x_esm_isFunction(method)) {
      result = method.call(ordinary);

      if (get_own_enumerable_property_symbols_x_node_modules_is_primitive_default()(result)) {
        return result;
      }
    }
  }

  throw new TypeError('No default value');
};
/**
 * @param {*} object - The object.
 * @param {*} property - The property.
 * @returns {undefined|Function} - The method.
 */


var to_primitive_x_esm_getMethod = function _getMethod(object, property) {
  var func = object[property];

  if (is_nil_x_dist_is_nil_x_esm_isNil(func) === false) {
    if (dist_is_function_x_esm_isFunction(func) === false) {
      throw new TypeError("".concat(func, " returned for property ").concat(property, " of object ").concat(object, " is not a function"));
    }

    return func;
  }

  return to_primitive_x_esm_UNDEFINED;
};
/**
 * Get the hint.
 *
 * @param {*} value - The value to compare.
 * @param {boolean} supplied - Was a value supplied.
 * @returns {string} - The hint string.
 */


var to_primitive_x_esm_getHint = function getHint(value, supplied) {
  if (supplied) {
    if (value === to_primitive_x_esm_StringCtr) {
      return to_primitive_x_esm_STRING;
    }

    if (value === to_primitive_x_esm_NumberCtr) {
      return to_primitive_x_esm_NUMBER;
    }
  }

  return to_primitive_x_esm_DEFAULT;
};
/**
 * Get the primitive from the exotic.
 *
 * @param {*} value - The exotic.
 * @returns {*} - The primitive.
 */


var dist_to_primitive_x_esm_getExoticToPrim = function getExoticToPrim(value) {
  if (node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm) {
    if (to_primitive_x_esm_symToPrimitive) {
      return to_primitive_x_esm_getMethod(value, to_primitive_x_esm_symToPrimitive);
    }

    if (is_symbol_default()(value)) {
      return to_primitive_x_esm_symValueOf;
    }
  }

  return to_primitive_x_esm_UNDEFINED;
};
/**
 * This method converts a JavaScript object to a primitive value.
 * Note: When toPrimitive is called with no hint, then it generally behaves as
 * if the hint were Number. However, objects may over-ride this behaviour by
 * defining a @@toPrimitive method. Of the objects defined in this specification
 * only Date objects (see 20.3.4.45) and Symbol objects (see 19.4.3.4) over-ride
 * the default ToPrimitive behaviour. Date objects treat no hint as if the hint
 * were String.
 *
 * @param {*} input - The input to convert.
 * @param {NumberConstructor|StringConstructor} [preferredType] - The preferred type (String or Number).
 * @throws {TypeError} If unable to convert input to a primitive.
 * @returns {string|number} The converted input as a primitive.
 * @see {http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive}
 */


function to_primitive_x_esm_toPrimitive(input, preferredType) {
  if (get_own_enumerable_property_symbols_x_node_modules_is_primitive_default()(input)) {
    return input;
  }

  var hint = to_primitive_x_esm_getHint(preferredType, arguments.length > to_primitive_x_esm_ONE);
  var exoticToPrim = dist_to_primitive_x_esm_getExoticToPrim(input);

  if (typeof exoticToPrim !== 'undefined') {
    var result = exoticToPrim.call(input, hint);

    if (get_own_enumerable_property_symbols_x_node_modules_is_primitive_default()(result)) {
      return result;
    }

    throw new TypeError('unable to convert exotic object to primitive');
  }

  var newHint = hint === to_primitive_x_esm_DEFAULT && (is_date_object_default()(input) || is_symbol_default()(input)) ? to_primitive_x_esm_STRING : hint;
  return to_primitive_x_esm_ordinaryToPrimitive(input, newHint === to_primitive_x_esm_DEFAULT ? to_primitive_x_esm_NUMBER : newHint);
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/to-property-key-x/dist/to-property-key-x.esm.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }




/**
 * This method Converts argument to a value that can be used as a property key.
 *
 * @param {*} argument - The argument to convert to a property key.
 * @throws {TypeError} If argument is not a symbol and is not coercible to a string.
 * @returns {string|Symbol} The converted argument.
 */

function toPropertyKey(argument) {
  var key = to_primitive_x_esm_toPrimitive(argument, String);
  return node_modules_has_symbol_support_x_dist_has_symbol_support_x_esm && _typeof(key) === 'symbol' ? key : dist_to_string_x_esm_ToString(key);
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/node_modules/property-is-enumerable-x/dist/property-is-enumerable-x.esm.js


var propIsEnumerable = {}.propertyIsEnumerable;
/**
 * This method returns a Boolean indicating whether the specified property is
 * enumerable. Does not attempt to fix bugs in IE<9 or old Opera, otherwise it
 * does ES6ify the method.
 *
 * @param {!object} object - The object on which to test the property.
 * @param {string|Symbol} property - The name of the property to test.
 * @throws {TypeError} If target is null or undefined.
 * @returns {boolean} A Boolean indicating whether the specified property is
 *  enumerable.
 */

function propertyIsEnumerable(object, property) {
  return propIsEnumerable.call(toObject(object), toPropertyKey(property));
}


// CONCATENATED MODULE: ./node_modules/get-own-enumerable-property-symbols-x/dist/get-own-enumerable-property-symbols-x.esm.js
function get_own_enumerable_property_symbols_x_esm_newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }





/**
 * This method returns only the enumerable own property symbols of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own property symbols.
 */

function getOwnEnumerablePropertySymbols(target) {
  var _this = this;

  var object = toObject(target);
  return array_filter_x_esm(getOwnPropertySymbols(object), function (symbol) {
    get_own_enumerable_property_symbols_x_esm_newArrowCheck(this, _this);

    return propertyIsEnumerable(object, symbol);
  }.bind(this));
}


// CONCATENATED MODULE: ./dist/get-own-enumerable-keys-x.esm.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getOwnNonEnumerableKeys; });



var concat = [].concat;
/**
 * This method returns only the enumerable own keys of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own keys.
 */

function getOwnNonEnumerableKeys(target) {
  var object = toObject(target);
  return concat.call(object_keys_x_default()(object), getOwnEnumerablePropertySymbols(object));
}



/***/ })
/******/ ]);
});
//# sourceMappingURL=get-own-enumerable-keys-x.js.map