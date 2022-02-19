/**
 * スレッドとは、連続して実行される一本の処理の流れのこと
 * スレッドの中で一番重要なのはMain Thread
 * メインスレッドは、JavaScriptの実行と、レンダリング(画面描写処理)を行う
 *
 * 同期処理では、メインスレッドでコードが順番に実行される
 * 同期処理では、一つの処理が完了するまで次の処理には進まない
 *
 * 非同期処理は、一時的にメインスレッドから処理が切り離される
 * 非同期処理が終わったら、メインスレッドの待機中の処理が実行される
 * 非同期APIを利用することで非同期処理を実行することができる
 * 画面上の入力やクリックイベント、NWイベント(ネットワーク越しのイベント), I/Oイベント(ファイルの読み書き)なども非同期処理である
*/

function sleep(ms) {
  const startTime = new Date();
  while (new Date() - startTime < ms);
  console.log('sleep done');
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  console.log('button clicked');
});

setTimeout(function() {
	sleep(3000)
}, 2000)
