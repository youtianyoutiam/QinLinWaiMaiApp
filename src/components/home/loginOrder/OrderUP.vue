<template>
  <van-overlay :show="store.state.MyPage.MyPage">
    <div class="OrUpMain">
      <template v-for="v in  UserOrdeZT" :key="v.id">
        <div class="MyOrUp">
          <img class="MyOrUpImg" :src="v.img" alt="">
          <div class="MyOrUpMain">
            <span class="MyOrUpTitle">{{ v.name }}</span>
            <div class="MyOrUpFG">
              <span class="MyOrUpFen">{{ v.portion }}份</span>
              <span class="MyOrUpGj">共计{{ v.portion * v.Price }}</span>
            </div>
          </div>
        </div>
      </template>
      <div v-show="!UserOrdeZT[0]?.status">
        <van-empty description="你当前还没有订单" />
      </div>
      <div class="OrUpBtn">
        <van-button round type="success" @click="MyPagGB">关闭</van-button>
      </div>
    </div>
  </van-overlay>
</template>

<script setup>
import { useStore } from 'vuex';
import { defineProps, watchEffect, } from 'vue';

const store = useStore();

let props = defineProps({ "UserOrdeZT": "" });

//点击关闭
const MyPagGB = () => {
  store.commit("UserDataPopUp")
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.OrUpMain {
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  overflow: scroll;
  display: flex;

  .MyOrUp {
    width: 90vw;
    height: 180px;
    display: flex;
    background-color: #F0E68C;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 15px;
    margin-top: 10px;
    margin: 0 auto;
    margin-top: 10px;

    .MyOrUpImg {
      width: 150px;
      height: 150px;
    }

    .MyOrUpMain {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .MyOrUpTitle {
        padding: 15px;
        font-size: 23px;
        font-weight: 700;
      }

      .MyOrUpFG {
        padding: 10px 15px;

        .MyOrUpFen {
          width: ;
          padding-left: 15px;
          font-size: 16px;
        }

        .MyOrUpGj {
          padding-left: 40px;
          font-size: 16px;
          color: red;
          font-weight: 700;
        }
      }
    }
  }

  .OrUpBtn {
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 60px;
  }
}
</style>