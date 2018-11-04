# is-obj-type
Good judgment of object type.

# install
```
$ npm install is-obj-type
```

# Example
```js
const is = require('is-obj-type');
console.log(is.num(2));

var some = function(){
    //...
}
var obj = new some();
var isSome = is("some");
console.log(isSome(obj));

class someCls{};
var someObj = new someCls();
var isSomeCls = is("someCls");
console.log(isSomeCls(someObj));

var isSomeOrCls = is.all("some","someCls");
console.log(isSomeOrCls(obj));
console.log(isSomeOrCls(someObj));
```
output
```
true // x5
```
# Usage
```js
const is = require('isType');
```
Standard object
```js
is.num(1); // => true
is.str(""); // => true
is.bool(true); // => true
is.arr([]); // => true
is.null(null); // => true
is.func(()=>{}); // => true
is.obj({}); // => true
is.undefined(undefined); // => true
is.symbol(Symbol("symbol")); // => true
is.global(window); // Browser
is.global(global); // Node
```
Plain object `pair object`
```js
is.plain(new function(){}) // => false
is.plain(Object.create(null)) // => false
is.plain({})// => true
```
Custom class
```js
var some = function(){};
var sObj = new some();
var isSome = is("some");
isSome(sObj);// => true

class somecls{};
var clsObj = new somecls();
var isSomecls = is("somecls");
isSomecls(clsObj);// => true
```
mulit condition
```js
var isSomeOrCls = is.all("some","somecls");
isSomeOrCls(sObj);// => true
isSomeOrCls(clsObj);// => true
```
# Advanced
Function Class overloading
```js
// ...
```

# About
> *npm(new release) need to pull dev-lib with cmd<br>
> `npm i --only=dev`

browserify
```
$ npm run browserify
```

test
```
$ npm run test
```
