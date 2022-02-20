/**
 * 外部から読み込みたい場合はimportを記述
 * 読み込みたい変数や関数を指定し、最後にその変数や関数が存在するファイルをfromで指定する
 * モジュールを使う場合には、webpackというモジュールを一つのファイルにまとめてくれるサービスを使うことが多い
 * webpackを使う場合はfromのファイル名の.jsの拡張子の部分を省略できる
 * asを使うことで、別名をつけることができる
 * また、defaultでインポートするものは、中括弧の前に自分の好きな変数名で指定する
 * また、{}の部分は
 * import * as moduleAとするとexportしたものがオブジェクトとして格納される
 * importするものが多い場合はこちらの記法の方がすっきりして良い
 * オブジェクトとしてimportされたものを使う場合は
 * デフォルトの場合はmoduleA.default
 * 変数や関数の場合はmoduleA.publicVal, moduleA.publicFn()のように使う
 */
import defaultVal, { publicVal as val, publicFn as fn } from './moduleA.js';
// import * as moduleA from './moduleA.js';
console.log(val);
console.log(defaultVal);
fn();
