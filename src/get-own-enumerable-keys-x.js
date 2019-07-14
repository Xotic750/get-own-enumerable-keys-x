/**
 * @file Like Reflect.ownKeys but gets only enumerable properties.
 * @version 1.2.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module get-own-enumerable-keys-x
 */

const toObject = require('to-object-x');
const objectKeys = require('object-keys-x');
const getOEPS = require('get-own-enumerable-property-symbols-x');

const {concat} = Array.prototype;

/**
 * This method returns only the enumerable own keys of an object.
 *
 * @param {object} target - The target.
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
  const object = toObject(target);

  return concat.call(objectKeys(object), getOEPS(object));
};
