Page({
  data:{
    nowLocation: null,
    currentId: "brand-recommend",
    searchTxt: "上海三思 | DET德浩 | 台达丽讯",
    navList :[{"id":1,"title":"大屏显示","picture_url":"/pages/resource/icon_xianshi.png"},
    {"id":2,"title":"信号处理","picture_url":"/pages/resource/icon_xinhao.png"},
    {"id":3,"title":"集中控制","picture_url":"/pages/resource/icon_jikong.png"},
    {"id":4,"title":"数字会议","picture_url":"/pages/resource/icon_huiyi.png"},
    {"id":5,"title":"视频会议","picture_url":"/pages/resource/icon_web.png"},
    {"id":6,"title":"音频扩音","picture_url":"/pages/resource/icon_yinpin.png"},
    {"id":7,"title":"灯光舞台","picture_url":"/pages/resource/icon_dengguang.png"},
    {"id":8,"title":"公共广播","picture_url":"/pages/resource/icon_guangbo.png"},
    {"id":9,"title":"摄录编播","picture_url":"/pages/resource/icon_lubo.png"},
    {"id":10,"title":"监控安防","picture_url":"/pages/resource/icon_anfang.png"}], //图标导航信息
    brandList: null,
    recommendQy: [{"title":"推荐品牌某公司很长需要换行","imgUrl":"/images/brand.png"},
    {"title":"推荐品牌某公司很长需要换行推荐品牌某公司很长需要换行","imgUrl":"/images/brand.png"},
    {"title":"推荐品牌某公司很长需要换行","imgUrl":"/images/brand.png"},
    {"title":"推荐品牌某公司很长需要换行","imgUrl":"/images/brand.png"},
    {"title":"推荐品牌某公司很长需要换行","imgUrl":"/images/brand.png"},
    {"title":"推荐品牌某公司很长需要换行","imgUrl":"/images/brand.png"},
    {"title":"推荐品牌某公司很长需要换行","imgUrl":"/images/brand.png"},
    {"title":"推荐品牌某公司很长需要换行","imgUrl":"/images/brand.png"},
    {"title":"推荐品牌某公司很长需要换行","imgUrl":"/images/brand.png"},
    {"title":"推荐品牌某公司很长需要换行","imgUrl":"/images/brand.png"}],//推荐品牌
    hotQy: [{"title":"热门某公司很长需要换行"},
    {"title":"热门某公司很长需要换行"},
    {"title":"热门某公司很长需要换行"},
    {"title":"热门某公司很长需要换行"},
    {"title":"热门某公司很长需要换行"},
    {"title":"热门某公司很长需要换行"},
    {"title":"热门某公司很长需要换行"},
    {"title":"热门某公司很长需要换行"},
    {"title":"热门某公司很长需要换行"},
    {"title":"热门某公司很长需要换行"}],//热门品牌
    nearbyQy: [{"title":"在我附近某公司很长需要换行"},
    {"title":"在我附近某公司很长需要换行"},
    {"title":"在我附近某公司很长需要换行"},
    {"title":"在我附近某公司很长需要换行"},
    {"title":"在我附近某公司很长需要换行"},
    {"title":"在我附近某公司很长需要换行"},
    {"title":"在我附近某公司很长需要换行"},
    {"title":"在我附近某公司很长需要换行"},
    {"title":"在我附近某公司很长需要换行"},
    {"title":"在我附近某公司很长需要换行"}],//在我附近
  },
  onLoad:function(options){
    // 获取品牌列表等数据并渲染页面
    var app = getApp();
    this.getDataFromServer();
    this.renderControl();
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
      title: '数字音视查询', // 分享标题
      desc: '数字音视工程网，中国音视行业新闻', // 分享描述
      path: 'http://www.dav01.com' // 分享路径
    }
  },
  iconNavto:function(e){
    var target = e.currentTarget;
    console.log(target.id);
      wx.navigateTo({
        url: '../companyList/companyList?title='+ target.title + 'id=' + target.id,
      })
  },
  // 数据渲染
  renderControl:function(){
    var app = getApp();
    this.setData({
      brandList: this.data.recommendQy,
      searchTxt: app.globalData.searchTxt,
      nowLocation:app.globalData.city
    });
    console.log(this.data.nowLocation)
  },
  //获取数据从服务器
  getDataFromServer:function(){
      var app = getApp();
      var that = this;
  },
  iconNavto: function(e){
    var id = e.currentTarget.id;
    var data = this.data.navList[id];
    wx.navigateTo({
      url: '../category/category?category_id='+ id + "&title=" + data.title,
      success: function(res){
        console.log(data)
      },
      fail: function() {
      },
      complete: function() {
      }
    })
  },
  indexTab: function(tap){
    var id = tap.currentTarget.id;
    this.setData({currentId: id});
    switch(id){
      case "brand-recommend": this.setData({brandList: this.data.recommendQy}); break;
      case "brand-hot": this.setData({brandList: this.data.hotQy});break;
      case "brand-nearby": this.setData({brandList: this.data.nearbyQy});break;
      default : wx.navigateTo({
        url: "../search/search",
        success: function(res){
        console.log(res)
      },
      fail: function() {
      },
      complete: function() {
      }
      });
    } 
  },
  changeLoca: function(){
    wx.navigateTo({
      url: '../search/search'
    })
  },
  indexQyDetail: function(tap){
    var data = tap.currentTarget;
    var id = data.id;
    var title = data.title;
    wx.navigateTo({
      url:'../companyDetail/companyDetail?id=' + id + '&title=' + title
    })
  }
})