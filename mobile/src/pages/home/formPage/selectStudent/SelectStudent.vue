<template>
  <div class="select-student">
    <search
      @result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      auto-scroll-to-top
      top="46px"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search"></search>
    <div class="wrapper"></div>
  </div>
</template>

<script>
import { Search, Icon } from "vux";

export default {
  name: "SelectStudent",
  components: {
    Search,
    Icon
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
