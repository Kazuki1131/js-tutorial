// ES6からコンストラクタ関数をクラス表記で書けるようになった
// このようにすでにあるものを簡単に書けるようにしたものをシンタックスシュガーという
class Person {
    //function Person(name, age) { this.name = name; this.age = age; } と同等
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Person.prototype.hello = function(){ console.log('hello' + this.name )} と同等
    hello() {
        console.log('hello ' + this.name);
    }
}

const bob = new Person('Bob', 23);
console.log(bob);
