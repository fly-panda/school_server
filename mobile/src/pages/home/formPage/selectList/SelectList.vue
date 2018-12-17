<template>
  <div class="select-list">
    <div class="search-box">
      <div class="input-box">
        <input type="text" placeholder="请输入搜索内容">
        <icon type="search"></icon>
      </div>
    </div>
    <ul class="list">
      <li v-for="(item, index) of listData" :key="index" :class="{ 'active' : item.active }" @click="selectItem(item)">
        <div>{{ item.val }}</div>
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
      listData: [
        {
          val: '张三',
          active: false
        },
        {
          val: '李四1',
          active: false
        },
        {
          val: '李四2',
          active: false
        },
        {
          val: '李四3',
          active: false
        }
      ]
    };
  },
  methods: {
    selectItem(data) {
      let val = data.val
      console.log(val)

      console.log(this.keyType)
      sessionStorage.setItem(this.keyType, val)
      this.$router.go(-1)
    }
  },
  created() {
    let options = this.$route.query
    //动态设置标题
    document.title = options.title   
    this.keyType = options.type

    this.listData.map((v, i) => {
      v.active = v.val == options.value
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
