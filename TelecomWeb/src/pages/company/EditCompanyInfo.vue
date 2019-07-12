<template>
  <div class="info">
    <el-form ref="form" :model="shop" label-width="100px">
      <el-form-item label="公司名称:">
        <el-input v-model="shop.name"></el-input>
      </el-form-item>
      <el-form-item label="所处地区:">
        <el-input v-model="shop.region"></el-input>
      </el-form-item>
      <el-form-item label="手机电话:">
        <el-input v-model="shop.phone"></el-input>
      </el-form-item>
      <el-form-item label="详细地址:">
        <el-input type="textarea" v-model="shop.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'EditCompanyInfo',
  data () {
    return {
      shop: {
        id: 1,
        name: '广药店',
        region: '广州',
        phone: 1231231,
        address: '广州市番禺区广州大学城'
      }
    }
  },
  created: function () {
    this.initShopInfo()
  },
  methods: {
    initShopInfo () {
      let _this = this
      const belongId = this.$store.state.belongId
      this.$axios.post('http://localhost:8090/api/company/queryById', {
        id: belongId
      }).then(successResponse => {
        _this.shop = successResponse.data
      }).catch(failResponse => {
        this.$alert('服务器连接失败，请稍后再试。' + failResponse, '提示', {
          confirmButtonText: '确定'
        })
      })
    },
    onSubmit () {
      let that = this
      let URL = 'http://localhost:8090/api/company/editInfo'
      this.$axios.post(URL, {
        id: that.shop.id,
        name: that.shop.name,
        city: that.shop.city,
        phone: that.shop.phone,
        address: that.shop.address
      }).then(successResponse => {
        let data = successResponse.data
        if (data.code === 200 || data.code === 400) {
          this.$alert('提示:' + data.message, {
            confirmButtonText: '确定'
          })
        }
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
