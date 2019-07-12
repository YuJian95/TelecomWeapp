<template>
  <div class="container">
    <div>
      <form>
        <wux-cell-group title="商店登录">
          <wux-cell>
            <wux-input @change="changeName" label="账号："></wux-input>
          </wux-cell>
          <wux-cell>
            <wux-input @change="changePassword" label="密码：" password></wux-input>
          </wux-cell>
          <div class="btn">
            <button @click="onSubmit">登录</button>
          </div>
        </wux-cell-group>
      </form>
    </div>
  </div>
</template>

<script>
  import {post, getOpenid} from '../../utils'

  export default {
    data () {
      return {
        userName: '',
        password: ''
      }
    },
    methods: {
      changeName (e) {
        this.userName = e.target.value
      },
      changePassword (e) {
        this.password = e.target.value
      },
      async onSubmit () {
        const openid = wx.getStorageSync('openid')
        let data = await post('/store/login', {
          name: this.userName,
          password: this.password,
          openid: openid
        })

        if (data.code === 200) {
          wx.showToast({
            title: data.message,
            icon: 'none',
            duration: 2000,
            mask: true,
            success: res => {
              let isStoreUser = true
              wx.setStorageSync('isStoreUser', isStoreUser)
              setTimeout(function () {
                wx.switchTab({
                  url: '/pages/me/main'
                })
              }, 2000)
            }
          })
        } else {
          wx.showToast({
            title: data.message,
            icon: 'none',
            duration: 2000,
            mask: true
          })
        }
      }
    },
    beforeMount () {
      wx.setStorageSync('openid', getOpenid())
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
  }

  .btn {
    margin: 20px;
  }
</style>
