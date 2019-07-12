<template>
  <div class="container">
    <wux-cell-group title="套餐信息">
      <wux-cell hover-class="none" controlled title="名称：" :extra="productName"></wux-cell>
      <wux-cell hover-class="none" controlled title="价格：">
        <view slot="footer" style="margin-left: 5px">{{productPrice}} ￥/ {{period}}</view>
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="客户信息">
      <wux-cell>
        <wux-input label="姓名：" @change="changeName" controlled :value="user.nickName"></wux-input>
      </wux-cell>
      <wux-cell>
        <wux-input label="手机：" type="number" @change="changePhone" :error="error" controlled
                   :value="user.phone"></wux-input>
      </wux-cell>
    </wux-cell-group>

    <wux-cell-group title="详细地址">
      <wux-cell>
        <wux-textarea @change="changeAddress" controlled row="2" cursorSpacing="80" :value="user.address"
                      placeholder="请输入详细地址"></wux-textarea>
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="备注信息">
      <wux-cell>
        <wux-textarea @change="changeNote" row="2" cursorSpacing="80"
                      placeholder="请输入备注信息">
        </wux-textarea>
      </wux-cell>
      <wux-cell>
        <wux-input label="验证码：" placeholder="请输入">
          <view slot="footer" style="margin-left: 5px">
            <wux-vcode controlled canvas-id="custom-canvas" bg-color="#e6f6ff" height="30" width="80" num="4"
                       font-color="#165189" haspoint="false" hasline="false" @change="onChange"></wux-vcode>
          </view>
        </wux-input>
      </wux-cell>
    </wux-cell-group>
    <div class="btn">
      <wux-button controlled @click="onSubmit" block type="calm">预定</wux-button>
    </div>
  </div>
</template>

<script>
  import {
    post
  } from '../../utils'

  const isTel = (value) => !/^1[34578]\d{9}$/.test(value)

  export default {
    data () {
      return {
        user: {},
        productId: '',
        period: '',
        productPrice: '',
        productName: '',
        storeId: '',
        vcode: '',
        note: '',
        error: ''
      }
    },
    onLoad (options) {
      this.storeId = options.storeId
      this.productName = options.name
      this.productId = options.id
      this.productPrice = options.price
      this.period = options.period
    },
    onShow () {
      const user = wx.getStorageSync('user')
      this.user = user
    },
    onChange (e) {
      // this.vcode = e.detail.value
      console.log(e)
    },
    methods: {
      changeName (e) {
        this.user.nickName = e.target.value
      },
      changePhone (e) {
        this.user.phone = e.target.value
        this.error = isTel(e.target.value)
      },
      changeAddress (e) {
        this.user.address = e.target.value
      },
      changeNote (e) {
        this.note = e.target.value
      },
      async onSubmit () {
        const that = this
        const data = post('/order/add', {
          userId: that.user.id,
          phone: parseInt(that.user.phone),
          productId: that.productId,
          storeId: that.storeId,
          note: that.note,
          name: that.user.name
        })
        if (data) {
          wx.showToast({
            title: data.message,
            icon: 'none',
            duration: 2000,
            mask: true,
            success: res => {
              wx.navigateBack({
                delta: 1
              })
            }
          })
        }
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

  .btn {
    margin: 20px 10px;
  }
</style>
