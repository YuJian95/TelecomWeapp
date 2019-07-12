<!--系统主页面中,导航栏和功能栏-->
<template>
  <div>
    <el-container>
      <el-header>
        <nav-menu></nav-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './common/NavMenu'

export default {
  name: 'Home',
  components: {
    'nav-menu': NavMenu
  }
}
</script>

<style scoped>

</style>
