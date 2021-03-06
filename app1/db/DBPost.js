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
  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data);
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
  //收藏文档
collect(){
  return this.updatePostData('collect');
}
  //更新本地的点赞、评论信息、收藏、阅读量
  updatePostData(category)
  {
    var itemData=this.getPostItemById(),
    postData=itemData.data,
    allPostData=this.getAllPostData();
    switch(category)
    {
      case 'collect':
        //处理收藏
        if(!postData.collectionStatus)
        {
          //如果当前状态未收藏 
          postData.collectionNum++;
          postData.collectionStatus=true;
        }else{
          //如果当前状态是收藏 
          postData.collectionNum--;
          postData.collectionStatus = false;
        }
        break;
        default:
          break;
    }
  //更新数据库缓存
  allPostData[itemData.index]=postData;
  this.execSetStorageSync(allPostData);
  return postData;
  }
};

export { DBPost}

