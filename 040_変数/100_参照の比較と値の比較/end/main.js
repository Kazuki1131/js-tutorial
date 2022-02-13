const a = {
    prop: 0
}

const b = {
    prop: 0
}

// 参照先のオブジェクトが違うため、falseになる
console.log(a == b); // false

// オブジェクトの中のプロパティのプリミティブな値を比較する場合はtrueになり得る
console.log(a.prop === b.prop); // true

const c = a;

// 参照先のオブジェクトが一緒のため、trueになる
console.log(a === c); // true
