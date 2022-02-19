// ラッパーオブジェクトとはプリミティブ値を便利に操作できるようにしたプリミティブ値を内包したオブジェクト
// 下記は a = 'hello' と同等
const a = new String('hello');

// toUpperCaseは全て大文字にする
console.log(a.toUpperCase()); // HELLO

// 下記は b = 100 と同等
const b = new Number(100);
// 100を10の2乗として変換できる
console.log(b.toExponential); // 1e+2
