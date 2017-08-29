/**
 * Range 区间选择器
 * Range([start, end, step])
 * 返回一个区间的List，若step有值，则在此区间上按照step来划分值
 * 默认值：start=1, end=infinity, step=1
 * if start === end returns []
 */

const Immutable = require('./lib/immutable.js');

console.log(Immutable.Range());				// Range [ 0...Infinity ]
console.log(Immutable.Range(10));			// Range [ 10...Infinity ]
console.log(Immutable.Range(10, 30, 5));	// Range [ 10...30 by 5 ]
console.log(Immutable.Range(10, 10));		// Range []

console.log(Immutable.isImmutable(Immutable.Range()));	// true