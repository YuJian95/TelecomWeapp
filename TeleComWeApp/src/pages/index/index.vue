<template>
  <div class="container">
    <img class="fab-button fab-button-local" @tap="scanQRcode" src="/static/images/scan-active.png" alt=""/>
    <wux-search-bar @focus="focusInput" @change="inputSearch" @blur="leave" placeholder="输入店名、地区、地址"
                    controlled></wux-search-bar>
    <div class="search-result">
      <bolck v-if="isSearch" @click="toShop" v-for="(item,index) in result" :data-id="item.id" :key="item.id">
        <p style="margin: 3px">{{item.storeName}}</p>
      </bolck>
    </div>
    <div class="shopInfo" @click="toShop" v-for="(item,index) in storeList" :data-id="item.id" :key="item.id">
      <img class="shopInfo-avatar" src="/static/images/user.png" background-size="cover" alt=""/>
      <div class="shopMessage">
        <p class="name">{{item.storeName}}</p>
        <p class="info">{{item.region}}</p>
        <p class="info">{{item.phone}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import {post} from '../../utils'

  export default {
    data () {
      return {
        storeList: {},
        result: [],
        isSearch: false
      }
    },
    beforeMount () {
      this.getAllStore()
    },
    methods: {
      leave () {
        console.log('执行了')
        this.isSearch = false
      },
      async getAllStore () {
        const that = this
        const data = await post('/store/getAllStore', {})
        console.log(data)
        that.storeList = data
      },
      focusInput () {
        this.isSearch = true
      },
      inputSearch (e) {
        let key = e.target.value
        this.searchName(key)
      },
      searchName (key) {
        const that = this
        wx.request({
          url: 'http://localhost:8090/api/store/search',
          method: 'POST',
          data: {
            key: key
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            that.result = res.data
          }
        })
      },
      scanQRcode () {
        wx.scanCode({
          success (res) {
            let result = res.result
            wx.navigateTo({
              url: result
            })
          }
        })
      },
      toShop (e) {
        let id = e.currentTarget.dataset.id
        wx.navigateTo({
          url: '/pages/shop/main?id=' + id
        })
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

  .shopInfo {
    height: 120px;
    border: #1296db solid 2px;
    border-radius: 10px;
    margin: 20px 10px 10px 20px;
  }

  .shopInfo-avatar {
    width: 100px;
    height: 100px;
    margin: 10px;
    float: left;
    border-radius: 50%;
  }

  .shopMessage {
    display: flex;
    height: 100px;
    padding: 10px;
    flex-direction: column;
  }

  .name {
    font-size: 20px;
    font-weight: bold;
    margin: 5px;
  }

  .info {
    font-size: 15px;
    margin: 5px;
  }

  .fab-button {
    position: fixed;
    z-index: 1500;
  }

  .fab-button-local {
    width: 40px;
    height: 40px;
    right: 30px;
    bottom: 30px;
    border-radius: 10px;
    background: #dbe2e2;
  }
</style>
