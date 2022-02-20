const arry = [1, 2, 3, 4, 5];

// forEachメソッドを使うことで、配列一つ一つに対して操作を行うことができる
// 引数にはコールバック関数を渡す
// 第一引数にループごとの要素、第二引数にループごとのindex、第三引数に操作している配列が渡ってくる
arry.forEach(function(v, i, arry) {
	console.log(v);
});

// mapメソッドを使うことで、配列の要素を元にした新しい配列を作成することができる
// 引数にはコールバック関数を渡す
// 第一引数にループごとの要素、第二引数にループごとのindex、第三引数に操作している配列が渡ってくる
const newArry = arry.map(function(v, i, arry) {
	return arry;
});

// console.log(arry, newArry);

// filterメソッドを使うと、returnで評価された式がtrueのものだけ返され、新しい配列を作成する
// 引数にはコールバック関数を渡す
// 第一引数にループごとの要素、第二引数にループごとのindex、第三引数に操作している配列が渡ってくる
const filterArry = arry.filter(function(v, i, arry) {
	return i >= 1;
});

console.log(filterArry)
