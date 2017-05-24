// pages/order/index.js
//获取应用实例
var app = getApp()
var Api = require('../../utils/api.js');


Page({
  data: {
    remind: '加载中',
    bannerSrc: Api.WxOpenimgUrl + '/mec/02.png',
    userInfo: {},
    imgUrls: [
      'https://mina.tijian18.com/images/mec/02.jpg',
      'https://mina.tijian18.com/images/mec/03.jpg',
      'https://mina.tijian18.com/images/mec/01.jpg',
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
 

  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUser(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    });
 
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 3000);
  }
 
})
