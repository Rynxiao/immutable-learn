/**
 * Set 继承自 Collection.Set
 * 类似于List, 值唯一
 */

const Immutable = require('./lib/immutable.js');

const set = Immutable.Set([1, 2, 1, 4]);
console.log(set.toJS());		// [1, 2, 4]

// fromKeys 
const originObj = { a: 1, b: 2, c: 3, d: 4, a: 5 };
const mapIterator = Immutable.Map(originObj)[Symbol.iterator]();
const iterator2 = [ ['key', 'value'], ['key1', 'value2'], ['key', 'value3'] ];
console.log(Immutable.Set.fromKeys(mapIterator));	// Set { "a", "b", "c", "d" }
console.log(Immutable.Set.fromKeys(iterator2));		// Set { "key", "key1" }
console.log(Immutable.Set.fromKeys(originObj));		// Set { "a", "b", "c", "d" }

// 去除list中的相同值
const list = Immutable.List([1, 2, 3, 4, 5, 3, 2, 9, 0]);
const setList = Immutable.Set(list);
console.log(list);			// List [ 1, 2, 3, 4, 5, 3, 2, 9, 0 ]
console.log(setList);		// Set { 1, 2, 3, 4, 5, 9, 0 }	

// 交集
// intersect
const set1 = Immutable.Set(['a', 'b', 'c']);
const set2 = Immutable.Set(['a', 'c', 'd']);	
const intersected = Immutable.Set.intersect([set1, set2]);
console.log(intersected);	// Set { "a", "c" }

// 并集
// union
const unioned = Immutable.Set.union([set1, set2]);
console.log(unioned);		// Set { "a", "c", "d", "b" }

// add
const addSet = Immutable.Set([1, 2, 3, 4]);
const newSet = addSet.add(5);
console.log(newSet.toJS());		// [ 1, 2, 3, 4, 5 ]

// 常规操作
// 参看collection中定义出的方法
