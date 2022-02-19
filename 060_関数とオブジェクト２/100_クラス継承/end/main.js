// クラス継承とは、他のクラスのプロパティとメソッドを継承すること
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name);
    }
}

// extends Person でクラス継承ができる。
// Japanese.prototype = Object.create(Person.prototype) と同等
class Japanese extends Person {
    constructor(name, age, gender) {
        // Personのconstructorを実行。Person.call($this, name, age) と同等
        super(name, age);
        this.gender = gender;
    }

    hello() {
        console.log('Konnichiwa ' + this.name);
    }

    // コンストラクタ関数の継承と同様にPersonにないメソッドを追加できる
    bye() {
        console.log('Sayonara ' + this.name);
    }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.bye()
