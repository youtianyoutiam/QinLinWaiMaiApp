<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item badge="0" to="/HomePage">
      <span>主页</span>
      <template #icon>
        <van-icon name="wap-home-o" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item to="/ShoppingCart">
      <span>购物车</span>
      <template #icon>
        <van-icon name="cart-o" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item to="/OrderForGoods">
      <span>订单</span>
      <template #icon>
        <van-icon name="orders-o" />
      </template>
    </van-tabbar-item>

    <van-tabbar-item to="/mine">
      <span>我的</span>
      <template #icon>
        <van-icon name="manager-o" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const active = ref(0);
    return {
      active,
    };
  },
}
</script>

<style lang="less" scoped>
.van-tabbar-item--active {
  color: #FFCF3E;

}
</style>