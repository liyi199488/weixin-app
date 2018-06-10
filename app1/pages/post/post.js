// pages/post/post.js
Page({

  /**
   * 页面的初始数据
   */
  data: {  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var iceCreamData={
      object: { date: "2017年2月2日" },
      title: "小时候的冰棍和雪糕",
      postImg: '/image/post/post-4.jpg',
      avatar: '/image/avatar/avatar-5.png',
      content: '冰棍与雪糕绝对不是同一个东西，3到5毛钱的雪糕犹如现在的哈哈根达斯，而5分到1毛 的冰杨棍儿就像现在的老冰棒，时过境迁，……',
      readingNum: 92,
      collectNum: 100,
      collectNum: { array: [100] },
      commentNum: 7
    };
    this.setData(
      { postData: iceCreamData}
          )
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady:页面被渲染");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow:页面被显示");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide:页面被隐藏");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload:页面被加载");
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})