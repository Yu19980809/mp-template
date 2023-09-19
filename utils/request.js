import { baseUrl } from '@/config/index'

const request = (url, method = 'GET', data = {}, needToken = true) => {
  const _url = baseUrl + url
  const _contentType = method === 'POST' ? 'application/x-www-form-urlencoded' : 'application/json'
  let _header = { 'Content-Type': _contentType }

  // 需要携带 token 的请求，进行 token 获取
  if (needToken) {
    const token = wx.getStorageSync('token')

    if (token) {
      _header['Authorization'] = token
    } else {
      wx.showToast({
        title: '请登录',
        icon: 'error'
      })

      return false
    }
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      header: _header,
      method,
      data,
      success(res) { resolve(res.data) },
      fail(err) { reject(err) }
    })
  })
}

export default request
