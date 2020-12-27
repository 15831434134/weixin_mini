// components/Tabs/Tabs.js
Component({
  /**
   * 要从父组件中接收的数据
   */
  properties: {
    //要接收的名
    aaa:{
      //type:数据的类型
      type:String,
      //value 默认值
      value:""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleChange(e){
      console.log(e)
      const {index} = e.currentTarget.dataset
      //触发父组件中的自定义事件，同时传递数据给父组件
      this.triggerEvent("itemsChange",{index})
    }
  }
})
