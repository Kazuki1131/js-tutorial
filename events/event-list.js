// マウスが動いた時のイベント
document.addEventListener('mousemove', () => {
    console.log('moved!');
})

// マウスの座標を取得する
document.addEventListener('mousemove', e => {
    console.log(e.clientX, e.clientY);
})

// キーボードで押されたキーを取得する
document.addEventListener('keydown', e => {
    console.log(e.key);
})

// フォームにフォーカスされた時のイベント
const text = document.querySelector('textarea');

text.addEventListener('focus', () => {
    console.log('focus');
})

// フォーカスが外れた時のイベント
text.addEventListener('blur', () => {
    console.log('blur');
})

// フォームが更新された時のイベント
text.addEventListener('input', () => {
    console.log('input');
})

// フォームの更新が確定(入力した後にフォーカスが外れた)した時
text.addEventListener('change', () => {
    console.log('change');
})

// 入力された文字数を表示
text.addEventListener('input', () => {
    console.log(text.value.length);
})

// form送信するイベント
document.querySelector('form').addEventListener('submit', () => {
    console.log('submit');
})

// 個々のli要素をクリックしたら打ち消し線を入れる
document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
        // classのdoneに打ち消し線のstyleを当ててる
        e.target.classList.toggle('done');
    }
})
