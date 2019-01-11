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
      <ul class="list" 
          v-show="listData.length">
        <li class="item" v-for="(item, index) of listData" 
            :key="index"
            @click="detail(item.id)">
          <div class="left">
            <div class="left-top">
              <div class="title">{{ item.value0 }}</div>
              <img v-if="item.statu" src="../../../assets/img/icon/icon-tanhao.png" width="13" alt>
            </div>
            <div class="date">填写时间：{{ datas.taskCreateTime }}</div>
          </div>
          <div class="right">
            <x-icon type="ios-arrow-right" size="16" class="icon-arrow-right"></x-icon>
          </div>
        </li>
      </ul>

      <!-- <no-data v-show="!listData.length"></no-data> -->
    </scroller>
  </div>
</template>

<script>
import { Scroller } from "vux";
// import NoData from '../../../components/noData/NoData';

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
    Scroller,
    // NoData
  },
  props: {},
  data() {
    return {
      lishH: '',
      page: 1,
      pagesize: 15,
      pullupDefaultConfig: pullupDefaultConfig,
      listData: [],
      datas: {}
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.lishH = window.innerHeight + 'px'

    this.$nextTick(() => {
      this.$refs.scrollerBottom.disablePullup();
      this.$refs.scrollerBottom.reset({ top: 0 });
    });
  },
  methods: {
    detail(id) {
      this.$router.push({
        path: "/submitFormDataDetail",
        query: { ids: this.$route.query.ids, id: id, openType: this.$route.query.openType }
      });
    },
    loadMore() {
      let obj = {
        userid: "",
        taskid: this.$route.query.ids,
        page: this.page,
        pagesize: this.pagesize
      };
      this.$api.get("/submit/taskSummary", obj, r => {
        let data = JSON.parse(r.data);

        this.datas = data;

        console.log(data);

        this.page++;
        this.pageCount = data.count;

        this.$nextTick(() => {
          this.$refs.scrollerBottom.reset();
        });

        if (this.page > data.CurrentPage) {
          this.$refs.scrollerBottom.disablePullup();
        } else {
          this.$refs.scrollerBottom.enablePullup();
        }

        this.listData = this.listData.concat(data.resultList);

        this.$refs.scrollerBottom.donePullup();
      });
    }
  },
  created() {
    let options = this.$route.query
    console.log(options)
    this.loadMore()
  }
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