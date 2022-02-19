// ディスクリプターとは、プロパティに存在する以下の4つの設定値のことである
// value: 値
// configurable: 設定変更可能性(値の再代入の可否)
// enumerable: 列挙可能性
// writable: 値の変更可能性
'use strict';
const obj = {};

Object.defineProperty(obj, 'prop', {
       configurable: true,
       value: 0,
       writable: true
});

delete obj.prop;

// obj.prop = 1;
console.log(obj.prop);

const descriptor = Object.getOwnPropertyDescriptor(obj, 'prop');

console.log(descriptor);
