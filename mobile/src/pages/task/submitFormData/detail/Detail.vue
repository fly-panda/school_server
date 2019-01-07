<template>
  <div class="page">
    <!-- <div class="title" v-html="allData.title"></div> -->
    <!-- <div class="describe" v-show="allData.describe" v-html="allData.describe"></div> -->
    <div class="list" v-for="(obj, index) of listData" :key="index">

      <div class="item" v-if="obj.ele == 'selectteacher'">
        <div class="label">选择老师</div>
        <div class="value">{{ obj.obj.selObj }}</div>
      </div>

      <div class="item" v-if="obj.ele == 'selectgrade'">
        <div class="label">选择班级</div>
        <div class="value">{{ obj.obj.selObj }}</div>
      </div>

      <div class="item" v-if="obj.ele == 'selectdepartment'">
        <div class="label">选择部门</div>
        <div class="value">{{ obj.obj.selObj }}</div>
      </div>

      <div class="item" v-if="obj.ele == 'selectstudent'">
        <div class="label">选择学生</div>
        <div class="value">{{ obj.obj.selObj.name }}</div>
      </div>

      <div class="des" v-if="obj.ele == 'p'" v-html="obj.obj.describe"></div>
      <!-- 单行文字 -->
      <div class="item" v-if="obj.ele == 'input'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="value" v-html="obj.obj.placeholder"></div>
      </div>
      <!-- 下拉框 -->
      <div class="item" v-if="obj.ele == 'select'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="value" v-html="obj.obj.items[obj.obj.value].label_name"></div>
      </div>
      <!-- 多行文本 -->
      <div class="item" v-if="obj.ele == 'text'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="value" v-html="obj.obj.placeholder"></div>
      </div>
      <!-- 单选 -->
      <div class="item" v-if="obj.ele == 'truefalse' || obj.ele == 'radio'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="value" v-html="obj.obj.items[obj.obj.value].label_name"></div>
      </div>
      <!-- 图片上传 -->
      <div class="item" v-if="obj.ele == 'uploadimg'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="list-img">
          <img v-for="(imgItem, idx) of obj.obj.uploadList" :src="baseUrl+imgItem.url" :key="idx">
        </div>
      </div>
      <!-- 多选 -->
      <div class="item" v-if="obj.ele == 'checkbox'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="value">
          <div v-for="(item, idx) of obj.obj.value" :key="idx" style="margin-bottom: 5px;">{{ obj.obj.items[item].label_name }}</div>
        </div>
      </div>
      <!-- 文件上传 uploads -->
      <div class="item" v-if="obj.ele == 'uploads'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="list-img">
          <img v-for="(imgItem, idx) of obj.obj.value" :src="baseUrl+imgItem.url" :key="idx">
        </div>
      </div>
      <!-- 时间日期 -->
      <div class="item" v-if="obj.ele == 'datepicker'">
        <div class="label" v-html="obj.obj.label"></div>
        <div>
          <span v-if="obj.obj.valueDate">{{ obj.obj.valueDate }}</span>
          <span v-if="obj.obj.valueTime">{{ obj.obj.valueTime }}</span>
        </div>
      </div>
      <!-- 地址 -->
      <div class="item" v-if="obj.ele == 'address'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="value">
          <div style="margin-bottom: 5px;">
            <span v-if="obj.obj.shengValue" v-html="obj.obj.shengValue"></span>
            <span v-if="obj.obj.shiValue" v-html="obj.obj.shiValue"></span>
          </div>
          <div style="margin-bottom: 5px;" v-if="obj.obj.quValue" v-html="obj.obj.quValue"></div>
          <div v-if="obj.obj.value" v-html="obj.obj.value"></div>
        </div>
      </div>
      <!-- 图片展示 -->
      <div class="item" v-if="obj.ele == 'imgshow'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="list-img">
          <img v-for="(imgItem, idx) of obj.obj.imgArr" :src="baseUrl+imgItem.url" :key="idx">
        </div>
      </div>
      <!-- 图片选择 -->
      <div class="item" v-if="obj.ele == 'imgcheck'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="list-img">
          <img v-for="(imgItem, idx) of obj.obj.value" :src="baseUrl + obj.obj.imgArr[imgItem].url" :key="idx">
        </div>
      </div>
      <!-- 二级下拉 -->
      <div class="item" v-if="obj.ele == 'selectcontact'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="value">
          <span>{{ obj.obj.items[obj.obj.value].label_name }}</span>
          <span>{{ obj.obj.two_arr[obj.obj.value1].label_name }}</span>
        </div>  
      </div>
      <!-- 滑动打分 -->
      <div class="item" v-if="obj.ele == 'slider'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="value">{{ obj.obj.value }}</div>
      </div>
      <!-- 勾选打分 -->
      <div class="item" v-if="obj.ele == 'score'">
        <div class="label" v-html="obj.obj.label"></div>
        <div class="value">{{ obj.obj.items[value].scoreType == 'add' ? '+' : '-' }}{{ obj.obj.items[value].label_value }}</div>
      </div>

    </div>

    <div class="btn-box">
      <button class="hg" @click="caozuoForm(1)" :disabled="state == 1">合格</button>
      <button class="bhg" @click="caozuoForm(2)" :disabled="state == 1">不合格</button>
    </div>

    <div class="model" v-show="isShowModel">
      <div>
        <div class="window">
          <div class="window-title">
            不合格理由
            <div class="close" @click="hideModel">x</div>
          </div>
          <textarea v-model="textareaValue" name="" id="" cols="30" rows="10" placeholder="请输入不合格理由" 
                    v-on:input='getValue'></textarea>
          <button :disabled='bthDisabled'>确认</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  name: "SubmitFormDataDetail",
  components: {},
  props: {},
  data() {
    return {
      baseUrl: "http://47.93.156.129:8848",
      bthDisabled: true,
      allData: {},
      textareaValue: '',
      isShowModel: false,
      id: '',
      taskid: '',
      listData: [],
      state: '' // 审核状态 0未审核 1审核通过 2审核未通过
    };
  },
  watch: {},
  computed: {
    Toast
  },
  methods: {
    hideModel() {
      this.isShowModel = false
    },
    caozuoForm(type) {
      let state = type  // type 1 通过，2 未通过

      if(type == 2) {
        this.isShowModel = true
      }

      let obj = {
        id: this.id,
        taskid: this.taskid,
        state: state,
        reason: this.textareaValue
      }

      this.$api.get('/submit/examine', obj, r => {
        console.log(r)
        Toast(r.result);
      })

    },
    getValue() {
      this.bthDisabled = this.textareaValue.tirm() ? false : true
    }
  },
  mounted() {
  
  },
  created() {
    let options = this.$route.query

    this.id = options.id
    this.taskid = options.taskid

    let obj = {
      id: options.id,
      taskid: options.taskid
    }

    this.$api.get('/submit/submitDetails', obj, r => {
      let datas = JSON.parse(r.data)
      console.log(datas)
      this.state = datas.state
      this.listData = datas.data
    })

  }
};
</script>
<style lang="scss" scoped>
@import "../../../../assets/styles/mixins.scss";
.page {
  padding: px2rem(20);
  .model {
    position: fixed;
    top: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: .28);
    width: 100%;
    height: 100%;
    >div {
      position: relative;
      width: 100%;
      height: 100%;
      .window {
        position: absolute;
        left: 50%;
        top: 25%;
        margin-left: px2rem(-135);
        width: px2rem(270);
        background: #fff;
        border-radius: 0 0 2px 2px;
        padding-bottom: px2rem(30);
        .window-title {
          background: #5EB85E;
          border-radius: 2px 2px 0 0;
          height: px2rem(41);
          line-height: px2rem(41);
          text-align: center;
          color: #fff;
          .close {
            position: absolute;
            top: 0;
            right: px2rem(16);
            color: #fff;
            font-size: 18px;
          }
        }
        textarea {
          border: 1px solid #C3C9CF;
          border-radius: 1px;
          display: block;
          width: px2rem(243);
          height: px2rem(105);
          margin: 0 auto;
          margin-top: px2rem(13);
          margin-bottom: px2rem(13);
          box-sizing: border-box;
          padding: 5px;
          font-size: 14px;
        }
        button {
          border-radius: 1px;
          background: #5DB75D;
          width: px2rem(79);
          height: 28px;
          line-height: 28px;
          display: block;
          margin: 0 auto;
          text-align: center;
          color: #fff;
        }
        button[disabled] {
          background: #C3C9CF;
        }
      }
    }
  }
  .btn-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: px2rem(30);
    button {
      width: px2rem(130);
      height: px2rem(35);
      text-align: center;
      line-height: px2rem(35);
      border-radius: 1px;
      color: #fff;
      background: #5db75d;
    }
    button[disabled] {
      background: #C3C9CF;
    }
    .hg {
      // background: #5db75d;
      margin-right: px2rem(25);
    }
    // .bhg {
    //   background: #C3C9CF;
    // }
  }
  .title {
    font-size: 18px;
    color: #333333;
  }
  .describe {
    font-size: 15px;
    color: #4A4A4A;
    margin-top: px2rem(10);
  }
  .list {
    padding-top: px2rem(10);
    .item {
      margin-bottom: px2rem(10);
      .label {
        font-size: 16px;
        color: #363636;
        font-weight: 600;
        margin-bottom: px2rem(8);
      }
      .value {
        font-size: 15px;
        color: #333333;
      }
      .list-img {
        display: flex;
        flex-wrap: wrap;
        img {
          display: block;
          width: px2rem(75);
          height: px2rem(75);
          margin-right: px2rem(10);
        }
      }
    }
  }
}
</style>