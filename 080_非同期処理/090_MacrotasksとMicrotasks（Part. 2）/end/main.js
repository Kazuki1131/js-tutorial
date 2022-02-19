new Promise(function promise(resolve) {
  console.log('promise');

  setTimeout(function task1() {
    console.log('task1');
    resolve();
  });

  setTimeout(function task1() {
    console.log('task2');

    // グローバルコンテキストの実行が終わった後に実行したい非同期処理は以下のように記述する
    queueMicrotask(function job4() {
      console.log('job4')
    })

    // queueMicrotaskは以下のように書き換えることもできる
    const p = Promise.resolve();
    p.then(function job4() {
      console.log('job4')
    })

  });

}).then(function job1() {
  console.log('job1');


}).then(function job2() {
  console.log('job2');
}).then(function job3() {
  console.log('job3');
})

console.log('global end');

/**
 * 実行結果
 * promise
 * global end
 * task1
 * job1
 * job2
 * job3
 * task2
 * job4
 * job4
 */
