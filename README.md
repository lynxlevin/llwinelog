# About
趣味のワインの記録を取る上で、既存のアプリでは入力に時間がかかるものが多く、その課題を解決するために作成したスマホ向けWebアプリです。
テンプレート式の入力補助機能を搭載し、入力時間の短縮を図っています。

# Sample Page
https://llwinelog.herokuapp.com/

テストアカウント
- メール：test@test
- パスワード：testpassword

# Installation
1. rubyのインストール
2. このリポジトリをクローン
3. rails db:create
4. rails db:migrate
5. rails db:seed

# Usage
ログイン後、「記録」ボタン押下で新しく記録をとることができます。
「Original template」よりワインのタイプを選ぶと、国、地域の情報やブドウ品種が自動で入力されます。