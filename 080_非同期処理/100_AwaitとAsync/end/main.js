/**
 * ES8から導入されたAwaitとAsyncとは、Promiseをさらに直感的に記述できるようにしたもの
 * AsyncはPromiseを返却する関数の宣言を行う
 * AwaitはPromiseを返却する関数の非同期処理が完了するまで待つ
 */
function sleep(val) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// asyncは以下のように記述する
async function init() {
  // awaitを実行すると、sleepが実行された後に、resolveの引数が返ってくる
  // そのため、0がコンソールログに出力され、valには1が代入される
  let val = await sleep(0);
  // 上記のawaitの実行が終わるまで、下記のconsole.logは実行されない。
  console.log(val);

  // 下記のようにすれば、チェーンできる。thenよりも簡潔にかける
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  val = await sleep(val);
  throw new Error(); // throwが呼ばれると、catchに処理がうつる
  return val;
}

// asyncはPromiseインスタンスを返すため、thenやcatchをつなげることができる
init().then(function(val) {
  console.log('hello' + val)
}).catch(function(e) { // throwが呼ばれるとこのコールバック関数の処理が呼ばれる
  console.error(e);
});
// console.log(init())

// sleep(0).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// }).then(function(val) {
//   return sleep(val);
// })
