const arry = [1, 2, 3, 4, 5];

// reduceメソッドは、配列の要素を一つの要素にまとめることができる
// 第一引数にはコールバック関数を指定する
// accuの中に、最初のループでは配列の最初の要素が入り、2回目以降のループでは、returnした値が入る
// currの中に、最初のループでは配列の２番目の要素が入り、2回目以降のループでは、n+1番目の要素が入る
// reduceメソッドの第二引数を指定した場合は、ループごとにaccuに渡したい値を指定できる
const result = arry.reduce(function(accu, curr) {
	console.log(accu, curr);
	return accu + curr * 2;
}, 0);

console.log(result)
