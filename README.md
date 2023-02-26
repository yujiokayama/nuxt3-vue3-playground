# Nuxt3 + Vue3 を学ぶ環境

- [Nuxt3 + Vue3 を学ぶ環境](#nuxt3--vue3-を学ぶ環境)
  - [.env.example から.env を作成する](#envexample-からenv-を作成する)
  - [コンテナを構築 \& 立ち上げる](#コンテナを構築--立ち上げる)
  - [Nuxt 環境構築](#nuxt-環境構築)
    - [コンテナに入る](#コンテナに入る)
    - [Nuxt3 をインストールする](#nuxt3-をインストールする)
    - [パッケージインストール](#パッケージインストール)
    - [開発環境を立ち上げる](#開発環境を立ち上げる)
      - [初期構築後 docker-compose.yml を修正する](#初期構築後-docker-composeyml-を修正する)
  - [Laravel 環境構築](#laravel-環境構築)
    - [コンテナに入る](#コンテナに入る-1)
    - [Laravel インストール](#laravel-インストール)
      - [※git clone 後は`composer install`](#git-clone-後はcomposer-install)
      - [※git clone 後は Laravel の.env をコピーする](#git-clone-後は-laravel-のenv-をコピーする)
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
      - [computedプロパティ](#computedプロパティ)
      - [型推論](#型推論)
      - [dataプロパティへの明示的な型設定](#dataプロパティへの明示的な型設定)
      - [データオブジェクトへの型設定](#データオブジェクトへの型設定)
      - [型エイリアス](#型エイリアス)
      - [propsの型設定](#propsの型設定)
      - [オブジェクトのprops](#オブジェクトのprops)
      - [型エイリアスをExportする](#型エイリアスをexportする)
    - [Composition APIのscript setup構文](#composition-apiのscript-setup構文)

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
npx nuxi init . --force
```

### パッケージインストール

```bash
yarn install
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

## Nuxt3 の開発環境

### ディレクトリ構成

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

#### computedプロパティ

#### 型推論

#### dataプロパティへの明示的な型設定

#### データオブジェクトへの型設定

#### 型エイリアス

#### propsの型設定

#### オブジェクトのprops

#### 型エイリアスをExportする

### Composition APIのscript setup構文


