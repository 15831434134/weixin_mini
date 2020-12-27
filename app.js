//app.js
// 生命周期分为页面的生命周期和应用的生命周期
// app.js是应用的生命周期,页面的生命周期文件夹下面的为life
App({
  // 1：应用第一次启动的时候就会触发的事件
  onLaunch(){
    console.log('onLaunch')
    //不能触发onPageNotFound事件
    // wx.navigateTo({
    //   url: '/11/22/33',
    // })
  },

  // 2:应用被用户看到时候触发的事件，比如来回切换后台又返回时
  onShow(){
    // 对应的数据或者页面效果 重置
    console.log('onShow')
  },

  //3:应用被隐藏
  onHide(){
    //暂停或者清除定时器
    console.log('onHide')
  },

  //4:应用代码发生了错误的时候，就会触发
  onError(err){
    // 在应用发生代码错误的时候，收集用户的错误信息，通过异步的请求，将错误的信息发送到后台
    console.log('错误了')

  },

  // 5:页面找不到就会触发
  // 应用第一次启动的时候，如果找不到第一个入口，就会触发
  onPageNotFound(){
    // 如果页面不存在了，通过js的方式来重新跳转页面，重新跳转到第二个首页
    console.log('onPageNotFpund')
    wx.navigateTo({
      url: '/pages/liu/liu',
    })
  }
})