<template>
  <RouterView></RouterView>
  <BtnNav />
</template>

<script>
import BtnNav from '@/components/home/BottomNavigation.vue';
export default {
  components: { BtnNav }
}
</script>

<style lang="scss" scoped></style>