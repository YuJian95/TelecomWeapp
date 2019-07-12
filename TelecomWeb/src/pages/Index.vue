<template>
  <body id="poster">
  <el-form class="login-container" label-position="left" label-width="0px">
    <h3 class="login_title">电信后台管理系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号" minlength="8"
                clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码" minlength="8"
                clearable></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      const LOGIN_URL = 'http://localhost:8090/api/admin/login'
      const _this = this
      this.$axios.post(LOGIN_URL, {
        userName: this.loginForm.username,
        password: this.loginForm.password
      }).then(successResponse => {
        console.log(successResponse.data)
        let userType = successResponse.data.message
        let belongId = successResponse.data.id
        console.log(belongId)
        // 检验登录成功
        if (successResponse.data.code === 200) {
          if (successResponse.data.message === '4') {
            console.log(belongId)
            _this.$store.commit('login', _this.loginForm)
            _this.$store.commit('loginUser', userType)
            _this.$store.commit('setBelongId', belongId)
            let path = this.$route.query.redirect
            this.$router.replace({path: path === '/' || path === undefined ? '/company/index' : path})
          }

          if (successResponse.data.message === '3') {
            console.log(belongId)
            _this.$store.commit('login', _this.loginForm)
            _this.$store.commit('loginUser', userType)
            _this.$store.commit('setBelongId', belongId)
            let path = this.$route.query.redirect
            this.$router.replace({path: path === '/' || path === undefined ? '/shop/index' : path})
          }
        } else {
          this.$alert('密码或用户名错误！', '提示', {
            confirmButtonText: '确定',
            callback: action => {
              this.$message({
                type: 'error',
                message: `action: ${action}`
              })
            }
          })
        }
      }).catch(failResponse => {
        this.$alert('服务器连接失败，请稍后再试。' + failResponse, '提示', {
          confirmButtonText: '确定'
        })
      })
    }
  }
}
</script>

<style>
  #poster {
    background: url("/static/images/login-background.jpg") no-repeat center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  body {
    margin: 0;
  }

  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0 auto 40px auto;
    text-align: center;
    color: #505458;
  }

</style>
