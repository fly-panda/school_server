<template>
  <!-- 表单页面悬浮按钮 -->
  <div>
    <div class="suspend-btn" v-if="isShowMenu">
      <div class="wrapper" v-if="isShowMenu">
        <div class="box">
          <div class="handle">
            <img
              v-if="isOpen"
              @click="toggle(0)"
              class="open"
              src="../../assets/img/btn/close.png"
              width="50"
              alt
            >
            <img
              v-else
              @click="toggle(1)"
              class="close"
              src="../../assets/img/btn/open.png"
              width="50"
              alt
            >
          </div>
          <div class="menu" v-if="!isOpen">
            <div class="box">
              <img @click="delBtn" class="del" src="../../assets/img/btn/del.png" alt width="35">
              <img
                v-if="isChange"
                class="change"
                src="../../assets/img/btn/disable-change.png"
                alt
                width="35"
              >
              <img
                @click="editBtn"
                v-else
                class="change"
                src="../../assets/img/btn/change.png"
                alt
                width="35"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="model" v-show="showmodel"></div>
    <div class="model model1" v-show="showWindow">
      <div class="submit-success" v-if="showWindow">
        <div class="window">
          <div class="close" @click="hideModel">x</div>
          <img src="../../assets/img/querenshanchu_picture@2x.png" width="70" alt="">
          <div style="font-size: 18px;color: #5DB75D;">确认删除</div>
          <div style="margin-top: 10px;">确认删除这条数据么？</div>
          <div class="btn-box">
            <div @click='submitSuccessBtn(1)'>确认</div>
            <div @click='hideModel'>取消</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, Indicator } from "mint-ui";

export default {
  name: "SuspendBtn",
  components: {
    Toast
  },
  props: ['menuData'],
  data() {
    return {
      id: this.menuData.id,
      taskid: this.menuData.taskid,
      showWindow: false,
      showmodel: this.menuData.isShowModel,
      isShowMenu: this.menuData.isShowMenu,
      isOpen: true,
      isChange: false // 是否可以编辑
    };
  },
  watch: {},
  computed: {},
  methods: {
    // 菜单显示/隐藏
    toggle(type) {
      console.log(type)
      this.isOpen = type == 0 ? false : true;
      this.showmodel = type == 0 ? true : false
    },
    editBtn() {
      this.showWindow = false
      this.isOpen = true
      this.showmodel = false
      this.$router.push({ path: '/formPage', 
        query: { id: this.$route.query.id, ids: this.$route.query.ids, openType: '4' } })
      this.$emit("menuHandleClick", 1);
    },
    delBtn() {
      // this.$emit("menuHandleClick", 2);
      this.showWindow = true
      this.isOpen = true
    },
    hideModel() {
      this.showWindow = false
      this.isOpen = true
      this.showmodel = false
    },
    submitSuccessBtn(type) {

      if(type == 1) {
        this.$api.get('submit/delete', {
          id: this.id,
          taskid: this.taskid
        }, r => {
          console.log(r)
          if(r.state == '0') {
            Toast(r.result)
            setTimeout(() => {
              this.$router.push({ path: "/historyRecord", query: { ids: this.taskid } });
            }, 3000);
          }
        })
      } 
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../../assets/styles/mixins.scss";
.model {
  position: fixed;
  z-index: 500;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: .28);
}

.model1 {
  z-index: 700;
  .submit-success {
    position: relative;
    width: 100%;
    height: 100%;
    .window {
      position: absolute;
      padding-top: px2rem(16);
      box-sizing: border-box;
      top: 50%;
      left: 50%;
      margin-left: px2rem(-135);
      margin-top: px2rem(-125);
      width: px2rem(270);
      height: px2rem(251);
      background: #fff;
      border-radius: 1px;
      text-align: center;
      .btn-box {
        margin-top: px2rem(18);
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          width: px2rem(79);
          height: px2rem(28);
          text-align: center;
          line-height: px2rem(28);
          color: #fff;
          font-size: 12px;
          border-radius: 1px;
          &:first-child {
            background: #5DB75D;
            margin-right: px2rem(36);
          }
          &:last-child {
            background: #C3C9CF;
          }
        }
      }
      img {
        margin-bottom: px2rem(10);
      }
      .close {
        color:  #C3C9D0;
        text-align: right;
        padding: 0 10px;
        font-size: 16px;
        margin-bottom: px2rem(20);
      }
    }
  }
}
.suspend-btn {
  position: fixed;
  z-index: 600;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .wrapper {
    position: relative;
    height: 100%;
    width: 100%;
    .handle,
    .menu {
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