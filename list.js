/**
 * List 继承自 Collection.Indexed
 * 1.List is immutable
 * 2.List继承了Deque,能够高效地从首部或者尾部添加或者删除数据
 * 3.List没有明显的'unset'(未被设置值)或者'undefined'(值设置为undefined)数据的概念。在List#forEach中可以体现
 * 4.collection常规操作
 */

const Immutable = require('./lib/immutable.js');

// 使用
// javascript 数组
const plainArray = [1, 2, 3, 4];
const listFormPlainArray = Immutable.List(plainArray);

// iterator
const listFromIterator = Immutable.List(plainArray[Symbol.iterator]());

console.log(listFormPlainArray.toJS());		// [1, 2, 3, 4]
console.log(listFromIterator.toJS());		// [1, 2, 3, 4]

// set and delete
const emptyList = Immutable.List();
const newList1 = emptyList.set(0, 0);
const newList2 = emptyList.set(1, 1);
const newList3 = emptyList.set(1, 'overwrite');
console.log(emptyList.toJS());				// []
console.log(newList1.toJS());				// [0]
console.log(newList2.toJS());				// [undefined, 1]
console.log(newList3.toJS());				// [undefined, 'overwrite']

const oList = Immutable.List([0, 1, 2]);
const addFormLast = oList.set(-1, -1);
console.log(addFormLast.toJS());			// [0, 1, -1]

const deleteList1 = oList.delete(0);
console.log(deleteList1.toJS());			// [1, 2]

const deleteList2 = oList.delete(-1);
console.log(deleteList2.toJS());			// [0, 1]

// unset & undefined
const originList = [1, 2, , 4];
const collectionList = Immutable.List(originList);

collectionList.forEach(function(v, i) {
	console.log(`${i} ${v}`);
	// 0 1
	// 1 2
	// 2 undefined
	// 3 4
});

originList.forEach(function(v, i) {
	console.log(`${i} ${v}`);
	// 0 1
	// 1 2
	// 3 4
});

// 常规操作
// clear push pop unshift shift update updateIn...


