<template>
  <div id="app" class="rootStyle">
    <router-view/>
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
