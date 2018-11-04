# isType
Correct judgment of object type.

# Usage
```js
const is = require('isType');
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

# About
