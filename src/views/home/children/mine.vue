<template>
  <div class="useHead">
    <div class="img"> <img src="../../../assets/imgs/menu/iocn.png" /></div>
    <div class="main">
      <div class="useTitle">{{ useData?.name }}</div>
      <div class="useQM">这个人很懒什么也没有留下</div>
    </div>
  </div>
  <div class="useMain">
    <van-grid :column-num="2">
      <van-grid-item icon="smile" @click="useOrder(1)" text="已签收订单" />
      <van-grid-item icon="more" @click="useOrder(2)" text="取消订单" />
    </van-grid>
  </div>
  <OrderUP :UserOrdeZT="UserOrdeZT"></OrderUP>
</template>

<script setup>
import { useStore } from 'vuex';
import OrderUP from '@/components/home/loginOrder/OrderUP.vue';
import { ref } from 'vue';
import { reactive } from 'vue';

const store = useStore();
let useData = store.state.MyPage.CurrentUser[0];

let UserOrdeZT = reactive([

]);
//签收订单和取消订单
const useOrder = (i => {
  if (i == 1) {
    useOrderYZ(i)
    console.log();
  } else {
    useOrderYZ(i)
  }
  store.commit("UserDataPopUp")
})
const useOrderYZ = (q) => {
  UserOrdeZT.length = 0
  let newArray = store.state.OrderPage.OrderDateStatus.filter((e) => e.status == q);
  newArray.forEach(e => {
    UserOrdeZT.push(e)
  });
}
</script>

<style lang="less" scoped>
.useHead {
  margin-top: 20px;
  display: flex;

  .img {
    img {
      width: 100px;
      height: 100px;
      margin-left: 40px;
    }

  }

  .main {
    .useTitle {
      font-size: 23px;
      padding: 20px;
    }

    .useQM {
      padding-left: 20px;
    }
  }
}


.useMain {
  margin-top: 20px;
}
</style>