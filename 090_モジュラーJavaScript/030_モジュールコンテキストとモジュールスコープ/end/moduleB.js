import './moduleA.js';

console.log(this); // thisは使えず、undefinedになる

const a = 0;

function fn() {
  console.log(this); // thisは使えず、undefinedになる
  console.log(a);
}
fn();

// objの呼び出しであればthisは使える
const obj = {
  fn
}
obj.fn();

console.log(window.d);
