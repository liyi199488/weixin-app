class DBPost{
  //构造函数 
  constructor(postId){
    this.storageKeyName = 'potList';//所有的文章本地缓存存储键值
    this.postId=postId;
  }
  //得到全部文章信息
  getAllPostData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      res = require("../data/data.js").postList;
      wx.setStorageSync(this.storageKeyName, res);
    }
    return res;
  }
  //保存或更新缓存数据
  execSetStorageSync() {
    WX.setStorgeSync(this.storageKeyName, data);
  }
  //获取指定ID的文章数据
  getPostItemById() {
    var postData = this.getAllPostData();
    var len = postData.length;
    for (var i = 0; i < len; i++) {
      if (postData[i].postId == this.postId) {
        return {
          index: i,
          data: postData[i]
        }
      }
    }
  }
};

export { DBPost}

