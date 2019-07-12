<template>
  <div class="info">
    <el-form ref="form" :model="shop" label-width="100px">
      <el-form-item align="left" label="营业厅名:">{{shop.name}}</el-form-item>
      <el-form-item align="left" label="所处地区:">{{shop.region}}</el-form-item>
      <el-form-item align="left" label="手机电话:">{{shop.phone}}</el-form-item>
      <el-form-item align="left" label="详细地址:">{{shop.address}}</el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'ShopDetail',
  data () {
    return {
      shop: {
        name: '广药店',
        city: '广州',
        phone: 1231231,
        address: '广州市番禺区广州大学城'
      }
    }
  },
  created: function () {
    this.initShopInfo()
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    initShopInfo () {
      let _this = this
      const belongId = this.$store.state.belongId
      this.$axios.post('http://localhost:8090/api/shop/queryById', {
        id: belongId
      }).then(successResponse => {
        _this.shop = successResponse.data
      }).catch(failResponse => {
        this.$alert('服务器连接失败，请稍后再试。' + failResponse, '提示', {
          confirmButtonText: '确定'
        })
      })
    }
  }
}
</script>

<style scoped>
  .info {
    /*height: 200px;*/
    border-radius: 2px;
    padding: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
  }
</style>
