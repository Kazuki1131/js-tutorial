function F(a, b) {
	this.a = a;
	this.b = b;
	// return {a:1}は下記と同じ意味になる。
	// const result = new Object();
	// result.a = 1;
	// return result;
	// このようにあたしいオブジェクトを生成するため、インスタンス instanceof F としてもfalseになる
	return { a: 1 };
}

F.prototype.c = function() {}

const instance = new F(1,2);

console.log(instance instanceof Object);
console.log(instance.__proto__ === F.prototype)


function fn(arg) {
    if(arg instanceof Array) {
        // argが配列だった場合はpush関数が使える
        arg.push('value');
    } else {
        // argがオブジェクトだった場合はpushは使えないため、以下のように値を追加する
        arg['key'] = 'value';
    }
    console.log(arg)
}

fn([])
