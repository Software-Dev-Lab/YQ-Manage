<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_from" :model="loginFormData" :rules="rules" ref="loginFromRef">
          <h1>hello</h1>
          <h2>欢迎来到{{setting.title}}</h2>
          <el-form-item prop="username">
            <!--添加图标-->
            <el-input :prefix-icon="User" v-model="loginFormData.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <!--    添加小眼睛可以查看密码        -->
            <el-input :prefix-icon="Lock" v-model="loginFormData.password" type="password"
                      placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login_button" :loading="loading" type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import {setting} from "../../setting.ts";

const usernameValidator = (rule: any, value: string, callback: Function) => {
  rule.trigger = 'change'
  //判断'用户名最少5位' '用户名最长10位'
  if (value.length < 5) {
    callback(new Error('用户名最少5位'))
  } else if (value.length > 10) {
    callback(new Error('用户名最长10位'))
  }
  callback()

}
const rules = {
  username: [
    //添加自定义规则
    {validator: usernameValidator}
  ],
  password: [
    {required: true, min: 6, message: '密码最少6位', trigger: 'change'},
    {max: 10, message: '密码最长10位', trigger: 'change'}
  ]
}
const loginFromRef = ref()
console.log(loginFromRef)
//引入图标
import {User, Lock} from '@element-plus/icons-vue'
import {reactive, ref} from 'vue'
//用户对象
let loginFormData = reactive({
  username: 'admin',
  password: '111111'
})

import useUserStore from '../../store/modules/user.ts'
import {useRouter} from "vue-router";
import {ElNotification} from 'element-plus'

let userStore = useUserStore()
let loginRouter = useRouter();

import "element-plus/theme-chalk/el-notification.css";

const loading = ref(false)
//当前时间
const hour = new Date().getHours()
//判断time是上午还是下午
let msg = hour < 12 ? '上午好' : (hour < 18 ? '下午好' : '晚上好');

const login = async () => {
  await loginFromRef.value.validate()
  loading.value = true
  await userStore.userLogin(loginFormData).then(() => {
    loginRouter.push('/');
    ElNotification({
      type: 'success',
      title: '登录成功',
      message: msg + "!  亲爱的" + loginFormData.username,
      duration: 2000,
    })
  }).catch((err) => {
    ElNotification({
      type: 'error',
      title: '登录失败',
      message: err.message,
      duration: 2000,
    })
  }).finally(() => {
    loading.value = false
  })

}

</script>

<style lang="scss" scoped>
.login_container {

  width: 100%;
  height: 100vh;
  //背景图片
  background: url("@/assets/img/background.jpg") no-repeat center/cover;
  background-size: cover;
  //周围都空一点
  padding: 40px;

  .login_from {
    //圆角
    border-radius: 15px;
    //透明跟背景一样
    background: rgba(255, 255, 255, 0.3) no-repeat;
    position: relative;
    width: 60%;
    top: 30vh;

    h1 {
      color: white;
      font-size: 40px;
      margin: 0px 20px;
    }

    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 20px;
    }

    .login_button {
      width: 100%;
      //下面隔一点
      margin-bottom: 10px;
    }
  }
}
</style>