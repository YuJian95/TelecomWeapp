<template>
  <div align="left">
    <el-page-header class="header" @back="goBack" content="订单详情">
    </el-page-header>
    <el-form ref="form" :model="order" label-width="80px">
      <el-form-item label="创建日期">{{order.createDate}}</el-form-item>
      <el-form-item label="套餐名称">{{product.name}}</el-form-item>
      <el-form-item label="订单状态">{{order.orderStatus}}</el-form-item>
      <el-form-item label="套餐费用">{{product.price}}/{{product.period}}</el-form-item>
      <el-form-item label="用户姓名">{{order.userName}}</el-form-item>
      <el-form-item label="客户备注">{{order.note}}</el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail',
  data () {
    return {
      product: {
        name: '随选宽带',
        price: 123,
        period: '年'
      },
      order: {
        orderStatus: '未处理',
        createDate: '2019-06-21',
        userName: '陈先生',
        note: '备注'
      }
    }
  },
  created: function () {
    let id = this.$route.query.id
    this.getOrderInfo(id)
  },
  methods: {
    getOrderInfo (id) {
      const that = this
      this.$axios.post('http://localhost:8090/api/order/queryById', {
        orderId: id
      }).then(res => {
        that.order = res.data
        let productId = res.data.productId
        that.getProductInfo(productId)
      }).catch(fail => {
        this.$alert('服务器连接失败，请稍后再试。' + fail, '提示', {
          confirmButtonText: '确定'
        })
      })
    },
    onSubmit () {
      console.log('submit!')
    },
    goBack () {
      this.$router.go(-1)
    },
    getProductInfo (id) {
      const that = this
      this.$axios.post('http://localhost:8090/api/product/queryById', {
        id: id
      }).then(res => {
        that.product = res.data
      }).catch(fail => {
        this.$alert('服务器连接失败，请稍后再试。' + fail, '提示', {
          confirmButtonText: '确定'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
