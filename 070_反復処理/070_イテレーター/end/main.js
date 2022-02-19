function genIterator(max = 10) {
  let i = 0;

  return {
    // イテレーターはnextメソッドで定義する
    next: function() {
      if(i >= max) {
        return {
          // doneがtrueなら処理を終了
          done: true
        }
      } else {
        return {
          // doneがfalseなら処理を継続してvalueの値を変更
          done: false,
          value: i++
        }
      }
    }
  }
}

const it = genIterator(10);

let a = it.next();
while(!a.done) {
  console.log(a.value);
  a = it.next();
}

const obj = {
  [Symbol.iterator]: genIterator.bind(null, 10)
}

for(const i of obj) {
  console.log(i);
}

const s = new Set(obj);
console.log(s);
