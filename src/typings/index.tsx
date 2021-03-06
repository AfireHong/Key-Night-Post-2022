export interface cate {
  cate_id: number;
  cate_name: string;
  count: number;
}

export interface tag {
  tag_id: number;
  tag_name: string;
  count: number;
}
export interface Iarticle {
  article_id?: number;
  title?: string;
  summary?: string;
  create_time?: string;
  modify_time?: string;
  content?: string;
  cate?: cate;
  tags?: tag[];
  img_url?: string;
  view_count?: number;
  copyright?: number;
}

export interface IarticleLsitItem {
  article_id: number;
}
export interface ResponseData<T = any> {
  code: number;
  msg: string;
  data: T;
}
export interface yearArticle {
  year: string;
  list: Iarticle[];
}
export interface filterRsp {
  list: yearArticle[];
  count: number;
  id?: string;
  name?: string;
}
export interface friend {
  id?: string;
  name: string;
  link: string;
  avatar: string;
  description: string;
  create_time?: string;
  is_show?: number;
}
export interface getFriendListRsp {
  rows: friend[];
  count: number;
}
