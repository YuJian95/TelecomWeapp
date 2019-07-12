<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <company-side-menu></company-side-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CompanySideMenu from './common/CompanySideMenu'

export default {
  name: 'Company',
  components: {
    'company-side-menu': CompanySideMenu
  }
}
</script>

<style scoped>

</style>
