### モジュールとは
ソースコードを機能ごとに分割して、メンテナンスしやすくする仕組み

### ESモジュールとは
EcmaScriptの仕様に基づいたモジュールの管理の仕組み
ES6のバージョンから導入された
import / exportsでモジュールの読み込みやモジュールの外部ファイルへの露出などを行う
このモジュール管理の仕組みは、ブラウザ側で主に使うことになる

### CommonJSとは
Node.js上でモジュールを管理する仕組み
require / exportsでモジュールの読み込みやモジュールの外部ファイルへの露出などを行う

### モジュールのインポートとエクスポート
ESMとCJS間でモジュールの管理を跨ぐことはできない。
例えば、exportsされたものをCommonJSでrequireすることはできない

### ESM vs. CJS
                                ESM       |      CJS
インポートとエクスポートの規格 | import/export | require/exports
使用される場所              |    Browser    |    Node.js
ファイルの拡張子            |     .mjs      |     .cjs
