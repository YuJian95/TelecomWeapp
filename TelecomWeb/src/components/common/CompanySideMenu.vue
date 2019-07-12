<template>
  <el-menu
    class="categories"
    :default-active="activeIndex"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-submenu index="index">
      <template slot="title">
        <i class="el-icon-s-claim"></i>
        <span>信息管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="index">公司信息</el-menu-item>
        <el-menu-item index="editCompany">信息修改</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="order">
      <i class="el-icon-s-claim"></i>
      <span slot="title">订单管理</span>
    </el-menu-item >
    <el-menu-item index="2">
      <i class="el-icon-tickets"></i>
      <span slot="title">套餐管理</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-c-scale-to-original"></i>
      <span slot="title">营业管理</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-s-marketing"></i>
      <span slot="title">统计管理</span>
    </el-menu-item>
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
    width: 150px;
  }
</style>
