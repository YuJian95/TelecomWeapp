function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

const host = 'http://localhost:8090/api'
export {
  host
}

function request (url, method, data, header = {}) {
  wx.showLoading({
    title: '加载中'
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.hideLoading()
        resolve(res.data)
      },
      // eslint-disable-next-line handle-callback-err
      fail: function (error) {
        wx.hideLoading()
        // eslint-disable-next-line prefer-promise-reject-errors
        reject(false)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  })
}

// 获取openid,需要校验的话需要在服务器中写这个请求
export function getOpenid () {
  wx.login({
    success: function (res) {
      const APPID = 'wx0d7c9fa021d6cb36'
      const SECRET = 'bd006a5be77b54d4b341dc89944ce31e'
      const JSCODE = res.code
      wx.request({
        url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + APPID + '&secret=' + SECRET + '&js_code=' + JSCODE + '&grant_type=authorization_code',
        success: function (response) {
          let openid = response.data.openid
          wx.setStorageSync('openid', openid)
          return openid
        }
      })
    }
  })
}

export function get (url, data) {
  return request(url, 'GET', data)
}

export function post (url, data) {
  return request(url, 'POST', data)
}

export default {
  formatNumber,
  formatTime,
  getOpenid
}
