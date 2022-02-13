const a = {
    prop: 0
}

//オブジェクトのpropプロパティの値をpropという変数に代入
let { prop } = a;

prop = 1;

console.log(a, prop); // a->{prop: 0} prop->1

function fn({ prop }) {
    prop = 1;
    console.log(a, prop); // a->{prop: 0} prop->1
}

fn(a);

const c = {
    prop1: {
        prop2: 0
    }
}

let { prop1 } = c;

prop1.prop2 = 1;

// prop1がオブジェクトのため、cのprop2の値も変更される
console.log(c, prop1); // c->{prop1: {prop2: 1}} prop1->{prop2: 1}
