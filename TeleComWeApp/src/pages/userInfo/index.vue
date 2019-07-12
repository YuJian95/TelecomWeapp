<template>
  <div class="container">
    <div class="logo">
      <open-data class="avatarUrl" type="userAvatarUrl"></open-data>
      <button @click="editInfo" v-if="isEditShow" class="btn">编辑</button>
    </div>
    <div class="info">
      <wux-cell-group title="基本信息">
        <wux-cell>
          <wux-input :disabled="isEdit" @change="changeName" controlled label="姓名:"
                     :value="user.nickName"></wux-input>
        </wux-cell>
        <wux-cell>
          <wux-input :disabled="isEdit" @change="changePhone" controlled label="手机:" :value="user.phone"></wux-input>
        </wux-cell>
        <wux-cell>
          <wux-input :disabled="isEdit" @change="changeRegion" controlled label="地区" :value="user.region"></wux-input>
        </wux-cell>
      </wux-cell-group>
      <wux-cell-group title="详细地址">
        <wux-cell>
          <wux-textarea @change="changeAddress" :disabled="isEdit" controlled row="2" cursorSpacing="80"
                        :value="user.address"
                        placeholder="请输入详细地址"></wux-textarea>
        </wux-cell>
      </wux-cell-group>
    </div>
    <div>
      <wux-wing-blank v-if="isSubmitShow">
        <button @click="onSubmit" style="margin: 5px;background-color: #1296db">修改</button>
      </wux-wing-blank>
    </div>
  </div>
</template>

<script>
  import {
    post
  } from '../../utils'

  export default {
    data () {
      return {
        user: {},
        isEdit: true,
        isSubmitShow: false,
        isEditShow: true
      }
    },
    onShow () {
      this.getUserInfo()
      this.isEdit = true
      this.isSubmitShow = false
      this.isEditShow = true
    },
    methods: {
      // 获取用户信息
      async getUserInfo () {
        let user = wx.getStorageSync('user')
        console.log(user)
        if (user) {
          this.user = user // 预显示
        }
        const that = this
        const data = await post('/user/queryById', {
          id: user.id
        })
        if (data) {
          that.user = data
        }
      },
      editInfo () {
        this.changeStatus()
      },
      async onSubmit () {
        console.log(this)
        const data = await post('/user/editInfo', {
          id: this.user.id,
          nickname: this.user.nickName,
          address: this.user.address,
          region: this.user.region,
          phone: this.user.phone
        })
        if (data) {
          wx.showToast({
            title: data.message,
            icon: 'none',
            duration: 2000,
            mask: true,
            success: res => {
              wx.switchTab({
                url: '/pages/me/main'
              })
            }
          })
        } else {
          wx.showToast({
            title: '修改失败',
            icon: 'none',
            duration: 2000,
            mask: true
          })
        }
        this.changeStatus()
      },
      changeName (e) {
        this.user.nickame = e.target.value
      },
      changePhone (e) {
        this.user.phone = e.target.value
      },
      changeRegion (e) {
        this.user.region = e.target.value
      },
      changeAddress (e) {
        this.user.address = e.target.value
      },
      // 切换编辑状态
      changeStatus () {
        let editStatus = this.isEdit
        this.isEdit = !editStatus
        this.isSubmitShow = editStatus
        this.isEditShow = !editStatus
      }
    }
  }
</script>

<style scoped>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .logo {
    height: 100px;
  }

  .avatarUrl {
    width: 80px;
    height: 80px;
    margin: 10px 40px 30px 10px;
    float: left;
    border-radius: 50%;
  }

  .info {
    margin: 10px;
  }

  .btn {
    float: right;
    margin: 20px;
  }
</style>
