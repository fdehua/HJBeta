//app.js

App({
  //小程序初始化
  onLaunch: function () {
    var that = this
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  
  //记录地图坐标
    wx.getLocation({
          type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
          success: function(res){
            // success
            that.globalData.latitude = res.latitude
            that.globalData.longitude = res.longitude
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        })
      },
    //获取微信用户基本信息
    getUser:function(cb){
      var that = this
      if(this.globalData.userInfo){
        typeof cb == "function" && cb(this.globalData.userInfo)
      }else{
        //调用登录接口
        wx.login({
          success: function () {
            wx.getUserInfo({
              success: function (res) {
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              }
            })
          }
        })
      }
    },

    getUserInfo: function(cb){
    //获取微信用户信息
    wx.getUserInfo({
      success: function(res){
        typeof cb == "function" && cb(res);
        }
      });
    },
    showErrorModal: function (content, title) {
      wx.showModal({
        title: title || '加载失败',
        content: content || '未知错误',
        showCancel: false
      });
    },
    showLoadToast: function (title, duration) {
      wx.showToast({
        title: title || '加载中',
        icon: 'loading',
        duration: duration || 10000
      });
    },
    //小程序启动从后台进入前台显示
    onShow: function () {
        console.log('App Show')
    },
    //小程序从前台进入后台
    onHide: function () {
        console.log('App Hide')
    },
    //当小程序发生脚本错误，或者 api 调用失败
    onError: function(msg) {
        console.log(msg)
    },
    //全局数据
    globalData:{
        userInfo:null,
        latitude:null,
        longitude:null,
        hasLogin: false
    },
})