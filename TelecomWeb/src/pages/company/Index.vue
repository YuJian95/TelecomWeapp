<template>
  <div>
    <div class="container">
      <div class="info">
        <p>公司名称：{{info.name}}</p>
        <p>联系电话：{{info.phone}}</p>
        <p>成立年份：{{info.year}}</p>
        <p>公司地址：{{info.address}}</p>
      </div>
<!--      <div class="data">-->
<!--        <div class="data-details" v-for="item in dataItem" :key="item.name">-->
<!--          <div class="icon-left">-->
<!--            <el-image-->
<!--              style="width: 80px; height: 80px"-->
<!--              :src="item.url"-->
<!--              :fit="cover"></el-image>-->
<!--          </div>-->
<!--          <div style="text-align: right; padding-right: 10px">-->
<!--            <h3>{{item.name}}</h3>-->
<!--            <h4>{{item.total}}</h4>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyIndex',
  data () {
    return {
      info: {
        name: '中国电信',
        phone: 12345678910,
        year: 2019,
        address: '广东省广州市广州大学城'
      },
      dataItem: [
        {name: '成交金额', url: '/static/images/money.png', total: 800},
        {name: '订单总数', url: '/static/images/order form.png', total: 600},
        {name: '商店总数', url: '/static/images/store.png', total: 400}
      ]
    }
  },
  created: function () {
    this.getCompanyInfo() // 获取公司信息
  },
  getCompanyInfo () {
    const that = this
    const belongId = this.$store.state.belongId
    this.$axios.post('http://localhost:8090/api/company/info', {
      id: belongId
    }).then(successResponse => {
      that.info = successResponse.data
    }).catch(failResponse => {
      this.$alert('服务器连接失败，请稍后再试。' + failResponse, '提示', {
        confirmButtonText: '确定'
      })
    })
  }
}
</script>

<style scoped>
  .container {
    margin: 20px;
  }

  .info {
    height: 200px;
    width: 80%;
    padding-left: 30px;
    padding-top: 20px;
    text-align: left;
    background-color: #f2edd6;
    border: 2px solid;
    border-radius: 5px;
    /*box-shadow: 10px 10px 5px #888888;*/
  }

  .data {
    padding-left: 30px;
    margin-top: 20px;
    display: flex;
    justify-items: center;
    padding-top: auto;
    width: 80%;
    background-color: #f2edd6;
    border: 2px solid;
    border-radius: 5px;
    /*box-shadow: 10px 10px 5px #888888;*/
  }

  .data-details {
    margin: 30px;
    height: 100px;
    width: 180px;
    background-color: #f2f2ee;
    border: 2px solid;
    border-radius: 10px;
  }

  .icon-left {
    margin: 2px;
    float: left;
  }
</style>
