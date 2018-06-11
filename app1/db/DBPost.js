class DBPost{
  //构造函数 
  constructor(url){
    this.storageKeyName = 'potList';//所有的文章本地缓存存储键值
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

};

export { DBPost}

