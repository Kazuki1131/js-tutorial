// スプレッド演算子とは、反復可能や列挙可能オブジェクトの展開を行う演算子
// ただし、関数の仮引数で使用された場合は、実引数に渡された変数を配列にまとめる挙動に変わる(レストパラメーターという)
const arry1 = [1,2,3,4,5];
const arry2 = [0, ...arry1, 6];
arry2.push(6)
// arry2にpushで値を追加してもarry1には影響しない
console.log(arry1); //[1,2,3,4,5]
console.log(arry2); //[1,2,3,4,5,6]
console.log(arry1 === arry2); // false

function sum(...args) {
  let ret = 0;
  for(let v of args) {
    ret += v;
  }
  return ret;
}
const result = sum(1,2,3);
console.log(result);

const obj1 = {
	prop1: 'value1',
	prop2: 'value2',
	prop3: 'value3'
}

// TypeError: object is not iterable (反復可能オブジェクトではないというエラーが出る)
const arry3 = [ ...obj1 ];

// オブジェクトをイテレートするには、オブジェクトのprototypeのsymbol iteratorにイテレーター（ジェネレーター）を追加する
Object.prototype[Symbol.iterator] = function*() {
	for(let key in this) {
		yield [key, this[key]];
	}
}

// エラーは出ない
const arry3 = [ ...obj1 ];

console.log(arry3);

// オブジェクトリテラルでスプレッド演算子を使う場合は、symbol iteratorに追加する必要はない(追加するのは配列の時だけ)
const obj2 = {...obj1};

console.log(obj2);
