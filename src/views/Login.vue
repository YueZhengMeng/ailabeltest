<template>
  <div class="login-wrapper" :style="'background-image:url('+ Background +')'">
    <div class="form-box">
      <div class="form-title">
        <!-- <img src="../assets/img/logo2.png" alt="icon"> -->
        <h2>病理切片缺陷标注系统</h2>
        <p>账号登录</p>
      </div>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="0px" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="请输入账号" prefix-icon="el-icon-user" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password @keyup.enter.native="handleLogin" />
        </el-form-item>
        <!-- <el-form-item>
          <el-checkbox v-model="loginForm.rememberMe">记住我</el-checkbox>
        </el-form-item> -->
        <el-form-item>
          <el-button :loading="loading" size="small" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
            <span v-if="!loading">登 录</span>
            <span v-else>登 录 中...</span>
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button  size="small" type="primary" style="width:100%;" @click.native.prevent="handleRegister">注 册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login'
import Background from '../assets/img/login-background.jpg'

export default {
  name: 'Login',
  data() {
    return {
      Background,
      loginForm: {
        username: '',
        password: '',
        // rememberMe: ture
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }]
      },
      loading: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        const data = {
          username: this.loginForm.username,
          password: this.loginForm.password,
        }
        if (valid) {
          this.loading = true
          login(data).then(res => {
            this.loading = false
            console.log("res: ",res)
            // console.log("res.data.role: ",typeof(res.data.role))
            localStorage.setItem("_userID",res.data.userID)
            localStorage.setItem("_username",res.data.username)
            localStorage.setItem("_role",res.data.role.substring(6,res.data.role.length-1))
            console.log("redirect: ",this.redirect);
            this.$router.push({ path: this.redirect || '/' }).catch(error => {})
          }).catch(err=>{
            this.$message.error(err.message);
            console.log(err);
            this.loading = false
          })
        }
      })
    },
    handleRegister() {
      this.$router.push( '/register' ).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="less">
.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  .form-box {
    width: 320px;
    padding: 15px 30px 20px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 15px 30px 0 rgba(0, 0, 1, .1);
    .form-title {
      margin: 0 auto 35px;
      text-align: center;
      color: #707070;
      font-size: 18px;
      letter-spacing: 2px;
    }
  }
}
</style>
