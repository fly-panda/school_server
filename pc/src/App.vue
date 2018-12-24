<template>
  <div id="app" class="rootStyle">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <!-- <router-view/> -->
  </div>
</template>

<script>
export default {
    data() {
        return {
            theme1: 'light'
        }
    }
}
</script>
<style lang='less' scoped>
    .rootStyle{
        height: 100%
    }
</style>
