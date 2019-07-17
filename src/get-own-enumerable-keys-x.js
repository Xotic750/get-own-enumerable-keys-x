import toObject from 'to-object-x';
import objectKeys from 'object-keys-x';
import getOEPS from 'get-own-enumerable-property-symbols-x';

const {concat} = [];

/**
 * This method returns only the enumerable own keys of an object.
 *
 * @param {object} target - The target.
 * @throws {TypeError} - If target is null or undefined.
 * @returns {Array} The enumerable own keys.
 */
const getOwnNonEnumerableKeys = function getOwnNonEnumerableKeys(target) {
  const object = toObject(target);

  return concat.call(objectKeys(object), getOEPS(object));
};

export default getOwnNonEnumerableKeys;
