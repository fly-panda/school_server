<template>
  <div class="form-page">
    <tab :line-width="1" custom-bar-width="60px">
      <tab-item
        :selected="selectTabIndex === index"
        v-for="(item, index) in tabData"
        :key="index"
        @on-item-click="tabItemClick(index)"
      >{{ item }}</tab-item>
      <!-- <tab-item>历史记录</tab-item> -->
    </tab>
    <!-- 表单 -->
    <div class="form-wrapper" v-if="selectTabIndex == 0">
      <div class="title">卫生检查金数据是人人可用的在线表单工</div>
      <div
        class="des"
      >金数据(jinshuju.net)是人人可用的在线表单工具,快速创建问卷调查、活动报名、意见反馈、信息登记、在线订单、考试测评等表单,自动化收集整理数据,节省工作时间,更聪明。</div>
      <!-- 选择学生 -->
      <div class="select-item">
        <div class="select-item-title">选择学生</div>
        <div class="select-item-txt">请选择学生</div>
        <button @click="selectList(0)">{{ selectStudentValue }}</button>
      </div>
      <!-- 选择老师 -->
      <div class="select-item">
        <div class="select-item-title">选择老师</div>
        <div class="select-item-txt">请选择老师</div>
        <button @click="selectList(1)">{{ selectTeacherValue }}</button>
      </div>
      <!-- 选择班级 -->
      <div class="select-item">
        <div class="select-item-title">选择班级</div>
        <div class="select-item-txt">请选择你的班级</div>
        <button @click="selectList(2)">{{ selectClassValue }}</button>
      </div>
      <!-- 选择部门 -->
      <div class="select-item">
        <div class="select-item-title">选择部门</div>
        <div class="select-item-txt">请选择你的部门</div>
        <button @click="selectList(3)">{{ selectDepartmentValue }}</button>
      </div>
      <!-- 图片上传 -->
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
              value>
          </div>
        </div>
        <div class="tip">请上传jpg、png、gif、psd等图片格式</div>
      </div>
      <!-- 文件下载 -->
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
      <!-- 单行文字 -->
      <div class="select-item once-text">
        <div class="select-item-title">单行文字</div>
        <div class="select-item-txt">请选择你的组织</div>
        <input type="text" v-model='oneLineValue'>
      </div>
      <!-- 下拉框 -->
      <div class="select-item picker">
        <div class="select-item-title">下拉框</div>
        <div class="select-item-txt">请选择你的组织</div>
        <div class="packet-box">
          <div class="picker-btn drop-down-box">
            <popup-picker :data="dropDownBoxData" v-model="dropDownBoxValue" placeholder="请选择"></popup-picker>            
          </div>
        </div>
      </div>
      <!-- 二级下拉 -->
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
      <!-- 多选 -->
      <div class="select-item checkbox">
        <div class="select-item-title">多选</div>
        <div class="checkbox-form">
          <checklist :required="checkboxRequired" :options="commonList" @on-change="checkboxChange"></checklist>
        </div>
      </div>
      <!-- 手动填写分数 -->
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
      <!-- 地址 -->
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
          <input type="text" placeholder="详细地址" v-model="addressInfo">
        </div>
      </div>
      <!-- 日期/时间 -->
      <div class="select-item date-time-box">
        <div class="select-item-title">日期/时间</div>
        <div class="date-time">
          <div class="calendar-box">
            <group>
              <calendar
                :readonly="calendarReadonly"
                placeholder="选择日期"
                v-model="calendarValue"
                :title="calendarTitle"
                disable-past
              ></calendar>
            </group>
          </div>
          <div class="time-picker hour">
            <popup-picker :data="hoursData" v-model="hour" placeholder="时"></popup-picker>
          </div>
          <div class="time-picker">
            <popup-picker :data="minuteData" v-model="minute" placeholder="分"></popup-picker>
          </div>
        </div>
      </div>
      <!-- 日期 -->
      <div class="select-item date-box">
        <div class="select-item-title">日期</div>
        <div class="date">
          <div class="calendar-box">
            <group>
              <calendar
                :readonly="calendarReadonly"
                placeholder="选择日期"
                v-model="calendarValue"
                :title="calendarTitle"
                disable-past
              ></calendar>
            </group>
          </div>
        </div>
      </div>
      <!-- 时间 -->
      <div class="select-item time-box">
        <div class="select-item-title">时间</div>
        <div class="time">
          <div class="time-picker">
            <popup-picker :data="hoursData" v-model="hour" placeholder="时"></popup-picker>
          </div>
          <div class="time-picker">
            <popup-picker :data="minuteData" v-model="minute" placeholder="分"></popup-picker>
          </div>
        </div>
      </div>
      <!-- 文件上传 -->
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
      <!-- 单选 -->
      <div class="select-item radio">
        <div class="select-item-title">单选</div>
        <div class="radio-box-form">
          <mt-radio :options="radioDataList" v-model="radioValue"></mt-radio>
        </div>
      </div>
      <!-- 图片选择 -->
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
          </div>
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
          </div>
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
          </div>
        </div>
      </div>
      <!-- 单选-是否 -->
      <div class="select-item checkbox">
        <div class="select-item-title">是/否</div>
        <div class="checkbox-form radio-only-one">
          <mt-radio :options="['是','否']" v-model="radioValueOnlyOne"></mt-radio>
        </div>
      </div>
      <!-- 多行文本 -->
      <div class="select-item">
        <div class="select-item-title">多行文本</div>
        <div class="select-item-txt">请输入您的选项</div>
        <textarea name id cols="30" rows="10" v-model="textareaValue"></textarea>
      </div>
      <button class="submit">提交</button>
    </div>
    <!-- 历史记录 -->
    <div class="history-record" v-if="selectTabIndex == 1">
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
          <li class="item" v-for="(item, index) of historyRecord" :key="index">
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
      </scroller>
    </div>

    <!-- 悬浮按钮 -->
    <suspend-btn :isShowMenu="isShowMenu" @menuHandleClick="menuHandleClick"></suspend-btn>
  </div>
</template>

<script>
import {
  Tab,
  TabItem,
  Scroller,
  PopupPicker,
  Checklist,
  Range,
  Radio,
  Group,
  Calendar
} from "vux";
import Uploader from 'vux-uploader'
import SuspendBtn from "../../../components/suspendBtn/SuspendBtn";

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
  name: "FormPage",
  components: {
    Scroller,
    Tab,
    TabItem,
    PopupPicker,
    Range,
    SuspendBtn,
    Checklist,
    Radio,
    Group,
    Calendar
  },
  data() {
    return {
      oneLineValue: '', // 单行文字
      selectStudentValue: '点击选择学生范围',
      selectTeacherValue: '点击选择老师范围',
      selectClassValue: '点击选择班级范围',
      selectDepartmentValue: '点击选择部门范围',

      hour: [],
      minute: [],
      hoursData: [[]],
      minuteData: [[]],
      dropDownBoxValue: [],
      dropDownBoxData: [['一年级','二年级','三年级']],
      calendarTitle: "TODAY",
      calendarValue: "", // 日历时间
      calendarReadonly: false,
      textareaValue: '',  // 多行文本
      radioValueOnlyOne: '是',
      radioValue: "China", // 单选选中的值
      checkboxRequired: true, //多选是否为必选
      commonList: ["China", "Japan", "America"],
      radioDataList: ["China", "Japan", "America"],
      isShowMenu: false, //是否显示悬浮菜单
      addressInfo: '', // 详细地址
      historyRecord: [
        {
          title: "我是一个标题",
          date: "09/11 10:00"
        },
        {
          title: "我是一个标题",
          date: "09/11 10:00"
        },
        {
          title: "我是一个标题",
          date: "09/11 10:00"
        },
        {
          title: "我是一个标题",
          date: "09/11 10:00"
        }
      ],
      lishH: "-53",
      rangeValue: 5,
      pullupDefaultConfig: pullupDefaultConfig,
      rangeValueMax: 10,
      tabData: ["表单", "历史记录"],
      selectTabIndex: 0 // tab选中的下标
    };
  },
  computed: {},
  methods: {
    // 多选按钮
    checkboxChange(val, label) {
      // console.log(val);
      // console.log(label);
    },
    // 单选按钮
    radioChange() {},
    // tab切换
    tabItemClick(index) {
      this.selectTabIndex = index;
    },
    /**
     * 悬浮菜单操作按钮
     * @type==0 修改
     * @type==1 删除
     */
    menuHandleClick(type) {
      console.log(type);
    },
    selectList(type) {
      let title = "";
      let value = '';
      let typeValue = '';
      if (type == 0) {
        title = "选择学生范围";
        value = this.selectStudentValue == '点击选择学生范围' ? '' : this.selectStudentValue
        typeValue = 'selectStudentValue'
      }
      if (type == 1) {
        title = "选择老师范围";
        value = this.selectTeacherValue == '点击选择老师范围' ? '' : this.selectTeacherValue
        typeValue = 'selectTeacherValue'
      }
      if (type == 2) {
        title = "选择班级";
        value = this.selectClassValue == '点击选择班级范围' ? '' : this.selectClassValue
        typeValue = 'selectClassValue'        
      }
      if (type == 3) {
        title = "选择分部";
        value = this.selectDepartmentValue == '点击选择部门范围' ? '' : this.selectDepartmentValue
        typeValue = 'selectDepartmentValue'
      }

      this.$router.push({
        path: "/selectList",
        query: { title: title, type: typeValue, value: value }
      });
    },
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
    },
    loadMore() {}
  },
  mounted() {
    for (let i = 0; i < 24; i++) {
      this.hoursData[0].push(i + "");
    }
    for (let j = 0; j < 60; j++) {
      this.minuteData[0].push(j + "");
    }

    this.selectStudentValue = sessionStorage.getItem('selectStudentValue') ? sessionStorage.getItem('selectStudentValue') : this.selectStudentValue
    this.selectTeacherValue = sessionStorage.getItem('selectTeacherValue') ? sessionStorage.getItem('selectTeacherValue') : this.selectTeacherValue
    this.selectClassValue = sessionStorage.getItem('selectClassValue') ? sessionStorage.getItem('selectClassValue') : this.selectClassValue
    this.selectDepartmentValue = sessionStorage.getItem('selectDepartmentValue') ? sessionStorage.getItem('selectDepartmentValue') : this.selectDepartmentValue


  }
};
</script>

<style scope lang="scss">
@import "../../../assets/styles/mixins.scss";
// 重置样式选择日期
.calendar-box, .time-picker, .drop-down-box {
  .vux-cell-value,
  .vux-cell-placeholder {
    color: #575757;
    font-size: 12px;
    display: block;
    height: 40px;
    line-height: 40px;
  }
  .vux-no-group-title,
  .weui-cells {
    margin-top: 0 !important;
  }
  .weui-cell {
    padding: 0 !important;
  }
  .vux-calendar:before,
  .weui-cells:before {
    border-top: 1px solid #fff !important;
  }
  .weui-cells:after {
    border-bottom: 1px solid #fff;
  }
  .vux-cell-bd {
    display: none;
  }
  .weui-cell__ft {
    text-align: center !important;
  }
  .weui-cell_access .weui-cell__ft {
    padding: 0 !important;
  }
  .weui-cell_access .weui-cell__ft:after {
    border-color: #fff !important;
  }
}
.time-picker, .drop-down-box {
  .weui-cell__hd {
    width: 100%;
    display: none;
  }
  .vux-popup-picker-select {
    text-align: center !important;
  }
}
.drop-down-box {
  .vux-cell-box {
    width: 100%;
  }
}
// 重置单选样式
.mint-cell-wrapper,
.mint-cell:last-child {
  padding: 0;
  background-size: 0;
  font-size: 14px;
}
a:hover {
  color: rgb(101, 113, 128);
}
.mint-radiolist-label {
  padding: 0;
}
.mint-radio-input:checked + .mint-radio-core {
  background-color: #5db75d;
  border-color: #5db75d;
}
.mint-cell {
  min-height: auto;
  margin-bottom: 10px;
}
.checkbox-form,
.radio-box-form {
  .weui-cell__bd {
    font-size: 14px;
  }
  .weui-cell {
    padding: 0;
    margin-bottom: 10px;
    align-items: flex-end;
  }
  .weui-cell:before {
    border: none;
  }
  .weui-cells:before,
  .weui-cells:after {
    border-top: none;
    border-bottom: none;
  }
  [class^="weui-icon-"]:before,
  [class*=" weui-icon-"]:before {
    margin: 0;
  }
  选中状态 .weui-cells_checkbox .weui-icon-checked:before {
    font-size: 18px;
  }
}

.radio-only-one {
  .mint-radiolist {
    display: flex;
  }
  .mint-radiolist-title {
    margin: 0;
  }
  .mint-cell {
    width:px2rem(200);
  }
}
.vux-x-icon-ios-arrow-right {
  fill: #c3c9cf !important;
}
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
    .radio {
      .select-item-title {
        margin-bottom: 12px;
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
      margin-top: 12px;
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
        > div {
          overflow: hidden;
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
        >div {
          overflow: hidden;
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
        >div {
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
          &:nth-child(4n + 0) {
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
.history-record {
  padding: 0 px2rem(20);
  padding-top: 40px;
  .list {
    padding-bottom: 20px;
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