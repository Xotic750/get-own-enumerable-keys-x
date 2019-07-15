import getOwnEnumerableKeys from '../src/get-own-enumerable-keys-x';

/* eslint-disable-next-line compat/compat */
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
    expect.assertions(1);
    expect(typeof getOwnEnumerableKeys).toBe('function');
  });

  it('should throw when target is null or undefined', function() {
    expect.assertions(3);
    expect(function() {
      getOwnEnumerableKeys();
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      /* eslint-disable-next-line no-void */
      getOwnEnumerableKeys(void 0);
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      getOwnEnumerableKeys(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return enumerable own keys', function() {
    expect.assertions(1);
    /* eslint-disable-next-line lodash/prefer-noop */
    const objects = [1, true, 'abc', [], {bar: 1, foo: 2}, /ab/, new Date(), function() {}];

    const expected = objects.map(function(object) {
      return Object.keys(Object(object));
    });

    const actual = objects.map(getOwnEnumerableKeys);

    expect(actual).toStrictEqual(expected);
  });

  ifDefinesNonEnumerable('should return enumerable own keys', function() {
    expect.assertions(1);
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
      /* eslint-disable-next-line lodash/prefer-noop */
      function() {},
    ];

    const expected = objects.map(function(object) {
      return Object.keys(Object(object));
    });

    const actual = objects.map(getOwnEnumerableKeys);

    expect(actual).toStrictEqual(expected);
  });

  ifSymbolsIt('should return enumerable own keys and symbols', function() {
    expect.assertions(1);
    /* eslint-disable-next-line compat/compat */
    const s1 = Symbol('first');
    const obj = Object.defineProperty({bar: 1, foo: 2}, s1, {
      enumerable: true,
      value: 'first',
    });

    /* eslint-disable-next-line compat/compat */
    const s2 = Symbol('second');
    Object.defineProperty(obj, s2, {
      enumerable: false,
      value: 'second',
    });

    const keys = Object.keys(obj);
    /* eslint-disable-next-line compat/compat */
    const syms = Object.getOwnPropertySymbols(obj).filter(function(sym) {
      /* eslint-disable-next-line no-prototype-builtins */
      return obj.propertyIsEnumerable(sym);
    });

    const result = keys.concat(syms);

    expect(getOwnEnumerableKeys(obj)).toStrictEqual(result);
  });
});
