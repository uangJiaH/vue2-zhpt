<template>
  <div class="login-container">
    <h1>智慧服务平台</h1>
    <div class="login-form">
      <h2>欢迎登录</h2>
      <el-form ref="form" :model="loginForm" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model.trim="loginForm.username" placeholder="请输入账号" suffix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model.trim="loginForm.password" placeholder="请输入密码" suffix-icon="el-icon-s-goods"
                    type="password"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="verify">
            <el-input v-model="loginForm.code" placeholder="请输入验证码"></el-input>
            <el-image :src="codeImageUrl" @click.stop="handleCodeRefresh"></el-image>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button :loading="loadingStatus" type="danger" @click="handleVerifyForm">{{
              loadingStatus ? '登陆中...' : '立即登录'
            }}
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import rules from "./rules";
import UserApi from '@/api/user'
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      // loading加载状态
      loadingStatus: false,
      // 验证码图片路径
      codeImageUrl: '',
      loginForm: {
        username: '',
        password: '',
        code: '',
        token: ''
      },
      rules
    }
  },
  created() {
    this.handleGetCaptcha()
  },
  methods: {

    async handleGetCaptcha() {
      const {captchaImg, token} = await UserApi.getCaptcha()
      // console.log(res, '123')
      this.codeImageUrl = captchaImg
      this.loginForm.token = token
    },
    // 表单验证
    handleVerifyForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleSubmitLogin()
        }
      })
    },
    handleCodeRefresh() {
      this.loginForm.code = ''
      this.handleGetCaptcha()
    },
    async handleSubmitLogin() {
      try {
        const token = await this.login(this.loginForm)
        if (!token) return
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
        this.loadingStatus = true
        await this.$router.push('/')
      } catch (e) {
        console.log(e)
      } finally {
        this.loadingStatus = false
      }
    },
    // 登录
    ...mapActions({
      login: 'user/login'
    })
  }

}
</script>

<style lang="scss" scoped>
.login-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  font-family: Verdana;
  background-size: cover;
  background: url("../../assets/images/bg.jpg") no-repeat fixed center;
}

h1 {
  text-align: center;
  font-size: 45px;
  margin-top: 50px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 20;
}

h2 {
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;

}

.login-form {
  margin: 10% auto 13%;
  width: 20%;
  font-weight: 30;
}

.verify {
  width: 100%;
  display: flex;
  align-items: center;
}

.el-image {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}

.el-button {
  width: 100%;
}
</style>
