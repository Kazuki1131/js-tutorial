window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

// bindは第一引数でthisのオブジェクトを固定できる
// つまり、参照するオブジェクトはperson内に限定される
const helloTom = person.hello.bind(person);

function fn(ref) {
    ref();
}

// コールバック関数としてオブジェクト内の関数を実行しても、bindによってpersonオブジェクト内のみ参照される
fn(helloTom); // Hello tom

function a(name) {
    console.log('hello ' + name);
}

// bindは第一引数でthisのオブジェクトを固定できる、第二引数で引数を固定できる
const b = a.bind(null, 'Tim');

// bindによって引数が固定されているため、Tomは引数として関数に渡されない
b('Tom'); // hello Tim
