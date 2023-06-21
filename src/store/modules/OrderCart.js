//购物车页面
let OrderCart = {
  state: {
    //购物车
    ShoppingCart: []
  },
  actions: {
  },
  getters: {
  },
  mutations: {
    //接收购物车信息
    ReceivingCart(state, value) {
      let flag = state.ShoppingCart.findIndex(i => i.id == value.id);
      if (flag != -1) {
        state.ShoppingCart[flag] = {
          ...value,
          portion: state.ShoppingCart[flag].portion + value.portion
        }
        console.log(state.ShoppingCart[flag]);
      } else {
        state.ShoppingCart.push(value)
      }
    },
    //清空当前购物车信息
    ClearCart(state) {
      state.ShoppingCart = [];
    },
    //当购物车当前的份为0
    CartBeZero(state, id) {
      let value = state.ShoppingCart.findIndex((i) => i.id == id);
      console.log(value);
      state.ShoppingCart.splice(value, 1);
      console.log(state.ShoppingCart, 'state.ShoppingCart!!!!!');
    }
  },
}

export default OrderCart