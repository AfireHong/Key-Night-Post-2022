import request from "@/utils/service";
import { ResponseData, friend, getFriendListRsp } from "@/typings";
export default new (class Friend extends request {
  friendList(): Promise<ResponseData<getFriendListRsp>> {
    return this.axios("get", "/friend/list");
  }
})();
