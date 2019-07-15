App({

  globalData: {
    distinct: "risingyu"
  },

  onLaunch() {
    /* try {
      const res = wx.getSystemInfoSync()
      this.globalData.windowHeight = res.windowHeight;
      this.globalData.windowWidth = res.windowWidth;
    } catch (e) { } */
    try {
      const deviceInfo = wx.getStorageSync("deviceInfo");
      if(!deviceInfo) {
        const res = wx.getSystemInfoSync()
        this.globalData.windowHeight = res.windowHeight;
        this.globalData.windowWidth = res.windowWidth;
        wx.setStorageSync("deviceInfo", {
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }else {
        this.globalData.windowHeight = deviceInfo.windowHeight;
        this.globalData.windowWidth = deviceInfo.windowWidth;
      }
    } catch (e) { }
  }
})