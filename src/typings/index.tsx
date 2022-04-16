export interface Icate {
  cate_id: number;
  cate_name: string;
}

export interface Itag {
  tag_id: number;
  tag_name: string;
}
export interface Iarticle {
  article_id: number;
  title: string;
  summary?: string;
  create_time?: string;
  modify_time?: string;
  content?: string;
  cate?: Icate;
  tags?: Itag[];
  img_url?: string;
  view_count?: number;
}

export interface IarticleLsitItem {
  article_id: number;
}
export interface ResponseData<T = any> {
  code: number;
  msg: string;
  data: T;
}
export interface tag {
  tag_id: number;
  tag_name: string;
  count: number;
}
export interface yearArticle {
  year: string;
  list: Iarticle[];
}
