# ikut_lp

## 環境構築

```sh
asdf install
npm install
```

## CSSをSassから変換する

```sh
node_modules/.bin/sass style.sass static/style.css
```

編集する場合は `--watch` フラグをつける

```sh
node_modules/.bin/sass --watch style.sass static/style.css
```

## ローカルで閲覧する

```sh
node app.js
```

ブラウザで開く

http://localhost:3000/

