/**
 *  Map, Setはコレクション（データを管理するための入れ物）である
 *  読み書きをよくする場合はMapの方がパフォーマンスが良いことが多い
 * 			Object vs. Map
 *	キー 	| 文字列 |制約なし|
	forin  |   ◯   |   ×   |
	forof  |   ×   |   ×   |

			Array vs. Set
	重複値	|   ◯   |   ×   |
	forin  |   ◯   |   ×   |
	forof  |   ◯   |   ◯   |
 *  */

const map = new Map();
const key1 = {};

// Mapオブジェクト.set(キーにしたい情報, 値)でセットできる
map.set(key1, 'value1');
console.log(map.get(key1)); // value1

const key2 = function() {};
map.set(key2, 'value2');
console.log(map.get(key2));  // value2

let key3;
map.set(key3 = 0, 'value3');
// 変数に格納しているプリミティブ値でも参照できる
console.log(map.get(0)); // value3

// Mapオブジェクト.deleteでmapから値を削除できる
map.delete(key3);

// for(const [k,v] of map) {
// 	console.log(k)
// }


const s = new Set();
// Setオブジェクト.addで値をセットできる
s.add(key1);
s.add(key2);
s.add(key3);

// Setオブジェクト.deleteでsetから値を削除できる
s.delete(key3);

// Setオブジェクト.hasで値が入っているかを真偽値で判定できる
console.log(s.has(key3))

// [...Setオブジェクト]とすることで配列に変換できる
const arry = [...s];
console.log(arry);

const it = s.keys();
console.log(it.next());


for(let k of s) {
	console.log(k)
}
