<template>
  <heads @HomeSearch="HomeSearch"></heads>
  <Navigation :valuesD="valuesD" :valuesX="valuesX"></Navigation>
  <van-tabs v-model:active="active" @click="getInfo">
    <van-tab title="天天神器"></van-tab>
    <van-tab title="满减配送"></van-tab>
    <van-tab title="点高评分"></van-tab>
    <van-tab title="会员减免"></van-tab>
  </van-tabs>
  <ListData :menus="menus"></ListData>
  <div v-show="!menus[0]?.name">
    <van-empty description="没有找到" />
  </div>
</template>
<script>
import heads from '@/components/home/page/head.vue';
import Navigation from '@/components/home/page/Navigation.vue';
import ListData from '@/components/home/page/ListData.vue'
import link from '@/api/Link';
import urlApi from '@/api/url';
import { reactive, ref } from 'vue';
export default {
  components: { heads, Navigation, ListData },
  setup() {
    let valuesD = reactive([]);
    let valuesX = reactive([]);
    async function Nav() {
      await link(urlApi.HomePageTop).then(async ok => {
        ok.data.slice(0, 5).forEach(element => {
          valuesD.push(element);
        });
        ok.data.slice(5, 14).forEach(element => {
          valuesX.push(element);
        });
        valuesX[9] = { name: '全部分类', title: "icon-maiyao" }
      })
    } Nav()
    //列表数据
    let menu = reactive([]);
    //可变数据
    let menus = reactive([]);
    function men() {
      link(urlApi.HomePageMenu).then(ok => {
        // console.log(ok, 'HomePageMenu');
        ok.data.forEach(item => {
          item.img = require("../../../assets/imgs/menu/" + item.img)
          menu.push(item)
        })
        getInfo()
      })
    } men()
    const active = ref(0);
    function getInfo() {
      if (active.value == 0) {
        FilterList(active.value)
      } else if (active.value === 1) {
        FilterList(active.value + 1)
      } else if (active.value === 2) {
        FilterList(active.value + 1)
      } else {
        FilterList(active.value + 1)
      }
    }
    function FilterList(value) {
      if (value == 0) {
        menus.length = 0;
        menu.forEach(item => {
          menus.push(item)
        })
      } else {
        menus.length = 0;
        let aa = menu.filter(i => i.type == value);
        aa.forEach(item => {
          menus.push(item)
        })
      }
    }

    const HomeSearch = (value => {
      if (value == '') {
        getInfo()
      } else {
        let data = menus.filter((e) => {
          return e.name.includes(value);
        })
        menus.length = 0;
        data.forEach(item => {
          menus.push(item)
        })
      }
    })
    //接收搜索框内容

    return { valuesD, valuesX, menus, getInfo, active, HomeSearch }
  }

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