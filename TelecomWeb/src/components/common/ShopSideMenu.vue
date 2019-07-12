<template>
  <el-menu
    class="categories"
    :default-active="activeIndex"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router>
    <el-submenu index="index">
      <template slot="title">
        <i class="el-icon-s-claim"></i>
        <span>信息管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="index">公司信息</el-menu-item>
        <el-menu-item index="editShopInfo">信息修改</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="dataShow">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>数据统计</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="orderData">订单数据</el-menu-item>
        <el-menu-item index="storeData">商店数据</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="order">
      <i class="el-icon-edit-outline"></i>
      <span slot="title">订单管理</span>
    </el-menu-item>
    <el-submenu index="storeShow">
      <template slot="title">
        <i class="el-icon-suitcase"></i>
        <span>商店管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="addStore">添加商店</el-menu-item>
        <el-menu-item index="store">查找商店</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'SideMenu',
  data () {
    return {}
  },
  computed: {
    activeIndex () {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(this)
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .categories {
    position: fixed;
    margin-left: 50%;
    left: -48%;
    top: 100px;
  }
</style>
