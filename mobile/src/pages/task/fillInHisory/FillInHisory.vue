<template>
  <div class="wrapper">
    <scroller
      lock-x
      scrollbar-y
      use-pullup
      :pullup-config="pullupDefaultConfig"
      @on-pullup-loading="loadMore"
      ref="scrollerBottom"
      :height="lishH"
    >
      <ul class="list">
        <li class="item" v-for="(item, index) of listData" :key="index">
          <div class="left">
            <div class="left-top">
              <div class="title">{{ item.title }}</div>
              <img v-if="item.statu" src="../../../assets/img/icon/icon-tanhao.png" width="13" alt>
            </div>
            <div class="date">填写时间：{{ item.date }}</div>
          </div>
          <div class="right">
            <x-icon type="ios-arrow-right" size="16" class="icon-arrow-right"></x-icon>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
import { Scroller } from "vux";

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
  name: "FillInHisory",
  components: {
    Scroller
  },
  props: {},
  data() {
    return {
      pullupDefaultConfig: pullupDefaultConfig,
      lishH: "-53",
      listData: [
        {
          title: "收集更多数据收集更多数据收集更多数据收集更多数据收集更多数据",
          statu: true,
          date: "11/26 08:00"
        },
        {
          title: "收集更多数据",
          statu: false,
          date: "11/26 08:00"
        },
        {
          title: "收集更多数据",
          statu: false,
          date: "11/26 08:00"
        },
        {
          title: "收集更多数据",
          statu: false,
          date: "11/26 08:00"
        },
        {
          title: "收集更多数据",
          statu: false,
          date: "11/26 08:00"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    loadMore() {}
  },
  created() {},
  mounted() {}
};
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/mixins.scss";

.vux-x-icon-ios-arrow-right {
  fill: #c3c9cf !important;
}
.wrapper {
  padding: 10px 0;
  .list {
    padding: 0 px2rem(20);
    padding-bottom: 10px;
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #ffffff;
      box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.06);
      border-radius: 2px;
      margin-bottom: 10px;
      padding: 12px px2rem(20);
      box-sizing: border-box;
      .right {
        width: 20px;
      }
      .left {
        flex: 1;
        .title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-right: 4px;
          max-width: px2rem(240);
        }
        .left-top {
          display: flex;
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          align-items: center;
          min-width: 0;
          margin-bottom: 7px;
        }
      }
      .title {
        font-size: 17px;
        color: #333;
      }
      .date {
        color: #939393;
        font-size: 14px;
      }
    }
  }
}
</style>