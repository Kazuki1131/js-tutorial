
console.log('ESmodule called');

let privateVal = 1;
/**
 * プリミティブ方の値は外部で変更できないが
 * オブジェクトで渡すと、外部から値を書き換えられる。
 * なぜなら、オブジェクトの参照が渡されるため
 * そのため、データはオブジェクトで管理することが多い
 *
 * プリミティブ型の値を外部から書き換えたい場合は、関数を使用する必要がある
 */
export let publicVal = {prop: 10};

export function publicFn() {
  console.log('publicFn called: ' + privateVal);
  privateVal++;
}

function privateFn() {

}
