<template>
  <div class="container">
    <div class="header">
      <el-form :inline="true">
        <el-form-item label="商店查询:">
          <el-autocomplete
            class="inline-input"
            v-model="keyword"
            :fetch-suggestions="querySearch"
            placeholder="输入商店名"
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
        :data="storeList"
        bStore
        style="width: 100%">
        <el-table-column fixed prop="storeName" label="名称" width="150"></el-table-column>
        <el-table-column prop="region" label="区域" width="120"></el-table-column>
        <el-table-column prop="phone" label="电话" width="120"></el-table-column>
        <el-table-column prop="address" label="详细地址" width="auto"></el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button @click="toEdit(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="deleteStore(scope.row)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreIndex',
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      result: [],
      keyword: '',
      storeList: [{
        id: 1,
        storeName: '广药',
        phone: '123123123',
        region: '上海',
        address: '广药生活区'
      }]
    }
  },
  created: function () {
    this.initStoreList()
  },
  methods: {
    initStoreList () {
      const shopId = this.$store.state.belongId
      const that = this
      const URL = 'http://localhost:8090/api/shop/queryStoreList'
      this.$axios.post(URL, {
        id: shopId
      }).then(successResponse => {
        let data = successResponse.data
        that.storeList = data
      }).catch(failResponse => {
        this.$alert('服务器连接失败，请稍后再试。' + failResponse, '提示', {
          confirmButtonText: '确定'
        })
      })
    },
    toDetail (row) {
      console.log(row)
      this.$router.push({
        path: 'StoreDetail',
        query: {
          id: row.id
        }
      })
    },
    toEdit (row) {
      console.log(row)
      this.$router.push({
        path: 'EditStoreInfo', query: {id: row.id}
      })
    },
    deleteStore (row) {
      let id = row.id
      const URL = 'http://localhost:8090/api/store/deleteStore'
      this.$axios.post(URL, {
        storeid: id
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
    },
    onSubmit () {
      console.log('submit!')
    },
    handleSelect (item) {
      console.log(item)
    },
    querySearch (queryString, cb) {
      if (queryString !== '' || queryString != null) {
        const URL = 'http://localhost:8090/api/store/search'
        // var StoreSearchList = this.result
        this.$axios.post(URL, {
          key: queryString
        }).then(successResponse => {
          var results = successResponse.data
          cb(results)
        }).catch(failResponse => {
          this.$alert('服务器连接失败，请稍后再试。' + failResponse, '提示', {
            confirmButtonText: '确定'
          })
        })
        // var results =
        // 调用 callback 返回建议列表的数据
        // cb(results)
      }
    },
    goBack () {
      this.$router.go(-1)
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
