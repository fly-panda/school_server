<template>
  <div>
    <!-- tab切换 -->
    <tab
      :line-width="1"
      custom-bar-width="60px"
      v-if="preview != '1' && openType != '2' && openType != '1'"
    >
      <tab-item
        v-for="(item, index) in tabData"
        :selected="selectTabIndex === index"
        :key="index"
        @on-item-click="tabItemClick(index)"
      >{{ item }}</tab-item>
    </tab>
    <!-- 历史记录 -->
    <div class="history-record">
      <scroller
        lock-x
        scrollbar-y
        use-pullup
        :pullup-config="pullupDefaultConfig"
        @on-pullup-loading="loadMore"
        ref="scrollerBottom"
        :height="viewH"
      >
        <ul class="list" v-show="listData.length">
          <li class="item" v-for="(item, index) of listData" :key="index">
            <div class="left">
              <div class="title">{{ item.title }}</div>
              <div class="date">填写时间：{{ item.date }}</div>
            </div>
            <div class="statu">
              <img src="../../../assets/img/icon/icon-tanhao.png" width="16" alt>
            </div>
            <div class="right">
              <x-icon type="ios-arrow-right" size="16" class="icon-arrow-right"></x-icon>
            </div>
          </li>
        </ul>

        <no-data v-show="!listData.length"></no-data>
      </scroller>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Scroller } from "vux";
import NoData from "../../../components/noData/Nodata";

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
  name: "HistoryRecord",
  components: {
    Scroller,
    Tab,
    TabItem,
    NoData
  },
  props: {},
  data() {
    return {
      page: 1,
      pagesize: 15,
      tabData: ["表单", "历史记录"],
      selectTabIndex: 1,
      pullupDefaultConfig: pullupDefaultConfig,
      listData: [],
      viewH: ''
    };
  },
  watch: {},
  computed: {},
  mounted() {

    this.viewH = window.innerHeight - 60 + "px";

    this.$nextTick(() => {
      this.$refs.scrollerBottom.disablePullup();
      this.$refs.scrollerBottom.reset({ top: 0 });
    });
  },
  methods: {
    tabItemClick(index) {
      if(index == 0) {
        this.$router.push({ path: "/formPage", query: { ids: this.$route.query.ids } });
      }
    },
    loadMore() {
      let obj = {
        state: 1,
        // taskid: this.$route.query.ids,
        userid: this.$api.sGetObject("userObj").userId,
        page: this.page,
        pagesize: this.pagesize
      };
      this.$api.get("task/participate", obj, r => {
        let data = JSON.parse(r.data);
        console.log(data);
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
    }
  },
  created() {
    this.loadMore();
  }
};
</script>
<style scope lang="scss">
@import "../../../assets/styles/mixins.scss";

.vux-tab .vux-tab-item {
  font-size: 20px !important;
  background: #fff !important;
}

.history-record {
  // padding: 0 px2rem(20);
  // padding-top: 40px;
  .list {
    padding: 0 px2rem(20);    
    .item {
      padding: 12px px2rem(20);
      box-sizing: border-box;
      background: #ffffff;
      box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.06);
      border-radius: 2px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      .statu {
        flex: 1;
      }
      .left {
        width: px2rem(236);
        .title {
          font-size: 17px;
          color: #333333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-bottom: 7px;
        }
        .date {
          font-size: 13.9px;
          color: #939393;
        }
      }
    }
  }
}
</style>