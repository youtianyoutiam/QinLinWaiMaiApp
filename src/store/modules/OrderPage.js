//订单页
let OrderPage = {
  state: {
    //订单数据
    OrderInformation: [],
    //订单数据是否完成
    OrderDateStatus: [],
  },
  actions: {
  },
  getters: {
  },
  mutations: {
    //商店订单
    MerchantOrder(state, v) {
      state.OrderInformation.push(v);
    },
    //购物车订单
    MerchantOrders(state, v) {
      v.forEach(element => {
        state.OrderInformation.push(element);
      });
    },
    //全部签收
    AllReceiveOrder(state) {
      state.OrderInformation.forEach(i => {
        state.OrderDateStatus.push({ ...i, status: 1 })
      })
      state.OrderInformation.length = 0;
    },
    //签收一个
    OneReceiveOrder(state, id) {
      console.log(state.OrderDateStatus, ' state.OrderDateStatus1');
      let index = state.OrderInformation.findIndex(i => i.id == id);
      state.OrderDateStatus.push({ ...state.OrderInformation[index], status: 1 });
      state.OrderInformation.splice(index, 1);
      console.log(state.OrderDateStatus, ' state.OrderDateStatus2');
    },
    //取消订单
    CancelOrder(state, id) {
      let index = state.OrderInformation.findIndex(i => i.id == id);
      state.OrderDateStatus.push({ ...state.OrderInformation[index], status: 2 });
      state.OrderInformation.splice(index, 1);
    }
  }
}

export default OrderPage