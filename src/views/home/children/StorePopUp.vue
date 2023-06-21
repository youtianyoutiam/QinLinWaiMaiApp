<template>
  <van-notify type="success">
    <van-icon name="bell" style="margin-right: 4px;" />
    <span>通知内容</span>
  </van-notify>
  <van-nav-bar title="店铺" left-text="返回" left-arrow @click-left="$router.go(-1)" />
  <div class="headPopUp"><img src="@/assets/imgs/menu/店铺.png" alt=""></div>
  <div class="mainPopUp">
    <div class="title">
      <span>{{ v.name }}</span>
      <img :src="v.img" alt="">
    </div>
    <van-divider /> <van-tabs v-model:active="activeName">
      <van-tab title="点菜" name="a"></van-tab>
      <van-tab title="评价" name="b"></van-tab>
      <van-tab title="商家" name="c"></van-tab>
    </van-tabs>
    <div style="display: flex;">
      <div class="Left-List">
        <van-sidebar v-model="active" width="150px">
          <van-sidebar-item title="热门套餐" />
          <van-sidebar-item title="超级折扣" />
        </van-sidebar>
      </div>
      <div class="Right-List">
        <div class="Right-List-Left">
          <img :src="v.img" alt="">
        </div>
        <div class="Right-List-Right">
          <div><span>{{ v.name }}</span><span>￥{{ v.Price }}</span></div>
          <div>
            <van-stepper v-model="value" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <van-action-bar>
    <van-action-bar-icon icon="coupon-o" @click="order" text="订单" color="#ee0a24" />
    <van-action-bar-icon icon="cart-o" @click="SjGwc" text="购物车" />
    <van-action-bar-icon icon="star" text="已收藏" color="#ff5000" />
    <van-action-bar-button type="warning" text="加入购物车" @click="Shopping" />
    <van-action-bar-button type="danger" @click="BuyNow" text="立即购买" />
  </van-action-bar>
</template>

<script setup>
import { ref, toRaw } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { showNotify } from 'vant';
const route = useRoute();
const router = useRouter()
const store = useStore();
//店铺订单
//当前菜品信息
const v = JSON.parse(route.query.v);

let activeName = ref(0)
let active = ref(0);
//多少份
const value = ref(1);
// console.log(store.state.OrderCart.aa, '!!!!!!');
//点击加入购物车
const Shopping = () => {
  showNotify({
    type: 'primary',
    color: '#ad0000',
    background: '#ffe1e1',
    message: '已加入购物车'
  });
  v.portion = value.value;
  store.commit('ReceivingCart', v)
}
//点击购物车
const SjGwc = () => {
  router.push("/ShoppingCart")
}

//点击立刻购买
const BuyNow = () => {
  showNotify({
    type: 'primary',
    color: '#ad0000',
    background: '#ffe1e1',
    message: '购买成功，已加入订单'
  });
  v.portion = value.value;
  store.commit('MerchantOrder', v)
}
//点击订单
const order = () => {
  router.push("/OrderForGoods")
}
</script>

<style lang="less">
.van-nav-bar .van-icon,
.van-nav-bar__text {
  color: #FFCF3E
}

.van-tabs__line {
  background-color: #FFCF3E;
}

.van-sidebar-item--select:before {
  background-color: #FFCF3E;
}

.van-sidebar-item,
.van-sidebar {
  width: 100px;
}

.headPopUp {
  width: 90vw;
  height: 150px;
  background-color: #CB0A11;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 70vw;
    height: 130px;
  }
}

.mainPopUp {
  width: 90vw;
  margin: 0 auto;
  min-height: calc(100vh - 220px);
  background-color: white;

  .title {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    // background-color: aqua;
    span {
      font-size: 23px;
      line-height: 80px;
    }

    img {
      height: 70px;
      line-height: 80px;
    }
  }

  .Left-List {
    width: 100px;
    height: 550px;
    padding-top: 5px;
    background-color: #f7f8fa;
  }

  .Right-List {
    width: 240px;
    height: 100px;
    margin: 10px auto;
    // background-color: #FFCF3E;
    display: flex;

    .Right-List-Left {
      img {
        width: 100px;
        height: 100px;
        box-sizing: border-box;
        padding: 10px;
      }
    }

    .Right-List-Right {
      width: 140px;
      height: 100px;
      display: flex;
      // background-color: aqua;
      flex-direction: column;
      justify-content: space-evenly;
      box-sizing: border-box;
      padding-left: 20px;
    }
  }
}
</style>