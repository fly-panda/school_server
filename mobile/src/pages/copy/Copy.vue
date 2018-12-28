<template>
  <div class="copy">
    <tab :tabData="tab" @toogleTab="toogleTab"></tab>

    <scroller
      lock-x
      scrollbar-y
      use-pullup
      :pullup-config="pullupDefaultConfig"
      @on-pullup-loading="loadMore"
      ref="scrollerBottom"
      :height="lishH"
    >
      <!-- 班级日常 -->
      <ul class="list list1" v-if="tabIndex == 0">
        <li class="item" v-for="(item, index) of listData" :key="index">
          <div class="top">
            <div class="title">
              <img class="icon" src="../../assets/img/task/icon1.png" alt>
              <span class="txt">{{ item.title }}</span>
            </div>
            <!-- <div class="statu">{{ item.statu }}</div> -->
          </div>
          <div class="bottom">
            <div class="date">填写时间：{{ item.endtime }}</div>
            <div class="type">填写人：{{ item.type }}</div>
          </div>
        </li>
      </ul>
      <!-- 任务抄送 -->
      <ul class="list" v-if="tabIndex == 1">
        <li class="item" v-for="(item, index) of listData" :key="index">
          <div class="top">
            <div class="title">
              <img class="icon" src="../../assets/img/task/icon1.png" alt>
              <span class="txt">{{ item.title }}</span>
            </div>
            <!-- <div class="statu">{{ item.statu }}</div> -->
          </div>
          <div class="mid">
            <div class="mid-item" v-for="(item, index) of item.data" :key="index">
              <div class="mid-txt">{{ item.title }}</div>
              <div class="number">{{ item.number }}</div>
            </div>
          </div>
          <div class="bottom">
            <div class="date">截止时间：{{ item.endtime }}</div>
            <div class="type" style="font-size: 14px;color: #5B5B5B;">创建人：{{ item.type }}</div>
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
      <tabbar-item link="/task">
        <img slot="icon" src="../../assets/img/tabbar/tab2.png">
        <img slot="icon-active" src="../../assets/img/tabbar/tab2-active.png">
        <span slot="label">任务管理</span>
      </tabbar-item>
      <tabbar-item link="/copy" selected>
        <img slot="icon" src="../../assets/img/tabbar/tab3.png">
        <img slot="icon-active" src="../../assets/img/tabbar/tab3-active.png">
        <span slot="label">抄送</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Scroller, Tabbar, TabbarItem } from "vux";
import Tab from "../../components/tab/Tab";

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
  name: "Copy",
  components: {
    Tab,
    Scroller,
    Tabbar,
    TabbarItem
  },
  data() {
    return {
      lishH: "",
      pullupDefaultConfig: pullupDefaultConfig,
      tabIndex: 0,
      state: 1,
      pagesize: 15,
      page: 1,
      tab: [
        {
          title: "班级日常",
          active: true,
          type: 0
        },
        {
          title: "任务抄送",
          active: false,
          type: 1
        }
      ],
      listData: []
    };
  },
  computed: {},
  mounted() {
    this.lishH = window.innerHeight - 110 + "px";
    this.$nextTick(() => {
      this.$refs.scrollerBottom.disablePullup();
      this.$refs.scrollerBottom.reset({ top: 0 });
    });
  },
  methods: {
    // 调用子组件tab切换的事件
    toogleTab(...data) {
      if (this.tabIndex == data[0]) {
        return;
      }
      this.tabIndex = data[0]
      this.listData = []
      this.page = 1
      this.state = data[0] + 1

      this.$nextTick(() => {
        this.$refs.scrollerBottom.disablePullup();
        this.$refs.scrollerBottom.reset({ top: 0 });
      })

      this.loadMore();
      
    },
    loadMore() {
      let obj = {
        state: this.state,
        userid: this.$api.sGetObject("userObj").userId,
        page: this.page,
        pagesize: this.pagesize
      }
      this.$api.get('task/getMyTask', obj, r => {

        let data = JSON.parse(r.data);
        this.page++;
        this.pageCount = data.pageCount;

        this.$nextTick(() => {
          this.$refs.scrollerBottom.reset();
        });

        if (this.page > data.pageCount) {
          this.$refs.scrollerBottom.disablePullup();
        } else {
          this.$refs.scrollerBottom.enablePullup();
        }
        console.log(data.result);

        this.listData = this.listData.concat(data.result);

        this.$refs.scrollerBottom.donePullup();

      })
    }
  },
  created() {
    this.loadMore()
  },
};
</script>

<style scope lang="scss">
@import "../../assets/styles/mixins.scss";
.copy {
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
          .icon {
            display: inline-block;
            width: 13px;
            height: 18px;
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
  .list1 .top {
    margin-bottom: 20px;
  }
}
</style>
