// getterやsetterはディスクリプターにオプションとして設定できる
// オプションのため、設定されない場合はundefinedとなる
function Person1(name, age) {
	this._name = name;
	this._age = age;
}

// インスタンス化を行わずに使用できるメソッドのことを静的メソッド(スタティックメソッド)という
// インスタンス化しないので、基本的にthisは使用しない
Person1.hello = function() {
	console.log('hello')
}
// インスタンス化せずにclassから直接呼び出せる
Person1.hello();

Object.defineProperty(Person1.prototype, 'name', {
	// nameプロパティが呼ばれたときに実行される
	// プロパティが呼ばれたときに何らかの処理を挟みたい場合に使うことが多い
	get: function() {
		console.log('hello')
		return this._name;
	},
	// nameプロパティに値が代入されるときに実行される
	// プロパティに値を代入する際に、他の値も更新したい場合などに使うことが多い
	set: function(val) {
		this._age = 20;
		this._name = val;
	}
});

const p1 = new Person1('Bob', 23);

p1.name = 'Tom'
console.log(p1.name) // hello Tom

// ES6からはdefinePropertyを使わずに、getterやsetterはclassに対して以下のように定義する
class Person2 {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	// getter
	get name() {
		return this._name;
	}

	// setter
	set name(val) {
		this._name = val;
	}

	// ES6からは静的メソッドは以下のように定義できる
	// staticはclass内で使用できる静的なメソッド
	static hello() {
		console.log('hello')
	}
}

const p2 = new Person2('Bob', 23);

Person2.hello();
