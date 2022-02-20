/**
 * 配列操作で使えるメソッドは開発者ツール→consoleで配列オブジェクトを入力して、
 * その中の__proto__を開くと使えるメソッドを確認できる
 */
const arry = [1,2,3,4,5];
const arry2 = [0, ...arry, 6,7,8];
// pushメソッドで配列の最後に要素を追加
arry.push(6)

// unshiftメソッドで配列の最初に要素を追加
const result = arry.shift(0)

// popメソッドで配列の最後の要素の値を返して、返した値を配列から削除する
const result = arry.pop()

// shiftメソッドで配列の最初の要素の値を返して、返した値を配列から削除する
const result = arry.shift()

// spliceメソッドで配列の切り取りと切り取った部分に値を代入する操作ができる
// 第一引数で指定したインデックスから、第二引数で指定した長さ分配列から削除して、その値を返す
// 第三引数以降を指定した場合は、指定した値を切り取られた部分に代入することができる
const result = arry.splice(0, 3, 1, 2)

// concatメソッドで配列の結合ができる
const arry2 = arry.concat([0, 3, 1, 2])

// ES6からはconcatを使わなくてもスプレッド演算子で同じことができる
const arry3 = [...arry, 6, 7, 8]
console.log(arry2, result);
