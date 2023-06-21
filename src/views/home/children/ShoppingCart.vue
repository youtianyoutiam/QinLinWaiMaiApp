<template>
  <van-sticky :offset-top="0">
    <div class="head">
      <div class="FanHui" @click="FanHui"><van-icon name="arrow-left" />返回</div>
      <div class="take-out">购物车</div>
      <div class="add">
        <div @click="Clear" class="item">
          <span>清空</span>
        </div>
      </div>
    </div>
  </van-sticky>
  <van-tabs active="a">
    <van-tab title="全部" name="a"></van-tab>
    <van-tab title="其他" name="b"></van-tab>
  </van-tabs>
  <template v-for=" v in  val " :ket="v.id">
    <div class="GwcMain" @click="cartList(v)">
      <div class="GwcImg"> <img :src="v.img" alt=""></div>
      <div class="GwcContent">
        <span class="GwcTitle">{{ v.name }}</span>
        <div class="quantity">
          <span class="GwcYuan">￥{{ v.Price }}</span>
        </div>
        <div class="GwcJbq">
          <van-stepper v-model="v.portion" min="0" @click="Jian($event, v)" />
          <span class="GwcShu">X{{ v.portion }}</span>
        </div>
      </div>
    </div>
  </template>
  <div v-show="!val.length">
    <van-empty image-size="100" description="你的购物车是空的" />
  </div>
  <van-submit-bar :price="HeJi" button-text="提交订单" @click.stop="onSubmit" bind:submit="onSubmit" />
</template>
<script setup>
import { useStore } from 'vuex';
import { ref, watch } from 'vue'
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { showNotify } from 'vant';
const router = useRouter();
let store = useStore();
let val = store.state.OrderCart.ShoppingCart;

let HeJi = ref(0)
//计算合计
function aa() {
  val.forEach(e => {
    HeJi.value += e.portion * e.Price;
  });
  HeJi.value = Number(HeJi.value + '00')
} aa()
// 点击清空按钮
let Clear = () => {
  showNotify({
    type: 'primary',
    color: '#ad0000',
    background: '#ffe1e1',
    message: '你的购物车已清空'
  });
  store.commit("ClearCart");
  val.length = 0;
  HeJi.value = 0
}
//购物车返回
const FanHui = () => {
  router.go(-1)
}
//当份为0调用
const Jian = (e, v) => {
  e.stopPropagation()
  if (!v.portion) {
    console.log(111);
    store.commit('CartBeZero', v.id);
    val = store.state.OrderCart.ShoppingCart;
  }
  HeJi.value = 0
  aa()
}
//提交订单
const onSubmit = () => {
  showNotify({
    type: 'primary',
    color: '#ad0000',
    background: '#ffe1e1',
    message: '购买成功，已加入订单'
  });
  store.commit("MerchantOrders", store.state.OrderCart.ShoppingCart)
  store.commit("ClearCart");
  val.length = 0;
  HeJi.value = 0
}
//点击购物列表
const cartList = (v) => {
  delete v.portion;
  router.push({ path: 'StorePopUp', query: { v: JSON.stringify(v) } })
}
</script>
<style lang="less" scoped>
.head {
  width: 100vw;
  height: 50px;
  background-color: #FFCF3E;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5px;

  .take-out {
    padding-left: 10px;
    font-size: 20px;
    font-weight: 700;
  }

  .FanHui {
    font-size: 20px;
    font-weight: 700;
    padding-left: 10px;
  }

  .add {
    font-size: 23px;
    display: flex;
    padding-right: 5px;

    .item {
      font-size: 14px;
      line-height: 25px;
      padding-right: 15px;

      span {
        padding: 10px;
        background-color: white;
        border-radius: 30px;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }

}

.GwcMain {
  margin: 10px;
  background-color: white;
  display: flex;

  .GwcImg {
    img {
      width: 135px;
      height: 135px;
      box-sizing: border-box;
      padding: 10px;
    }
  }

  .GwcContent {
    width: calc(100vw - 135px - 20px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-evenly;

    .GwcTitle {
      font-size: 23px;
      box-sizing: border-box;
      padding-left: 30px;
      font-weight: 700;
    }

    // .GwcYuan {
    //   font-size: 20px;
    //   background-color: #FFCF3E;
    //   box-sizing: border-box;
    //   color: red;
    //   padding-left: 50px;
    //   font-weight: 700;
    // }
    .quantity {
      display: flex;
      box-sizing: border-box;
      padding: 0px 30px;
      justify-content: space-between;

      .GwcYuan {
        font-size: 24px;
        box-sizing: border-box;
        color: red;
        font-weight: 700;
      }
    }

    .GwcJbq {
      // background-color: aqua;
      display: flex;
      justify-content: space-evenly;

      .GwcShu {
        font-size: 20px;
        box-sizing: border-box;
        font-weight: 700;
        padding: 2px;
        border: 1px solid #eaeeae;
      }
    }
  }
}

.van-submit-bar {
  position: absolute;
  bottom: 55px;
}
</style>