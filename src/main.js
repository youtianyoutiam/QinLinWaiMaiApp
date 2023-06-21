import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/styles/mian.css';
// px2rem 自适应
import 'lib-flexible'
//vant4 组件库
import { Overlay, Card, Toast, Notify, Calendar, Empty, SubmitBar, ActionBar, ActionBarIcon, ActionBarButton, Stepper, Sidebar, SidebarItem, Tabbar, TabbarItem, Sticky, Search, Grid, GridItem, Tab, Tabs, Divider } from 'vant';

createApp(App)
  .use(Overlay).use(Card).use(Toast).use(Notify).use(Calendar).use(Empty).use(ActionBarButton).use(SubmitBar).use(ActionBarIcon).use(ActionBar).use(Stepper).use(SidebarItem).use(Sidebar).use(Divider).use(Tabbar).use(TabbarItem).use(Sticky).use(Search).use(Grid).use(GridItem).use(Tab).use(Tabs)
  .use(store).use(router).mount('#app')
