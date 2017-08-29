/**
 * fromJS(val[, callback(key, value, path)])
 * fromJs有两个参数，其中回调函数可选，作用是将原始值类型转换为Immutable的集合
 * 如果不提供回调，默认的转换行为是：Array -> Lists, Object -> Maps 
 */

const Immutable = require('./lib/immutable.js');

let obj = { a: { b: [10, 20, 30] }, c: 40 };

let iObj = Immutable.fromJS(obj, function(key, value, path) {
	let isIdxed = Immutable.isIndexed(value);
	console.log(key, value, path, isIdxed);
	return isIdxed ? value.toList() : value.toOrderedMap();
});

/**
 * b Seq [ 10, 20, 30 ] [ 'a', 'b' ] true
 * a Seq { "b": List [ 10, 20, 30 ] } [ 'a' ] false
 * b Seq [ 10, 20, 30 ] [ 'a', 'b' ] true
 *   Seq { "a": OrderedMap { "b": List [ 10, 20, 30 ] }, "c": 40 } [] false
 * b Seq [ 10, 20, 30 ] [ 'a', 'b' ] true
 * a Seq { "b": List [ 10, 20, 30 ] } [ 'a' ] false
 * b Seq [ 10, 20, 30 ] [ 'a', 'b' ] true
 */

console.log(Immutable.isCollection(iObj));	// true
console.log(Immutable.isCollection(obj));	// false
