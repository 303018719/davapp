Page({
  data:{
    nickName:'',
    avatarUrl:'',
    province:'',
    city:'',
    brandList:null
  },
  onLoad:function(options){
    var app = getApp();
    console.log(app.globalData)
    this.setData({
      city:app.globalData.city,
      province:app.globalData.province,
      nickName:app.globalData.userInfo.nickName,
      avatarUrl:app.globalData.userInfo.avatarUrl
    });
    this.requestServiceData()
    
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  listItemClick:function(e){
    console.log(JSON.stringify(e));
      wx.navigateTo({
        url: '../companyDetail/companyDetail',
      })
  },
  // 请求我的数据
  requestServiceData:function(){
    var that = this;
    wx.request({
      url: 'http://localhost:8080/', 
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var data = res.data;
        console.log(data)
        that.setData({
          articleList: data
        });
      }, 
      fail: function () {
        wx.showToast({
          title: '请求失败',
        })
      },
      complete: function () {
      }
    })
  }
})