const s = Symbol();
const obj = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3',
	[s]: 'value4'
}

Object.prototype.method = function() {}
Object.defineProperty(Object.prototype, 'method', {
	enumerable: false
});

// Object.defineProperty(obj, 'prop1', {
// 	enumerable: false
// });

// const d = Object.getOwnPropertyDescriptor(Object.prototype, 'method');
// const d = Object.getOwnPropertyDescriptor(Object.prototype, 'hasOwnProperty');
const e = Object.getOwnPropertyDescriptor(obj, s);
console.log(e)

// for...inは列挙可能プロパティに対して順不同で反復処理を実行する
// プロトタイプチェーンも列挙対象となる
// ただしsymbolで定義したプロパティはfor...inでの列挙対象にならない
for(let key in obj) {
	//prototypeを列挙対象から外したい場合は、以下のようにhasOwnPropertyがtrueのkeyだけを指定してあげれば良い
	if(obj.hasOwnProperty(key)) {
		console.log(key, obj[key]);
	}

	//symbolの値はenumerableがfalseじゃなくても参照されない
	console.log(key, obj[key]);
}
