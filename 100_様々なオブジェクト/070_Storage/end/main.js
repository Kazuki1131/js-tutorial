/**
 * Storageとは、ブラウザの保存領域にデータを格納するためのオブジェクト
 * Storageのコンストラクタから生成されたlocalStorageオブジェクトを操作することでブラウザの特定の保存領域にデータを保存できる
 * localStorageの情報は、開発者ツール→Application→Local Storageで見れる
 * localStorageの操作は同期処理で行われる
 * 使えるメソッドを忘れた場合は、開発者ツール→ConsoleにlocalStorageという風に調べたいオブジェクト名を入力し
 * オブジェクトの中の__proto___の中を見ると、使えるメソッド名が載っている
 */
const obj = { a: 0 };
const json = JSON.stringify(obj);

// setItemメソッドの第一引数に保存するためのキー情報、第二引数に保存するデータをセットする
localStorage.setItem('key', json);

// getItemメソッドにkey情報をセットすることでlocal storageの値を取得することができる
const result = localStorage.getItem('key');
const obj2 = JSON.parse(result);
console.log(obj2);
console.log('end');
