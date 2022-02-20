/**
 * JSON.parseでJSONからObjectに変換できる
 * JSON.stringifyでObjectからJSONに変換できる
 */
const obj = {a: 0, b: 1, c: 2};

// valueが1以下のものを弾くreplacer
function replacer(prop, value) {
  if(value < 1) {
    return;
  }
  return value;
}
// 第二引数にreplacerメソッドを定義することで、jsonに不必要な値を入れないようにできたりする
const json = JSON.stringify(obj, replacer);

// 第二引数に配列を定義するとことで、 jsonに含めたいプロパティを列挙するできる
const json = JSON.stringify(obj, ["a", "b"]);
console.log(json);

// jsonをObjectに変換
const obj2 = JSON.parse(json);
console.log(obj2);
