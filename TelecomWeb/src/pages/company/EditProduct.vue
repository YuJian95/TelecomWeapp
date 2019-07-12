<template>
  <div class="container">
    <el-page-header class="header" @back="goBack" content="订单编辑">
    </el-page-header>
    <el-form ref="form" class="content" :model="order" label-width="80px">
      <el-form-item label="创建日期">{{order.createDate}}</el-form-item>
      <el-form-item label="套餐名称">{{product.name}}</el-form-item>
      <el-form-item label="订单状态">
        <el-select v-model="order.orderStatus" placeholder="调整订单状态">
          <el-option label="未处理" value="未处理"></el-option>
          <el-option label="在进行" value="在进行"></el-option>
          <el-option label="已完成" value="已完成"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="套餐费用">{{product.price}}/{{product.period}}</el-form-item>
      <el-form-item label="用户姓名">{{order.userName}}</el-form-item>
      <el-form-item label="客户备注">{{order.note}}</el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'EditProduct',
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
        address: '广药',
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
      let status = this.order.orderStatus
      let id = this.order.id
      this.$axios.post('http://localhost:8090/api/order/manage', {
        orderId: id,
        status: status
      }).then(res => {
        if (res.data.code === 200 || res.data.code === 400) {
          this.$alert(res.data.message, '提示', {
            confirmButtonText: '确定'
          })
        }
      }).catch(fail => {
        this.$alert('服务器连接失败，请稍后再试。' + fail, '提示', {
          confirmButtonText: '确定'
        })
      })
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
  .container {
    border-radius: 2px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .header {
    padding-top: 20px;
    padding-bottom: 10px;
  }

  .content {
    alignment: left;
    padding-top: 20px;
    padding-bottom: 10px;
  }
</style>
