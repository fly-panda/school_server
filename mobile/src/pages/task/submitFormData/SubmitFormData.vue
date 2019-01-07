<template>
  <div class="submit-form-data">
    <div class="wrapper">
      <div class="box">
        <div class="item">
          <div class="num">{{ datas.should }}</div>
          <div class="title">应交人</div>
        </div>
        <div class="item">
          <div class="num">{{ datas.should }}</div>
          <div class="title">未交人</div>
        </div>
        <div class="item">
          <div class="num">{{ datas.submitCount }}</div>
          <div class="title">已交数据</div>
        </div>
      </div>
    </div>
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
        <li
          class="list-item"
          v-for="(item, index) of listData"
          :key="index"
          @click="detail(item.id)"
        >
          <div class="left">
            <span class="name">{{ item.value0 }}</span>
            <!-- <img
              v-if="item.statu"
              class="img-statu"
              src="../../../assets/img/icon/icon-tanhao.png"
              width="13"
              alt
            >-->
          </div>
          <div class="right">{{ datas.taskCreateTime | timeFifler }}</div>
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
  name: "SubmitFormData",
  components: {
    Scroller
  },
  props: {},
  filters: {
    timeFifler(r) {
      let date = r.slice(0, 10)
      return date
      console.log(r);
    }
  },
  data() {
    return {
      pagesize: 15, // 每页请求数量
      page: 1, // 页码
      pageCount: 0, // 总页数
      obj: {},
      lishH: "",
      pullupDefaultConfig: pullupDefaultConfig,
      taskid: "",
      datas: {},
      listData: []
    };
  },
  watch: {},
  computed: {},
  mounted() {
    this.lishH = window.innerHeight - 100 + "px";
    this.userId = this.$api.sGetObject("userObj").userId;

    this.$nextTick(() => {
      this.$refs.scrollerBottom.disablePullup();
      this.$refs.scrollerBottom.reset({ top: 0 });
    });
  },
  methods: {
    detail(id) {
      this.$router.push({
        path: "/submitFormDataDetail",
        query: { taskid: this.taskid, id: id }
      });
    },
    loadMore() {
      let obj = {
        userid: "",
        taskid: this.taskid,
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
    let options = this.$route.query;
    this.obj = JSON.parse(options.item);
    this.taskid = this.obj.id;

    this.loadMore();
  }
};
</script>
<style lang="scss" scoped>
@import "../../../assets/styles/mixins.scss";
.submit-form-data {
  .wrapper {
    height: 100px;
    background: #f1f1f1;
    padding-top: 14px;
    box-sizing: border-box;
    .box {
      background: #fff;
      display: flex;
      align-items: center;
      height: 73px;
      .item {
        text-align: center;
        flex: 1;
        &:nth-child(2) {
          width: px2rem(115);
          border-left: 1px solid #f4f4f4;
          border-right: 1px solid #f4f4f4;
        }
        .num {
          font-size: 24px;
          color: #333333;
          margin-bottom: 5px;
        }
        .title {
          font-size: 12px;
          color: #868686;
        }
      }
    }
  }
  .list {
    padding: 0 px2rem(20) 10px px2rem(25);
    .list-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f0f0f0;
      padding: 20px 0 6px 0;
      .left {
        display: flex;
        align-items: center;
      }
      .name {
        color: #333;
        font-size: 17px;
        margin-right: 5px;
        display: block;
        width: px2rem(150);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .right {
        font-size: 15px;
        color: #acacac;
      }
    }
  }
}
</style>