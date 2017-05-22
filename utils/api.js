'use strict';
//图片路径
const imgUrl = 'https://mina.tijian18.com/images';
// api 路径
const apiUrl = 'https://mina.tijian18.com/api';

// get请求方法
function apiGet(url, data,callback) {
  // return callback(null, top250)
  wx.request({
    method: 'GET',
    url: url,
    header: { 'content-type': 'application/json' },
    data: data,
    success (res) {
      callback(null, res.data)
    },
    fail (e) {
      console.error(e)
      callback(e)
    }
  })
}

// post请求方法
function apiPost(url, data, callback) {
  wx.request({
    method: 'POST',
    url: url,
    header: {'content-type': 'application/json'},
    data: data,
    success (res) {
      callback(null, res.data)
    },
    fail (e) {
      console.error(e)
      callback(e)
    }
  })
}

// postForm请求方法
function apiPostForm(url, data, callback) {
  wx.request({
    method: 'POST',
    url: url,
    header: {'content-type': 'application/x-www-form-urlencoded'},
    data: data,
    success (res) {
      callback(null, res.data)
    },
    fail (e) {
      console.error(e)
      callback(e)
    }
  })
}


module.exports = {
  // API({controller}/{action}/{id})
    WxOpenOnLogin: apiUrl + "/WxOpen/OnLogin",
    WxOpenTestGet: apiUrl + "/WxOpen/TestGet",
    WxOpenTestPost: apiUrl + "/WxOpen/TestPost",
    WxOpenTemplateTest: apiUrl + "/WxOpen/TemplateTest",
    TenPayV3JsApi: apiUrl + "/TenPayV3/JsApi",
    WxOpenimgUrl:imgUrl,
  // METHOD
  apiGet: apiGet,
  apiPost: apiPost,
  apiPostForm:apiPostForm

}
