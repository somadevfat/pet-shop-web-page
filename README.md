# Pet Shop Web Page - 研修課題

このリポジトリは、ペットショップのトップページを作成する研修課題の成果物です。
Figmaで提供されたデザインを基に、実践的なコンポーネント設計やモダンなフロントエンド開発手法を学ぶことを目的としています。

## 課題の目的と学習目標

この課題では、以下の項目を意識して実装に取り組みます。

- **汎用的なコンポーネント設計:**
  - 共通項を見出し、Atomic Designの考え方を取り入れた再利用性の高いコンポーネントを設計する。
  - ディレクトリ構成を工夫し、コンポーネントの責務を明確に分離する。
- **レスポンシブデザイン:**
  - 様々なデバイス幅に対応できるレスポンシブなレイアウトを実装する。
- **セマンティックなHTML:**
  - SEOやアクセシビリティを意識した、意味的に正しいHTML構造でマークアップする。
- **デザインの再現性:**
  - Figmaのデザインを正確に再現し、デザイナーとの円滑な連携を想定した実装を行う。

## デザインリソース

- **Figmaデザイン:** [Petshop Top Page](https://www.figma.com/file/1qpODb7s0PTbftA08HduOI/LH_petshop?type=design&node-id=1-2&mode=design&t=fT3e2QvW7ZK64qhw-0)

## 技術スタック

- **フレームワーク:** React, Vite
- **言語:** TypeScript
- **スタイリング:** Tailwind CSS
- **静的解析:** ESLint, Prettier

## ディレクトリ構成

本プロジェクトでは、[Bulletproof React](https://zenn.dev/manalink_dev/articles/bulletproof-react-is-best-architecture)の考え方を参考に、以下のようなディレクトリ構成を採用しています。

```
src/
├── assets/         # 画像やフォントなどの静的リソース
├── components/     # 再利用可能なコンポーネント
│   ├── features/   # 特定の機能に関連するコンポーネント
│   └── ui/         # 汎用的なUIパーツ (Button, Inputなど)
├── styles/         # グローバルなスタイル
└── ...
```

## セットアップと実行方法

1. **依存関係のインストール:**
   ```bash
   npm install
   ```

2. **開発サーバーの起動:**
   ```bash
   npm run dev
   ```
   サーバーが起動したら、 http://localhost:5173 にアクセスしてください。

## 参考資料

- **Atomic Design:** [参考記事](https://www.crunchtimer.jp/blog/15849)
- **ディレクトリ構成:** [Bulletproof React](https://zenn.dev/manalink_dev/articles/bulletproof-react-is-best-architecture)
- **セマンティックHTML:** [参考記事](https://takayamato.com/html-seo/)