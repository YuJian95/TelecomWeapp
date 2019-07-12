// 引入vuex, 用于前端控制器
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userType: '',
    belongId: '',
    user: {
      // 获取浏览器的本地储存中, 记录的用户信息
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
    }
  },
  mutations: {
    login (state, user) {
      state.user = user
      // window.localStorage.setItem('user', JSON.stringify(user))
    },
    loginUser (state, userType) {
      state.userType = userType
    },
    setBelongId (state, belongId) {
      state.belongId = belongId
    }
  }
})
