const is = require('./index');

// ------
const test = {
    true(val,msg){
        console.assert(val,msg || "Assertion of some failed");
    },
    false(val,msg){
        console.assert(!val,msg || "Assertion of some failed");
    }
}
// is num
test.true(is.num(1));
test.true(is.num(1.3));
test.true(is.num(Number("1")));
test.true(is.num(0));
test.true(is.num(+[]));
test.false(is.num("1"));

// is array
test.true(is.arr([]));
test.true(is.arr([[],1]));
test.true(is.arr(Array()));
test.true(is.arr(Array(1)));
test.false(is.arr(0));

// is null
test.true(is.null(null));
test.false(is.null());
test.false(is.null(undefined));
test.false(is.null(Object(null)));

// is boolean
test.true(is.bool(true));
test.true(is.bool(false));
test.false(is.bool(0));
test.false(is.bool(""));
test.false(is.bool([]));

// is string
test.true(is.str(""));
test.true(is.str(new String()));
test.true(is.str("true"));
test.true(is.str([]+[]));
test.false(is.str(0));
test.false(is.str([]));

// is function
test.true(is.func(()=>{}));
test.true(is.func(new Function()));
test.true(is.func(function(){}));
test.false(is.func(0));
test.false(is.func([]));
test.false(is.func("true"));

// is symbol
test.true(is.symbol(Symbol()));
test.true(is.symbol(Symbol("sumbol")));
test.false(is.symbol(0));
test.false(is.symbol("true"));

// is object
test.true(is.obj({}));
test.true(is.obj(new Object()));
test.true(is.obj(Object.create(null)));
test.false(is.obj(0));
test.false(is.obj(null));
test.false(is.obj([]));
test.false(is.obj(undefined));

// is global
test.true(is.global(global));
test.false(is.global({}));
// test.true(is.global(window));

// is plain
test.true(is.plain({}));
test.true(is.plain(new Object()));
// test.true(is.plain(Object.create(null))); // 1 way case
test.false(is.plain(Object.create(null)));
test.false(is.plain(Object.create({})));
test.false(is.plain(0));
test.false(is.plain(null));
test.false(is.plain([]));
test.false(is.plain(new Array()));
test.false(is.plain(undefined));

// is
var some = function(){};
var sObj = new some();
var isSome = is("some");
test.true(isSome(sObj))
test.false(isSome(Object.create(null)));

class somecls{};
var clsObj = new somecls();
var isSomecls = is("somecls");
test.true(isSomecls(clsObj))
test.false(isSomecls(Object.create(null)));


console.log("test done.");
