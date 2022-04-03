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

export interface Response {
  header: ResponseHeader;
  results: Result[];
}

export interface ResponseHeader {
  user_id: string;
  account_type: string;
  short_limit: string;
  long_limit: string;
  long_remaining: number;
  short_remaining: number;
  status: number;
  results_requested: string;
  index: { [key: string]: Index };
  search_depth: string;
  minimum_similarity: number;
  query_image_display: string;
  query_image: string;
  results_returned: number;
  message?: string;
}

export interface Index {
  status: number;
  parent_id: number;
  id: number;
  results: number;
}

export interface Result {
  header: ResultHeader;
  data: Data;
}

export interface Data {
  ext_urls: string[];
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
}

export interface ResultHeader {
  similarity: string;
  thumbnail: string;
  index_id: number;
  index_name: string;
  dupes: number;
  hidden: number;
}
