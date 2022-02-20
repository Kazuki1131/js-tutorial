/**
 * ダイナミックインポートとは、importを非同期で読み込むことができる
 * そのため、画面の初期表示時には必要ないものを、必要なときにimportするようにできるため
 * 画面の初期表示が速くなる。
 * 新しい機能のため、webpackやbabelなどを使うか、対応ブラウザのみで使うようにする
 */
//
//
async function fn() {
  const modules = await import('./moduleA.js');
  modules.publicFn();
}
fn();

// import('./moduleA.js').then(function(modules) {
//   console.log(modules);
//   modules.publicFn();
// })
