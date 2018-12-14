<template>
  <div class="submit-form-data">
    <div class="wrapper">
      <div class="box">
        <div class="item">
          <div class="num">122</div>
          <div class="title">应交人</div>
        </div>
        <div class="item">
          <div class="num">222</div>
          <div class="title">未交人</div>
        </div>
        <div class="item">
          <div class="num">312</div>
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
      :height="lishH">
      <ul class="list">
        <li class="list-item" v-for="(item, index) of listData" :key="index">
          <div class="left">
            <span class="name">{{ item.name }}</span>
            <img v-if="item.statu" class="img-statu" src="../../../assets/img/icon/icon-tanhao.png" width="13" alt="">
          </div>
          <div class="right">
            已交：{{ item.num }}
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
  name: "SubmitFormData",
  components: {
    Scroller
  },
  props: {},
  data() {
    return {
      lishH: '',
      pullupDefaultConfig: pullupDefaultConfig,
      listData: [
        {
          name: '张三',
          num: '100',
          statu: false
        },
        {
          name: '张三',
          num: '100',
          statu: true
        },{
          name: '张三',
          num: '100',
          statu: false
        }
        ,{
          name: '张三',
          num: '10',
          statu: false
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    loadMore() {

    }
  },
  created() {},
  mounted() {}
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
      }
      .right {
        font-size: 15px;
        color: #acacac;
      }
    }
  }
}
</style>