// pages/user/user.js
var app = getApp()
var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;
Page({
  onLoad: function () {
    var that = this
 
     // 实例化API核心类
        qqmapsdk = new QQMapWX({
            key: '2DEBZ-JXW3U-MIVVB-2D5V4-K2WJ3-OUBI3'
        });
            //调用应用实例的方法获取全局数据
    app.getUser(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
  },
  
  data: {},
  login: function () {
    var that = this
    
    wx.login({
      success: function (res) {
        app.globalData.hasLogin = true
        that.setData({
          hasLogin: true
        })
        that.update()
      }
    })
  },
   onShow: function () {
        var that = this
        // 调用接口
        qqmapsdk.reverseGeocoder({
           location: {
        latitude: 31.240930, //纬度
        longitude: 121.520660 //经度
    },
            success: function (res) {
              
                that.setData({
                wxmap: res.result.formatted_addresses.recommend
        })
              
            },
            fail: function (res) {
                console.log(res);
            },
        complete: function (res) {
            console.log(res);
        }
    });
   },
   
  downloadPdf: function() {
    app.showLoadToast("","");
    wx.downloadFile({
      url: 'https://mina.tijian18.com/pdf/1.pdf',
      header: {},
      success: function (res) {
        var filePath = res.tempFilePath 
    
        wx.openDocument({
          filePath: filePath
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })

  },
  onOpenCard: function()
  {
    // var uservalue = wx.getStorageSync('user')
    // var sessionId = uservalue.sessionId
    // var openid = uservalue.openid
    // var timestamp = uservalue.timestamp
 

    wx.addCard({
      cardList: [
        {
          cardId: '',
          cardExt: '{"code": "", "openid": "", "timestamp": "", "signature":""}'
        }
      ],
      success: function (res) {
        console.log(res.cardList) // 卡券添加结果

        wx.openCard({
          cardList: [
            {
              cardId: 'pbLatjtZ7v1BG_ZnTjbW85GYc_E8',
              code: '916679873278'
            }
          ],
          success: function (res) {
          }
        })


      }
    })





    
  }
})
