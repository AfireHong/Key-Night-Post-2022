import request from "@/utils/service";
import { ResponseData, cate } from "@/typings";
export default new (class Cate extends request {
  cateList(): Promise<ResponseData<cate[]>> {
    return this.axios("get", "/cate/list");
  }
})();
