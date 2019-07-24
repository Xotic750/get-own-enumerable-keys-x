<a href="https://travis-ci.org/Xotic750/get-own-enumerable-keys-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/get-own-enumerable-keys-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/get-own-enumerable-keys-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/get-own-enumerable-keys-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/get-own-enumerable-keys-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/get-own-enumerable-keys-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/get-own-enumerable-keys-x"
  title="npm version">
<img src="https://badge.fury.io/js/get-own-enumerable-keys-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/get-own-enumerable-keys-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/get-own-enumerable-keys-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_get-own-enumerable-keys-x"></a>

## get-own-enumerable-keys-x

Like Reflect.ownKeys but gets only enumerable properties.

<a name="exp_module_get-own-enumerable-keys-x--module.exports"></a>

### `module.exports(target)` ⇒ <code>Array</code> ⏏

This method returns only the enumerable own keys of an object.

**Kind**: Exported function  
**Returns**: <code>Array</code> - The enumerable own keys.  
**Throws**:

- <code>typeError</code> - If target is null or undefined.

| Param  | Type                | Description |
| ------ | ------------------- | ----------- |
| target | <code>Object</code> | The target. |

**Example**

```js
import getOwnEnumerableKeys from 'get-own-enumerable-keys-x';

const obj = {bar: 1, foo: 2};
Object.defineProperty(obj, Symbol('first'), {
  enumerable: false,
  value: 'first',
});

const symbol = Symbol('second');
Object.defineProperty(obj, symbol, {
  enumerable: true,
  value: 'second',
});

console.log(getOwnEnumerableKeys(obj)); // ['bar', 'foo', symbol]
```
