// pages/post/post-detail/post-detail.js
import { DBPost } from "../../../db/DBPost.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
    /**
   * 处理文章收藏
   */
  onCollectionTop(event){
    //dbPost对象已经在onLoad函数里被保存到了this变量中，不用再次实例化
    var newData=this.dbPost.collect();
    //重新绑定数据，注意，不要将整个newData全部作为setData的参数,应有选择的更新
    this.setData(
      {
        'post.collectionStatus':newData.collectionStatus,
        'post.collectionNum':newData.collectionNum
      }
    );
    wx.showToast({
      title: newData.collectionStatus?'收藏成功':'取消成功',
      duration:1000,
      icon:'success',
      mask:true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var postId=options.id;
    this.dbPost=new DBPost(postId);
    this.postData=this.dbPost.getPostItemById().data;
    this.setData(
      {
        post:this.postData
      }
    )

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      wx.setNavigationBarTitle({
        title: this.postData.title
      })
  
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})