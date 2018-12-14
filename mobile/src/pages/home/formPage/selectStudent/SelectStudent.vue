<template>
  <div class="select-student">
    <div class="search-box">
      <div class="input-box">
        <input type="text" placeholder="请输入搜索内容">
        <icon type="search"></icon>
      </div>
    </div>
    <div class="wrapper">
      <div class="left">
        <ul>
          <li>一年一班</li>
        </ul>
      </div>
      <div class="right">
        <scroller
          lock-x
          scrollbar-y
          use-pullup
          :pullup-config="pullupDefaultConfig"
          @on-pullup-loading="loadMore"
          ref="scrollerBottom"
          :height="lishH"
        >
          <ul>
            <li v-for="(item, index) of studentList" :class="{ 'active' : index == 0 }" :key="index">
              <span>{{ item }}</span>
              <icon v-if="index == 0" type="success-no-circle"></icon>
            </li>
          </ul>
        </scroller>
      </div>
    </div>
  </div>
</template>

<script>
import { Search, Icon, Scroller } from "vux";

const pullupDefaultConfig = {
  content: "上拉加载更多",
  pullUpHeight: 60,
  height: 40,
  autoRefresh: false,
  downContent: "释放后加载",
  upContent: "上拉加载更多",
  loadingContent: "加载中...",
  clsPrefix: "xs-plugin-pullup-"
};

export default {
  name: "SelectStudent",
  components: {
    Icon,
    Scroller
  },
  data() {
    return {
      pullupDefaultConfig: pullupDefaultConfig,
      studentList: [
        "张三",
        "张三",
        "张三",
        "张三",
        "张三",
        "张三",
        "张三",
        "张三",
        "张三",
        "张三"
      ],
      results: [],
      value: "test",
      lishH: "-80"
    };
  },
  methods: {
    loadMore() {
      let data = this.studentList;
      this.studentList = data.concat(this.studentList);
      this.$refs.scrollerBottom.donePullup();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../../assets/styles/mixins.scss";
.select-student {
  padding-top: 66px;
  .search-box {
    position: fixed;
    width: 100%;
    height: 66px;
    top: 0;
    left: 0;
    z-index: 10;
    background: #f0f0f0;
    padding: 12px px2rem(10);
    box-sizing: border-box;
    .input-box {
      width: 100%;
      position: relative;
      input {
        background: #ffffff;
        border: 1px solid #f0f0f0;
        border-radius: 2px;
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        padding-left: px2rem(47);
        font-size: 15px;
      }
      i {
        position: absolute;
        left: px2rem(20);
        top: 50%;
        margin-top: -7px;
      }
    }
  }
  .wrapper {
    display: flex;
    .left {
      width: px2rem(138);
      background: #f6f6f6;
      padding-top: 10px;
      ul {
        li {
          position: relative;
          background: #fff;
          width: 100%;
          height: 38px;
          line-height: 38px;
          padding-left: px2rem(23);
          box-sizing: border-box;
          font-size: 15px;
          color: #5db75d;
          &::after {
            position: absolute;
            content: "";
            width: 2px;
            height: 80%;
            background: #5db75d;
            left: 0;
            top: 10%;
          }
        }
      }
    }
    .right {
      padding-top: 10px;
      width: px2rem(237);
      ul {
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 38px;
          box-sizing: border-box;
          padding-left: px2rem(20);
          padding-right: px2rem(28);
          font-size: 15px;
          color: #333333;
          .weui-icon-success-no-circle {
            font-size: 14px;
          }
        }
        .active {
          color: #5db75d;
        }
      }
    }
  }
}
</style>
