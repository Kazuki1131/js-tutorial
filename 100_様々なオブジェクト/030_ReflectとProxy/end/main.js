/**
 * 内部メソッドとReflectとProxyの関係性
 *   内部メソッド  |     Reflect    |    Proxy
 *    [[Get]]    |       get      |     get
 *    [[Set]]    |       set      |     set
 *   [[Delete]]  | deleteProperty | deleteProperty
 * [[Construct]] |    construct   |   construct
 */
const targetObj = {
  a: 0,
  get value() {
    return this.b;
  }
};

const handler = {
  get: function (target, prop, receiver) {
    console.log(`[get]: ${prop}`);
    // Proxyのハンドラーから渡ってくる引数はそのままReflectに渡せるため便利
    if (target.hasOwnProperty(prop)) {
      return Reflect.get(target, prop, receiver);
    } else {
      return -1;
    }
  }
}
const pxy = new Proxy(targetObj, handler);
console.log(pxy.value);
console.log(pxy.b);
