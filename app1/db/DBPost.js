var DBPost = function (){
  this.storageKeyName='potList';//所有的文章本地缓存存储键值
};

DBPost.prototype={
  //得到全部文章信息
  getAllPostData:function(){
    var res=wx.getStorageSync(this.storageKeyName);
    if(!res){
      res=require("../data/data.js").postList;
      wx.setStorageSync(this.storageKeyName,res);
    }
    return res;
  },
  //本地缓存 保存/更新
  execSetStorageSync:function(data){
    WX.setStorgeSync(this.storageKeyName,data);
  },
};
module.exports={
  DBPost:DBPost
};
