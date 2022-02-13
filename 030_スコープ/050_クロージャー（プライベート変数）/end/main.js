// クロージャーとは、レキシカルスコープの変数を関数が使用している状態のこと
function incrementFactory() {
    //プライベート変数。外部からはアクセスできないようにした関数の中の変数
    let num = 0;

    function a() {
        //レキシカルスコープの変数を関数が使用している
        num = num + 1;
        console.log(num);
    }

    return a;
}

//incrementFactory()が呼び出されたタイミングでのみ、num変数が初期化される
const increment = incrementFactory();

increment();
increment();
increment();
increment();
