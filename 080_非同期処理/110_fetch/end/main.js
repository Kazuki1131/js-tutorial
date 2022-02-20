/**
 * fetchを使うことで、サーバー上からデータを取得することができる
 * 今回は、users.jsonのデータを取得する
 * jsonは、jsからサーバー上にデータをとりに行くときや、
 * サーバーに対してデータをリクエストするときによく使われる形式
 * 基本的にjsのオブジェクトや配列と記述が似ているが、以下の3つのルールがある
 * 1. シングルクォーテーションで文字列を囲むことはできない。必ずダブルクォーテーションで囲む。
 * 2. プロパティは必ずダブルクォーテーションで囲む
 * 3. 格納されている一番最後の要素には , (カンマ)をつけてはいけない
 */

// fetch('users.json').then(function(response) {
//   console.log(response.json());
//   return response.json();
// }).then(function(json) {
//   console.log(json);
//   for(const user of json) {
//     console.log(`I'm ${user.name}, ${user.age} years old`)
//   }
// })

// fetchは以上のコメントアウトしたように記述できるが、
// fetchはPromiseインスタンスのため、async, awaitで以下のように書き換えられる。
async function fetchUsers() {
  const response = await fetch('users.json');
  const json = await response.json();
  for(const user of json) {
    console.log(`I'm ${user.name}, ${user.age} years old`)
  }
}

fetchUsers();
