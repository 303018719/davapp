Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    pageSize:3,
    articleList:null,
    scrollHeight:"",
    scrollTop:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
          success:function(res){
              //console.log(res.windowHeight);
              that.setData({
                  scrollHeight:res.windowHeight
              });
          }
      });
    this.requestServiceData()
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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
  /*
   *获取数据
   */
  requestServiceData:function(){
    var that = this;
    wx.request({
      url: 'http://localhost:8080/', 
      data:{
        page:that.data.page
      },
      success: function (res) {
        var data = res.data;
        that.setData({
          articleList: data
        });
        //console.log(data)
      },
       fail: function () {
        wx.showToast({
          title: '请求失败',
        })
      },
      complete: function () {
      }
    })
  },
  navToDetail: function(e){
    var id = e.currentTarget.id;
    var article = this.data.articleList[id];
    wx.navigateTo({
      url:"/pages/articleDetail/articleDetail?title=" + article.title + "&id=" + id,
      success: function(res){
      },
      fail: function() {
      },
      complete: function() {
      }
    })
  },
  loadMore: function(){
    var that = this;
    that.setData({
      page: that.data.page+1
    })
    console.log(that.data.page)
    console.log(that.data.pageSize)
    
      wx.request({
      url: 'http://localhost:8080/',
      data: {
        page: that.data.page
      },
      success: function(res){
        wx.showToast({
          title: '数据加载中',
        })
        var data = res.data;
        console.log(JSON.stringify(res.data))
        //var data = JSON.parse(JSON.stringify(res.data).concat(JSON.stringify(that.data.articleList)));
        that.setData({
          articleList: data.result
        })
        console.log("loadmore page = "+that.data.page)
      },
      fail: function(){

      },
      complete: function(){
        wx.hideToast({
          title: '数据加载中',
        })
      }
    })
  },
  bindDownLoad: function(){
    if(this.data.page < this.data.pageSize){
      this.loadMore();
    }
  },
  topLoad: function(res){
    console.log("触发了上滑触底事件")
  },
  scroll:function(event){
     //该方法绑定了页面滚动时的事件，我这里记录了当前的position.y的值,为了请求数据之后把页面定位到这里来。
      this.setData({
          scrollTop : event.detail.scrollTop
      });
   }
})