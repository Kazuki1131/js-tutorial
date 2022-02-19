// ビルトインオブジェクトとは、コード実行前にJSエンジンによって自動的に生成されるオブジェクトのこと
const arry = new Array(1,2,3,4);
console.log(arry);
console.log(arry["0"]);
console.log(arry.hasOwnProperty(0));
