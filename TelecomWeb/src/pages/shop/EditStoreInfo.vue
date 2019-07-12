<template>
  <div class="info">
    <el-form ref="form" :model="store" label-width="100px">
      <el-form-item label="商店名称:">
        <el-input v-model="store.storeName"></el-input>
      </el-form-item>
      <el-form-item label="所处城市:">
        <el-input v-model="store.region"></el-input>
      </el-form-item>
      <el-form-item label="联系电话:">
        <el-input v-model="store.phone"></el-input>
      </el-form-item>
      <el-form-item label="所在地址:">
        <el-input type="textarea" v-model="store.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'EditStoreInfo',
  data () {
    return {
      store: {
        storeName: '广药店',
        region: '广州',
        phone: 1231231,
        address: '广州市番禺区广州大学城'
      }
    }
  },
  created: function () {
    let id = this.$route.query.id
    console.log(id)
    this.initStoreInfo(id)
  },
  methods: {
    initStoreInfo (id) {
      this.$axios.post('http://localhost:8090/api/store/queryById', {
        id: id
      }).then(successResponse => {
        this.store = successResponse.data
      }).catch(failResponse => {
        this.$alert('服务器连接失败，请稍后再试。' + failResponse, '提示', {
          confirmButtonText: '确定'
        })
      })
    },
    onSubmit (e) {
      console.log(e)
      console.log('submit!')
    }
  },
  beforeMount () {

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
