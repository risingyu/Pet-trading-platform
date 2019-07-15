const app = getApp();

Page({

  data: {
    address: "",
    type: "",
    message: "",
    contact: ""
  },

  onLoad(options){
    this.getDetailInfo(options.id);
  },

  getDetailInfo(id) {
    wx.request({
      url: 'https://nuanwan.wekeji.cn/student/index.php/trade/get_item',
      data: {
        distinct: app.globalData.distinct,
        id: id
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: this.getDetailSucc.bind(this)
    })
  },

  getDetailInfo(res) {
    const result = res.data.data;  
    this.setData({
      address: result.address,
      type: result.type,
      message: result.message,
      contact: result.contact
    })
  } 
})