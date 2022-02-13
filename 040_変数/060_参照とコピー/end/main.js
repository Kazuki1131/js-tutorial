let a = 'hello';
let b = a;
b = 'bye';
console.log(a, b); // a->hello b->bye

let c = {
    prop: 'hello'
}
let d = c;
d.prop = 'bye';

//cの値も変わる！！
console.log(c, d); // c->{prop: 'bye'} d->{prop: 'bye'}

d = {};

// dに新しいオブジェクトを設定すれば、cに影響しない
console.log(c, d); // c->{prop: 'bye'} d->{}
