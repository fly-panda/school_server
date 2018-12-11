<template>
  <div id="app">
    <router-view/>
    <tabbar>
      <tabbar-item link="/">
        <img slot="icon" src="./assets/img/tabbar/tab1.png">
        <img slot="icon-active" src="./assets/img/tabbar/tab1-active.png">
        <span slot="label">我的任务</span>
      </tabbar-item>
      <tabbar-item link="/task">
        <img slot="icon" src="./assets/img/tabbar/tab2.png">
        <img slot="icon-active" src="./assets/img/tabbar/tab2-active.png">
        <span slot="label">任务管理</span>
      </tabbar-item>
      <tabbar-item  link="/copy">
        <img slot="icon" src="./assets/img/tabbar/tab3.png">
        <img slot="icon-active" src="./assets/img/tabbar/tab3-active.png">
        <span slot="label">抄送</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';

export default {
  name: "App",
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {

  }
};
</script>

<style>
.weui-tabbar {
  position: fixed !important;
  background: #FFFFFF !important;
  box-shadow: 0 3px 15px 0 rgba(0,0,0,0.06) !important;
}
.weui-tabbar:before {
  border: none !important;
}
</style>
