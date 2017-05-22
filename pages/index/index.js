//index.js
//获取应用实例
var app = getApp()
var Api = require('../../utils/api.js');


Page({
  data: {
    remind: '加载中',
    bannerSrc: Api.WxOpenimgUrl + '/banner/2.jpg',
    userInfo: {},
     imgUrls: [
      'https://mina.tijian18.com/images/banner/1.jpg',
      'https://mina.tijian18.com/images/banner/2.jpg',
      'https://mina.tijian18.com/images/banner/3.jpg'
    ],
    indicatorDots: true,
    vertical:false,
    autoplay: true,
    interval: 3000,
    duration: 1200,

    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch']
      }, {
        id: 'feedback',
        name: '操作反馈',
        open: false,
        pages: ['action-sheet', 'modal', 'toast', 'loading']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '地图',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas']
      }
    ]
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
  },
  widgetsToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setData({
      list: list
    });
  }
 

})
