var app = getApp();
Page({
  data:{
    hotCity:["上海","北京","广州","深圳","武汉","天津","西安","南京","杭州","成都","重庆"]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
        product_group_id:options.par,
        title:options.title,
        location:app.globalData.city.slice(0,2)
    })
    wx.setNavigationBarTitle({
      title: "当前城市-" + app.globalData.city
    })
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'dav查询', // 分享标题
      desc: 'dav查询', // 分享描述
      path: 'http://www.dav01.com' // 分享路径
    }
  },
  reduceImageClick(par){
     var index = parseInt(par.currentTarget.id);
     var obj = this.data.dataSource[index];
     if (obj.buy > 0){
       obj.buy -= 1;
       this.setData({
          dataSource:this.data.dataSource
      })
     }
     var app = getApp();
    app.reduceGoodFromShopCar(obj)
     
  },
  formSubmit:function(e){
    if(e.detail.value.searchTxt){
      wx.navigateTo({
      url:'../result/result',
      data: e.detail.value
    })    
    }
    else {
      wx.showToast({
        title:"请输入查询内容"
      })
    }
    
  },
  locaiton: function(){
    var app = getApp();
    wx.showModal({
  title: '重新定位',
  content: '您当前定位为：'+ app.globalData.city + "确定要重新定位吗？",
  success: function(res) {
    if (res.confirm) {
      app.location();
    } else if (res.cancel) {
      return;
    }
  }
})
    
    

  }
})