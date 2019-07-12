<template>
  <div class="container">
    <wux-form>
      <wux-cell-group title="商店信息">
        <wux-cell>
          <wux-input :disabled="isEdit" label="名称：" controlled @change="changeName" placeholder="请输入名字"
                     :value="store.storeName"></wux-input>
        </wux-cell>
        <wux-cell>
          <wux-input :disabled="isEdit" label="手机：" controlled @change="changePhone" placeholder="请输入手机"
                     :value="store.phone"></wux-input>
        </wux-cell>
        <wux-cell>
          <wux-input :disabled="isEdit" label="地区：" controlled @change="changeRegion" placeholder="请输入地区"
                     :value="store.region"></wux-input>
        </wux-cell>
      </wux-cell-group>
      <wux-cell-group title="详细地址">
        <wux-cell>
          <wux-textarea :disabled="isEdit" placeholder="请输入详细地址" controlled @change="changeAddress"
                        :value="store.address"></wux-textarea>
        </wux-cell>
      </wux-cell-group>
      <button @click="editInfo" v-if="isEditShow" class="btn">编辑</button>
      <div v-if="isSubmitShow" class="btn">
        <wux-button block @click="onSubmit" type="calm">修改</wux-button>
      </div>
    </wux-form>
  </div>
</template>

<script>
  import {post} from '../../utils'

  export default {
    data () {
      return {
        store: {},
        isEdit: true,
        isSubmitShow: false,
        isEditShow: true
      }
    },
    onShow () {
      this.getStoreInfo()
      this.isEdit = true
      this.isSubmitShow = false
      this.isEditShow = true
    },
    methods: {
      async getStoreInfo () {
        const that = this
        const user = wx.getStorageSync('user')
        const data = await post('/store/queryById', {
          id: user.storeId
        })
        if (data) {
          that.store = data
        }
      },
      editInfo () {
        this.changeStatus()
      },
      changeName (e) {
        this.store.nickname = e.target.value
      },
      changePhone (e) {
        this.store.phone = e.target.value
      },
      changeRegion (e) {
        this.store.region = e.target.value
      },
      changeAddress (e) {
        this.store.address = e.target.value
      },
      // 切换编辑状态
      changeStatus () {
        let editStatus = this.isEdit
        this.isEdit = !editStatus
        this.isSubmitShow = editStatus
        this.isEditShow = !editStatus
      },
      async onSubmit () {
        let data = await post('/store/editInfo', {
          address: this.store.address,
          region: this.store.region,
          storeName: this.store.storeName,
          id: this.store.id,
          phone: this.store.phone
        })
        if (data.code === 200) {
          wx.showToast({
            title: data.message,
            icon: 'none',
            duration: 2000,
            mask: true,
            success: res => {
              setTimeout(function () {
                wx.switchTab({
                  url: '/pages/me/main'
                }, 2000)
              })
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
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    height: 100%;
    flex-direction: column;
  }

  .btn {
    margin: 20px 10px;
  }
</style>
