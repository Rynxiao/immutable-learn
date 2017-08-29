const Immutable = require('./lib/immutable.js');

/**
 * update()
 */

let arr = [1, 2, 3];

function mapAdd(value) {
	return value + 1;
}

function filterEven(value) {
	return value % 2 === 0;
}

function sum(collection) {
	return collection.reduce(function(sum, x) {
		return sum + x;
	}, 0);
} 

let nSum = Immutable.Seq(arr).map(mapAdd).filter(filterEven).update(sum);

console.log(arr);	// [1, 2, 3]
console.log(nSum);	// 6

/**
 * convert to javascript types
 */

let valArr = Immutable.List([1, 2, 3]);
let valMap = Immutable.Map({ a: 1, b: 2, c: 3 });

// toJS()
console.log(valArr.toJS());		// [1, 2, 3]
console.log(valMap.toJS());		// { a: 1, b: 2, c: 3 }

// toJSON()	
console.log(valArr.toJSON());	// [1, 2, 3]
console.log(valMap.toJSON());	// { a: 1, b: 2, c: 3 }

// toArray()
console.log(valArr.toArray());	// [1, 2, 3]
console.log(valMap.toArray());	// [1, 2, 3]

// toObject()
console.log(valArr.toObject());	// { '0': 1, '1': 2, '2': 3 }
console.log(valMap.toObject());	// { a: 1, b: 2, c: 3 }

/**
 * convert (collection) to collection
 */
let collectionObj = Immutable.List([1, 3, 2]);
let collectionMap = Immutable.Map({ a: 1, c: 3, b: 2 })

console.log(collectionObj.toMap());				// Map { 0: 1, 1: 3, 2: 2 }
console.log(collectionObj.toOrderedMap());		// OrderedMap { 0: 1, 1: 3, 2: 2 }
console.log(collectionMap.toOrderedMap());		// OrderedMap { "a": 1, "c": 3, "b": 2 }
console.log(collectionMap.toSeq());				// Seq { "a": 1, "c": 3, "b": 2 }
console.log(collectionObj.toSeq());				// Seq [1, 3, 2]





