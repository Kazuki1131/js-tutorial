/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというジェネレーター関数を作成しましょう。
 *
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 *
 * 以下のように実行した場合には
 * const it = genStep({min: 4, max: 10, step: 2});
 *
 * for(let value of it) {
 *   console.log(value); -> 4, 6, 8, 10
 * }
 *
 * の値が順番にコンソールに表示されます。
 */
// 引数に以下のように書くことで、各引数のデフォルト引数を設定でき、
// 引数が全く渡ってこなかったときは空のオブジェクトをデフォルト引数に設定できる
// デフォルト引数にInfinityをつけることで上限なしに設定できる
function* genStep({min = 0, max = Infinity, step = 1} = {}) {
  for(let i = min; i <= max; i += step) {
    yield i;
  }
}

const it = genStep({max: 1000});

for(let value of it) {
  console.log(value)
}
