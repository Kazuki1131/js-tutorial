window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

function fn(ref) {
    ref();
}

// コールバック関数としてオブジェクト内の関数を実行するとグローバルオブジェクトを参照する
fn(person.hello); // Hello John
