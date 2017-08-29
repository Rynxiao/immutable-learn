/**
 * Map 继承自 Collection.keyed
 * 1.Immutable Map是无序的，如果需要有序Map 请使用OrderedMap
 * 2.Immutable Map的key是任意的，甚至可以是NaN
 * 3.Immutable Map的key值总是string
 */

const Immutable = require('./lib/immutable.js');

let obj = { 1: 'hello' };
console.log(Object.keys(obj));	// ['1']
console.log(obj['1']);			// hello
console.log(obj[1]);			// hello

const mapObj = Immutable.Map(obj);
console.log(mapObj.get("1"));	// hello
console.log(mapObj.get(1));		// undefined

// any key by set and get
let key1 = Immutable.List([1, 2, 3])
let key2 = NaN;
let key3 = 'hello';
let key4 = Symbol('flag');
let key5 = 1;

const anyKeyMap = Immutable.Map();
console.log(anyKeyMap.set(key1, 'hello1').get(key1));	// hello1
console.log(anyKeyMap.set(key2, 'hello2').get(key2));	// hello2
console.log(anyKeyMap.set(key3, 'hello3').get(key3));	// hello3
console.log(anyKeyMap.set(key4, 'hello4').get(key4));	// hello4
console.log(anyKeyMap.set(key5, 'hello5').get(key5));	// hello5

// don't initial with a obj like this
// { NaN: 'hello' }
// Map<V>(obj: {[key: string]: V}): Map<string, V>
let key = NaN;
const initMap = Immutable.Map({ key: 'hello' });
console.log(initMap.get(key));		// undefined

// update
// update([key,] callback)
const originMap = Immutable.Map({ 'key': 'value' });
const newMap1 = originMap.update('key', function(value) {
	return value + value;
});
const newMap2 = originMap.update(function(value) {
	return value;
});
const newMap3 = originMap.update('key1', 'one', function(value) {
	return value + value;
});
const newMap4 = originMap.update('key1', 'one', function(value) {
	return value;
});
console.log(newMap1.toJS());		// { key: 'valuevalue' }
console.log(newMap2.toJS());		// { key: 'value' }
console.log(newMap3.toJS());		// { key: 'value', key1: 'oneone' }
console.log(newMap4.toJS());		// { key: 'value' }

// merge
const one = Immutable.Map({ a: 10, b: 20, c: 30 });
const two = Immutable.Map({ a: 40, b: 60, c: 90, d: 100 });
const mergeMap1 = one.merge(two);
const mergeMap2 = two.merge(one);
console.log(mergeMap1.toJS());		// { a: 40, b: 60, c: 90, d: 100 }
console.log(mergeMap2.toJS());		// { a: 10, b: 20, c: 30, d: 100 } 

// mergeWith
const mergeWithMap = one.mergeWith(function(oldVal, newVal) {
	return oldVal / newVal;
}, two);
console.log(mergeWithMap.toJS());	// { a: 0.25, b: 0.3333333333333333, c: 0.3333333333333333, d: 100 }


// 常规操作
// setIn updateIn set get deteleIn 可以参考collection中定义的方法使用













