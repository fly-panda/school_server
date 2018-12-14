<template>
  <!-- 表单页面悬浮按钮 -->
  <div class="suspend-btn" v-if="isShowMenu">
    <div class="wrapper">
      <div class="box">
        <div class="handle">
          <img v-if="isOpen" @click="toggle(0)" class="open" src="../../assets/img/btn/close.png" width="50" alt>
          <img v-else @click="toggle(1)" class="close" src="../../assets/img/btn/open.png" width="50" alt>
        </div>
        <div class="menu" v-if="!isOpen">
          <div class="box">
            <img @click="delBtn" class="del" src="../../assets/img/btn/del.png" alt="" width="35">
            <img v-if="isChange" class="change" src="../../assets/img/btn/disable-change.png" alt="" width="35">
            <img @click="editBtn" v-else class="change" src="../../assets/img/btn/change.png" alt="" width="35">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SuspendBtn",
  components: {},
  props: {
    isShowMenu: Boolean
  },
  data() {
    return {
      isOpen: true,
      isChange: false   // 是否可以编辑
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 菜单显示/隐藏
    toggle(type) {
      this.isOpen = type == 0 ? false : true
    },
    editBtn() {
      this.$emit("menuHandleClick", 0);      
    },
    delBtn() {
      this.$emit("menuHandleClick", 1);            
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
.suspend-btn {
  position: fixed;
  z-index: 600;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: 0.29);
  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    .handle, .menu {
      position: absolute;
      bottom: 50px;
      right: px2rem(20);
      width: 44px;
      height: 44px;
      z-index: 10;
    }
    .menu {
      z-index: 9;
      .box {
        position: relative;
        img {
          position: absolute;
        }
        .del {
          top: -40px;
          left: 0;
        }
        .change {
          top: 4px;
          left: -44px;
        }
      }
    }
  }
}
</style>