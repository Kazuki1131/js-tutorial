function sleep(val) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(val++);
      reject(val);
    }, val * 500);
  });
}

// Promise.all([Promiseインスタンス, ...])で並列処理ができる
// この場合、Promise.allの全てのPromiseインスタンスが実行された後に、チェーンされてるthenメソッドに移行する
// rejectが呼ばれると、catchの方に処理が移る
Promise.all([sleep(2), sleep(3), sleep(4)])
.then(function (data) { // thenのコールバック関数の引数には、resolveの実引数が渡される
  console.log(data);
}).catch(function(e) {
  console.error(e);
});

// Promise.raceは配列で指定したPromiseインスタンスのどれか1つが完了した時点でthenメソッドに移行する
Promise.race([sleep(2), sleep(3), sleep(4)])
.then(function (data) { // thenのコールバック関数の引数には、resolveの実引数が渡される
  console.log(data);
}).catch(function(e) {
  console.error(e);
});

// Promise.allSettledはallと違って、rejectが呼ばれてもcatchに処理が移行しない
// その代わり、statusプロパティというのが追加されて、その中でrejectされたかどうかの状態を確認できる
Promise.allSettled([sleep(2), sleep(3), sleep(4)])
// thenのコールバック関数の引数には、resolveの実引数が渡される
.then(function (data) {
  console.log(data);
}).catch(function(e) {
  console.error(e);
});
