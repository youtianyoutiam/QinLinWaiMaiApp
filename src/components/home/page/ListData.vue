<template>
  <template v-for="v in menus" :key="v.id">
    <div class="menu" @click="aa(v)">
      <img :src="v.img" alt="">
      <div class="main">
        <div>{{ v.name }}</div>
        <div>月销:{{ v.Monthly }}</div>
        <div>￥:{{ v.Price }}</div>
        <div class="item">
          <div class="one">门店上新</div>
          <div class="one">很下饭</div>
        </div>
      </div>
    </div>
  </template>
  <div class="btn"></div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
let router = useRouter()
defineProps(["menus"])
let aa = (v) => {
  router.push({ path: 'StorePopUp', query: { v: JSON.stringify(v) } })
}
</script>

<style lang="less">
.van-tabs__line {
  background: #FFCF3E;
}

.menu {
  width: 100vw;
  height: 200px;
  background-color: white;
  display: flex;
  margin-top: 10px;

  img {
    width: 150px;
    height: 150px;
    padding: 25px;
  }

  div {
    font-size: 20px;
  }

  .main {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-left: 10px;

    .item {
      display: flex;

      .one {
        background-color: #FFCF3E;
        padding: 5px;
        margin-right: 10px;
        border-radius: 10px;
      }
    }
  }
}

.btn {
  width: 100%;
  height: 55px;
}
</style>