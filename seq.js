/**
 * Seq 继承自 Collection
 * 1.Seq是不可变的，一旦被创建就不可修改，由一些函数引起的变化将会返回一个新的Seq
 * 2.Seq是懒计算的。只有当被调用时才会开始计算。
 */

const Immutable = require('./lib/immutable.js');

// 在未调用时并不会执行
// 不信可以将Seq换成List试试，会全部执行
const oddSquares = Immutable.Seq([1, 2, 3, 4, 5, 6, 7, 8]).filter(function(x) {
	console.log('filter', x);
	return x % 2 !== 0;
}).map(function(x) {
	console.log('map', x);
	return x * x;
});

// filter 1
// map 1
// 1

console.log(oddSquares.get(0));		// 调用发现，filter中只执行一次，map中也执行了一次

console.log(Immutable.Seq({ a: 1, b: 2, c: 3 }).flip());