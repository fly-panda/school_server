<template>
  <div class="task">
    <div class="no-data" v-if="listData.length == 0">
      <img src="../../assets/img/task/nodata.png" alt>
      <div>暂无任务！</div>
    </div>
    <scroller
      v-else
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
          <div class="top">
            <div class="title">
              <img
                v-if="item.type == '单次任务'"
                class="icon1"
                src="../../assets/img/task/icon1.png"
                alt
              >
              <img
                v-if="item.type == '周任务'"
                class="icon2"
                src="../../assets/img/task/icon2.png"
                alt
              >
              <span class="txt">{{ item.title }}</span>
            </div>
            <div class="statu">{{ item.statu }}</div>
          </div>
          <div class="mid">
            <div class="mid-item" v-for="(item, index) of item.data" :key="index">
              <div class="mid-txt">{{ item.title }}</div>
              <div class="number">{{ item.number }}</div>
            </div>
          </div>
          <div class="bottom">
            <div class="date">截止时间：{{ item.date }}</div>
            <div class="type">{{ item.type }}</div>
          </div>
        </li>
      </ul>
    </scroller>

    <tabbar>
      <tabbar-item link="/">
        <img slot="icon" src="../../assets/img/tabbar/tab1.png">
        <img slot="icon-active" src="../../assets/img/tabbar/tab1-active.png">
        <span slot="label">我的任务</span>
      </tabbar-item>
      <tabbar-item link="/task" selected>
        <img slot="icon" src="../../assets/img/tabbar/tab2.png">
        <img slot="icon-active" src="../../assets/img/tabbar/tab2-active.png">
        <span slot="label">任务管理</span>
      </tabbar-item>
      <tabbar-item link="/copy">
        <img slot="icon" src="../../assets/img/tabbar/tab3.png">
        <img slot="icon-active" src="../../assets/img/tabbar/tab3-active.png">
        <span slot="label">抄送</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import {
  Scroller,
  Tabbar,
  TabbarItem
} from "vux";

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
  name: "Task",
  components: {
    Scroller,
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      pullupDefaultConfig: pullupDefaultConfig,
      lishH: "-53",
      listData1: [],
      listData: [
        {
          title: "卫生检查明细",
          type: "单次任务",
          date: "11/09 08:00",
          statu: "进行中",
          data: [
            {
              title: "成交人",
              number: "200"
            },
            {
              title: "已交人",
              number: "220"
            },
            {
              title: "已交数据",
              number: "230"
            }
          ]
        },
        {
          title: "卫生检查明细",
          type: "周任务",
          date: "11/09 08:00",
          statu: "进行中",
          data: [
            {
              title: "成交人",
              number: "200"
            },
            {
              title: "已交人",
              number: "220"
            },
            {
              title: "已交数据",
              number: "230"
            }
          ]
        },
        {
          title: "卫生检查明细",
          type: "单次任务",
          date: "11/09 08:00",
          statu: "进行中",
          data: [
            {
              title: "成交人",
              number: "200"
            },
            {
              title: "已交人",
              number: "220"
            },
            {
              title: "已交数据",
              number: "230"
            }
          ]
        }
      ]
    };
  },
  computed: {},
  methods: {
    loadMore() {
      console.log(222);
      this.$refs.scrollerBottom.donePullup();
    }
  },
  mounted() {}
};
</script>

<style scope lang="scss">
@import "../../assets/styles/mixins.scss";
.task {
  .no-data {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    color: #9b9b9b;
    img {
      margin-bottom: 40px;
      width: px2rem(76);
      height: px2rem(76);
    }
  }
  .list {
    padding: 0 px2rem(25);
    padding-bottom: 5px;
    .item {
      margin: 13px 0;
      padding: px2rem(10) px2rem(25);
      background: #ffffff;
      box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.06);
      border-radius: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title {
          font-weight: 600;
          font-size: 17px;
          color: #333333;
          display: flex;
          align-items: center;
          .icon1 {
            display: inline-block;
            width: 13px;
            height: 18px;
            margin-right: 10px;
          }
          .icon2 {
            display: inline-block;
            width: 22px;
            height: 22px;
            margin-right: 10px;
          }
        }
        .statu {
          font-size: 12px;
          color: #5db75d;
        }
      }
      .mid {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: px2rem(26) 0;
        text-align: center;
        width: 100%;
        .mid-item {
          flex: 1;
          .mid-txt {
            font-size: 9px;
            color: #9aa6b2;
            margin-bottom: 4px;
          }
          .number {
            font-size: 20px;
            color: #4a4a4a;
          }
          &:nth-child(2) {
            width: px2rem(100);
            box-sizing: border-box;
            border-right: 1px solid #f4f6f7;
            border-left: 1px solid #f4f6f7;
          }
        }
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        color: #939393;
      }
    }
  }
}
</style>
