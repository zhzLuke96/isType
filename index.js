/**
 * isType
 * @author zhzluke96
 */

'use strict';
// toLowerCase is not a function:Uncaught TypeError
const lower = string => typeof string === "string" ? string.toLowerCase() : string;
const _type = obj => Object.prototype.toString.call(obj).slice(8).slice(0, -1);
const is = type => obj => {
    var T = _type(obj);
    // if Object.create(null) => obj.constructor is null
    // null object has no name attribute.
    if (T === "Object" && obj.constructor) return lower(obj.constructor.name) === lower(type);
    else return lower(T) === lower(type);
}


is.all = (...types) => obj => {
    for (let T of types)
        if (is(T)(obj)) return true
    return false;
}
// -----
// standard func

// Return `true` if the given `value` is an object created by the `Object` constructor.
is.plain = obj => {
    // base object && dom && global
    if (!obj || Object.prototype.toString.call(obj) !== "[object Object]") return false;
    // null or undefined
    if (!obj.prototype) return true;
    var Ctor = Object.prototype.hasOwnProperty.call(obj.prototype, "constructor") && obj.prototype.constructor;
    return typeof Ctor === "function" && Ctor.toString() === Object.hasOwnProperty.toString.call(Object);
}
is.num = is("number");
is.arr = is("array");
is.null = is("null");
is.bool = is("boolean");
is.str = is("string");
is.func = is("function");
is.obj = is("object");
is.undefined = is("undefined");
is.symbol = is("symbol");
is.global = is.all("window", "global");

module.exports = is;
