import axios from "axios";
const ajax = {
  options: {},
  get: function(url) {
    this.options = {
      method: "GET",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      url: url
    };
    return axios(this.options).then(function(result) {
      return result;
    });
  },
  post: function(url, params) {
    this.options = {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      url: url,
      data: params
    };
    return axios(this.options).then(function(result) {
      return result;
    });
  }
};
export default ajax;
