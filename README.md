# BookReview
TechTrainのMission用のサービス

### 技術スタック
- **Vite**
- **React**
- **Redux toolkit**
- **Tailwind CSS**

### 開発環境構築
1. `yarn`を実行し必要な依存パッケージをインストール
2. `yarn dev`でサーバを立ち上げる。

### パッケージのバージョンアップ
`yarn upgrade-interactive --latest`で対話コンソールを立ち上げて、<br/>
必要なパッケージのアップグレードを行うと良い。<br/>
@ref [package.jsonとyarn.lockのバージョンを一致させたい](https://bitto.jp/posts/%E6%8A%80%E8%A1%93/Node.js/syncyarnlock/)

### その他注意事項
- パッケージ管理ツールは`YARN`で統一し、`NPM`は用いない。