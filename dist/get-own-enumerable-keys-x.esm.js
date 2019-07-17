import toObject from 'to-object-x';
import objectKeys from 'object-keys-x';
import getOEPS from 'get-own-enumerable-property-symbols-x';
var concat = [].concat;
/**
 * This method returns only the enumerable own keys of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own keys.
 */

var getOwnNonEnumerableKeys = function getOwnNonEnumerableKeys(target) {
  var object = toObject(target);
  return concat.call(objectKeys(object), getOEPS(object));
};

export default getOwnNonEnumerableKeys;

//# sourceMappingURL=get-own-enumerable-keys-x.esm.js.map