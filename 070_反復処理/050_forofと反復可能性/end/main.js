// for...ofとは、イテレーターを持つオブジェクトの反復操作を行う
// イテレーターとは、反復可能なオブジェクトのことである
// 代表的なイテレーター：String, Array, Map, Set, arguments, etc...
const arry = ['a', 'b', 'c'];

arry[4] = 'e';

Object.prototype.method = function() {}

Object.defineProperty(arry, 0, {
	enumerable: false
})

const d = Object.getOwnPropertyDescriptor(arry, 0);
console.log(d);

for(let v of arry) {
	console.log(v)
}
