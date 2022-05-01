# iKutのランディングページ

## デプロイ先

https://ikut.app/

## 環境構築

```sh
asdf install
npm install
```

## CSSをScssから変換する

```sh
node_modules/.bin/sass scss/bootstrap.scss static/style.css
```

編集する場合は `--watch` フラグをつける

```sh
node_modules/.bin/sass --watch scss/bootstrap.scss static/style.css
```

## ローカルで閲覧する

```sh
node app.js
```

ブラウザで開く

http://localhost:3000/

