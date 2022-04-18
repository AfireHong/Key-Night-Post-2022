import { ResponseData } from "@/typings";
import axios from "axios";
const baseURL = import.meta.env.VITE_APP_API;

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

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
