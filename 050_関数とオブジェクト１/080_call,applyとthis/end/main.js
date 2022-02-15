function a(name, name1) {
    console.log('hello ' + name + ' ' + name1);
}

const tim = {name: 'Tim'};

// bindは使用時点では実行はしない
const b = a.bind(tim);

// 関数を呼び出した時点で実行される
b();

// call, applyはbindのようにthisや引数を固定するのは同じだが、使用と同時に関数を実行する点が違う

// callは関数の引数を固定できる。つまり、bindの即時実行バージョン。
a.call(tim, 'Tim', 'Bob');

// applyは引数を配列にし、関数に渡される際には配列が展開されて渡される
a.apply(tim, ['Tim', 'Bob']);


const arry = [1,2,3,4,5];

// const result = Math.max.apply(null, arry);
const result = Math.max(...arry);
console.log(result);
