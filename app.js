// app.js
import login from '@/utils/login'

App({
  onLaunch() {
    // 登录
    login()
  },
  globalData: {
    userInfo: null
  }
})
