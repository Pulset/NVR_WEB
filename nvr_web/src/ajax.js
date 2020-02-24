import axios from "axios";
import qs from "qs";
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
      data: qs.stringify(params)
    };
    return axios(this.options)
      .then(function(result) {
        return result;
      })
      .catch(function(error) {
        // handle error
        return error;
      })
      .then(function() {
        // always executed
      });
  }
};
export default ajax;
