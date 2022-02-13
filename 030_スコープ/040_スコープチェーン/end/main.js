// スコープチェーンとは、スコープが複数階層で連なっている状態のこと
let a = 2;
window.a = 4;
// windowでグローバルスコープに設定すると一番外側のスコープになる
console.log(a); // let a = 2;

function fn1() {
    let a = 1;
    console.log(a); // let a = 1;

    function fn2() {
        // 内側のスコープから順番に変数の定義を探しにいく
        // この場合、fn2()の中に変数aがなかったため、次のスコープであるfn1()のスコープの中を探す
        console.log(a); // let a = 1;
    }

    function fn3() {
        // スコープの中に変数がある場合に、変数宣言より前で変数を呼び出すと、外側に探しに行かずにエラーになる
        console.log(a); // エラー
        let a = 1;
    }
    fn2();
}
fn1();
