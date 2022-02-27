export interface RequestParams {
    [index: string]: any;

    api_key?: string;
    testmode?: 1;
    dbmask?: number;
    dbmaski?: number;
    db?: number;
    dbs?: Array<number>;
    numres?: number;
    dedupe?: 0 | 1 | 2;
    hide?: 0 | 1 | 2 | 3;
    url?: string;
}

export interface HeaderIndex {
    status: number;
    parent_id: number;
    id: number;
    results: number;
}

export interface Header {
    user_id: string;
    account_type: string
    short_limit: string;
    long_limit: string;
    long_remaining: number;
    short_remaining: number;
    status: number;
    message?: string;
    results_requested: number;
    index: {
        [id: string]: HeaderIndex;
    }
    search_depth: string;
    minimum_similarity: number;
    query_image_display: string;
    query_image: string;
    results_returned: number;
}

export interface Result {
    ext_urls: Array<string>;
    title: string;
    da_id: number;
    author_name: string;
    author_url: string;
    anidb_aid?: string;
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
    mu_id?: string;
    nijie_id?: string;
    pawoo_id?: string;
    pg_id?: string;
    pixiv_id?: string;
    sankaku_id?: string;
    seiga_id?: string;
    source?: string;
    url?: string;
    user_acct?: string;
    yandere_id?: string;
    "anime-pictures_id"?: string;
    member_id?: string;
    member_name?: string;
}

export type Indices =
    | "3"
    | "4"
    | "5"
    | "6"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "16"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
    | "27"
    | "28"
    | "29"
    | "30"
    | "31"
    | "32"
    | "33"
    | "34"
    | "35"
    | "36";

export interface FindResult {
    header: Header;
    data: Array<Result>;
}