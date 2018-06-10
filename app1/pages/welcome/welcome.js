// welcome/welcome.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 跳转函数，点击本页‘开启小程序之旅"后执行的东西
   */
  onTapJump: function(event) {
      wx:wx.navigateTo({
        url: '../post/post',
        success: function(res) {console.log("jump success")},
        fail: function (res) { console.log("jump fail")},
        complete: function (res) { console.log("jump complete")},
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
    console.log("page is unload")
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