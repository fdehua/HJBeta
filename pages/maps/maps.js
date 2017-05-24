// pages/map/maps.js
var app = getApp()
var Api = require('../../utils/api.js');
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;


Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: '/images/icon/location.png',
      id: 0,
      latitude: 31.240930,
      longitude: 121.520660,
      title: '华检体检中心(浦东分院)',
      alpha: 1,
      width: 30,
      height: 30
    },
    {
      iconPath: '/images/icon/location.png',
      id: 0,
      latitude: 31.263280,
      longitude: 121.621630,
      title: '华检体检中心(金桥店)',
      alpha: 1,
      width: 30,
      height: 30
    },
    {
      iconPath: '/images/icon/location.png',
      id: 0,
      latitude: 31.211850,
      longitude: 121.459140,
      title: '华检体检中心(淮海店)',
      alpha: 1,
      width: 30,
      height: 30
    }],
    //指定一系列坐标点，从数组第一项连线至最后一项
    // polyline: [{
    //   points: [{
    //     longitude: 113.3245211,
    //     latitude: 23.10229
    //   }, {
    //     longitude: 113.324520,
    //     latitude: 23.21229
    //   }],
    //   color: "#FF0000DD",
    //   width: 2,
    //   dottedLine: true
    // }],
    //在地图上显示圆
    circles: [{
    }],
    //在地图上显示控件，控件不随着地图移动
    // controls: [{
    //   id: 1,
    //   iconPath: '/image/icon/map.png',
    //   position: {
    //     left: 0,
    //     top: 200,
    //     width: 30,
    //     height: 30
    //   },
    //   clickable: true
    // }]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: '2DEBZ-JXW3U-MIVVB-2D5V4-K2WJ3-OUBI3'
    });
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})