<template>
  <div class="login-wrapper" :style="'background-image:url('+ Background +')'">
    <div class="form-box">
      <div class="form-title">
        <!-- <img src="../assets/img/logo2.png" alt="icon"> -->
        <h2>病理切片缺陷标注系统</h2>
        <p>账号注册</p>
      </div>
      <el-form ref="registerForm" :model="registerForm" :rules="loginRules" label-width="0px" class="login-form">
        <el-form-item prop="username">
          <el-input v-model="registerForm.username" type="text" auto-complete="off" placeholder="请输入账号" prefix-icon="el-icon-user" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="registerForm.password" type="password" auto-complete="off" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password />
        </el-form-item>
        <el-form-item prop="password2">
          <el-input v-model="registerForm.password2" type="password2" auto-complete="off" placeholder="请再次输入密码" prefix-icon="el-icon-lock" show-password />
        </el-form-item>
        <el-form-item>
          <el-button :loading="loading" size="small" type="primary" style="width:100%;" @click.native.prevent="handleRegister">
            <span v-if="!loading">注 册</span>
            <span v-else>注 册 中...</span>
          </el-button>
        </el-form-item>
        <el-form-item>
          <el-button  size="small" type="primary" style="width:100%;" @click.native.prevent="returnLogin">返回登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { register } from '@/api/login'
import Background from '../assets/img/login-background.jpg'

export default {
  name: 'Register',
  data() {
    return {
      Background,
      registerForm: {
        username: '',
        password: '',
        password2: '',
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        password: [{ required: true, trigger: 'blur', message: '密码不能为空' }],
        password2: [{ required: true, trigger: 'blur', message: '密码不能为空' }]
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
    handleRegister() {
      this.$refs.registerForm.validate(valid => {
        const data = {
          username: this.registerForm.username,
          password: this.registerForm.password,
          password2: this.registerForm.password2,
        }
        if (this.registerForm.password == this.registerForm.password2) {
          if (valid) {
          this.loading = true
          register(data).then(res => {
            this.loading = false
            console.log(res)
            this.$router.push( '/login' ).catch(err => {
              console.log("1",err);
            })
          }).catch(err => {
            console.log(err);
            this.loading = false
          })
        }
        } else if (this.registerForm.password != '' && this.registerForm.password2 != '') {
          this.$message({
          message: '两次密码输入不一致',
          type: 'warning'
        });
        }
        
      })
    },
    returnLogin() {
      this.$router.push( '/login' ).catch(err => {
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
