<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <shop-side-menu></shop-side-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import ShopSideMenu from './common/ShopSideMenu'

export default {
  name: 'Shop',
  components: {
    'shop-side-menu': ShopSideMenu
  }
}
</script>

<style scoped>

</style>
