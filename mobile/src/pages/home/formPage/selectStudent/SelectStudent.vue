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
          <li v-for="(item, idx) of classLlist" 
              :key="idx"
              @click="selectClass(item, idx)"
              :class="{ 'active' : item.active }">{{ item.title }}</li>
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
            <li v-for="(item, index) of studentList" 
                :class="{ 'active' : item.wxuserid == obj.obj.selObj.wxuserid }" 
                :key="index"
                @click="selectStudent(item)">
              <span>{{ item.name }}</span>
              <icon v-if="item.wxuserid == obj.obj.selObj.wxuserid" type="success-no-circle"></icon>
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
  props: ["name"],
  data() {
    return {
      pullupDefaultConfig: pullupDefaultConfig,
      obj: this.name,
      classLlist: this.name.obj.items,
      studentList: [],
      results: [],
      value: "test",
      lishH: "-80"
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.scrollerBottom.disablePullup();
      this.$refs.scrollerBottom.reset({ top: 0 });
    });
  },
  methods: {
    loadMore(item) {
      let obj = {
        usertype: 1,
        departid: item.departid,
        level: item.level
      }
      this.$api.post('/campus/searchUser', obj, r => {
        let datas = JSON.parse(r.data)
        // console.log(datas)
        this.studentList = datas
      })
    },
    selectClass(item, index) {

      this.$nextTick(() => {
        // this.$refs.scrollerBottom.disablePullup();
        this.$refs.scrollerBottom.reset({ top: 0 });
      });

      this.classLlist.map((v, i) => {
        v.active = i == index ? true : false
      })
        
      this.loadMore(item)

      if(item.checked) { return }
      this.obj.obj.selObj = {}
    },
    selectStudent(item) {
      console.log(item)
      this.obj.obj.selObj = item
      this.$emit("hideSelectList", 'toogleSelectStudent')
    }
  },
  created () {
    this.classLlist.map((v, i) => {
      if(v.active) {
        this.loadMore(v)
      }
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../../assets/styles/mixins.scss";
.select-student {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 15;
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
          width: 100%;
          height: 38px;
          line-height: 38px;
          padding-left: px2rem(23);
          box-sizing: border-box;
          font-size: 15px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .active {
          background: #fff;
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
