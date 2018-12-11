<template>
  <div class="tab">
    <div class="tab-wrapper">
      <div
        class="item"
        v-for="(item, index) of tabData"
        :class="{ 'active' : item.active }"
        :key="index"
        @click="tabClick(index)"
      >{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tab",
  props: {
    tabData: Array
  },
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    tabClick(index) {
      this.tabData.map((v, i) => {
        v.active = index == i ? true : false;
      });
      this.$emit("toogleTab", index);
    }
  },
  mounted() {}
};
</script>

<style scope lang="scss">
@import "../../assets/styles/mixins.scss";
.tab-wrapper {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 14px;
  color: #9b9b9b;
  display: flex;
  align-items: center;
  padding: px2rem(20);
  background: #fff;
  box-sizing: border-box;
  .mr-35 {
    margin-right: px2rem(35);
  }
  .item {
    position: relative;
    &:first-child {
      margin-right: px2rem(35);
    }
  }
  .active {
    font-size: 20px;
    color: #61b961;
    &::after {
      position: absolute;
      bottom: px2rem(-7);
      left: 5%;
      content: "";
      width: 90%;
      height: 2px;
      background: #5db75d;
      border-radius: 1px;
    }
  }
}
</style>
