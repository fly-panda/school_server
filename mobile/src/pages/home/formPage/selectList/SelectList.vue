<template>
  <div class="select-list">
    <div class="search-box">
      <div class="input-box">
        <input type="text" placeholder="请输入搜索内容">
        <icon type="search"></icon>
      </div>
    </div>
    <ul class="list">
      <li v-for="(item, index) of listData" 
          :key="index" 
          :class="{ 'active' : item.active }" 
          @click="selectItem(item, index)">
        <div v-html="item.title"></div>
        <icon v-if="item.active" type="success-no-circle"></icon>
      </li>
    </ul>
  </div>
</template>

<script>
import { Search, Icon } from "vux";

export default {
  name: "SelectList",
  components: {
    Search,
    Icon
  },
  data() {
    return {
      keyType: '',
      listData: []
    };
  },
  methods: {
    selectItem(data, index) {
      let val = JSON.stringify(data)

      // this.listData.map((v, i) => {
      //   v.active = i == index ? true : false
      // })

      sessionStorage.setItem(this.keyType, val)
      this.$router.go(-1)
    }
  },
  beforeRouteLeave(to, from, next) {
    // to.meta.keepAlive = true
    console.log(to)
    // next()

    if(to.name == 'FormPage') {
      to.meta.keepAlive = true
      next()
    } else {
      from.meta.keepAlive = false
      to.meta.keepAlive = false
      this.$destroy()
      next()
    }
  },
  created() {
    let options = this.$route.query
    let selectItem = JSON.parse(options.selectItem)
    console.log(selectItem)
    //动态设置标题
    document.title = options.title   
    this.keyType = options.type

    // 列表数据
    this.listData = JSON.parse(options.items)

    this.listData.map((v, i) => {
      v.active = v.wxdepartid == selectItem.wxdepartid ? true : false
    })

  },
  mounted() {

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../../assets/styles/mixins.scss";
.select-list {
  padding-top: 66px;
  padding-bottom: 53px;
  .list {
    background: #fff;
    font-size: 17px;
    color: #333333;
    padding: 0 px2rem(20);
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 45px;
      line-height: 45px;
      box-sizing: border-box;
      border-bottom: 1px solid #f0f0f0;
    }
    .active {
      color: #5db75d;
    }
  }
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
}
</style>
