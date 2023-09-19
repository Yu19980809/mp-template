const login = async (needLogin = false) => {
  try {
    if (!needLogin) {
      wx.checkSession()
      return wx.getStorageSync('profile')
    }

    const { code } = await wx.login()
    const loginInfo = await _loginHandler(code)
    wx.setStorageSync('profile', loginInfo)
    return loginInfo
  } catch (error) {
    return _errorHandler(error)
  }
}

const _loginHandler = async () => {
  // 后端登录请求
  // 通过 code 换取 openId, sessionKey, unionId
  // ...
  return {
    openId: '',
    sessionKey: '',
    unionId: '',
    // ...
  }
}

const _errorHandler = ({ errMsg }) => {
  // 登录失效（即wxwx.checkSession返回false）
  if (/checkSession:fail/.test(errMsg)) {
    return login(true)
  }
}

export default login
