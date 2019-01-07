<template>
  <div class="box">
    <img src="../../assets/img/task/nodata.png" alt>
    <div>暂无数据</div>
  </div>
</template>

<script>
export default {
  name: "noData",
  components: {},
  props: {},
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
.box {
  position: fixed;
  width: 100%;
  display: flex;
  padding-top: px2rem(200);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #9b9b9b;
  img {
    margin-bottom: 20px;
    width: px2rem(76);
    height: px2rem(76);
  }
}
</style>