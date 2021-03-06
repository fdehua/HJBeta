//index.js
//获取应用实例
var app = getApp()
var Api = require('../../utils/api.js');


Page({
  data: {
    remind: '加载中',
    bannerSrc: Api.WxOpenimgUrl + '/banner/b2.png',
    userInfo: {},
     imgUrls: [
      'https://mina.tijian18.com/images/banner/b1.png',
      'https://mina.tijian18.com/images/banner/b3.png',
      'https://mina.tijian18.com/images/banner/b2.png',
    ],
    indicatorDots: true,
    vertical:false,
    autoplay: true,
    interval: 3000,
    duration: 1200,

   
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUser(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    
    setTimeout(function () {
      that.setData({
        remind: ''
      });
    }, 3000);
  } ,
  /**
  * 用户点击右上角分享
  */
  onShareAppMessage: function () {
    return {
      title: '华检体检小程序欢迎您',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
        Console.log(res.shareTickets)
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }

})
