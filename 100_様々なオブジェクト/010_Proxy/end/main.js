// Proxyとは、プロパティの操作に独自の処理を追加するためのオブジェクト
const targetObj = { a: 0 };
// ここでhandlerオブジェクトを定義
const handler = {
  // setは値がセットされたときに動くメソッド。
  // 他にもgetやdeleteなどといったメソッドが登録できる。
  // これはトラップとも呼ばれ、オブジェクトに変更があった際に動くメソッド
  // 第一引数でProxyの第一引数で渡したオブジェクトを指定
  // 第二引数はプロパティにアクセスされた際のプロパティの名前が渡ってくる
  // 第三引数は新しい値が渡ってくる
  // 第四引数のreceiverには、呼び出したProxyのオブジェクトが渡ってくる
  set: function(target, prop, value, receiver) {
    console.log(`[set]: ${prop}`); // [set]: a
    target[prop] = value; // 新しい値を代入。これで、{a: 1}となる
    // 値に新しい値のセットさせたくない場合にErrorをthrowするなどの用途でも使える
    throw new Error('cannot add prop.');
  },
  // getは値の取得が行われたときに動くメソット。
  // setと違って、新しい値はわたってこないため、valueは必要ない
  get: function(target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    // 以下のようにすることでオブジェクトの中にプロパティが見つからなかった時のデフォルト値を設定できる
    if(target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return -1; // オブジェクトの中にプロパティが見つからなかった時のデフォルト値
    }
  },
  // deleteは値がdeleteされるときに動くメソッド
  // 新しい値とreceiverは渡ってこないため、不要
  deleteProperty: function(target, prop) {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
  },
}
// Proxyを定義するには、第一引数にターゲットとなるオブジェクト、
// 第二引数にはhandlerという、オブジェクトが操作された際に実行されるメソッドが格納されているオブジェクトを指定する
const pxy = new Proxy(targetObj, handler);

pxy.a = 1; // handlerのsetが呼ばれる
console.log(pxy.b); // handlerのgetが呼ばれる
delete pxy.a; // handlerのdeleteが呼ばれる
