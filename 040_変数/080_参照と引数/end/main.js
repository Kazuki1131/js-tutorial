let a = 0;

function fn1(arg1) {
    arg1 = 1;
    console.log(a, arg1);
}

fn1(a); // a->0 arg1->1

let b = {
    prop: 0
}

function fn2(arg2) {
    arg2.prop = 1;
    console.log(b, arg2);
}

// bのプロパティも変更される
fn2(b); // b->{prop: 1} arg2->{prop: 1}

let c = {
    prop: 0
}

function fn3(arg3) {
    arg3 = {};
    console.log(c, arg3);
}

// arg3の参照先が別のオブジェクトになったため、cのプロパティは変更されない
fn3(c); // c->{prop: 0} arg2->{}
