<template>
  <div class="bg">
    <div class="main">
      <div class="title">登录系统</div>
      <div class="user">
        <van-cell-group>
          <van-field v-model="username" required clearable label="用户名" icon="question-o" placeholder="请输入用户名" />
        </van-cell-group>
      </div>
      <div class="paw">
        <van-cell-group>
          <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" icon="question-o" />
        </van-cell-group>
      </div>
      <button class="but" @click="LoginUserDate">登录</button>
    </div>
  </div>
  <van-toast v-model:show="show" style="padding: 0">
    <template #message>
      <van-image :src="image" width="200" height="140" style="display: block" />
    </template>
  </van-toast>
</template>

<script setup>
import link from '@/api/Link';
import apiUrl from '@/api/url';
import { ref, onMounted } from 'vue';
import { showToast } from 'vant';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
const store = useStore();
const router = useRouter();
//用户名
let username = ref("admin");
let password = ref(123);

const LoginUserDate = () => {
  link(apiUrl.Login).then((ok) => {
    let flag = ok.data.find(e => {
      return e.name == username.value && e.paw == password.value
    });
    if (flag) {
      showToast({
        message: '登录成功',
        position: 'bottom',
      });
      store.commit('CurrentLogin', flag);
      router.push("/HomePage")
    } else {
      showToast({
        message: '账号或者密码错误',
        position: 'bottom',
      });
    }
  })
}
</script>

<style lang="less" scoped>
.bg {
  width: 100vw;
  height: 100vh;
  background-image: url('../../assets/imgs/menu/login.png');
  background-size: 100% 100%;
  object-fit: cover;
  object-position: center;
  clip: rect(0px, 405px, 217px, 0px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  .main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F8F8FF;
    opacity: 0.8;
    border-radius: 20px;
    width: 90vw;
    padding: 10px;

    .title {
      font-size: 23px;
      padding-bottom: 10px;
      color: #236082;
      font-weight: 700;
    }

    .user {
      width: 85vw;
    }

    .paw {
      width: 85vw;
    }

    .but {
      width: 100px;
      height: 40px;
      margin-top: 10px;
      margin-bottom: 5px;
      border: 0;
      background-color: PapayaWhip;
      font-size: 18px;
      font-weight: 700;
      border-radius: 20px;
      box-sizing: border-box;
      // padding: 10px;
    }
  }
}
</style>