<template>
  <div class="container">
    <wux-cell-group title="商店二维码"></wux-cell-group>
    <div class="qrcode">
      <wux-qrcode id="qrcode" wux-class="qrcode" :data="value" width="200" height="200"></wux-qrcode>
    </div>
    <!--        没有做长按保存的功能，所以就不显示了-->
    <wux-cell-group label="提示：主页扫描即可跳转到商店首页。">
    </wux-cell-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        fgColor: '#1296db',
        value: '/pages/shop/main?id=' + 1,
        shop: {}
      }
    },
    onLoad (options) {
      let id = options.id
      console.log(id)
    }
  }
</script>

<style scoped>
  .qrcode {
    margin: 30px auto;
  }
</style>
