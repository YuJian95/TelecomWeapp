<template>
  <el-menu
    router
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    style="min-width: 80%">
    <a @click="exitSystem" href="/" target="_blank">退出登录</a>
    <span>电信后台管理系统</span>
  </el-menu>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
    }
  },
  beforeMount () {
    console.log(this)
  },
  methods: {
    exitSystem () {
      console.log('退出')
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #ffd04b;
    float: right;
    padding: 20px;
  }

  span {
    pointer-events: none;
    position: absolute;
    padding-top: 20px;
    right: 43%;
    font-size: 20px;
    font-weight: bold;
    color: #ffd04b
  }

</style>
