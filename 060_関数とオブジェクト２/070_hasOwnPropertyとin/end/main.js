function Person(name, age) {
	this.name = name;
	this.age = age;
}

Object.prototype.hello = function() {
	console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);

//自分自身のオブジェクトに引数で与えられたプロパティかメソッドが存在するか確認できる
const result = bob.hasOwnProperty('hello')
console.log(result) // true

// in はプロトタイプチェーンまで含めて指定された名前のメソッドやプロパティが存在するかを確認できる
console.log('hasOwnProperty' in bob); // ture
