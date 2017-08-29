/**
 * Stack 继承自 Collection.Indexed
 * 1.在添加和删除数据上有非常高的效率
 * 2.操作总是从栈顶开始，提供的push/pop/peek方法只是因为我们熟悉了这些API
 * 3.不建议使用reverse() 效率不高
 * 内部是通过单链表实现
 */

const Immutable = require('./lib/immutable.js');

// peek
// similar to first
const stack = Immutable.Stack([1, 2, 3, 4]);
console.log(stack.peek());			// 1
console.log(stack.first());			// 1

// has
console.log(stack.has(2));			// true

// includes
// similar to contains
console.log(stack.includes(3));		// true

// last
console.log(stack.last());

// 常规操作
// 具体更多操作查看官网 Collection 定义方法

