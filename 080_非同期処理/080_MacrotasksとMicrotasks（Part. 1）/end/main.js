/**
 * マクロタスクとは、タスクキューのこと
 * マクロタスクは、順番が回ってきたら、1つずつタスクを実行する
 * マイクロタスクとは、タスクキューとは別で存在する非同期処理の待ち行列。これをジョブキューという。
 * マイクロタスクは、順番が回ってきたら、全てのジョブを実行する
 * つまり、マクロタスクに2つジョブがあり、1つ目を実行中にマイクロタスクにジョブが追加されたら、
 * マクロタスクで2つ目のジョブを実行する前に、マイクロタスクの全てのジョブを処理してから、マクロタスクの2つ目を実行する
 * 非同期処理のキューはマクロタスクとマイクロタスクで管理されるが、それぞれ挙動が異なる
 *
 * 代表的なマクロタスク
 * setTimeout, setInterval, requestAnimationFrame
 *
 * 代表的なマイクロタスク
 * Promises, queueMicrotask, MutationObserver
 */

// マクロタスクで処理される非同期処理。グローバルコンテキストが終了した後に呼び出される
setTimeout(function task1() {
  console.log('task1');
});

// new Promiseのコールバック関数は同期処理のため、一番最初に実行される。
new Promise(function promise(resolve) {
  console.log('promise');
  resolve();
// thenのコールバック関数はマイクロタスクの非同期のため、グローバルコンテキストが終了した後に呼び出され、
// マクロタスクの前に呼び出される
}).then(function job1() {
  console.log('job1');
});

// 同期処理
console.log('global end');

/**
 * 実行結果
 * promise
 * global end
 * job1
 * task1
 */
