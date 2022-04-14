import request from "@/utils/service";
import { ResponseData, tag } from "@/typings";
export default new (class Tag extends request {
  tagList(): Promise<ResponseData<tag[]>> {
    return this.axios("get", "/tag/list");
  }
})();
