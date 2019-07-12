<template>
  <div class="container">
    <wux-search-bar @focus="focusInput" @change="inputSearch" @blur="leave" placeholder="输入客户名、电话"
                    controlled></wux-search-bar>
    <div class="search-result">
      <bolck v-if="isSearch" @click="toOrderDetails" v-for="(item,index) in result" :data-id="item.id" :key="item.id">
        <p style="margin: 3px">{{item.userName}}-{{item.phone}}</p>
      </bolck>
    </div>
    <div class="orderList">
      <div class="order" @click="toOrderDetails" v-for="(item, index) in orderList" :data-id="item.id"
           :key="index">
        <wux-cell hover-class="none" :extra="item.userName">状态：{{item.orderStatus}}</wux-cell>
        <wux-cell hover-class="none" extra="查看详情">创建日期：{{item.createDate}}</wux-cell>
      </div>
      <wux-cell-group v-if="isNoData" label="你还没有订单哦,请加油呀。">
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
        orderList: {},
        result: [],
        isSearch: false,
        isNoData: false
      }
    },
    onShow () {
      this.getOrderList()
    },
    methods: {
      focusInput () {
        this.isSearch = true
      },
      async getOrderList () {
        const that = this
        let user = wx.getStorageSync('user')
        that.storeId = user.storeId
        let data = await post('/order/queryByStoreId', {
          storeId: that.storeId
        })
        that.orderList = data
        if (data.length === 0) {
          that.isNoData = true
        }
      },
      inputSearch (e) {
        let key = e.target.value
        this.searchName(key)
      },
      leave () {
        console.log('执行了')
        this.isSearch = false
      },
      searchName (key) {
        const that = this
        wx.request({
          url: 'http://localhost:8090/api/order/searchByStore',
          method: 'POST',
          data: {
            keyword: key,
            storeId: that.storeId
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success (res) {
            console.log(res.data)
            that.result = res.data
          }
        })
      },
      toOrderDetails (e) {
        let orderId = e.currentTarget.dataset.id
        wx.navigateTo({
          url: '/pages/orderDetails/main?orderId=' + orderId
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    height: 100%;
  }

  .orderList {
    margin: 10px;
  }

  .order {
    margin: 15px 5px;
    border: #1296db solid 2px;
    border-radius: 7px;
  }
</style>
