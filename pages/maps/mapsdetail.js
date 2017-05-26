// pages/maps/mapsdetail.js
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
      iconPath: '/images/icon/location1.png',
      id: 0,
      latitude: 31.240930,
      longitude: 121.520660,
      title: '上海市浦东大道545号裕景坊2F',
      alpha: 1,
      width: 30,
      height: 30
    }
    ],
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
    controls: [{
      id: 1,
      iconPath: '/images/icon/address.png',
      position: {
        left: 0,
        top: 200,
        width: 30,
        height: 30
      },
      clickable: true
    }]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 实例化API核心类
    qqmapsdk = new QQMapWX({
      key: '2DEBZ-JXW3U-MIVVB-2D5V4-K2WJ3-OUBI3'
    });
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = 31.240930
        var longitude = 121.520660
        var newMeters = Api.getDistance(res.latitude, res.longitude, 31.240096, 121.519496).toFixed(2);
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28,
          name: '浦东陆家嘴店（距离' + newMeters+'米）',
          address:'上海市浦东大道545号裕景坊2F（裕景大饭店裙楼，东方路口）'
        })
      }
    });

    //计算距离
    // var newMeters = Api.getDistance(31.240930, 121.520660, 31.240096, 121.519496);
    // this.setData({
    //   distance: newMeters
    // })
  },
  getCenterLocation2: function () {
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
     },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function (res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },

  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function () {
    this.mapCtx.translateMarker({
      markerId: 0,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: 23.10229,
        longitude: 113.3345211,
      }
       
    })
  },
  includePoints: function () {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
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
  
  }
})