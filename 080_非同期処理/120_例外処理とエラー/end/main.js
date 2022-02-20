/**
 * 例外処理とは、エラーが発生した際に飛ぶ特別な処理
 * 以下のように記述する
 * try {
 *  throw new Error()
 * } catch {
 *  エラーハンドリング
 * } finally {
 *  終了処理
 * }
 */

async function fetchUsers() {
  const response = await fetch('users.json');

  if(response.ok) { // okプロパティがtrueだった場合に実行される
    const json = await response.json();

    if(!json.length) { // jsonに要素がなかった場合にthrowされる
      throw new Error('no data found');
    }
    return json;
  }
}

// 以下のようにErrorクラスを継承することでカスタムエラーを作成することができる
class NoDataError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NoDataError';
  }
}

async function init() {
  try {
    const users = await fetchUsers();
    for(const user of users) {
      console.log(`I'm ${user.name}, ${user.age} years old`)
    }
  } catch(e) {
    // instanceofでエラーの種類に応じて条件分岐できる
    if(e instanceof NoDataError) {
      console.error(e);
    } else {
      console.error('Oops, something went wrong');
    }
  } finally {
    console.log('bye');
  }
  console.log('end');
}
init();
