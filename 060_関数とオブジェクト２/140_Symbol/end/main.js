// ES6から導入されたシンボルとは、プロパティの重複を避けるために、必ず一意の値を返す関数
const s = Symbol('hello');
const s2 = Symbol('hello');

// 同じ文字列でも異なる値として扱われる
console.log(s === s2); // false

// symbolはプリミティブ型の一種
console.log(typeof s); // symbol

const str = new String('Tom');
console.log(str);

String.prototype[s] = function() {
       return 'hello ' + this;
}

const tom = 'Tom';
console.log(tom[s]());
