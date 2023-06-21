<template>
  <van-sticky :offset-top="0">
    <div class="head">
      <div class="take-out">外卖</div>
      <div class="Search-box">
        <van-search v-model="value" shape="round" background="#FFCF3E" @blur="SRK" placeholder="请输入搜外卖" />
      </div>
      <div class="add">
        <van-icon name="location-o" />
        <div class="item">
          <span>地址</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </van-sticky>
</template>
<script setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(['HomeSearch']);
let value = ref('');

const SRK = () => {
  emit('HomeSearch', value.value)
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


  .add {
    font-size: 23px;
    display: flex;
    padding-right: 5px;

    .item {
      font-size: 14px;
      line-height: 25px;
    }
  }

}
</style>