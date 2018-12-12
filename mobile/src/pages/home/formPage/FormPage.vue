<template>
  <div class="form-page">
    <tab :line-width="1" custom-bar-width="60px">
      <tab-item selected>表单</tab-item>
      <tab-item>历史记录</tab-item>
    </tab>
    <div class="form-wrapper">
      <div class="title">卫生检查金数据是人人可用的在线表单工</div>
      <div
        class="des"
      >金数据(jinshuju.net)是人人可用的在线表单工具,快速创建问卷调查、活动报名、意见反馈、信息登记、在线订单、考试测评等表单,自动化收集整理数据,节省工作时间,更聪明。</div>
      <div class="select-item">
        <div class="select-item-title">选择学生</div>
        <div class="select-item-txt">请选择学生</div>
        <button>点击选择学生范围</button>
      </div>
      <div class="select-item">
        <div class="select-item-title">选择老师</div>
        <div class="select-item-txt">请选择老师</div>
        <button>点击选择老师范围</button>
      </div>
      <div class="select-item">
        <div class="select-item-title">选择班级</div>
        <div class="select-item-txt">请选择你的班级</div>
        <button>点击选班级范围</button>
      </div>
      <div class="select-item">
        <div class="select-item-title">选择部门</div>
        <div class="select-item-txt">请选择你的部门</div>
        <button>点击选部门范围</button>
      </div>
      <div class="select-item upload-img">
        <div class="select-item-title">图片上传</div>
        <div class="select-item-txt">请上传的的图片</div>
        <div class="img-box">
          <div class="upload">
            <div>
              <span>+</span>
              <span>点击上传</span>
            </div>
            <input
              @change="fileImage"
              type="file"
              accept="image/jpeg, image/x-png, image/gif"
              id
              value
            >
          </div>
        </div>
        <div class="tip">请上传jpg、png、gif、psd等图片格式</div>
      </div>
      <div class="select-item download">
        <div class="select-item-title">文件下载</div>
        <div class="select-item-txt">请选择你的组织</div>
        <div class="download-btn">
          <div>重要文件.doc</div>
          <img
            class="icon-download"
            src="../../../assets/img/icon/icon-download.png"
            width="12"
            height="15"
            alt
          >
        </div>
      </div>
      <div
        class="des"
      >金数据(jinshuju.net)是人人可用的在线表单工具,快速创建问卷调查、活动报名、意见反馈、信息登记、在线订单、考试测评等表单,自动化收集整理数据,节省工作时间,更聪明。</div>
      <div class="select-item once-text">
        <div class="select-item-title">单行文字</div>
        <div class="select-item-txt">请选择你的组织</div>
        <input type="text">
      </div>
      <div class="select-item picker">
        <div class="select-item-title">下拉框</div>
        <div class="select-item-txt">请选择你的组织</div>
        <div class="packet-box">
          <div class="picker-btn">
            <div>请选择</div>
            <!-- <img class="icon" src="" alt=""> -->
          </div>
        </div>
      </div>
      <div class="select-item picker">
        <div class="select-item-title">二级下拉</div>
        <div class="packet-box mt-12">
          <div class="picker-btn">
            <div>请选择</div>
            <!-- <img class="icon" src="" alt=""> -->
          </div>
          <div class="picker-btn">
            <div>请选择</div>
            <!-- <img class="icon" src="" alt=""> -->
          </div>
        </div>
      </div>
      <div class="select-item checkbox">
        <div class="select-item-title">多选</div>
        <div class="checkbox-form">
          <!-- <checklist required :options="commonList" @on-change="change"></checklist> -->
        </div>
      </div>
      <div class="select-item range-box">
        <div class="select-item-title">手动填写分数</div>
        <div class="range">
          <range
            :range-bar-height="4"
            :max="rangeValueMax"
            v-model="rangeValue"
            @on-touchstart="touchstartRange"
          ></range>
          <div class="js-btn">
            <img src="../../../assets/img/icon/icon-jian.png" alt @click="countRangeValue(-1)">
            <img src="../../../assets/img/icon/icon-add.png" alt @click="countRangeValue(1)">
          </div>
        </div>
      </div>
      <div class="select-item address-box">
        <div class="select-item-title">地址</div>
        <div class="select-address">
          <div class="sheng">
            <div>省/自治区/直辖市</div>
          </div>
          <div class="shi">
            <div>市</div>
          </div>
          <div class="qu">
            <div>区/县</div>
          </div>
          <input type="text" placeholder="详细地址">
        </div>
      </div>
      <div class="select-item date-time-box">
        <div class="select-item-title">日期/时间</div>
        <div class="date-time">
          <div>选择日期</div>
          <div>时</div>
          <div>分</div>
        </div>
      </div>
      <div class="select-item date-box">
        <div class="select-item-title">日期</div>
        <div class="date">
          <div>选择日期</div>
        </div>
      </div>
      <div class="select-item time-box">
        <div class="select-item-title">时间</div>
        <div class="time">
          <div>时</div>
          <div>分</div>
        </div>
      </div>
      <div class="select-item wj-upload">
        <div class="select-item-title">文件上传</div>
        <div class="wj-upload-list">
          <div class="wj-upload-item">
            <div class="top">
              <div class="wjm">名字.doc</div>
              <div class="del">X</div>
            </div>
            <div class="jdt"></div>
            <div class="wj-size">10.8M</div>
          </div>
        </div>
        <div class="wj-upload-btn">
          <div>
            <span class="icon-add">+</span>
            <span>上传文件或压缩包</span>
          </div>
        </div>
      </div>
      <div class="select-item checkbox">
        <div class="select-item-title">单选</div>
        <div class="checkbox-form">
          <!-- <checklist required :options="commonList" @on-change="change"></checklist> -->
        </div>
      </div>
      <div class="select-item img-select">
        <div class="select-item-title">图片选择</div>
        <div class="img-select-list">
          <div class="img-select-item">
            <img src alt>
            <label>
              <input name="img" type="checkbox" value>选项
            </label>
          </div>
          <div class="img-select-item">
            <img src alt>
            <label>
              <input name="img" type="checkbox" value>选项
            </label>
          </div><div class="img-select-item">
            <img src alt>
            <label>
              <input name="img" type="checkbox" value>选项
            </label>
          </div><div class="img-select-item">
            <img src alt>
            <label>
              <input name="img" type="checkbox" value>选项
            </label>
          </div><div class="img-select-item">
            <img src alt>
            <label>
              <input name="img" type="checkbox" value>选项
            </label>
          </div><div class="img-select-item">
            <img src alt>
            <label>
              <input name="img" type="checkbox" value>选项
            </label>
          </div>
        </div>
      </div>
      <div class="select-item checkbox">
        <div class="select-item-title">是/否</div>
        <div class="checkbox-form">
          <!-- <checklist required :options="commonList" @on-change="change"></checklist> -->
        </div>
      </div>
      <div class="select-item">
        <div class="select-item-title">多行文本</div>
        <div class="select-item-txt">请输入您的选项</div>
        <textarea name id cols="30" rows="10"></textarea>
      </div>
      <button class="submit">提交</button>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Scroller, PopupPicker, Checklist, Range } from "vux";

export default {
  name: "FormPage",
  components: {
    Scroller,
    Tab,
    TabItem,
    PopupPicker,
    Checklist,
    Range
  },
  data() {
    return {
      lishH: "-53",
      rangeValue: 5,
      rangeValueMax: 10
    };
  },
  computed: {},
  methods: {
    // 上传图片
    fileImage(e) {
      console.log(e);
    },
    change() {},
    touchstartRange(e) {
      console.log(e);
    },
    countRangeValue(type) {
      console.log(type);
      let rangeValue = this.rangeValue;
      if (type == -1 && this.rangeValue > 0) {
        this.rangeValue = rangeValue - 1;
      }
      if (type == 1 && this.rangeValueMax > rangeValue) {
        this.rangeValue = rangeValue + 1;
      }
    }
  },
  mounted() {}
};
</script>

<style scope lang="scss">
@import "../../../assets/styles/mixins.scss";
.vux-tab-wrap {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
}
.range-bar-active-color {
  background: #5db75d;
}
.vux-tab .vux-tab-item {
  font-size: 20px !important;
  background: #fff !important;
}
.form-page {
  padding-bottom: 53px;
  padding-top: 44px;
  textarea {
    border: 1px solid #c3c9cf;
    width: 100%;
    height: 80px;
    padding: 10px;
    box-sizing: border-box;
  }
  .submit {
    display: block;
    width: 130px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;
    background: #5db75d;
    border-radius: 1px;
    font-size: 12px;
    color: #ffffff;
  }
  .form-wrapper {
    padding: 20px;
    .title {
      font-size: 18.5px;
      color: #333333;
      margin-bottom: 10px;
    }
    .des {
      font-size: 15px;
      color: #4a4a4a;
      letter-spacing: 0;
      text-align: justify;
      line-height: 28px;
      margin-bottom: 20px;
    }
    .select-item {
      margin-bottom: 28px;
      .select-item-title {
        font-size: 16px;
        color: #363636;
      }
      .select-item-txt {
        font-size: 13px;
        color: #575757;
        margin: 6px 0 13px 0;
      }
      button {
        background: #ffffff;
        border: 1px solid #5db75d;
        font-size: 14px;
        color: #5db75d;
        width: px2rem(170);
        height: 40px;
        text-align: center;
        line-height: 40px;
      }
    }
    .upload-img {
      .tip {
        margin-top: 6px;
        font-size: 9px;
        color: #575757;
      }
      .upload {
        position: relative;
        div {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background: #ffffff;
          border: 1px dashed #c1c1c1;
          font-size: 9px;
          color: #575757;
          span {
            display: block;
          }
          span:nth-child(1) {
            font-size: 18px;
          }
        }
        input {
          position: absolute;
          top: 0;
          left: 0;
          z-index: 5;
          width: 50px;
          height: 50px;
          opacity: 0;
        }
      }
    }
    .download {
      .download-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: 1px dashed #c1c1c1;
        background: #fff;
        font-size: 12px;
        color: #5db75d;
        width: 100%;
        height: 40px;
        padding: 0 20px;
        box-sizing: border-box;
      }
    }
    .once-text {
      input {
        border: 1px solid #c3c9cf;
        width: 100%;
        height: 40px;
        padding: 0 10px;
        box-sizing: border-box;
      }
    }
    .picker {
      .packet-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .mt-12 {
        margin-top: 12px;
      }
      .picker-btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: px2rem(160);
        box-sizing: border-box;
        height: 40px;
        border: 1px solid #c3c9cf;
        padding: 0 10px;
        font-size: 12px;
        color: #575757;
      }
    }
    .checkbox-form {
    }
    .range-box {
      .range {
        margin-top: 30px;
      }
      .js-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        img {
          width: 39px;
          height: 34px;
          &:first-child {
            margin-right: 30px;
          }
        }
      }
    }
    .address-box {
      font-size: 12px;
      color: #575757;
      .select-address {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        margin-top: 12px;
        .sheng {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: px2rem(160);
          height: 40px;
          padding: 0 12px;
          background: #ffffff;
          border: 1px solid #c3c9cf;
          box-sizing: border-box;
        }
        .shi {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: px2rem(160);
          height: 40px;
          padding: 0 12px;
          background: #ffffff;
          border: 1px solid #c3c9cf;
          box-sizing: border-box;
        }
        .qu {
          margin: 15px 0;
        }
        .qu,
        input {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 40px;
          padding: 0 12px;
          background: #ffffff;
          border: 1px solid #c3c9cf;
          box-sizing: border-box;
        }
      }
    }
    .date-time-box {
      font-size: 12px;
      color: #575757;
      .select-item-title {
        margin-bottom: 12px;
      }
      .date-time {
        align-items: center;
        display: flex;
        justify-content: space-between;
        div {
          height: 40px;
          text-align: center;
          line-height: 40px;
          background: #ffffff;
          border: 1px solid #c3c9cf;
          &:nth-child(1) {
            width: px2rem(135);
          }
          &:nth-child(2) {
            width: px2rem(85);
          }
          &:nth-child(3) {
            width: px2rem(85);
          }
        }
      }
    }
    .date-box {
      font-size: 12px;
      color: #575757;
      .select-item-title {
        margin-bottom: 12px;
      }
      .date {
        div {
          width: 100%;
          height: 40px;
          text-align: center;
          line-height: 40px;
          background: #ffffff;
          border: 1px solid #c3c9cf;
        }
      }
    }
    .time-box {
      font-size: 12px;
      color: #575757;
      .select-item-title {
        margin-bottom: 12px;
      }
      .time {
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          width: px2rem(160);
          height: 40px;
          text-align: center;
          line-height: 40px;
          background: #ffffff;
          border: 1px solid #c3c9cf;
        }
      }
    }
    .img-select {
      .img-select-list {
        margin-top: 12px;
        display: flex;
        flex-wrap: wrap;
        .img-select-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: px2rem(75);
          margin-bottom: 15px;
          margin-right: px2rem(11);
          &:nth-child(4n+0) {
            margin-right: 0;
          }
          label {
            font-size: 14px;
            color: #686868;
            input {
              margin-right: 4px;
            }
          }
          img {
            width: px2rem(75);
            height: px2rem(75);
            background: #eee;
            margin-bottom: 7px;
          }
        }
      }
    }
    .wj-upload {
      font-size: 14px;
      color: #575757;
      .select-item-title {
        margin-bottom: 12px;
      }
      .wj-upload-list {
        .wj-upload-item {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: #ffffff;
          border: 1px solid #c3c9d0;
          width: px2rem(254);
          height: 54px;
          padding: 6px px2rem(16);
          box-sizing: border-box;
          margin-bottom: 14px;
          .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .wjm {
              font-size: 14px;
              color: #4a4a4a;
            }
            .del {
              color: #9b9b9b;
            }
          }
          .jdt {
            width: px2rem(153);
            height: 4px;
            background: #5db75d;
            border-radius: 4px;
          }
          .wj-size {
            font-size: 12px;
            color: #9b9b9b;
          }
        }
      }
      .wj-upload-btn {
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          width: px2rem(171);
          height: 54px;
          border: 1px solid #c1c1c1;
          .icon-add {
            margin-right: px2rem(10);
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>