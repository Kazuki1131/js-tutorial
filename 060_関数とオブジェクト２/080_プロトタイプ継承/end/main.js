function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.hello = function() {
    console.log('hello ' + this.name);
}

// Personにはない新しい引数(gender)を定義することができる
function Japanese(name, age, gender) {
    // thisによってJapaneseの関数コンテキストがPersonに渡る
    Person.call(this, name, age);
    this.gender = gender;
}

// JapaneseのprototypeにPersonのオブジェクト＋prototypeを継承する
Japanese.prototype = Object.create(Person.prototype);

Japanese.prototype.hello = function() {
    console.log('Konnichiwa ' + this.name);
}

// Personにはない新しい関数を定義することもできる
Japanese.prototype.bye = function() {
    console.log('Sayonara ' + this.name);
}

const taro = new Japanese('Taro', 23, 'Male');
console.log(taro);

// Konnichiwa Taro
taro.hello();

// Sayonara Taro
taro.bye();
