let getOwnEnumerableKeys;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  getOwnEnumerableKeys = require('../../index.js');
} else {
  getOwnEnumerableKeys = returnExports;
}

const hasSymbolSupport = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifSymbolsIt = hasSymbolSupport ? it : xit;

const testObj = {};
Object.defineProperty(testObj, '1', {
  value: 'first',
});

const definedNonEnumerable = Object.keys(testObj).length === 0;
const ifDefinesNonEnumerable = definedNonEnumerable ? it : xit;

describe('getOwnEnumerableKeys', function() {
  it('is a function', function() {
    expect(typeof getOwnEnumerableKeys).toBe('function');
  });

  it('should throw when target is null or undefined', function() {
    expect(function() {
      getOwnEnumerableKeys();
    }).toThrow();

    expect(function() {
      getOwnEnumerableKeys(void 0);
    }).toThrow();

    expect(function() {
      getOwnEnumerableKeys(null);
    }).toThrow();
  });

  it('should return enumerable own keys', function() {
    const objects = [1, true, 'abc', [], {bar: 1, foo: 2}, /ab/, new Date(), function() {}];

    const expected = objects.map(function(object) {
      return Object.keys(Object(object));
    });

    const actual = objects.map(getOwnEnumerableKeys);

    expect(actual).toStrictEqual(expected);
  });

  ifDefinesNonEnumerable('should return enumerable own keys', function() {
    const objects = [
      1,
      true,
      'abc',
      [],
      Object.defineProperty({bar: 1, foo: 2}, 'x', {
        value: 'first',
      }),
      /ab/,
      new Date(),
      function() {},
    ];

    const expected = objects.map(function(object) {
      return Object.keys(Object(object));
    });

    const actual = objects.map(getOwnEnumerableKeys);

    expect(actual).toStrictEqual(expected);
  });

  ifSymbolsIt('should return enumerable own keys and symbols', function() {
    const s1 = Symbol('first');
    const obj = Object.defineProperty({bar: 1, foo: 2}, s1, {
      enumerable: true,
      value: 'first',
    });

    const s2 = Symbol('second');
    Object.defineProperty(obj, s2, {
      enumerable: false,
      value: 'second',
    });

    const keys = Object.keys(obj);
    const syms = Object.getOwnPropertySymbols(obj).filter(function(sym) {
      // eslint-disable-next-line no-prototype-builtins
      return obj.propertyIsEnumerable(sym);
    });

    const result = keys.concat(syms);

    expect(getOwnEnumerableKeys(obj)).toStrictEqual(result);
  });
});
