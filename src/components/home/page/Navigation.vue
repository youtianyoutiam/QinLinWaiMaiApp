<template>
  <!--大提示 -->
  <van-grid :gutter="0" :column-num="valuesD.length">
    <van-grid-item v-for=" v in valuesD" :key="v.title">
      <svg class="iconDA" aria-hidden="true">
        <use :xlink:href="`#${v.title}`"></use>
      </svg>
      <span>{{ v.name }}</span>
    </van-grid-item>
  </van-grid>
  <van-grid :gutter="0" :column-num="5">
    <van-grid-item v-for=" v in valuesX" :key="v.title">
      <svg class="iconXiao" aria-hidden="true">
        <use :xlink:href="`#${v.title}`"></use>
      </svg>
      <span>{{ v.name }}</span>
    </van-grid-item>
  </van-grid>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps(["valuesD", "valuesX"])
</script>

<style lang="less">
.iconDA {
  width: 60px;
  height: 60px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.iconXiao {
  width: 40px;
  height: 40px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.van-hairline--top {
  padding-bottom: 10px;
}
</style>