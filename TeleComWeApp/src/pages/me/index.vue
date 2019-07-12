<template>
  <div class="me-container">
    <!-- 登陆后用户信息 -->
    <div v-if="isShow" class="userInfo">
      <open-data class="userInfo-avatar" type="userAvatarUrl"></open-data>
      <div class="userMessage">
        <!-- 用户名 -->
        <p class="userName">{{user.nickName}}</p>
        <p class="address">{{user.region}}</p>
      </div>

      <!-- 功能列表 -->
      <div v-if="isStore">
        <wux-cell thumb="/static/images/info-active.png" title="商店信息" is-link url="/pages/shopInfo/main"
                  open-type="navigateTo"></wux-cell>
        <wux-cell thumb="/static/images/Booking-history-active.png" title="商店订单" is-link url="/pages/order/main"
                  open-type="navigateTo"></wux-cell>
        <wux-cell thumb="/static/images/exit-active.png" title="退出登录" @click="exitUser" is-link url="/pages/me/main"
                  open-type="navigateTo"></wux-cell>
      </div>

      <div v-else>
        <wux-cell thumb="/static/images/info-active.png" title="我的信息" is-link url="/pages/userInfo/main"
                  open-type="navigateTo"></wux-cell>
        <wux-cell thumb="/static/images/Booking-history-active.png" title="我的订单" is-link url="/pages/myOrder/main"
                  open-type="navigateTo"></wux-cell>
        <wux-cell thumb="/static/images/password-active.png" title="商店登录" is-link url="/pages/loginShop/main"
                  open-type="navigateTo"></wux-cell>
      </div>
    </div>

    <!-- 登陆前 -->
    <div v-else class="userInfo-beforeLogin">
      <Button class="btn" open-type="getUserInfo" @getuserinfo="getUserInfo">点击登录</Button>
    </div>
  </div>
</template>
<script>
  import {post} from '../../utils'

  export default {
    data () {
      return {
        user: {},
        isShow: false,
        isStore: false
      }
    },
    onShow () {
      const OPENID = wx.getStorageSync('openid')
      if (OPENID) {
        this.userLogin(OPENID)
      }
      this.isStore = wx.getStorageSync('isStoreUser')
    },
    methods: {
      exitUser () {
        this.isStore = false
        wx.setStorageSync('isStoreUser', this.isStore)
      },
      getUserInfo (res) {
        if (res.mp.detail.rawData) {
          // 用户授权
          this.handleGetUserInfo()
        }
      },
      // 第一次登录,获取用户登录
      handleGetUserInfo () {
        wx.getUserInfo({
          success: (res) => {
            let user = {}
            let openid = this.getOpenid()
            user.nickName = res.userInfo.nickName
            user.region = res.userInfo.city
            user.openid = openid
            console.log(openid)
            this.user = user
            this.isShow = true
            wx.setStorageSync('user', user)
            console.log(user)
            wx.setStorageSync('openid', openid)
          },
          fail: () => {
            console.log('获取失败')
          }
        })
      },
      // 获取openid,需要校验的话需要在服务器中写这个请求
      getOpenid () {
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
      },
      // 用户注册并获取用户信息
      async userLogin (OPENID) {
        const that = this
        const USERINFO = wx.getStorageSync('user')
        const data = await post('/user/login', {
          openid: OPENID,
          nickname: USERINFO.nickName,
          region: USERINFO.city
        })
        that.user = data
        wx.setStorageSync('user', data)
        that.isShow = true
      }
    }
  }
</script>
<style>
  .me-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .userInfo-beforeLogin {
    height: 150px;
    display: flex;
    align-items: center;
  }

  .userInfo {
    height: 200px;
  }

  .userInfo-avatar {
    width: 120px;
    height: 120px;
    margin: 10px;
    float: left;
    border-radius: 50%;
  }

  .userMessage {
    display: flex;
    height: 150px;
    padding: 10px;
    flex-direction: column;
  }

  .userName {
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
  }

  .address {
    font-size: 15px;
    margin: 10px;
  }

  .btn {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    margin: auto;
    line-height: 100px;
    text-align: center;
  }

</style>
