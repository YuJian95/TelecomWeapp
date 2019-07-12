<template>
  <div class="container">
    <div class="header">
      <el-form :inline="true">
        <el-form-item label="订单查询:">
          <el-autocomplete
            class="inline-input"
            v-model="keyword"
            :fetch-suggestions="querySearch"
            placeholder="输入客户名或手机号"
            :trigger-on-focus="false"
            @select="handleSelect"
          ></el-autocomplete>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <el-table
        :data="orderList"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="createDate"
          label="创建日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="userName"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="电话"
          width="120">
        </el-table-column>
        <el-table-column
          prop="storeId"
          label="商店编号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="orderStatus"
          label="状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="note"
          label="备注"
          width="auto">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button @click="toDetail(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="toEdit(scope.row)" type="text" size="small">管理</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyOrder',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      result: [],
      keyword: '',
      orderList: [{
        createDate: '2016-05-02',
        phone: '123123123',
        userName: '王小虎',
        region: '上海',
        orderStatus: '未处理',
        note: '晚上九点再过来!'
      }]
    }
  },
  created: function () {
    this.initOrderList()
  },
  methods: {
    initOrderList () {
      const shopId = this.$store.state.belongId
      const that = this
      const URL = 'http://localhost:8090/api/order/queryByShopId'
      this.$axios.post(URL, {
        shopId: shopId
      }).then(successResponse => {
        let data = successResponse.data
        that.orderList = data
      }).catch(failResponse => {
        this.$alert('服务器连接失败，请稍后再试。' + failResponse, '提示', {
          confirmButtonText: '确定'
        })
      })
    },
    toDetail (row) {
      console.log(row)
      this.$router.push({path: 'orderDetail', query: {id: row.id}})
    },
    toEdit (row) {
      this.$router.push({path: 'editOrder', query: {id: row.id}})
    },
    onSubmit () {
      console.log('submit!')
    },
    handleSelect (item) {
      console.log(item)
    },
    querySearch (queryString, cb) {
      let storeId = this.$store.state.belongId
      const that = this
      this.$axios.post('http://localhost:8090/api/order/searchByShop', {
        keyword: queryString,
        storeId: storeId
      }).then(successResponse => {
        let result = successResponse.data
        that.orderList = result
        cb(result)
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
    padding-top: 20px;
    padding-bottom: 10px;
  }
</style>
