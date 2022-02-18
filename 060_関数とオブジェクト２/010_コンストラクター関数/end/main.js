// コンストラクタ関数は関数名をパスカルケースで記述するのが一般的
function Person(name, age) {
    // this.プロパティ名でインスタンス変数に代入できる
    this.name = name;
    this.age = age;
}

// コンストラクタ関数はnew演算子でインスタンス化できる
const bob = new Person('Bob', 18);
const tom = new Person('Tom', 33);
const sun = new Person('Sun', 20);
