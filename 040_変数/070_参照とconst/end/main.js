const a = 'hello';
a = 'bye'; // error

const b = {
    prop: 'hello'
}
//constで宣言した場合はオブジェクトの再代入はできない
b = {} // error

//ただし、プロパティの変更はできる
b.prop = 'bye';
console.log(b); // b->{prop: 'bye'}
