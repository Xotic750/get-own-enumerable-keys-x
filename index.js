/**
 * @file Like Reflect.ownKeys but gets only enumerable properties.
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module get-own-enumerable-keys-x
 */

'use strict';

var toObject = require('to-object-x');
var objectKeys = require('object-keys-x');
var getOEPS = require('get-own-enumerable-property-symbols-x');
var concat = Array.prototype.concat;

/**
 * This method returns only the enumerable own keys of an object.
 *
 * @param {Object} target - The target.
 * @throws {typeError} - If target is null or undefined.
 * @returns {Array} The enumerable own keys.
 * @example
 * var getOwnEnumerableKeys = require('get-own-enumerable-keys-x');
 *
 * var obj = { bar: 1, foo: 2 };
 * Object.defineProperty(obj, Symbol('first'), {
 *   enumerable: false
 *   value: 'first'
 * });
 *
 * var symbol = Symbol('second');
 * Object.defineProperty(obj, symbol, {
 *   enumerable: true
 *   value: 'second'
 * });
 *
 * getOwnEnumerableKeys(obj); // ['bar', 'foo', symbol]
 */
module.exports = function getOwnNonEnumerableKeys(target) {
  var object = toObject(target);
  return concat.call(objectKeys(object), getOEPS(object));
};
