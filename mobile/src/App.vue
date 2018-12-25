<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {}
};
</script>

<style>
.weui-tabbar {
  position: fixed !important;
  background: #ffffff !important;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.06) !important;
}
.weui-tabbar:before {
  border: none !important;
}
</style>
