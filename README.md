<h1 align="center">SauceNao</h1>

## Introduction

`npm install saucenao.js`

## Quick start

```js
const {SauceNao} = require('saucenao.js');

const sauce = new SauceNao({api_key: 'your_api_key'})


sauce.find({url: 'image_url'}).then((data) => {
    console.log(data.header.status)
})
```

## API

### class SauceNao(dynamicParams: RequestParams)

* SauceNao.find(staticParams: RequestParams | string | URL)

return: `Promise<Respone>`

### RequestParams

```ts
{
  api_key ? : string;
  testmode ? : 1;
  dbmask ? : number;
  dbmaski ? : number;
  db ? : number;
  dbs ? : Array<number>;
  numres ? : number;
  dedupe ? : 0 | 1 | 2;
  hide ? : 0 | 1 | 2 | 3;
  url ? : string;
}
```

[![See](https://img.shields.io/badge/See-blue?style=for-the-badge&logoColor=white)](https://saucenao.com/user.php?page=search-api)

### Response

```ts
{
  header: ResponseHeader;
  results: Array<Result>;
}
```

### Result

```ts
{
  header: ResultHeader;
  data: Data;
}
```

### ResultHeader

```ts
{
  similarity: string;
  thumbnail: string;
  index_id: number;
  index_name: string;
  dupes: number;
  hidden: number;
}
```

### Data

```ts
{
  ext_urls: Array<string>;
  md_id?: number;
  mu_id?: number;
  mal_id?: number;
  source?: string;
  part?: string;
  artist?: string;
  author?: string;
  title?: string;
  pixiv_id?: number;
  member_name?: string;
  member_id?: number;
  fa_id?: number;
  author_name?: string;
  author_url?: string;
  da_id?: string;
  anidb_aid?: number;
  anilist_id?: number;
  year?: string;
  est_time?: string;
  seiga_id?: number;
  bcy_id?: string;
  bcy_type?: string;
  danbooru_id?: string;
  ddb_id?: string;
  drawr_id?: string;
  e621_id?: string;
  file?: string;
  gelbooru_id?: string;
  idol_id?: string;
  imdb_id?: string;
  konachan_id?: string;
  member_link_id?: string;
  nijie_id?: string;
  pawoo_id?: string;
  pg_id?: string;
  sankaku_id?: string;
  url?: string;
  user_acct?: string;
  yandere_id?: string;
  "anime-pictures_id"?: string;
  creator?: Array<string> | string;
  eng_name?: string;
  jp_name?: string;
  material?: string;
  characters?: string;
  published?: Date;
  service?: string;
  service_name?: string;
  id?: string;
  user_id?: string;
  user_name?: string;
}
```