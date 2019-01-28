<template>
  <div class="home" v-show="!isShowLoading">
    <tab :tabData="tab" @toogleTab="toogleTab"></tab>
    <scroller
      lock-x
      scrollbar-y
      use-pullup
      :pullup-config="pullupDefaultConfig"
      @on-pullup-loading="loadMore"
      ref="scrollerBottom"
      :height="viewH"
    >
      <!-- state 任务状态(0 任务未开始 1 任务进行中 2 任务已结束) -->
      <ul class="list current-list" v-show="tabIndex == 0 && listData.length">
        <li
          class="li-item"
          v-for="(item, index) of listData"
          :key="index"
          @click="currentTask(item)"
        >
          <div class="yuan">
            <img v-if="item.statu == 2" src="../../assets/img/icon/yuan-timeout.png" alt>
            <div v-else>
              <img v-if="item.isloop == '1'" src="../../assets/img/icon/yuan-once.png" alt>
              <img v-if="item.isloop == '0'" src="../../assets/img/icon/yuan-week.png" alt>
            </div>
          </div>
          <div class="top">
            <div class="title">{{ item.title }}</div>
            <div class="type">{{ item.isloop == 0 ? '周任务' : '单次任务'}}</div>
          </div>
          <div class="user">发布人：{{ item.publisher }}</div>
          <div class="bottom">
            <div class="date">截止时间：{{ item.endtime }}</div>
            <div class="statu" v-if="item.state == 1">进行中</div>
            <div class="statu time-out" v-if="item.state == 2">超时未填写</div>
            <!-- <div class="statu" :class="{ 'time-out' : item.statu == '不合格' }">
              {{ item.state }}
            </div>-->
          </div>
        </li>
      </ul>
      <ul class="list history-list" v-show="tabIndex == 1 && listData.length">
        <li class="li-item" 
            v-for="(item, index) of listData" 
            :key="index"
            @click="lishiTask(item)">
          <div class="top">
            <div class="title">{{ item.title }}</div>
            <div class="type">{{ item.type }}</div>
          </div>
          <div class="user">创建人：{{ item.publisher }}</div>
          <div class="bottom">
            <div class="date">截止时间：{{ item.endtime }}</div>
            <div class="statu">{{ item.statu }}</div>
          </div>
        </li>
      </ul>

      <!-- <div class="no-data" v-show="!listData.length">木有数据</div> -->
      <no-data v-show="!listData.length"></no-data>

    </scroller>

    <tabbar>
      <tabbar-item link="/" selected>
        <img slot="icon" src="../../assets/img/tabbar/tab1.png">
        <img slot="icon-active" src="../../assets/img/tabbar/tab1-active.png">
        <span slot="label">我的任务</span>
      </tabbar-item>
      <tabbar-item link="/task">
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
import { Scroller, Tabbar, TabbarItem } from "vux";
import { TransferDomDirective as TransferDom } from "vux";
import { Toast, Indicator } from "mint-ui";


import Tab from "../../components/tab/Tab";
import NoData from "../../components/noData/Nodata";

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
  name: "Home",
  components: {
    Tab,
    Scroller,
    Tabbar,
    TabbarItem,
    NoData,
    Toast, 
    Indicator
  },
  data() {
    return {
      isShowLoading: true,
      pageLoading: true,
      userid: "",
      pagesize: 15, // 每页请求数量
      page: 1, // 页码
      pageCount: 0, // 总页数
      pullupConfig2: {
        content: "上拉加载更多",
        downContent: "松开进行加载",
        upContent: "上拉加载更多",
        loadingContent: "加载中..."
      },
      tabIndex: 0,
      viewH: "",
      pullupDefaultConfig: pullupDefaultConfig,
      tab: [
        {
          title: "当前任务",
          active: true,
          type: 0
        },
        {
          title: "历史任务",
          active: false,
          type: 1
        }
      ],
      listData: []
    };
  },
  computed: {},
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = false;
    next();
  },
  mounted() {
    this.viewH = window.innerHeight - 110 + "px";

    this.$nextTick(() => {
      this.$refs.scrollerBottom.disablePullup();
      this.$refs.scrollerBottom.reset({ top: 0 });
    });

    Indicator.open({
      text: "加载中",
    })

  },
  methods: {
    // 调用子组件tab切换的事件
    toogleTab(...data) {
      if (this.tabIndex == data[0]) {
        return;
      }
      this.listData = [];
      this.tabIndex = data[0];
      this.page = 1;

      this.$nextTick(() => {
        this.$refs.scrollerBottom.disablePullup();
        this.$refs.scrollerBottom.reset({ top: 0 });
      });

      this.loadMore();
    },
    // 加载更多
    loadMore() {
      let obj = {
        state: this.tabIndex,
        userid: this.$api.sGetObject('userObj').userId,
        page: this.page,
        pagesize: this.pagesize
      };
      this.$api.get("task/participate", obj, r => {
        Indicator.close()
        this.isShowLoading = false
        let data = JSON.parse(r.data);
        // console.log(data)
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

        this.listData = this.listData.concat(data.result);

        this.$refs.scrollerBottom.donePullup();
      });
    },
    // 当前任务填写表单
    currentTask(item) {
      let ids = item.id;
      this.$router.push({ path: "/formPage", query: { ids: ids } });
    },
    // 历史任务的填写记录
    lishiTask(item) {
      let ids = item.id;
      this.$router.push({ path: "/historyRecord", query: { ids: ids } });
    }
  },
  created() {
    // this.$api.sSetObject("userObj", {
    //   userId: this.$route.query.userId,
    //   objType: this.$route.query.objType,
    //   openAppID: "315492154052",
    //   objectid: this.$route.query.objectid
    // });
    this.$api.sSetObject("userObj", {
      userId: this.$route.query.userId ? this.$route.query.userId : "nHoIlS9HDYodone",
      objType: this.$route.query.objType ? this.$route.query.objType : "2",
      openAppID: "315492154052",
      objectid: this.$route.query.objectid ? this.$route.query.objectid : "EzQ319HuHN8done"
    });
    this.loadMore();
  }
};
</script>

<style scoped lang='scss'>
@import "../../assets/styles/mixins.scss";
.no-data {
  text-align: center;
  padding-top: 50px;
  color:#939393;
}
.home {
  // padding-bottom: 53px;
  font-size: 14px;
  .list {
    padding: 0 px2rem(20);
    // padding-top: 70px;
    padding-bottom: 5px;
    .li-item {
      margin-left: px2rem(10);
      margin-bottom: px2rem(10);
      background: #ffffff;
      box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.06);
      border-radius: 2px;
      padding: 16px 20px 16px 27px;
      position: relative;
      .yuan {
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 50%;
        margin-top: -15px;
        left: -15px;
        img {
          width: 30px;
          height: 30px;
        }
      }
      .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        .title {
          font-size: 17px;
          color: #333333;
          font-weight: 600;
        }
        .type {
          font-size: 14px;
          color: #939393;
        }
      }
      .user {
        margin-bottom: 10px;
        font-size: 14px;
        color: #939393;
      }
      .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 14px;
        color: #939393;
        .time-out {
          color: #ff6c74;
        }
      }
    }
  }
  .history-list .li-item {
    padding: 16px 20px;
  }
}
</style>
