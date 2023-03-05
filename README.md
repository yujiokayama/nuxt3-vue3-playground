# Nuxt3 + Vue3 を学ぶ環境

- [Nuxt3 + Vue3 を学ぶ環境](#nuxt3--vue3-を学ぶ環境)
  - [.env.example から.env を作成する](#envexample-からenv-を作成する)
  - [コンテナを構築 \& 立ち上げる](#コンテナを構築--立ち上げる)
  - [Nuxt 環境構築](#nuxt-環境構築)
    - [コンテナに入る](#コンテナに入る)
    - [Nuxt3 をインストールする](#nuxt3-をインストールする)
    - [パッケージインストール](#パッケージインストール)
    - [型チェックに対応する](#型チェックに対応する)
    - [開発環境を立ち上げる](#開発環境を立ち上げる)
      - [初期構築後 docker-compose.yml を修正する](#初期構築後-docker-composeyml-を修正する)
  - [Laravel 環境構築](#laravel-環境構築)
    - [コンテナに入る](#コンテナに入る-1)
    - [Laravel インストール](#laravel-インストール)
      - [※git clone 後は`composer install`](#git-clone-後はcomposer-install)
      - [※git clone 後は Laravel の.env をコピーする](#git-clone-後は-laravel-のenv-をコピーする)

## .env.example から.env を作成する

```bash
cp .env.example .env
```

## コンテナを構築 & 立ち上げる

```bash
docker compose up -d
```

## Nuxt 環境構築

### コンテナに入る

```bash
docker compose exec front bash
```

### Nuxt3 をインストールする

```bash
npx nuxi init .
```

### パッケージインストール

```bash
yarn install
```

### 型チェックに対応する

```bash
yarn add -D @nuxt/types
```

```ts
import { NuxtConfig } from "@nuxt/types";

const config: NuxtConfig = {
  // ここに設定
};

export default config;
```

### 開発環境を立ち上げる

```bash
yarn dev
```

#### 初期構築後 docker-compose.yml を修正する

```yaml
front:
  # command: sh -c "yarn && yarn dev" ←コメント外す
```

## Laravel 環境構築

### コンテナに入る

```bash
docker compose exec app bash
```

### Laravel インストール

```bash
composer create-project --prefer-dist laravel/laravel . "9.*"
```

#### ※git clone 後は`composer install`

```bash
composer install
```

#### ※git clone 後は Laravel の.env をコピーする

```bash
cp .env .env.example
```

