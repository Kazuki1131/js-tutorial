// 即時関数(IIDE)とは、関数定義と同時に一度だけ実行される関数。
function a(a) {
	console.log('called' + a);
}

let b = a(1);

//上記を即時関数で書き直した例
let b = (function(a) {
	console.log('called' + a);
})(1);

let c = (function() {

	console.log('called');

	let privateVal = 0;
	let publicVal = 10;

	function privateFn() {
		console.log('privateFn is called');
	}
	function publicFn() {
		console.log('publicFn is called: ' + privateVal++);
	}

	return {
		publicVal,
		publicFn
	};
})()

// privateValの値は変数cに代入された際の一度しか初期化されないため、以下のような出力になる。
c.publicFn(); // 0
c.publicFn(); // 1
c.publicFn(); // 2
c.publicFn(); // 3

console.log(c.publicVal); // 10
console.log(c.privateVal); // error
