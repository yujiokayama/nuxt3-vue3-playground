- [Nuxt 3 Minimal Starter](#nuxt-3-minimal-starter)
  - [Setup](#setup)
  - [Development Server](#development-server)
  - [Production](#production)
  - [Nuxt3 の開発環境](#nuxt3-の開発環境)
    - [ディレクトリ構成](#ディレクトリ構成)
    - [ルーティングの設定](#ルーティングの設定)
    - [Page Transitions](#page-transitions)
    - [Meta Tags の設定](#meta-tags-の設定)
    - [Data Fetching](#data-fetching)
    - [Modules](#modules)
    - [useState](#usestate)
    - [エラーハンドリング](#エラーハンドリング)
    - [Server API Route](#server-api-route)
    - [レンダリングモード](#レンダリングモード)
  - [Vue3 + TypeScript](#vue3--typescript)
    - [変数の型の設定方法](#変数の型の設定方法)
      - [computed プロパティ](#computed-プロパティ)
      - [型推論](#型推論)
      - [data プロパティへの明示的な型設定](#data-プロパティへの明示的な型設定)
      - [データオブジェクトへの型設定](#データオブジェクトへの型設定)
      - [型エイリアス](#型エイリアス)
      - [props の型設定](#props-の型設定)
      - [オブジェクトの props](#オブジェクトの-props)
      - [型エイリアスを Export する](#型エイリアスを-export-する)
    - [Composition API の script setup 構文](#composition-api-の-script-setup-構文)
  - [スタイリング環境を整える（Tailwind \& Sass）](#スタイリング環境を整えるtailwind--sass)
  - [Nuxt3 でテスト環境を構築する](#nuxt3-でテスト環境を構築する)
    - [テストコードの書き方](#テストコードの書き方)


# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Nuxt3 の開発環境

### ディレクトリ構成

```bash
├── nuxt-app/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── middleware/
│   ├── pages/
│   ├── plugins/
│   ├── static/
│   ├── store/
│   └── tests/
│       ├── components/
│       ├── pages/
│       ├── e2e/
│       └── jest.config.js
├── nuxt.config.js
├── package.json
└── yarn.lock
```

### ルーティングの設定

### Page Transitions

### Meta Tags の設定

### Data Fetching

### Modules

### useState

### エラーハンドリング

### Server API Route

### レンダリングモード

## Vue3 + TypeScript

### 変数の型の設定方法

#### computed プロパティ

#### 型推論

#### data プロパティへの明示的な型設定

#### データオブジェクトへの型設定

#### 型エイリアス

#### props の型設定

#### オブジェクトの props

#### 型エイリアスを Export する

### Composition API の script setup 構文

## スタイリング環境を整える（Tailwind & Sass）

1. package install

**sass**

```bash
yarn add -D sass
```

**tailwind**

1. 公式を参照
   https://tailwindcss.com/docs/guides/nuxtjs#3

## Nuxt3 でテスト環境を構築する

1. package install

```bash
yarn add -D vitest @vue/test-utils jsdom
```

2. tsconfig.json を修正する

```ts
{
  // https://nuxt.com/docs/guide/concepts/typescript
  "extends": "./.nuxt/tsconfig.json",
  "compilerOptions": {
    "types": [
      "vitest/globals"
    ]
  }
}

```

3. vitest.config.ts を作成する

```ts
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
```

4. テスト実行

```bash
npx vitest run
```

### テストコードの書き方
