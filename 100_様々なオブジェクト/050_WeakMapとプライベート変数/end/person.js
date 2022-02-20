const wm = new WeakMap();

export class Person {
    constructor(name) {
        // this._name = name;だとプライベート変数にしたいのに外部からアクセスできてしまう
        //下記のようにWeakMapを使用することで、外部からアクセスできないようにできる
        wm.set(this, {
            name
        });
    }

    hello() {
        // getメソッドで呼び出す
        console.log(`hello ${wm.get(this).name}`);
    }
}
