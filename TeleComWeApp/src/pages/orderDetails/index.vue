<template>
  <div class="container">
    <wux-cell-group title="订单状态">
      <wux-cell>
        <div class="status">
          <wux-timeline pending>
            <wux-timeline-item v-if="order.createDate" :content="order.createDate"></wux-timeline-item>
            <wux-timeline-item v-if="order.updateDate" :content="order.updateDate"></wux-timeline-item>
            <wux-timeline-item v-if="order.finishDate" :content="order.finishDate"></wux-timeline-item>
          </wux-timeline>
        </div>
      </wux-cell>
    </wux-cell-group>
    <wux-cell-group title="客户信息">
      <wux-cell>姓名：{{order.userName}}</wux-cell>
      <wux-cell>手机：{{order.phone}}</wux-cell>
      <wux-cell>地址：{{order.address}}</wux-cell>
      <wux-cell>备注：{{order.note}}</wux-cell>
    </wux-cell-group>
    <wux-cell-group title="订单信息">
      <wux-cell>套餐：{{product.name}}({{product.character_1}})</wux-cell>
      <wux-cell>特性：{{product.character_2}}+{{product.character_3}}</wux-cell>
      <wux-cell>收费：{{product.price}}/{{product.period}}</wux-cell>
    </wux-cell-group>
  </div>
</template>

<script>
  import {
    formatTime,
    post
  } from '../../utils'

  export default {
    data () {
      return {
        order: {},
        product: {}
      }
    },
    onLoad (options) {
      let orderId = options.orderId
      this.getOrderInfo(orderId)
    },
    methods: {
      async getOrderInfo (orderId) {
        let data = await post('/order/queryById', {
          orderId: orderId
        })
        if (data) {
          if (data.createDate) {
            data.createDate = '未处理：' + formatTime(new Date(data.createDate))
          }
          if (data.updateDate) {
            data.updateDate = '在进行：' + formatTime(new Date(data.updateDate))
          }
          if (data.finishDate) {
            data.finishDate = '已完成：' + formatTime(new Date(data.finishDate))
          }
        }
        this.order = data
        this.getProductInfo(data.productId)
      },
      async getProductInfo (productId) {
        let data = await post('/product/queryById', {
          id: productId
        })
        this.product = data
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

  .status {
    margin-top: 20px;
  }
</style>
