var app = getApp();
Page({
  data:{
      id:"",//品牌id
      imgUrl:"",
      tel:"",
      brandName:"",
      tel:"",
      mail:"",
      website:"",
      desc:"",
      address:"",
      collected: false //是否已收藏
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that = this;
    this.requestFromService();
    this.setData({
        id:options.id,
    })
    //
    wx.setNavigationBarTitle({
      title: that.data.title,
      success: function(res) {
      }
    })
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
  requestFromService:function(re){
      var that = this;
      wx.request({
        url: 'http://localhost:8080/companyDetail',
        header: {
        'content-type': 'application/json'
      },
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        success: function(res){
          var data = res.data;
          console.log(data)
          that.setData({
            title: data.title,
            imgUrl:data.imgUrl,
            tel:data.tel,
            brandName:data.title,
            tel:data.tel,
            mail:data.mail,
            website:data.website,
            address: data.address,
            desc:data.desc
          })
        },
        fail: function(res) {
         console.log("请求失败");
        },
        complete: function() {
          // complete
        }
      }) 
  },
  calling:function(){
    wx.makePhoneCall({
      phoneNumber: '12345678900', //此号码并非真实电话号码，仅用于测试
      success:function(){
        console.log("拨打电话成功！")
      },
      fail:function(){
        console.log("拨打电话失败！")
      }
    })
  },
  // 添加企业到收藏夹
  addCompanyToF:function(){
    var company = this.data;
    console.log(this.data.collected)
    var tempCompany = this.globalData.userInfo[company.id];
    if(tempCompany != null){
        tempCompany.fav = company.fav;
        this.globalData.userInfo[company.id] = tempCompany;
        console.log(tempCompany.fav)
    }else{
      this.globalData.userInfo[company.id] = company
    }
  },
  // 从收藏夹减少企业
  reduceCompanyFromF:function(good){
        console.log(this.globalData.userInfo[company])
    if(good.buy == 0){
      delete(this.globalData.userInfo[company]);
      console.log("删除");
      console.log(this.globalData.userInfo[company]);
      return;
    }
    var tempCompany = this.globalData.userInfo[company.id];
    if(tempCompany){
      tempCompany.fav = company.fav;
      this.globalData.userInfo[company.id] = tempGood;
    }else{
      this.globalData.userInfo[company.id] = company;
    }
    console.log(this.globalData.userInfo[company.id]);
  }
})