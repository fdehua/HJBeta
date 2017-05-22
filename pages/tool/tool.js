//tool.js
//获取应用实例
var app = getApp()
var Api = require('../../utils/api.js');


Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
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
    })
  },
 

   getwxusercode: function(e) {
        var that = this  
        wx.login({
          success: function(res) {
            if (res.code) {
              //console.log('获取登录状态code！' + res.code)
              that.setData({
                  wxusercode: '登录状态code：' +res.code
                });
            //  wx.request({    
            //         url: 'https://mina.tijian18.com/api/WxOpen/OnLogin',    
            //         data: {code:res.code},    
            //         method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT    
            //         header:{
            //         'content-type': 'application/json'
            //         },
            //         success: function(res){   
            //             var obj={};  
            //             obj.openid=res.data.OpenId; 
            //             obj.sessionId=res.data.sessionId;    
            //             obj.expires_in=Date.now()+res.data.expires_in;    
            //             //console.log(obj);  
            //             wx.setStorageSync('user', obj);//存储openid   
            //              that.setData({
            //                 OpenId:res.data.OpenId,
            //                 sessionId:res.data.sessionId
            //               }) 
            //         },   
            //         fail: function(err){   
            //               that.setData({
            //                 wxusercodeinfo: '请求状态：fail'
            //               })
            //         }
            //  });

 Api.apiGet(Api.WxOpenOnLogin,{code:res.code}, (err, res) => {
       if(res.success){
          var obj={};  
          obj.openid=res.OpenId; 
          obj.sessionId=res.sessionId; 
          obj.code=res.code;    
          
          //console.log(obj);  
          wx.setStorageSync('user', obj);//存储openid   
          that.setData({
          OpenId:res.OpenId,
          sessionId:res.sessionId
          }) 
       }
          else
          {
            that.setData({
            OpenId:res.Message

            }) 
          }
    
      
    });

             
            } else {
              console.log('获取用户登录态失败！' + res.errMsg)
            }
          }
        });

  },
  testpost:function(e){
   var that = this
   var uservalue = wx.getStorageSync('user')
    var sessionId=uservalue.sessionId
  
   that.setData({
        formId:sessionId
      });
      
           that.setData({
        messageCode:'testpost'
      });
       wx.request({    
                    url: 'https://mina.tijian18.com/api/WxOpen/TestPost',    
                    data: {id:'id2017',loginname:'fdh'},    
                    method: 'POST',  
                    header:{
                    'content-type': 'application/json'
                    },
                    success: function(res){   
                            that.setData({
                            messageCode:res.data.id
                            })
                    },   
                    fail: function(err){   
                          that.setData({
                            messageCode: '请求状态：fail'
                          })
                    }
             });
             
  },
   testget:function(e){
     var that = this
        that.setData({
        messageCode:'testget'
      });
       wx.request({    
                    url: 'https://mina.tijian18.com/api/WxOpen/testget',    
                    data: {},    
                    method: 'GET',  
                    header:{
                    'content-type': 'application/json'
                    },
                    success: function(res){   
                            that.setData({
                            messageCode:res.data.id
                            })
                    },   
                    fail: function(err){   
                          that.setData({
                            messageCode: '请求状态：fail'
                          })
                    }
             });
             
  },
   formSubmit:function(e){
  var that = this
  var uservalue = wx.getStorageSync('user')
    var sessionId=uservalue.sessionId
  var formId=e.detail.formId
   that.setData({
        formIdsubmit:sessionId
      });
       wx.request({    
                    url: 'https://mina.tijian18.com/api/WxOpen/TemplateTest',    
                    data: {sessionId:sessionId,formId:formId},    
                    method: 'POST',  
                    header:{
                    'content-type': 'application/json'
                    },
                    success: function(res){   
                            that.setData({
                            messageCode:res.data.msg
                            })
                    },   
                    fail: function(err){   
                          that.setData({
                            OpenId: '请求状态：fail'
                          })
                    }
             });
             
  },
  testformSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.formId)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },

  wxpay:function(e){
    var that=this
    wx.login({
      success: function(res) {
        if (res.code)  {
          that.setData({
          wxusercode:res.code
          })
    var code=res.code;
    var state="|";
 Api.apiGet(Api.TenPayV3JsApi,{code:code,state:state}, (err, res) => {
          if(res.success){
          var objpay={};
              objpay.timeStamp=res.timeStamp;
              objpay.nonceStr=res.nonceStr;
              objpay.package=res.package;
              objpay.paySign=res.paySign;
              //console.log(obj);  
              wx.setStorageSync('objpay', objpay);//存储openid   
              that.setData({
              OpenId:res.OpenId,
              sessionId:res.sessionId
              }); 


            wx.requestPayment({
            'timeStamp': objpay.timeStamp,
            'nonceStr': objpay.nonceStr,
            'package': objpay.package,
            'signType': 'MD5',
            'paySign': objpay.paySign,
            'success':function(res){
              console.log(res); 
              that.setData({
              payinfo:res.errMsg
              }); 
            },
            'fail':function(res){
              console.log(res); 
              that.setData({
              payinfo:res.errMsg.requestPayment
             
              }); 
            },
            'complete':function(res){
              console.log(res); 
              that.setData({
              payinfo:res.errMsgrequestPayment
             
              }); 
            }


            });

          }
              else
              {
                that.setData({
                OpenId:res.Message

                }) 
              }
        
          
        });

        }
      }
    })
  }
 
   
})
