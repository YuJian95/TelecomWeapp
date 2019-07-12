// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入钩子函数
import store from './store'

// 导入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 设置反向代理,前端请求默认发送到 http://localhost:8443/api
let axios = require('axios')
axios.default.baseURL = 'http://localhost:8090/api'
// easy mock 的数据
// axios.default.baseURL = 'https://easy-mock.com/mock/5cf93120d9e1752adf35461b/rollercat/api'

// 全局注册,之后可通过其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI)

// 跳转时, 先检查登录状态
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.user.username) {
      next()
    } else { // 跳转到登录页
      next({
        path: '/',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  components: {App},
  template: '<App/>'
})
