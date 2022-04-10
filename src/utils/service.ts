import { ResponseData } from "@/typings";
import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "http://121.40.18.80:3001/";
/**
 * 主要params参数
 * @params method {string} 方法名
 * @params url {string} 请求地址  例如：/login 配合baseURL组成完整请求地址
 * @params baseURL {string} 请求地址统一前缀 ***需要提前指定***  例如：http://cangdu.org
 * @params timeout {number} 请求超时时间 默认 30000
 * @params params {object}  get方式传参key值
 * @params headers {string} 指定请求头信息
 * @params withCredentials {boolean} 请求是否携带本地cookies信息默认开启
 * @params validateStatus {func} 默认判断请求成功的范围 200 - 300
 * @return {Promise}
 */
//请求拦截器
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

// axios.defaults.headers.put['Content-Type'] = 'application/json; charset=UTF-8';
export default class Server {
  axios(method: string, url: string, params = {}): Promise<ResponseData> {
    return new Promise((resolve, reject) => {
      if (typeof params !== "object") params = {};
      // if(method === 'post' && params.data){
      //     params.data = qs.stringify(params.data);
      // }
      let _option = params;
      _option = {
        method,
        url,
        baseURL: baseURL,
        timeout: 30000,
        params: null,
        data: null,
        // headers: { 'content-type': 'application/x-www-form-urlencoded' },
        validateStatus: (status: number) => {
          return status >= 200 && status < 300;
        },
        ...params,
      };
      axios.request(_option).then(
        (res) => {
          if (res) {
            resolve(
              typeof res.data === "object" ? res.data : JSON.parse(res.data)
            );
          }
        },
        (error) => {
          if (error.response) {
            reject(error.response.data);
          } else {
            reject(error);
          }
        }
      );
    });
  }
}
