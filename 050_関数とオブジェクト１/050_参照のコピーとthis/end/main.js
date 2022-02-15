window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
        a(); // Hello John

        const person = {
            name: 'Tim',
            hello: function() {
                console.log('Hello ' + this.name);
                a(); // Hello John
            }
        }
        // オブジェクトとして実行された場合はthisは呼び出し元オブジェクト(name: Tim)を参照する
        person.hello(); // Hello Tim
    }
}

// const ref = person.hello;
// ref();

// オブジェクトとして実行された場合はthisは呼び出し元オブジェクト(name: Tom)を参照する
person.hello(); // Hello Tom

// 関数として実行された場合はthisはグローバルオブジェクト(name = John)を参照する
function a() {
    console.log('Hello ' + this.name);
}
