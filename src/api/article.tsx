import request from "@/utils/service";
import { ResponseData, yearArticle } from "@/typings";
export default new (class Article extends request {
  articleList(pageSize = 5, page = 1): Promise<ResponseData> {
    return this.axios("get", "/article/list", { params: { pageSize, page } });
  }
  articleInfo(id: number | string): Promise<ResponseData> {
    return this.axios("get", "/article", { params: { id } });
  }
  articleByTAg(id: string): Promise<ResponseData<yearArticle[]>> {
    return this.axios("get", "/tag/article", { params: { id } });
  }
})();
