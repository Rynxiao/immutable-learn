/**
 * Record 记录时光机
 * Record(defaultVal[, description])
 * 1.Record必须要有默认值，如果不传直接报错，如果传值为空对象，后续任何操作将会无效
 * 2.isRecord方法用来判断当前对象是否是Record的一个实例
 * 3.多次remove掉的记录会变为初始值，之后删除多次将会变得无效
 * 4.Record可以添加描述
 * 5.Record可以被继承，可以添加自己的方法赋予更多功能
 */

const Immutable = require('./lib/immutable.js');

const DefaultRecord = Immutable.Record({ a: 1, b: 2 });	
const RewriteRecord = new DefaultRecord({ b: 3 });

console.log(Immutable.Record.isRecord(DefaultRecord));		// false
console.log(Immutable.Record.isRecord(RewriteRecord));		// true

const ReRewriteRecord = new DefaultRecord({ b: 4 });

console.log(ReRewriteRecord.get('a'));					// 1
console.log(ReRewriteRecord.get('b'));					// 4

const removeRecord = ReRewriteRecord.remove('b');

console.log(removeRecord.get('b'));						// 2

const reRemoveRecord = removeRecord.remove('b');

console.log(reRemoveRecord.get('b'));					// 2

// getDescriptiveName()

const Person = Immutable.Record({ name: null }, 'Person');
const me = Person({ name: 'Ryn' });
console.log(me.toString());								// Person { name: "Ryn" }
console.log(Immutable.Record.getDescriptiveName(me));	// Person

// no-default

const NoDefaultRecord = Immutable.Record({});
const writeRecord = new NoDefaultRecord({ a: 1 });
console.log(writeRecord.get('a'));						// undefined

// extends

class ClassRecord extends Immutable.Record({ a: 1, b: 2 }) {
	getSum() {
		return this.a + this.b;
	}
}

const myClassRecord = new ClassRecord({ b: 3 });
console.log(myClassRecord.getSum());					// 4
