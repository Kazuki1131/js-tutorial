function Person(name, age) {
    this.name = name;
    this.age = age;
    // コンストラクタ関数で関数を定義するときは以下のようにするのではなく、後述のprototypeを使う
    // 理由：メモリの消費が抑えられるため。
    // メモリ消費が抑えられる理由は、以下のように定義するとインスタンス生成ごとに関数オブジェクトが生成されるが
    // prototypeだと関数を参照しているprototypeオブジェクトがインスタンス生成時に引き継がれるだけで、関数を生成しないため
    this.hello = function() {
        console.log('hello ' + this.name);
    }
}

// コンストラクタ関数名.prototype.関数名 = 無名関数 でコンストラクタ関数に関数を定義できる
Person.prototype.hello = function() {
    console.log('hello ' + this.name);
}

const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);

// hello Bob
bob.hello();

// hello Tom
tom.hello();
