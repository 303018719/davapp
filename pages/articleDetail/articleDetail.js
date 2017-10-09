var app = getApp();
Page({
  data:{
      id:"",//文章id
      articleDetail: "",
      editor:"",
      date:"",
      form:""
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    this.setData({
        articleDetailId:options.id,
    })
    //
    wx.setNavigationBarTitle({
      title: options.title,
      success: function(res) {
      }
    })
    this.requestFromService()
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
//   从服务器请求数据
  requestFromService:function(){
      var that = this;
      wx.request({
        url: 'http://localhost:8080/articleDetail',
        header: {
        'content-type': 'application/json'
      },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        success: function(res){
          var data = res.data;
          that.setData({
            imgUrl: data.imgUrl,
            articleDetail: data.detail,
            editor:data.editor,
            date:data.date,
            form:data.form
          })
        },
        fail: function(res) {
         console.log("请求失败");
        },
        complete: function() {
          // complete
        }
      }) 
  }
})