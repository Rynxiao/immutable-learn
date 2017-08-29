/**
 * is(valA, valB)
 * 
 * 1.对于javascript中原始值的比较类似于 Object.is
 *   需要注意的是：NaN在Immutable.js中认为是与自身相等的；+0和-0在Immutable.js中认为相等
 * 2.对于Immutable中的集合类型，统一作为值比较。即当两个集合的值相等的时候即为相等
 * 3.对于原始值对象，如果提供了hashCode以及equals方法，并且返回值相等，也会认为他们是相等的
 */

const Immutable = require('./lib/immutable.js');

let a = 1;
let b = '1';
let c = 1;
let d = { a: 1 };
let e = { a: 1 };
let f = NaN;
let g = NaN;
let h = function() { console.log('h'); }
let i = function() { console.log('h'); }
let j = 0;
let k = -0;
let l = Immutable.Map({ a: 1 });
let m = Immutable.Map({ a: 1 });
let n = {
    a: 1, 
    hashCode: function() {
        return Immutable.hash('immutable');
    },
    equals: function() {
        return true;
    }
};
let o = {
    a: 1, 
    hashCode: function() {
        return Immutable.hash('immutable');
    },
    equals: function() {
        return true;
    }
};

console.log(Immutable.is(a, b));  // false
console.log(Immutable.is(a, c));  // true
console.log(Immutable.is(d, e));  // false
console.log(Immutable.is(f, g));  // true
console.log(Immutable.is(h, i));  // false
console.log(Immutable.is(j, k));  // true
console.log(Immutable.is(l, m));  // true
console.log(Immutable.is(n, o));  // true

console.log(Immutable.isValueObject(n));  // true
console.log(Immutable.isImmutable(n));    // false
console.log(Immutable.isCollection(n));   // false