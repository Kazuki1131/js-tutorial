//関数スコープ
function a() {
	let b = 0;
	console.log(b);
}

console.log(b); //関数内で宣言された変数は関数の外から参照できない

a(); //0

//ブロックスコープ
if (true) {
	let c = 1;

	const d = function () {
		console.log("d is called");
	};

	var e = 1;

	function f() {
		console.log("f is called");
	}
}

//letやconstはブロックスコープの外ではエラーになる
console.log(c); // error
d(); // error

//varや名前つき関数はブロックスコープの外から呼び出せてしまう
console.log(e); // 1
f(); // f is called
