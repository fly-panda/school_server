<template>
  <div class="home">
    <tab :tabData="tab" @toogleTab="toogleTab"></tab>
    <scroller use-pullup 
              lock-x  
              :pullup-config="pullupDefaultConfig" 
              @on-pullup-loading="loadMore" 
              ref="scrollerBottom" 
              :height="lishH">
      <ul class="list current-list" v-if="tabIndex == 0">
        <li class="li-item" v-for="(item, index) of listData" :key="index">
          <div class="yuan">
            <img v-if="item.statu == '不合格'" src="../../assets/img/icon/yuan-timeout.png" alt>
            <div v-else>
              <img v-if="item.type == '单次任务'" src="../../assets/img/icon/yuan-once.png" alt>
              <img v-if="item.type == '周任务'" src="../../assets/img/icon/yuan-week.png" alt>
            </div>
          </div>
          <div class="top">
            <div class="title">{{ item.title }}</div>
            <div class="type">{{ item.type }}</div>
          </div>
          <div class="user">发布人：{{ item.user }}</div>
          <div class="bottom">
            <div class="date">截止时间：{{ item.date }}</div>
            <div class="statu" :class="{ 'time-out' : item.statu == '不合格' }">{{ item.statu }}</div>
          </div>
        </li>
      </ul>
      <ul class="list history-list" v-if="tabIndex == 1">
        <li class="li-item" v-for="(item, index) of listData" :key="index">
          <div class="top">
            <div class="title">{{ item.title }}</div>
            <div class="type">{{ item.type }}</div>
          </div>
          <div class="user">创建人：{{ item.user }}</div>
          <div class="bottom">
            <div class="date">截止时间：{{ item.date }}</div>
            <div class="statu">{{ item.statu }}</div>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
import { Scroller, Divider, Spinner, XButton, Group, Cell, LoadMore } from 'vux';
import { TransferDomDirective as TransferDom } from 'vux'

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
  name: "Home",
  components: {
    Tab,
    Scroller
  },
  data() {
    return {
      tabIndex: 0,
      lishH: '-53',
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
      listData: [
        {
          title: "卫生检查明细",
          type: "单次任务",
          user: "TOM",
          date: "11/09 08:00",
          statu: "不合格"
        },
        {
          title: "卫生检查明细",
          type: "周任务",
          user: "TOM",
          date: "11/09 08:00",
          statu: "进行中"
        },
        {
          title: "卫生检查明细",
          type: "单次任务",
          user: "TOM",
          date: "11/09 08:00",
          statu: "进行中"
        },
        {
          title: "卫生检查明细",
          type: "单次任务",
          user: "TOM",
          date: "11/09 08:00",
          statu: "进行中"
        },
        {
          title: "卫生检查明细",
          type: "单次任务",
          user: "TOM",
          date: "11/09 08:00",
          statu: "进行中"
        },
        {
          title: "卫生检查明细",
          type: "单次任务",
          user: "TOM",
          date: "11/09 08:00",
          statu: "进行中"
        }
      ]
    };
  },
  computed: {},
  methods: {
    // 调用子组件tab切换的事件
    toogleTab(...data) {
      this.tabIndex = data[0];
      console.log(data[0]);
    },
    // 加载更多
    loadMore() {
      console.log(111)
      let data = this.listData
      this.listData = data.concat(data)
      console.log(this.listData)
    }
  },
  mounted() {}
};
</script>

<style scoped lang='scss'>
@import "../../assets/styles/mixins.scss";
.home {
  padding-bottom: 53px;
  .list {
    padding: 0 px2rem(20);
    margin-top: 70px;
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
