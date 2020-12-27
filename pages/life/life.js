// pages/life/life.js
Page({

  /**
   * 页面的初始数据
   * data中最好只存放页面中用的字段
   * iphone部分机型不支持wepp格式图片。找后台沟通，或者自己正则修改
   * 也可以不在data中定义变量，在外部也可以
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   * 发送异步请求来初始化页面数据
   * 也可以获取url传递过来的参数
   */
  onLoad: function (options) {
    console.log('onLoad')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('show')
  },

    /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('ready')
  },

  /**
   * 生命周期函数--监听页面隐藏,页面的路由的跳转以及前后台切换
   *  路由跳转的时候 不带有关闭租字样的（redirect，relaunch，navigateBack）
   */
  onHide: function () {
    console.log("隐藏啦")
  },

  /**
   * 生命周期函数--监听页面卸载
   * 路由跳转的时候 带有关闭租字样的（redirect，relaunch，navigateBack）
   * 会触发此方法
   */
  onUnload: function () {
    console.log("卸载的")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 页面的数据刷新，需要app.json中配置enablePullDownRefresh才可生效
    console.log('下拉了')
  },

  /**
   * 页面上拉触底事件的处理函数，需要页面滚动
   */
  onReachBottom: function () {
    // 上拉加载下一页数据
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('转发了')
  },

  /**
   * 页面滚动，就可以触发
   */
  onPageScroll(){

  },

  /**
   * 页面尺寸发生改变的时候，就会触发,
   * 小程序发生了横竖屏切换的时候触发
   * 需要配置 "pageOrientation":"auto"
   */
  onResize(){
    console.log('onResize')
  },

  /**
   * 必须要求当前页面也是tabbar页面
   * 点击自己的tab item的时候触发
   */
  onTabItemTap(){},

  /**
   * 上滑触底事件
   */
  onReachBottom(){

  }
})