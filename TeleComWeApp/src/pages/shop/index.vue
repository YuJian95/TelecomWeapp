<template>
  <div class="container">
    <div class="storeInfo">
      <img @tap="toQRcode" class="storeInfo-avatar" src="/static/images/QRcode-active.png" background-size="cover"
           alt=""/>
      <div class="storeMessage">
        <p class="name">{{store.storeName}}</p>
        <p class="info">{{store.region}}</p>
        <p class="info">{{store.phone}}</p>
      </div>
    </div>
    <div @tap="toBooking" :data-id="item.id" :data-name="item.name" :data-period="item.period" :data-price="item.price"
         class="product"
         v-for="(item, index) in productList"
         :key="index">
      <wux-cell-group>
        <wux-cell hover-class="none" :extra="item.name">{{item.character_1}}</wux-cell>
        <wux-cell hover-class="none" :extra="item.price +' / '+ item.period">{{item.character_2}}</wux-cell>
        <wux-cell hover-class="none" extra="马上预约">{{item.character_3}}</wux-cell>
      </wux-cell-group>
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
        store: {},
        productList: {}
      }
    },
    methods: {
      async getStoreInfo (id) {
        const that = this
        const data = await post('/store/queryById', {
          id: id
        })
        if (data) {
          that.store = data
        }
      },
      async getProductList (id) {
        const that = this
        const data = await post('/product/getAllCompanyProduct', {
          storeId: id
        })
        if (data) {
          console.log(data)
          that.productList = data
        }
      },
      toQRcode () {
        wx.navigateTo({
          url: '/pages/QRcode/main?id=' + this.store.id
        })
      },
      toBooking (e) {
        let data = e.currentTarget.dataset
        console.log(data)
        let id = data.id
        let name = data.name
        let price = data.price
        let period = data.period
        let storeId = this.store.id
        wx.navigateTo({
          url: '/pages/booking/main?id=' + id + '&name=' + name + '&storeId=' + storeId + '&price=' + price + '&period=' + period
        })
      }
    },
    onLoad (options) {
      let id = options.id
      this.getStoreInfo(id)
      this.getProductList(id)
    }
  }
</script>

<style scoped>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .storeInfo {
    height: 120px;
    border-radius: 10px;
    margin: 20px 10px;
  }

  .storeInfo-avatar {
    width: 100px;
    height: 100px;
    margin: 10px;
    float: left;
    border-radius: 50%;
  }

  .storeMessage {
    display: flex;
    height: 100px;
    padding: 10px;
    flex-direction: column;
  }

  .name {
    font-size: 20px;
    font-weight: bold;
    margin: 10px;
  }

  .info {
    font-size: 15px;
    margin: 8px;
  }

  .product {
    border: #1296db solid 2px;
    border-radius: 10px;
    margin: 10px;
  }
</style>
