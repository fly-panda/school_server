<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
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
