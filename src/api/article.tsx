import request from "@/utils/service";
import { ResponseData } from "@/typings";
export default new (class Article extends request {
  articleList(): Promise<ResponseData> {
    return this.axios("get", "/article/list");
  }
  articleInfo(id: number): Promise<ResponseData> {
    return this.axios("get", "/article", { params: { id } });
  }
})();
