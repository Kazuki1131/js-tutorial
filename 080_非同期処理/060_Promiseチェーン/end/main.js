// プロミスチェーンとは、Promiseを使って非同期処理を順次実行すること
function sleep(val) {
  // resolveしか使わない場合は引数にrejectは省略できる
  return new Promise(function(resolve) {
    setTimeout(function() {
      console.log(val++);
      resolve(val);
    }, 1000);
  });
}

// Promiseチェーン
sleep(0).then(function(val) {
  //非同期の処理をつなげるためには、thenメソッドのコールバック関数のreturnにpromiseのインスタンスをセットする
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
}).then(function(val) {
  return sleep(val);
})
