var bmap = require('/libs/bmap-wx/bmap-wx.min.js');  
App({
  // 全局变量
  globalData:{
    ak:"nRelygK42UCDxRK1Z2FO2CPLL5srHtzg",
    userInfo:null,//用户信息
    city:"",//用户城市信息
    province:"",
    navList:null
  },
   onLaunch: function () {
     var that = this;    
    wx.getUserInfo({
      success: function(res){
        // success
        that.globalData.userInfo = res.userInfo;
        console.log(that.globalData.userInfo)
      },
      fail: function() {
        // fail
        console.log("获取失败！")
      },
      complete: function() {
        // complete
        console.log("获取用户信息完成！")
      }
    });
    // 获取用户定位信息
    this.getUserLocation()
    //获取系统信息
    this.globalData.systemInfo = wx.getSystemInfoSync();
  },
  onShow:function(){
    var that = this;
      wx.getStorage({
      key: 'globalData',
      success: function(res){
        that.globalData = res.data;
      },
      fail: function() {
      },
      complete: function() {
      }
    })
  },
  onHide:function(){
    var that = this;
    wx.setStorage({
      key: 'globalData',
      data: that.globalData,
      success: function(res){
      },
      fail: function() {
      },
      complete: function() {
      }
    })
  },
  // 获取位置信息
  getUserLocation:function(res){
   this.location();
    
  },
  location:function(){
    var that = this;
    //获取定位地理位置 
    // 新建bmap对象   
    var BMap = new bmap.BMapWX({   
        ak: that.globalData.ak   
    });   
    var fail = function(data) {   
        console.log(data);  
    };   
    var success = function(data) {     
        //缓存城市信息
        that.globalData.city = data.originalData.result.addressComponent.city.slice(0,2);
        that.globalData.province =  data.originalData.result.addressComponent.province.slice(0,2); 
    }   
    // 发起regeocoding检索请求   
    BMap.regeocoding({   
        fail: fail,   
        success: success  
    });
  }
})