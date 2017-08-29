/**
 * hash(val)
 * hash接受一个参数，这个值是任意的，返回一个31位的整数
 * 作用：当使用is()函数比较时，通过返回相同的hash值来判断两个值是否相等
 * 技巧：equals函数返回true, hashCode函数返回相同的hash值来设计两个值是否相等
 */

const Immutable = require('./lib/immutable.js');

let seed1 = 'seed';
let seed2 = { a: 1, b: 2 };
let seed3 = [1, 2, 3, 4];
let seed4 = [1, 2, 3];
let seed5 = Immutable.List([435, 235, 1]);

console.log(Immutable.hash(seed1));		// 3526257
console.log(Immutable.hash(seed1));		// 3526257
console.log(Immutable.hash(seed2));		// 1
console.log(Immutable.hash(seed3));		// 2
console.log(Immutable.hash(seed4));		// 3
console.log(Immutable.hash(seed5));		// -53036292