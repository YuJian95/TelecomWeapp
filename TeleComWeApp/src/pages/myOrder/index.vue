<template>
  <div class="container">
    <div class="orderList">
      <div class="order" @click="toOrderDetails" v-for="(item, index) in orderList" :data-id="item.id" :key="index">
        <wux-cell hover-class="none" :extra="item.userName">状态：{{item.orderStatus}}</wux-cell>
        <wux-cell hover-class="none" extra="查看详情">创建日期：{{item.createDate}}</wux-cell>
      </div>
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
        orderList: []
      }
    },
    beforeMount () {
      this.getOrderList()
    },
    methods: {
      async getOrderList () {
        const that = this
        let user = wx.getStorageSync('user')
        let data = await post('/order/queryByUserId', {
          userId: user.id
        })
        that.orderList = data
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
