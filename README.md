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

return: `Promise<FindResult>`

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

### FindResult

```ts
{
    header: {
        user_id: string;
        account_type: string
        short_limit: string;
        long_limit: string;
        long_remaining: number;
        short_remaining: number;
        status: number;
        results_requested: number;
        index:[{
            status: number;
            parent_id: number;
            id: number;
            results: number;
        }]
        search_depth: string;
        minimum_similarity: number;
        query_image_display: string;
        query_image: string;
        results_returned: number;
    }

    results: {
        ext_urls: [
            string
        ];
        title: string;
        da_id: number;
        author_name: string;
        author_url: string;
        anidb_aid ? : string;
        bcy_id ? : string;
        bcy_type ? : string;
        danbooru_id ? : string;
        ddb_id ? : string;
        drawr_id ? : string;
        e621_id ? : string;
        file ? : string;
        gelbooru_id ? : string;
        idol_id ? : string;
        imdb_id ? : string;
        konachan_id ? : string;
        member_link_id ? : string;
        mu_id ? : string;
        nijie_id ? : string;
        pawoo_id ? : string;
        pg_id ? : string;
        pixiv_id ? : string;
        sankaku_id ? : string;
        seiga_id ? : string;
        source ? : string;
        url ? : string;
        user_acct ? : string;
        yandere_id ? : string;
        anime - pictures_id ? : string;
        member_id ? : string;
        member_name ? : string;
    }
```
