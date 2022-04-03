import request from "@/utils/service";
import { ResponseData } from "@/typings";
export default new (class Article extends request {
  articleList(pageSize = 5, page = 1): Promise<ResponseData> {
    return this.axios("get", "/article/list", { params: { pageSize, page } });
  }
  articleInfo(id: number): Promise<ResponseData> {
    return this.axios("get", "/article", { params: { id } });
  }
})();
