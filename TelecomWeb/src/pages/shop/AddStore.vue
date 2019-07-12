<template>
  <div class="info">
    <el-form ref="form" :model="store" label-width="100px">
      <el-form-item label="商店名称:">
        <el-input v-model="store.name"></el-input>
      </el-form-item>
      <el-form-item label="所处城市:">
        <el-input v-model="store.city"></el-input>
      </el-form-item>
      <el-form-item label="联系电话:">
        <el-input v-model="store.phone"></el-input>
      </el-form-item>
      <el-form-item label="所在地址:">
        <el-input type="textarea" v-model="store.address"></el-input>
      </el-form-item>
      <el-form-item label="管理账号:">
        <el-input v-model="admin.name"></el-input>
      </el-form-item>
      <el-form-item label="管理密码:">
        <el-input type="password" v-model="admin.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AddStore',
  data () {
    return {
      admin: {
        name: '',
        password: ''
      },
      store: {
        name: '广药店',
        city: '广州',
        phone: 1231231,
        address: '广州市番禺区广州大学城'
      }
    }
  },
  methods: {
    onSubmit () {
      let store = this.store
      const URL = 'http://localhost:8090/api/store/add'
      this.$axios.post(URL, {
        companyId: 1,
        phone: store.phone,
        region: store.region,
        address: store.address,
        name: store.name
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
