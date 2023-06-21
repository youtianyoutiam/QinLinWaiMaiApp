import { createStore } from 'vuex'
import OrderCart from './modules/OrderCart';
import OrderPage from './modules/OrderPage';
import MyPage from './modules/MyPage';
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    //购物车
    OrderCart,
    //订单页
    OrderPage,
    //我的主页
    MyPage
  }
})
