// 関数とは"実行可能"な"オブジェクト"である
function a() {
	console.log("hello");
}

// 関数はオブジェクトとして扱えるため、以下のようにプロパティを指定することができる
a.prop = 0;
a.method = function () {
	console.log("method");
};

// ()をつけると実行することができる。これが"実行可能"の意味
a(); // hello
a.method(); // method
console.log(a.prop); // 0
