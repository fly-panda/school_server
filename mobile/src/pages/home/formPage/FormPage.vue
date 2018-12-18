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
    <div
      class="form-wrapper"
      v-if="selectTabIndex == 0"
      v-for="(allList, index) of allListData"
      :key="index"
    >
      <!-- 标题&描述 -->
      <div class="title" v-html="allList.title"></div>
      <div class="des" v-html="allList.describe"></div>

      <div v-for="(obj, idx) of allList.data" :key="idx">
        <!-- 选择学生 -->
        <div class="select-item" v-if="false">
          <div class="select-item-title">选择学生</div>
          <div class="select-item-txt">请选择学生</div>
          <button @click="selectList(0)">{{ selectStudentValue }}</button>
        </div>
        <!-- 选择老师 -->
        <div class="select-item" v-if="false">
          <div class="select-item-title">选择老师</div>
          <div class="select-item-txt">请选择老师</div>
          <button @click="selectList(1)">{{ selectTeacherValue }}</button>
        </div>
        <!-- 选择班级 -->
        <div class="select-item" v-if="false">
          <div class="select-item-title">选择班级</div>
          <div class="select-item-txt">请选择你的班级</div>
          <button @click="selectList(2)">{{ selectClassValue }}</button>
        </div>
        <!-- 选择部门 -->
        <div class="select-item" v-if="false">
          <div class="select-item-title">选择部门</div>
          <div class="select-item-txt">请选择你的部门</div>
          <button @click="selectList(3)">{{ selectDepartmentValue }}</button>
        </div>
        <!-- 图片上传 -->
        <div class="select-item upload-img" v-if="obj.ele == 'uploadimg'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <div class="img-box">
            <div class="upload">
              <div>
                <span>+</span>
                <span>点击上传</span>
              </div>
              <input class="files" id="files" type="file" accept="image/*" @change="fileImage()">
            </div>
          </div>
          <div class="tip">请上传jpg、png、gif、psd等图片格式</div>
        </div>
        <!-- 文件下载 -->
        <div class="select-item download" v-if="obj.ele == 'download'">
          <div class="select-item-title">{{ obj.obj.label }}</div>
          <div class="select-item-txt">{{ obj.obj.describe }}</div>
          <div
            class="download-btn"
            v-for="(items, itemsIndex) of obj.obj.items"
            :key="itemsIndex"
            style="margin-bottom: 10px;"
          >
            <div>{{ items.label_name }}</div>
            <img
              class="icon-download"
              src="../../../assets/img/icon/icon-download.png"
              width="12"
              height="15"
              alt
            >
          </div>
        </div>
        <div class="des" v-if="obj.ele == 'p'" v-html="obj.obj.describe"></div>
        <!-- 单行文字 -->
        <div class="select-item once-text" v-if="obj.ele == 'input'">
          <div class="select-item-title" v-html="obj.obj.modalTitle"></div>
          <div class="select-item-txt" v-html="obj.obj.label "></div>
          <input
            type="text"
            :maxlength="obj.obj.maxLength"
            :placeholder="obj.obj.placeholder"
            v-model="obj.obj.value"
          >
        </div>
        <!-- 下拉框 -->
        <div class="select-item picker" v-if="obj.ele == 'select'">
          <div class="select-item-title" v-html="obj.obj.modalTitle"></div>
          <div class="select-item-txt" v-html="obj.obj.label"></div>
          <div class="packet-box">
            <div class="picker-btn drop-down-box">
              <popup-picker
                :data="obj.obj.items"
                :columns="1"
                v-model="dropDownBoxValue"
                placeholder="请选择"
                show-name
              ></popup-picker>
            </div>
          </div>
        </div>
        <!-- 二级下拉 -->
        <div class="select-item picker" v-if="false">
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
        <div class="select-item checkbox" v-if="obj.ele == 'checkbox'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="checkbox-form">
            <checklist
              :required="checkboxRequired"
              :options="obj.obj.items | filtersData"
              @on-change="checkboxChange"
            ></checklist>
          </div>
        </div>
        <!-- 手动填写分数 -->
        <div class="select-item range-box" v-if="false">
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
        <div class="select-item address-box" v-if="obj.ele == 'address'">
          <div class="select-item-title">地址</div>
          <div class="select-address">
            <div class="sheng">
              <popup-picker
                :data="province | cityDatafilter"
                :columns="1"
                v-model="dropDownBoxValue"
                placeholder="省/自治区/直辖市"
                show-name
                @on-hide="provinceHide"
              ></popup-picker>
            </div>
            <div class="shi">
              <popup-picker
                :data="city | cityDatafilter"
                :columns="1"
                v-model="dropDownBoxValue1"
                placeholder="市"
                :disabled="cityDisabled"
                @on-hide="cityHide"
                show-name
              ></popup-picker>
            </div>
            <div class="qu">
              <popup-picker
                :data="zone | cityDatafilter"
                :columns="1"
                v-model="dropDownBoxValue2"
                placeholder="区/县"
                show-name
                @on-show="popupPickerAddress(2)"
                :disabled="zoneDisabled"
              ></popup-picker>
            </div>
            <input type="text" placeholder="详细地址" v-model="addressInfo" style="padding: 0 12px;">
          </div>
        </div>
        <!-- 日期/时间 -->
        <div class="select-item date-time-box" v-if="false">
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
        <div class="select-item date-box" v-if="obj.ele == 'datepicker'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="date">
            <div class="calendar-box">
              <group>
                <calendar
                  :readonly="calendarReadonly"
                  :placeholder="obj.obj.placeholder"
                  v-model="calendarValue1"
                  :title="calendarTitle"
                  disable-past
                ></calendar>
              </group>
            </div>
          </div>
        </div>
        <!-- 时间 -->
        <div class="select-item time-box" v-if="false">
          <div class="select-item-title">时间</div>
          <div class="time">
            <div class="time-picker">
              <popup-picker :data="hoursData" v-model="hour1" placeholder="时"></popup-picker>
            </div>
            <div class="time-picker">
              <popup-picker :data="minuteData" v-model="minute1" placeholder="分"></popup-picker>
            </div>
          </div>
        </div>
        <!-- 文件上传 -->
        <div class="select-item wj-upload" v-if="false">
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
        <div class="select-item radio" v-if="obj.ele == 'radio'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="radio-box-form">
            <mt-radio :options="obj.obj.items" v-model="obj.obj.value"></mt-radio>
          </div>
        </div>
        <!-- 图片选择 -->
        <div class="select-item img-select" v-if="obj.ele == 'imgshow'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="img-select-list">
            <div class="img-select-item" v-for="(item, index) of imgArr" :key="index">
              <img :src="item.src" @click="previewerImg(index)">
              <label>
                <input name="img" type="checkbox" value>选项
              </label>
            </div>
          </div>
          <div v-transfer-dom>
            <previewer :list="imgArr" ref="previewer" :options="previewerOptions"></previewer>
          </div>
        </div>
        <!-- 单选-是否 -->
        <div class="select-item checkbox" v-if="obj.ele == 'truefalse'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="checkbox-form radio-only-one">
            <mt-radio :options="obj.obj.items" v-model="radioValueOnlyOne"></mt-radio>
          </div>
        </div>
        <!-- 多行文本 -->
        <div class="select-item" v-if="obj.ele == 'text'">
          <div class="select-item-title" v-html="obj.obj.modalTitle"></div>
          <div class="select-item-txt" v-html="obj.obj.label"></div>
          <textarea
            name
            id
            cols="30"
            rows="10"
            v-model="textareaValue"
            :placeholder="obj.obj.placeholder"
          ></textarea>
        </div>
      </div>
      <button class="submit" @click="submitForm">提交</button>
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
  Calendar,
  Previewer,
  TransferDom
} from "vux";
import Uploader from "vux-uploader";
import SuspendBtn from "../../../components/suspendBtn/SuspendBtn";
import mockData from "./mock.js"; // 本地模拟数据

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
  directives: {
    TransferDom
  },
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
    Calendar,
    Previewer
  },
  filters: {
    filtersData(r) {
      // console.log(r)
      let list = []
      r.map((v, i) =>{
        let item = {
          key: v.name,
          value: v.value
        }
        list.push(item)
      })
      return list
    },
    cityDatafilter(r) {
      // console.log(r)
      let list = []
      r.map((v, i) => {
        let item = {
          value: v.id,
          name: v.name
        }
        list.push(item)
      })
      return list
    }
  },
  data() {
    return {
      allListData: mockData.data,

      oneLineValue: "", // 单行文字
      selectStudentValue: "点击选择学生范围",
      selectTeacherValue: "点击选择老师范围",
      selectClassValue: "点击选择班级范围",
      selectDepartmentValue: "点击选择部门范围",

      // 地址信息
      province: [],
      city: [],
      zone: [],
      selectAddress: [],

      zoneDisabled: true,
      cityDisabled: true,

      // 上传图片
      uoloadImgArr: ["http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg","http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg","http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg"],

      previewerOptions: {},
      imgArr: [
        {
          src: "http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg"
        },
        {
          src: "http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg"
        },
        {
          src: "http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg"
        }
      ],

      sortable_item: [],
      hour: [],
      minute: [],
      hour1: [],
      minute1: [],
      hoursData: [[]],
      minuteData: [[]],
      dropDownBoxValue: [],
      dropDownBoxValue1: [],
      dropDownBoxValue2: [],

      // dropDownBoxData: [["一年级", "二年级", "三年级"]],

      calendarTitle: "TODAY",
      calendarValue: "", // 日历时间
      calendarValue1: "", // 日历时间
      calendarReadonly: false,

      textareaValue: "", // 多行文本
      radioValueOnlyOne: "1",
      radioValue: "China", // 单选选中的值
      checkboxRequired: true, //多选是否为必选
      commonList: ["China", "Japan", "America"],
      radioDataList: ["China", "Japan", "America"],
      isShowMenu: false, //是否显示悬浮菜单
      addressInfo: "", // 详细地址
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
    cityHide(type) {
      console.log(type)
      if (type || this.dropDownBoxValue1.length) {
        console.log(this.dropDownBoxValue1);
        this.zoneDisabled = false;

        this.$api.get(
          `/city/getCity?pid=${this.dropDownBoxValue1[0]}`,
          r => {
            console.log(r);
          },
          r => {
            // console.log(r.data)
            let data = JSON.parse(r.data);
            data.map((v, i) => {
              v.value = v.id;
            });
            this.zone = data;
          }
        );

        this.getCity;
      }
    },
    provinceHide(type) {
      console.log(type);
      if (type || this.dropDownBoxValue.length) {
        console.log(this.dropDownBoxValue);
        this.cityDisabled = false;

        this.$api.get(
          `/city/getCity?pid=${this.dropDownBoxValue[0]}`,
          r => {
            console.log(r);
          },
          r => {
            // console.log(r.data)
            let data = JSON.parse(r.data);
            data.map((v, i) => {
              v.value = v.id;
            });
            this.city = data;
          }
        );

        this.getCity;
      }
    },
    popupPickerAddress(type) {
      console.log(type);
    },
    // 图片预览
    previewerImg(index) {
      this.$refs.previewer.show(index);
    },
    // 上传图片
    fileImage() {
      let self = this;
      let fileObj = document.getElementById("files").files[0];
      console.log(fileObj);
      // let curRemoveObj = this.sortable_item[this.curIndex].obj.imgArr;
      // curRemoveObj[index].name = fileObj.name;
      // self.$api.uploadFile("file/upload ", {}, fileObj, r => {
      //   setInterval(() => {
      //     if (self.progress < 100) {
      //       self.progress += 10;
      //     }
      //   }, 200);
      //   curRemoveObj[index].titles = "图片";

      //   curRemoveObj[index].url = r.data;
      //   curRemoveObj[index].size = fileObj.size;
      //   curRemoveObj[index].labels = "选项";
      // });
    },
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
      let value = "";
      let typeValue = "";
      if (type == 0) {
        title = "选择学生范围";
        value =
          this.selectStudentValue == "点击选择学生范围"
            ? ""
            : this.selectStudentValue;
        typeValue = "selectStudentValue";
      }
      if (type == 1) {
        title = "选择老师范围";
        value =
          this.selectTeacherValue == "点击选择老师范围"
            ? ""
            : this.selectTeacherValue;
        typeValue = "selectTeacherValue";
      }
      if (type == 2) {
        title = "选择班级";
        value =
          this.selectClassValue == "点击选择班级范围"
            ? ""
            : this.selectClassValue;
        typeValue = "selectClassValue";
      }
      if (type == 3) {
        title = "选择分部";
        value =
          this.selectDepartmentValue == "点击选择部门范围"
            ? ""
            : this.selectDepartmentValue;
        typeValue = "selectDepartmentValue";
      }

      this.$router.push({
        path: "/selectList",
        query: { title: title, type: typeValue, value: value }
      });
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
    loadMore() {},
    submitForm() {
      console.log(this.allListData);
    },
    // 获取表单数据
    getFormData() {
      this.$api.get("/cform/tempDetail", {tempid: "5c189861d725d24950b66849"},
        r => {
          console.log(2,r);
        },
        e => {
          console.log(3,e)
        }
      );
    },
    // 获取省市区
    getCity(pid) {
      // let obj = {}
      // obj.pid = pid
      this.$api.get(
        `/city/getCity?pid=${pid}`,
        r => {
          console.log(r);
        },
        r => {
          // console.log(r.data)
          let data = JSON.parse(r.data);
          this.province = data;
          console.log(data);
        }
      );
    }
  },
  mounted() {
    this.getFormData();

    this.getCity(0);

    for (let i = 0; i < 24; i++) {
      this.hoursData[0].push(i + "");
    }
    for (let j = 0; j < 60; j++) {
      this.minuteData[0].push(j + "");
    }

    this.selectStudentValue = sessionStorage.getItem("selectStudentValue")
      ? sessionStorage.getItem("selectStudentValue")
      : this.selectStudentValue;
    this.selectTeacherValue = sessionStorage.getItem("selectTeacherValue")
      ? sessionStorage.getItem("selectTeacherValue")
      : this.selectTeacherValue;
    this.selectClassValue = sessionStorage.getItem("selectClassValue")
      ? sessionStorage.getItem("selectClassValue")
      : this.selectClassValue;
    this.selectDepartmentValue = sessionStorage.getItem("selectDepartmentValue")
      ? sessionStorage.getItem("selectDepartmentValue")
      : this.selectDepartmentValue;
  }
};
</script>

<style scope lang="scss">
@import "../../../assets/styles/mixins.scss";
// 重置样式选择日期
.calendar-box,
.time-picker,
.drop-down-box {
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
.time-picker,
.address-box,
.drop-down-box {
  .vux-cell-box {
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
  .vux-cell-value,
  .vux-cell-placeholder {
    color: #535353;
  }
  .weui-cell_access .weui-cell__ft:after {
    border-color: #fff !important;
  }
  .weui-cell {
    padding: 0;
  }
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
    width: px2rem(200);
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
    padding: px2rem(20);
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
        width: px2rem(150);
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
          width: px2rem(150);
          height: 40px;
          // padding: 0 12px;
          background: #ffffff;
          border: 1px solid #c3c9cf;
          box-sizing: border-box;
        }
        .shi {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: px2rem(150);
          height: 40px;
          // padding: 0 12px;
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
          // padding: 0 12px;
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
            width: px2rem(130);
          }
          &:nth-child(2) {
            width: px2rem(80);
          }
          &:nth-child(3) {
            width: px2rem(80);
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
        > div {
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
        > div {
          width: px2rem(150);
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
          width: px2rem(70);
          margin-bottom: 15px;
          margin-right: px2rem(8);
          &:nth-child(4n + 0) {
            margin-right: 0;
          }
          label {
            font-size: 14px;
            color: #686868;
            input {
              margin-right: px2rem(4);
            }
          }
          img {
            width: px2rem(70);
            height: px2rem(70);
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