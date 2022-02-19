class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    hello() {
        console.log('hello ' + this.name);
    }
}

class Japanese extends Person {
    constructor(name, age, gender) {
        // superはコンストラクタの一番最初に書かなければエラーになる
        super(name, age);
        this.gender = gender;
    }

    hello() {
        console.log('Konnichiwa ' + this.name);
        // super.hello()とすることで親(Person)のhelloメソッドを呼び出す
        // superで親メソッドを呼び出す場合はメソッドの最初で呼び出す必要はない
        super.hello();
    }

    bye() {
        console.log('Sayonara ' + this.name);
    }
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);
taro.hello();



const american = {
    hello() {
        console.log('hello ' + this.name);
    }
}

const bob = {
    name: 'Bob',
    hello() {
        super.hello();
    }
}

Object.setPrototypeOf(bob, american);
bob.hello();
