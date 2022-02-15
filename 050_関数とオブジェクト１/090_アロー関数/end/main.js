function a(name) {
    return 'hello ' + name;
}

// アロー関数は引数が1つだけの場合は()を省略できる。
// 処理が1行だけの場合は{}とreturnも省略できる。
const b = name => 'hello ' + name;

// 引数が2つ以上の場合は()は省略できない
const c = (name1, name2) => 'hello ' + name1 + ' ' + name2;

// 引数がない場合も()は省略できない
const d = () => 'hello'

console.log(b('Tom'))
console.log(c('Tom', 'Bob'))
console.log(d())

// アロー関数と無名関数の挙動の違い
// 無名関数はthis, arguments, new, prototypeが使えるが、アロー関数はこれらが使えない
