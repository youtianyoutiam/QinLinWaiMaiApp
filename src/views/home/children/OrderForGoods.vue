<template>
  <van-notify type="success">
    <van-icon name="bell" style="margin-right: 4px;" />
    <span>通知内容</span>
  </van-notify>
  <van-sticky :offset-top="0">
    <div class="head">
      <div class="FanHui" @click="FanHui"><van-icon name="arrow-left" />返回</div>
      <div class="take-out">订单</div>
      <div class="add">
        <div class="item">
          <span @click="QBQS">全部签收</span>
        </div>
      </div>
    </div>
  </van-sticky>
  <form action="/">
    <van-search v-model="value" placeholder="请输入你要搜索的订单" @blur="OrderCX" />
  </form>

  <template v-for="v in valS" :key="v.id">
    <div class="OrederList">
      <div class="ListHead">
        <img :src="v.img" alt="">
        <span>{{ v.name }}</span>
        <div class="icon"><van-icon name="arrow" /></div>
      </div>
      <div class="ListMain">
        <img :src="v.img" alt="">
        <div class="right">
          <div class="head">
            <div class="mianTwo">
              <span class="ChaiDAn">{{ v.name }}</span>
              <span class="JianGe">￥{{ v.Price }}</span>
            </div>
            <div class="Fen">共{{ v.portion }}件</div>
          </div>
          <div class="bottom">
            <div class="QXDD">
              <van-button type="warning" color="#FF976A" @click="Cancel(v.id)">取消订单</van-button>
            </div>
            <div class="WYQS">
              <van-button type="success" color="#1989FA" @click="OneQS(v.id)">我已签收</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <div style="width: 100vw;height: 50px;"></div>
  <div v-show="!valS.length">
    <van-empty image-size="100" description="你的当前还没有订单" />
  </div>
  <van-toast style="padding: 0">
    <template #message>
      <van-image :src="image" width="200" height="140" style="display: block" />
    </template>
  </van-toast>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';
import { showToast } from 'vant';
import { reactive } from 'vue';
import { onMounted } from 'vue';
const route = useRoute();
const router = useRouter();
const store = useStore();

//获取订单信息
let valS = reactive([]);
let CSvalS = store.state.OrderPage.OrderInformation;
onMounted(() => {
  CSvalS.forEach(e => {
    valS.push(e)
  })
})
//返回按钮
const FanHui = () => { router.go(-1) };
//全部签收
const QBQS = () => {
  showToast('已经全部签收');
  store.commit('AllReceiveOrder')
}
//签收一个
const OneQS = (id) => {
  showToast('已签收');
  store.commit('OneReceiveOrder', id)
}
//取消订单
const Cancel = (id) => {
  showToast('已取消');
  store.commit('CancelOrder', id)
}

//搜索框
const value = ref('');
// 点击搜索框内部 X 图标
// 点击文字 取消
//搜索框失去焦点
const OrderCX = () => {
  console.log(CSvalS, '!!!!!!!!!!!!!!!!!!!!!!!!!');
  if (value.value == '') {
    valS.length = 0;
    CSvalS.forEach(e => {
      valS.push(e)
    })
  } else {
    valS.length = 0;
    let data = CSvalS.filter((e) => {
      return e.name.includes(value.value)
    });
    data.forEach(e => {
      valS.push(e)
    });
  }
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

.OrederList {
  width: 95vw;
  height: 200px;
  margin: 1vh 2.5vw;
  border-radius: 20px;
  background-color: white;


  .ListHead {
    display: flex;
    box-sizing: border-box;
    padding: 10px 10px 10px 15px;

    img {
      width: 45px;
      height: 45px;
    }

    span {
      font-size: 25px;
      font-weight: 700;
      margin-left: 25px;
    }

    .icon {
      font-size: 25px;
      color: #FFCF3E;
      padding-left: 15px;
    }
  }

  .ListMain {
    display: flex;

    img {
      width: 100px;
      height: 100px;
      padding-left: 15px;
    }

    .right {
      display: flex;
      flex-direction: column;

      .head {
        width: calc(90vw - 100px);
        background-color: white;
        display: flex;
        flex-direction: column;

        .mianTwo {
          width: calc(90vw - 100px);
          padding: 25px 10px 0 10px;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;

          .ChaiDAn {
            font-size: 20px;
          }

          .JianGe {
            font-weight: 700;
            font-size: 15px;
          }
        }

        .Fen {
          text-align: right;
          padding-right: 15px;
          letter-spacing: .1rem;
          width: calc(90vw - 100px);
        }
      }

      .bottom {
        display: flex;
        justify-content: end;
        padding-top: 20px;

        .QXDD {
          margin-right: 30px;
        }

        .WYQS {
          margin-right: 15px;
        }
      }
    }
  }
}
</style>