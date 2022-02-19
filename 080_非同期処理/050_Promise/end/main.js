/**
 * Promiseとは、非同期処理をより簡単に、可読性が上がるように書けるようにしたもの
 * 【Promiseの使い方】
 * 1. Promiseの引数にコールバック関数を指定
 * 2. コールバック関数の引数にはresolveとrejectを追加
 * 3. resolveが呼ばれた場合にはthenメソッドの中のコールバック関数が呼ばれる
 * 4. thenメソッドのコールバック関数の引数にはresolveの実引数が渡る
 * 5. thenメソッドが実行された後はfinallyメソッドの中のコールバック関数が実行される
 * 6. finallyメソッドのコールバック関数の中には終了処理を記述する
 *
 * rejectはPromiseのコールバック関数で何らかのエラーが発生したときに、
 * それをPromiseに通知してあげる関数
 * rejectが呼ばれた場合はcatchメソッドの中のコールバック関数が実行される
 * コールバック関数の引数にはrejectの実引数が渡される
 * catchメソッドのコールバック関数が実行された後に、
 * finallyメソッドの中のコールバック関数が実行される
 *
 * また、new Promiseの引数に与えたコールバック関数は同期処理となるが、
 * then, catch, finallyは非同期処理となる
 **/
new Promise(function(resolve, reject) {
  console.log('promise');
  // reject("bye");
  setTimeout(function() {
    resolve("hello");
  }, 1000);
}).then(function(data) {
  console.log('then:' + data);
  // rejectはPromiseのコールバック関数の中でしか使えない
  // thenの中で何らかのエラーが発生してcatchメソッドに処理を移したい場合は、
  // throw new Error()と記述する
  throw new Error();
  // return data で次のthenのコールバック関数の引数にdataを渡せる
  return data;
}).then(function(data) {
  console.log('then:' + data);
  return data;
}).catch(function(data) {
  console.log('catch:' + data);
}).finally(function() { // finallyは引数を持てない
  console.log('finally');
})

console.log('global end');
