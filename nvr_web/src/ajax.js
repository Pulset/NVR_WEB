import axios from "axios";
import qs from "qs";
const ajax = {
  options: {},
  baseUrl: "http://yapi.demo.qunar.com/mock/81186/",
  get: function(url) {
    this.options = {
      method: "GET",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      url: this.baseUrl + url
    };
    return axios(this.options).then(function(result) {
      return result.data;
    });
  },
  post: function(url, params) {
    this.options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      url: this.baseUrl + url,
      data: qs.stringify(params)
    };
    return axios(this.options).then(function(result) {
      return result.data;
    });
  }
};
export default ajax;
