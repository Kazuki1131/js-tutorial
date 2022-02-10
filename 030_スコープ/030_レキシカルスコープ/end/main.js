let a = 2;
function fn1() {
	let b = 1;
	function fn2() {
		let c = 3;
		console.log(a); // グローバルスコープの中で変数aを呼び出しているため、参照できる
		console.log(b); // 関数スコープの中で変数bを呼び出しているため、参照できる
	}
	fn2();
}
fn1();
