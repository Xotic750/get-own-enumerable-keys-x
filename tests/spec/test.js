'use strict';

var getOwnEnumerableKeys;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  getOwnEnumerableKeys = require('../../index.js');
} else {
  getOwnEnumerableKeys = returnExports;
}

var hasSymbolSupport = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifSymbolsIt = hasSymbolSupport ? it : xit;

var testObj = {};
Object.defineProperty(testObj, '1', {
  value: 'first'
});

var definedNonEnumerable = Object.keys(testObj).length === 0;
var ifDefinesNonEnumerable = definedNonEnumerable ? it : xit;

describe('getOwnEnumerableKeys', function () {
  it('is a function', function () {
    expect(typeof getOwnEnumerableKeys).toBe('function');
  });

  it('should throw when target is null or undefined', function () {
    expect(function () {
      getOwnEnumerableKeys();
    }).toThrow();

    expect(function () {
      getOwnEnumerableKeys(void 0);
    }).toThrow();

    expect(function () {
      getOwnEnumerableKeys(null);
    }).toThrow();
  });

  it('should return enumerable own keys', function () {
    var objects = [
      1,
      true,
      'abc',
      [],
      { bar: 1, foo: 2 },
      /ab/,
      new Date(),
      function () {}
    ];

    var expected = objects.map(function (object) {
      return Object.keys(Object(object));
    });

    var actual = objects.map(getOwnEnumerableKeys);

    expect(actual).toEqual(expected);
  });

  ifDefinesNonEnumerable('should return enumerable own keys', function () {
    var objects = [
      1,
      true,
      'abc',
      [],
      Object.defineProperty({ bar: 1, foo: 2 }, 'x', {
        value: 'first'
      }),
      /ab/,
      new Date(),
      function () {}
    ];

    var expected = objects.map(function (object) {
      return Object.keys(Object(object));
    });

    var actual = objects.map(getOwnEnumerableKeys);

    expect(actual).toEqual(expected);
  });

  ifSymbolsIt('should return enumerable own keys and symbols', function () {
    var s1 = Symbol('first');
    var obj = Object.defineProperty({ bar: 1, foo: 2 }, s1, {
      enumerable: true,
      value: 'first'
    });

    var s2 = Symbol('second');
    Object.defineProperty(obj, s2, {
      enumerable: false,
      value: 'second'
    });

    var keys = Object.keys(obj);
    var syms = Object.getOwnPropertySymbols(obj).filter(function (sym) {
      // eslint-disable-next-line no-prototype-builtins
      return obj.propertyIsEnumerable(sym);
    });

    var result = keys.concat(syms);

    expect(getOwnEnumerableKeys(obj)).toEqual(result);
  });
});
