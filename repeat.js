/**
 * Repeat 值重复
 * Repeat(val[, times]);
 */

const Immutable = require('./lib/immutable.js');

console.log(Immutable.Repeat('hello'));			// Repeat [ hello Infinity times ]
console.log(Immutable.Repeat('hello', 4));		// Repeat [ hello 4 times ]	