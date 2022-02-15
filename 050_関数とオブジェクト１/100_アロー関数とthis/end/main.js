window.name = 'John';
// このアロー関数のレキシカルスコープはグローバルスコープで、thisはwindowオブジェクトになる
const a = () => console.log('Bye ' + this.name);

const person = {
    name: 'Tom',
    // ES6からオブジェクトの無名関数はhello:function(){}を省略してhello(){}のように記述できる
    hello() {
        console.log('Hello ' + this.name);

        // このアロー関数のレキシカルスコープはhelloメソッドのスコープで、thisはpersonオブジェクトになる
        const a = () => console.log('Bye ' + this.name);

        a();
    }
}
// アロー関数はオブジェクトのメソッドとして呼び出されても、
// thisが使えないため、グローバルオブジェクトを参照しにいく
person.hello(); // Hello Tom

function b() {
    // このアロー関数のレキシカルスコープはb関数のスコープで、thisはwindowオブジェクトになる
    const a = () => console.log('Bye ' + this.name);
    a();
}

b(); // Bye John
