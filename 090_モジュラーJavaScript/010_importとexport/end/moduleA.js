// 外部に読み込ませたい変数や関数はexportを記述する
export let publicVal = 0;

export  function publicFn() {
  console.log('publicFn called: ')
}

// デフォルトでエクスポートしたい場合は以下のように記述する
// 変数名などは必要ない
export default 1;
