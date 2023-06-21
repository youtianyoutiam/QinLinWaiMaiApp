//购物车页面
let MyPage = {
  state: () => {
    return {
      //登录用户
      CurrentUser: [],
      //我的订单数据弹出框是否显示
      MyPage: false
    }
  },
  actions: {
  },
  getters: {
  },
  mutations: {
    //获取当前登录用户
    CurrentLogin(state, data) {
      state.CurrentUser[0] = data;
    },
    UserDataPopUp(state) {
      state.MyPage = !state.MyPage;
      console.log(state.MyPage, 'vueX state.MyPage');
    }
  },
}

export default MyPage