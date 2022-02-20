'use strict';

/**
 * Reflectとは、JSエンジンの内部の汎用的な関数を呼び出すメソッドが格納されているオブジェクト
 * 内部メソッドを間接的に呼び出せる
 * Reflectを使用する目的
 * 1. 内部のメソッドを呼び出す関数の格納場所
 * 2. Proxyと合わせて使用するため
 */

class C {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
}

const obj1 = new C(1, 2);
// 上記は以下のように書き換えられる
// 演算子で表記していたのを関数表記にできる
// 関数表記でかけるメリットは、コールバック関数に直接記述できる点がある
// 演算子だと一度関数として式を囲む必要が出てくる
const obj2 = Reflect.construct(C, [1, 2]);
console.log(obj1, obj2);

console.log('c' in obj1);
// 上記は以下のように書き換えられる
console.log(Reflect.has(obj1, 'b'));

Object.defineProperty(obj1, 'c', {
  configurable: false
});

// Reflectではfalseが返る。
if (Reflect.defineProperty(obj1, 'c', {
  writable: true
})) {
  console.log('success');
} else {
  console.log('failed');
}

// try {
//   // Object.definePropertyではエラーがでる。
//   const result = Object.defineProperty(obj1, 'c', {
//     writable: true
//   });
//   console.log(result)
// } catch (e) {
//   console.error('Error: Object.defineProperty ' + e)
// }

const bob = {
  name: 'Bob',
  _hello: function () {
    console.log(`hello ${this.name}`);
  }
}

const tom = {
  name: 'Tom',
  _hello: function () {
    console.log(`hello ${this.name}`);
  },
  get hello() {
    console.log(this)
    return this._hello();
  },
}
// 以下はtom.hello;と同じ意味。
Reflect.get(tom, 'hello');

// hello Bobが出力される
// 第三引数にオブジェクトを渡すと、bindと一緒で渡されたオブジェクトをthisが参照するようになる
Reflect.get(tom, 'hello', bob);
