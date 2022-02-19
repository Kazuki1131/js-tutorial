// ジェネレーターとは、イテレーターを生成するための特殊な関数のこと
// functionの後に*をつけることで、ジェネレーターを定義できる
function* gen() {
	yield 1;
	yield 2;
	// {done: true, value: 3} と同義
	return 3;
}

// イテレーターを生成
const it = gen();
// イテレーターのnextメソッドを呼ぶことでイテレーターが作成できる
console.log(it.next()) // {value: 1, done: false}
console.log(it.next()) // {value: 2, done: false}
console.log(it.next()) // {value: 3, done: true}
console.log(it.next()) // {value: undefined, done: true}

function* genIterator(max = 10) {
	let i = 0;

	// イテレーター
	while(i < max) {
		yield i++;
	}
	// returnはなくても問題はない。ない場合は{done: true, value: undefined}が返る
	return;
}

const it = genIterator(10);

let a = it.next();
while(!a.done) {
  console.log(a.value);
  a = it.next();
}

const obj = {
	// オブジェクトのシンボルイテレータにジェネレーターを設定する場合は
	// 以下のように省略記法で記述できる
	*[Symbol.iterator](max = 10) {
		let i = 0;

		while(i < max) {
			yield i++;
		}
		return;
	}
}

for(let i of obj) {
	console.log(i) // 0 ~ 9まで表示される
}
