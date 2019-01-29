<template>
  <div v-show="!isShowLoading" :class="[{ 'pt-0': preview == '1' || openType == '2' || openType == '1' || openType == '3' || openType == '4' }, 'form-page']">
    <!-- tab切换 -->
    <tab :line-width="1" custom-bar-width="60px" v-if="preview != '1' && openType != '2' && openType != '1' && openType != '3' && openType != '4'">
      <tab-item
        v-for="(item, index) in tabData"
        :selected="selectTabIndex === index"
        :key="index"
        @on-item-click="tabItemClick(index)"
      >{{ item }}</tab-item>
    </tab>
    <!-- 表单 -->
    <div class="form-wrapper" v-if="selectTabIndex == 0 && openType != 2 && openType != 3">
      <!-- 标题&描述 -->
      <div class="title" v-html="allListData.title" v-show="allListData.title"></div>
      <div class="des" v-html="allListData.describe" v-show="allListData.describe"></div>

      <!-- 表单列表 -->
      <div v-for="(obj, idx) of allListData.data" :key="idx">
        <!-- 选择学生 -->
        <div class="select-item" v-if="obj.ele == 'selectstudent'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <button
            @click="selectListStudent('toogleSelectStudent')"
            v-html="obj.obj.selObj.name ? obj.obj.selObj.name : '点击选择学生范围'"
          ></button>
          <select-student
            :name.sync="obj"
            v-if="toogleSelectStudent"
            @hideSelectList="hideSelectStudentList"
          ></select-student>
        </div>
        <!-- 选择老师 -->
        <div class="select-item" v-if="obj.ele == 'selectteacher'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <button
            @click="selectList('toogleselectteacher')"
            v-html="obj.obj.selObj.name ? obj.obj.selObj.name : '点击选择老师范围'"
            @hideSelectList="hideSelectList"
          ></button>
          <select-list
            :name.sync="obj"
            v-show="toogleselectteacher"
            @hideSelectList="hideSelectList"
          ></select-list>
        </div>
        <!-- 选择班级 -->
        <div class="select-item" v-if="obj.ele == 'selectgrade'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <button
            @click="selectList('toogleselectgrade')"
            v-html="obj.obj.selObj.title ? obj.obj.selObj.title : '点击选择班级范围'"
          ></button>
          <select-list :name.sync="obj" v-show="toogleselectgrade" @hideSelectList="hideSelectList"></select-list>
        </div>
        <!-- 选择部门 -->
        <div class="select-item" v-if="obj.ele == 'selectdepartment'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <button
            @click="selectList('toogleselectdepartment')"
            v-html="obj.obj.selObj.title ? obj.obj.selObj.title : '点击选择部门范围'"
          ></button>
          <select-list
            :name.sync="obj"
            v-show="toogleselectdepartment"
            @hideSelectList="hideSelectList"
          ></select-list>
        </div>
        <!-- 图片上传 -->
        <div class="select-item upload-img" v-if="obj.ele == 'uploadimg'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <div class="img-box">
            <div class="upload-list">
              <div class="img-box-item" v-for="(item, index) of obj.obj.uploadList" :key="index">
                <img :src="baseUrl + item.url">
                <div class="del-img" 
                     @click="delImg(obj.obj.uploadList, index)"
                     v-show="openType != 0">X</div>
              </div>
            </div>
            <div class="upload">
              <div>
                <span>+</span>
                <span>点击上传</span>
              </div>
              <input
                class="files"
                :id="'files' + idx"
                type="file"
                accept="image/*"
                @change="fileImage(obj.obj, 'files' + idx)"
              >
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
            @click="downloadInfo(items)"
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
        <div class="des" v-if="obj.ele == 'p' && obj.obj.describe" v-html="obj.obj.describe"></div>
        <!-- 单行文字 -->
        <div class="select-item once-text" v-if="obj.ele == 'input'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe "></div>
          <input
            type="text"
            :maxlength="obj.obj.maxLength"
            placeholder="请输入文字"
            :readonly="formOnlyRead"
            v-model="obj.obj.placeholder"
          >
        </div>
        <!-- 下拉框 -->
        <div class="select-item picker" v-if="obj.ele == 'select'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <div class="packet-box">
            <div class="picker-btn drop-down-box">
              <popup-picker
                :data="obj.obj.items | dropDownFilter"
                :columns="1"
                v-model="obj.obj.valueArr"
                placeholder="请选择"
                show-name
              ></popup-picker>
            </div>
          </div>
        </div>
        <!-- 二级下拉 -->
        <div class="select-item picker" v-if="obj.ele == 'selectcontact'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="packet-box mt-12">
            <div class="picker-btn">
              <popup-picker
                :data="obj.obj.items | dropDownFilter"
                :columns="1"
                v-model="obj.obj.valueArr"
                placeholder="请选择"
                show-name
                @on-change="pickerValueChange(obj.obj, obj.obj.valueArr, obj.obj)"
              ></popup-picker>
            </div>
            <div class="picker-btn">
              <popup-picker
                :data="obj.obj.two_arr | dropDownFilter"
                :columns="1"
                v-model="obj.obj.valueArr1"
                placeholder="请选择"
                show-name
              ></popup-picker>
            </div>
          </div>
        </div>
        <!-- 多选 -->
        <div class="select-item checkbox" v-if="obj.ele == 'checkbox'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="checkbox-form">
            <checklist
              :required="obj.obj.require"
              :options="obj.obj.items | checkBoxFilter(obj.obj.hasOther)"
              v-model="obj.obj.value"
              @on-change="checkboxChange"
            ></checklist>
            <input
              type="text"
              placeholder="输入文字"
              class="other-input"
              v-model="obj.obj.otherValue"
              v-if="obj.obj.hasOther && obj.obj.value.indexOf('other')>-1"
            >
          </div>
        </div>
        <!-- 手动填写分数 -->
        <div class="select-item range-box" v-if="obj.ele == 'slider'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="range">
            <div class="rang-slider">
              <div class="num" v-html="obj.obj.low"></div>
              <vue-slider
                ref="slider"
                v-model="obj.obj.value"
                :max="obj.obj.high"
                width="80%"
                :interval="obj.obj.step"
                :dotSize="sliderDotSize"
                :processStyle="siliderProcessStyle"
                :tooltipStyle="sliderTooltipStyle"
              ></vue-slider>
              <div class="num" v-html="obj.obj.high"></div>
            </div>
            <div class="js-btn">
              <img
                src="../../../assets/img/icon/icon-jian.png"
                @click="countRangeValue(-1, obj.obj)"
              >
              <img src="../../../assets/img/icon/icon-add.png" @click="countRangeValue(1, obj.obj)">
            </div>
          </div>
        </div>
        <!-- 地址 -->
        <div class="select-item address-box" v-if="obj.ele == 'address'">
          <address-me :name.sync="obj"></address-me>
        </div>
        <!-- 日期/时间 -->
        <div
          class="select-item date-time-box"
          v-if="(obj.ele == 'datepicker') && (obj.obj.chooseCheck.length == 2)"
        >
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="date-time">
            <div class="calendar-box">
              <group>
                <calendar
                  :readonly="formOnlyRead"
                  placeholder="选择日期"
                  v-model="obj.obj.valueDate"
                  :title="calendarTitle"
                ></calendar>
              </group>
            </div>
            <div class="time-picker">
              <popup-picker
                :data="timesData"
                v-model="obj.obj.valueTimeArr"
                placeholder="时间"
                :display-format="timeFormat"
              ></popup-picker>
            </div>
          </div>
        </div>
        <!-- 日期 -->
        <div
          class="select-item date-box"
          v-if="obj.ele == 'datepicker' && obj.obj.chooseCheck[0] == ['date'] && obj.obj.chooseCheck.length == 1"
        >
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="date">
            <div class="calendar-box">
              <group>
                <calendar
                  :readonly="calendarReadonly"
                  :placeholder="obj.obj.placeholder"
                  v-model="obj.obj.valueDate"
                  :title="calendarTitle"
                ></calendar>
              </group>
            </div>
          </div>
        </div>
        <!-- 时间 -->
        <div
          class="select-item time-box"
          v-if="obj.ele == 'datepicker' && obj.obj.chooseCheck[0] == ['time'] && obj.obj.chooseCheck.length == 1"
        >
          <div class="select-item-title">时间</div>
          <div class="time">
            <popup-picker
              :data="timesData"
              v-model="obj.obj.valueTimeArr"
              placeholder="时间"
              :display-format="timeFormat"
            ></popup-picker>
          </div>
        </div>
        <!-- 文件上传 -->
        <div class="select-item wj-upload" v-if="obj.ele == 'uploads'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="wj-upload-list">
            <div class="wj-upload-item" v-for="(item, i) of obj.obj.value" :key="i">
              <div class="top">
                <div
                  class="wjm"
                  style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap"
                  v-html="item.name"
                ></div>
                <div class="del" @click="delFile(obj.obj.value, i)">X</div>
              </div>
              <!-- <div class="jdt"></div> -->
              <div class="wj-size" v-html="item.size"></div>
            </div>
          </div>
          <div class="wj-upload-btn">
            <input
              class="files"
              :id="'files' + idx"
              type="file"
              @change="addFile(obj.obj, 'files' + idx)"
            >
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
            <mt-radio
              :options="obj.obj.items | radioFilter(obj.obj.hasOther)"
              v-model="obj.obj.value"
            ></mt-radio>
            <input
              type="text"
              v-if="obj.obj.hasOther && obj.obj.value=='other'"
              v-model="obj.obj.otherValue"
              class="other-input"
            >
          </div>
        </div>
        <!-- 单选 勾选打分 -->
        <div class="select-item radio" v-if="obj.ele == 'score' && obj.obj.isCheck == false">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="radio-box-form">
            <mt-radio :options="obj.obj.items | scoreradioFilter" v-model="obj.obj.value"></mt-radio>
          </div>
        </div>
        <!-- 多选 勾选打分-->
        <div class="select-item checkbox" v-if="obj.ele == 'score' && obj.obj.isCheck">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="checkbox-form">
            <checklist
              :required="obj.obj.require"
              :options="obj.obj.items | scorecheckBoxFilter"
              v-model="obj.obj.value"
              @on-change="checkboxChange"
            ></checklist>
          </div>
        </div>
        <!-- 图片展示 -->
        <div class="select-item img-select" v-if="obj.ele == 'imgshow'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="img-select-list">
            <div class="img-select-item" v-for="(item, index) of obj.obj.imgArr" :key="index">
              <img :src="baseUrl + item.url" @click="previewerImg(index, 'imgShow'+idx)">
            </div>
          </div>
          <div v-transfer-dom>
            <previewer
              :list="obj.obj.imgArr | imgFilter(baseUrl)"
              :ref="'imgShow'+idx"
              :options="previewerOptions"
            ></previewer>
          </div>
        </div>
        <!-- 图片选择 -->
        <div class="select-item img-select img-check" v-if="obj.ele == 'imgcheck'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="img-select-list">
            <el-checkbox-group v-model="obj.obj.value">
              <div class="img-select-item" v-for="(item, i) of obj.obj.imgArr" :key="i">
                <img :src="baseUrl + item.url" @click="previewerImg1(i, 'imgcheck'+idx)">
                <el-checkbox :label="i">{{ item.labels }}</el-checkbox>
              </div>
            </el-checkbox-group>
          </div>
          <!-- 图片预览 -->
          <div v-transfer-dom>
            <previewer
              :list="obj.obj.imgArr | imgFilter(baseUrl)"
              :ref="'imgcheck'+idx"
              :options="previewerOptions"
            ></previewer>
          </div>
        </div>
        <!-- 单选-是否 -->
        <div class="select-item checkbox" v-if="obj.ele == 'truefalse'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="checkbox-form radio-only-one">
            <mt-radio :options="obj.obj.items | radioFilter" v-model="obj.obj.value"></mt-radio>
          </div>
        </div>
        <!-- 多行文本 -->
        <div class="select-item" v-if="obj.ele == 'text'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <textarea
            name
            id
            cols="30"
            rows="10"
            v-model="obj.obj.placeholder"
            placeholder="请输入文字"
            :readonly="formOnlyRead"
          ></textarea>
        </div>
      </div>
      <button
        :disabled="preview == '1'"
        :class="[preview == '1' ? 'btn-disabled' : '','submit']"
        v-show="openType != '2'"
        @click="submitForm"
      >提交</button>

      <!-- <div class="btn-box" v-show="openType == 0">
        <div class="hg" @click="caozuoForm(1)">合格</div>
        <div class="bhg" @click="caozuoForm(2)">不合格</div>
      </div> -->

    </div>
    <!-- 历史记录 -->
    <!-- <div class="history-record" v-show="selectTabIndex == 1">
      <scroller
        lock-x
        scrollbar-y
        use-pullup
        :pullup-config="pullupDefaultConfig"
        @on-pullup-loading="loadMore"
        ref="scrollerBottom"
        :height="lishH"
      >
        <ul class="list" v-show="historyRecord.length">
          <li class="item" 
              v-for="(item, index) of historyRecord" 
              :key="index"
              @click="historyRecordDetail(item)">
            <div class="left">
              <div class="title">{{ item.id }}</div>
              <div class="date">填写时间：{{ item.value0 }}</div>
            </div>
            <div class="right">
              <x-icon type="ios-arrow-right" size="16" class="icon-arrow-right"></x-icon>
            </div>
          </li>
        </ul>

        <no-data v-show="!historyRecord.length"></no-data>

      </scroller>
    </div> -->

    <!-- <submit-form-detail v-show="openType == 2 || openType == 3" :name.sync='submitFormDetailQuery'></submit-form-detail> -->

    <!-- 悬浮按钮 -->
    <!-- <suspend-btn :menuData="menuData" @menuHandleClick="menuHandleClick" v-show="openType == '3'"></suspend-btn> -->

    <!-- 提交成功 -->
    <div class="model" v-show="submitSuccess">
      <div class="submit-success">
        <div class="window">
          <div class="close" @click="hideModel">x</div>
          <img src="../../../assets/img/tijiaochanggong_picture@2x.png" width="70" alt="">
          <div style="font-size: 18px;color: #5DB75D;">提交成功</div>
          <div style="margin-top: 10px;">修改表单请到“历史记录”中修改</div>
          <div class="btn-box">
            <div @click='submitSuccessBtn(1)'>继续填写</div>
            <div @click='submitSuccessBtn(2)'>确认</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import vueSlider from "vue-slider-component";
import addressMe from "../../../components/address/Address";
import selectList from "./selectList/SelectList";
import selectStudent from "./selectStudent/SelectStudent";
import { Toast, Indicator } from "mint-ui";
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
  TransferDom,
  Datetime
} from "vux";

import NoData from "../../../components/noData/Nodata";
import SubmitFormDetail from '../../task/submitFormData/detail/Detail';

import Uploader from "vux-uploader";
import SuspendBtn from "../../../components/suspendBtn/SuspendBtn"; // 悬浮按钮
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
    Previewer,
    Datetime,
    vueSlider,
    addressMe,
    selectStudent,
    selectList,
    NoData,
    SubmitFormDetail
  },
  filters: {
    // 图片预览格式化
    imgFilter(r, url) {
      let list = [];
      r.map((v, i) => {
        let item = {
          src: url + v.url
        };
        list.push(item);
      });
      return list;
    },
    dropDownValueFilter(r) {
      let a = [];
      return a;
    },
    dropDownFilter(r) {
      let list = [];
      r.map((v, i) => {
        let item = {
          name: v.label_name,
          value: i + "",
          parent: 0
        };
        list.push(item);
      });
      return list;
    },
    checkBoxFilter(r, hasOther) {
      let list = [];
      r.map((v, i) => {
        let item = {
          key: i + "",
          value: v.label_name
        };
        list.push(item);
      });

      if (hasOther) {
        list.push({
          key: "other",
          value: "其他"
        });
      }
      return list;
    },
    scorecheckBoxFilter(r) {
      let list = []
      r.map((v, i) => {
        let item = {
          key: i + "",
          value: v.scoreType == 'add' ? v.label_name + '+' + v.label_value : v.label_name + '-' + v.label_value
        };
        list.push(item);
      })
      return list
    },
    radioFilter(r, otherValue) {
      let list = [];

      r.map((v, i) => {
        let item = {
          label: v.label_name,
          value: i + ""
        };
        list.push(item);
      });

      if (otherValue) {
        list.push({
          label: "其他",
          value: "other"
        });
      }
      return list;
    },
    // 勾选打分数据格式
    scoreradioFilter(r) {
      let list = []
      r.map((v, i) => {
        console.log(v)
        let item = {
          label: v.scoreType == 'add' ? v.label_name + '+' + v.label_value : v.label_name + '-' + v.label_value,
          value: i + ""
        };
        list.push(item);
      })
      return list
    },
    cityDatafilter(r) {
      console.log(r);
      let list = [];
      r.map((v, i) => {
        let item = {
          value: v.id,
          name: v.name
        };
        list.push(item);
      });
      return list;
    }
  },
  data() {
    return {

      isShowLoading: true,  // 显示loading
      
      submitSuccess: false,

      submitFormDetailQuery: {},  // 提交的表单数据详情

      page: 1,
      pagesize: 15,

      test: [],

      openType: "",  // 1-抄送班级日常 2-提交表单详情 3-表单填写记录

      baseUrl: "http://47.93.156.129:8848/",

      formOnlyRead: false, // 表单状态

      toogleSelectStudent: false, // 选择学生
      toogleselectgrade: false,
      toogleselectdepartment: false,
      toogleselectteacher: false,

      siliderProcessStyle: {
        backgroundColor: "#5DB75D"
      },
      sliderTooltipStyle: {
        backgroundColor: "#fff",
        color: "#aab2bd",
        "font-size": "14px",
        borderColor: "#fff",
        "box-shadow": "0 1px 11px 0 rgba(0,0,0,0.20)"
      },
      sliderDotSize: 25,

      cityPid: -100,

      allListData: [],

      preview: "", // 值为1时，为预览页面

      selectStudentItem: {},
      selectTeacherItem: {},
      selectClassItem: {},
      selectDepartmentItem: {},

      timesData: [
        [
          "00",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23"
        ],
        [
          "00",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59"
        ],
        [
          "00",
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59"
        ]
      ],
      // 时间格式化
      timeFormat: function(value, name) {
        return `${value[0]}:${value[1]}:${value[2]}`;
      },

      previewerOptions: {},

      calendarTitle: "TODAY",

      menuData: {
        isShowMenu: false,
        isShowModel: false
      }, //是否显示悬浮菜单
      historyRecord: [],
      lishH: "-53",
      pullupDefaultConfig: pullupDefaultConfig,
      tabData: ["表单", "历史记录"],
      selectTabIndex: 0 // tab选中的下标
    };
  },
  computed: {},
  created () {

    Indicator.open({ text: "加载中"});

    // 链接里的数据
    let options = this.$route.query
    // 主任务ID
    this.ids = options.ids

    // 判断页面是不是预览 preview == '1'为预览
    this.preview = this.$route.query.preview ? this.$route.query.preview : "";
    // 页面打开方式
    this.openType = this.$route.query.openType ? this.$route.query.openType : ''


    // 预览
    if (this.preview == 1) {
      
      let ids = this.$route.query.ids ? this.$route.query.ids : ""

      this.$api.sSetObject("userObj", {
        userId: this.$route.query.userId,
        objType: this.$route.query.objType,
        openAppID: this.$route.query.openAppID,
        objectid: this.$route.query.objectid
      });

      if (!ids) {
        return;
      }

      // 获取预览数据
      this.$api.get("/cform/getpreview", { tempid: ids }, r => {
        let allData = JSON.parse(r.data);
        console.log(allData)
        this.dataFormat(allData);
        Indicator.close()
        this.isShowLoading = false
      });
      return;
    }

    // 修改当前表单
    if(this.openType == '4') {
      let obj = {
        id: options.id,
        taskid: options.ids
      }
      this.$api.get('/submit/submitDetails', obj, r => {
        this.isShowLoading = false
        Indicator.close()

        let datas = JSON.parse(r.data)

        this.dataFormat(datas)
      })
      return
    }

    // 获取数据
    this.getFormData(this.ids);
  
  },
  methods: {
    // 提交成功里面的按钮
    submitSuccessBtn(type) {
      // 继续填写
      if(type == 1) {
        console.log(111)
        this.$router.go(0)
        // this.$router.push({ path: "/formPage", query: { ids: this.$route.query.ids } })        
      }
      // 确认
      if(type == 2) {
        this.$router.push({ path: "/historyRecord", query: { ids: this.$route.query.ids } });
      }
    },
    hideModel() {
      this.submitSuccess = false
    },
    // 二级下拉
    pickerValueChange(obj, value, obj1) {
      obj1.valueArr1 = [];
      obj.two_arr = obj.items[value[0]].arrs;
    },
    // 文件下载
    downloadInfo(item) {
      window.location.href =
        this.baseUrl + "api/file/download?path=" + item.url;
    },
    // 图片预览
    previewerImg(index, ref) {
      this.$refs[ref][0].show(index);
    },
    // 图片选择预览
    previewerImg1(index, ref) {
      this.$refs[ref][0].show(index);
    },
    // 上传图片
    fileImage(obj, id) {
      let self = this;
      let fileObj = document.getElementById(id).files[0];
      // let sizes=self.$api.onver(fileObj.size);
      console.log(fileObj);
      self.$api.uploadFile("file/upload ", {}, fileObj, r => {
        console.log(r);
        obj.uploadList.push({
          url: r.data,
          // size: sizes,
          name: fileObj.name
        });
      });
    },
    // 删除上传的图片
    delImg(list, idx) {
      // console.log(list);
      let path = list[idx].src;
      Indicator.open({
        text: "删除中",
      });
      this.$api.get("/file/deleteFile", { path: path }, r => {
        console.log(r);
        Indicator.close();
        list.splice(idx, 1);
        Toast(r.result);
      }, r => {
        Indicator.close();
      });
    },
    // 上传文件
    addFile(res, id) {
      let self = this;
      let fileObj = document.getElementById(id).files[0];
      let sizes = self.$api.onver(fileObj.size);
      self.$api.uploadFile("file/upload ", {}, fileObj, r => {
        res.value.push({
          name: fileObj.name,
          url: r.data,
          size: sizes
        });
      });
    },
    // 删除上传的文件
    delFile(res, i) {
      let path = res[i].url;
      Indicator.open({
        text: "删除中",
      });
      this.$api.get("/file/deleteFile", { path: path }, r => {
        console.log(r);
        res.splice(i, 1);
        Indicator.close();
        Toast(r.result);
      }, r => {
        Indicator.close();
      });
    },
    // tab切换
    tabItemClick(index) {

      if(index == 1) {
        this.$router.push({ path: "/historyRecord", query: { ids: this.$route.query.ids } });      
      }

    },
    /**
     * 悬浮菜单操作按钮
     * @type==1 修改
     * @type==2 删除
     */
    // menuHandleClick(type) {
    //   console.log(type);
    //   if(type == 1) {
    //     let obj = {
    //       id: this.$route.query.id,
    //       taskid: this.$route.query.ids
    //     }
    //     // this.openType = '4'
    //     // this.menuData.isShowMenu = false
    //     // this.$api.get('/submit/submitDetails', obj, r => {
    //     //   let datas = JSON.parse(r.data)
    //     //   console.log(datas)
    //     //   this.dataFormat(datas)
    //     // })
    //     this.$router.push({ path: '/formPage', 
    //     query: { openType: '4', id: this.$route.query.id, ids: this.$route.query.ids } })
    //   }
    //   if(type == 2) {

    //   }
    // },
    // 隐藏选项菜单
    hideSelectList(...data) {
      console.log(data);
      this["toogle" + data[0]] = false;
    },
    hideSelectStudentList(...data) {
      this[data[0]] = false;
    },
    // 展示选项菜单
    selectList(type) {
      this[type] = true;
    },
    selectListStudent(type) {
      this[type] = true;
    },
    // 滑动打分
    countRangeValue(type, obj) {
      // console.log(type)
      // console.log(obj.value)
      if (
        type == 1 &&
        parseFloat(obj.value) >= parseFloat(obj.low) &&
        parseFloat(obj.value) < parseFloat(obj.high)
      ) {
        obj.value = parseFloat(obj.value) + parseFloat(obj.step)
        obj.value = Math.round(obj.value*10)/10
      }
      if (
        type == -1 &&
        parseFloat(obj.value) > parseFloat(obj.low) &&
        parseFloat(obj.value) <= parseFloat(obj.high)
      ) {
        obj.value = parseFloat(obj.value) - parseFloat(obj.step);
        obj.value = Math.round(obj.value*10)/10
      }
    },
    // historyRecordDetail(item) {
    //   this.selectTabIndex = 0
    //   this.openType = '3'
      
    //   let obj = {
    //     id: item.id,
    //     taskid: this.$route.query.ids
    //   };

    //   console.log(obj)

    //   this.submitFormDetailQuery = obj
    // },
    // loadMore() {
    //   let obj = {
    //     taskid: this.$route.query.ids,
    //     userid: this.$api.sGetObject('userObj').userId,
    //     page: this.page,
    //     pagesize: this.pagesize
    //   };
    //   this.$api.get("submit/taskSummary", obj, r => {
    //     let data = JSON.parse(r.data);
    //     console.log(data)
    //     this.page++;
    //     this.pageCount = data.pageCount;

    //     this.$nextTick(() => {
    //       this.$refs.scrollerBottom.reset();
    //     });

    //     if (this.page > Math.ceil(data.count / this.pagesize)) {
    //       this.$refs.scrollerBottom.disablePullup();
    //     } else {
    //       this.$refs.scrollerBottom.enablePullup();
    //     }

    //     this.historyRecord = this.historyRecord.concat(data.resultList);

    //     console.log(this.historyRecord)

    //     this.$refs.scrollerBottom.donePullup();
    //   });
    // },
    // 数据格式化
    dataFormat(allData) {
      let bigData = allData;

      // console.log(bigData)

      bigData.data.map((c, d) => {
        if (c.ele == "select") {
          c.obj.valueArr = c.obj.value + '' ? c.obj.value.toString().split(',') : [];
        }
        if (c.ele == "address") {
          c.obj.shengValueArr = c.obj.shengValue ? c.obj.shengValue.split(',') : []
          c.obj.shiValueArr = c.obj.shiValue ? c.obj.shiValue.split(',') : []
          c.obj.quValueArr = c.obj.quValue ? c.obj.quValue.split(',') : []
        }

        if (c.ele == "datepicker") {
          c.obj.valueTimeArr = c.obj.valueTime ? c.obj.valueTime.split(':') : [];
        }

        if (c.ele == "selectcontact") {
          c.obj.valueArr = c.obj.value + '' ? c.obj.value.toString().split(',') : [];
          c.obj.valueArr1 = c.obj.value1+'' ? c.obj.value1.toString().split(',') : [];
          c.obj.two_arr =  c.obj.value+'' ? c.obj.items[c.obj.value].arrs : []
        }

        if (c.ele == "selectstudent") {
          c.obj.items[0].active = true;
        }

        // if(c.ele == 'score') {

        // }

      });
      this.allListData = bigData;
      // console.log(this.allListData);
    },
    requireCheck() {
      let msg = "";
      // 格式化数据结构和PC端保持一致
      this.allListData.data.map((v, i) => {
        if (v.ele == "select") {
          v.obj.value = v.obj.valueArr[0];
        }
        if (v.ele == "address") {
          v.obj.shengValue = v.obj.shengValueArr[0];
          v.obj.shiValue = v.obj.shiValueArr[0];
          v.obj.quValue = v.obj.quValueArr[0];
        }
        if (v.ele == "datepicker") {
          v.obj.valueTime = v.obj.valueTimeArr.join(":");
        }
        if (v.ele == "selectcontact") {
          v.obj.value = v.obj.valueArr[0];
          v.obj.value1 = v.obj.valueArr1[0];
        }
      });
      // console.log(this.allListData.data)
      this.allListData.data.some((v, i) => {
        if (v.obj.require) {
          msg = "";
          if (v.ele == "input" && !v.obj.placeholder) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "text" && !v.obj.placeholder) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "select" && !v.obj.value) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "checkbox" && !v.obj.value.length) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "truefalse" && !v.obj.value) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "radio" && !v.obj.value) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "uploads" && !v.obj.value.length) {
            msg = v.obj.label;
            return true;
          }
          if (
            v.ele == "datepicker" &&
            (!v.obj.valueDate || !v.obj.valueTime) &&
            v.obj.chooseCheck.length == 2
          ) {
            console.log("all");
            msg = v.obj.label;
            return true;
          }
          if (
            v.ele == "datepicker" &&
            !v.obj.valueDate &&
            v.obj.chooseCheck.length == 1 &&
            v.obj.chooseCheck[0] == "date"
          ) {
            console.log("date");
            msg = v.obj.label;
            return true;
          }
          if (
            v.ele == "datepicker" &&
            !v.obj.valueTime &&
            v.obj.chooseCheck.length == 1 &&
            v.obj.chooseCheck[0] == "time"
          ) {
            console.log("time");
            msg = v.obj.label;
            return true;
          }
          if (
            v.ele == "address" &&
            (!v.obj.shengValue || !v.obj.shiValue || !v.obj.quValue) &&
            v.obj.chooseCheck.length == 3
          ) {
            msg = v.obj.label;
            return true;
          }
          if (
            v.ele == "address" &&
            (!v.obj.shengValue ||
              !v.obj.shiValue ||
              !v.obj.quValue ||
              !v.obj.value) &&
            v.obj.chooseCheck.length == 4
          ) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "imgcheck" && !v.obj.value.length) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "selectcontact" && !v.obj.value && v.obj.value1) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "slider" && !v.obj.value) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "score" && !v.obj.value && !v.obj.isCheck) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "score" && !v.obj.value.length && v.obj.isCheck) {
            msg = v.obj.label;
            return true;
          }
          if (
            v.ele == "selectstudent" &&
            JSON.stringify(v.obj.selObj) == "{}"
          ) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "selectgrade" && JSON.stringify(v.obj.selObj) == "{}") {
            msg = v.obj.label;
            return true;
          }
          if (
            v.ele == "selectteacher" &&
            JSON.stringify(v.obj.selObj) == "{}"
          ) {
            msg = v.obj.label;
            return true;
          }
          if (v.ele == "selectgrade" && JSON.stringify(v.obj.selObj) == "{}") {
            msg = v.obj.label;
            return true;
          }
        }
      });

      if (msg == "") {
        return "success";
      } else {
        return msg;
      }
    },
    // 提交表单
    submitForm() {
      // 提交前的验证
      let msg = this.requireCheck();

      // msg=='success' 校验通过
      if (msg == "success") { 

        Indicator.open({
          text: "提交中",
        });
        
        // openType == 4 为修改表单
        if(this.openType == '4') {
          
          this.$api.post(
            "/submit/update",
            {
              id: this.$route.query.id,
              taskid: this.ids,
              title: this.allListData.title,
              data: this.allListData.data,
              describe: this.allListData.describe
            },
            r => {
              console.log(r)
              Indicator.close()
              if(r.state == '0') {
                Toast(r.result)
              }
              console.log(r)
            },
            e => {
              console.log(e);
            Indicator.close()
            }
          );
          return
        }

        this.$api.post(
          "/submit/submitTask",
          {
            id: this.ids,
            title: this.allListData.title,
            data: this.allListData.data,
            describe: this.allListData.describe
          },
          r => {
            console.log(r)
            Indicator.close()
            this.submitSuccess = true
          },
          e => {
            console.log(e);
            Indicator.close()
          });
      } else {
        Toast(msg + "为必填项，请填写后提交!");
      }
    },
    // 获取表单数据
    getFormData(ids) {
      this.$api.get("/task/taskdetail", { taskid: ids }, r => {
        Indicator.close()
        this.isShowLoading = false
        let datas = JSON.parse(r.data);
        console.log(datas)
        this.dataFormat(datas);
      });
    }
  }
};
</script>

<style scope lang="scss">
@import "../../../assets/styles/mixins.scss";
// 提交成功
.model {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: .28);
  z-index: 1000;
  .submit-success {
    position: relative;
    width: 100%;
    height: 100%;
    .window {
      position: absolute;
      padding-top: px2rem(16);
      box-sizing: border-box;
      top: 50%;
      left: 50%;
      margin-left: px2rem(-135);
      margin-top: px2rem(-125);
      width: px2rem(270);
      height: px2rem(251);
      background: #fff;
      border-radius: 1px;
      text-align: center;
      .btn-box {
        margin-top: px2rem(18);
        div {
          width: px2rem(79);
          height: px2rem(28);
          text-align: center;
          line-height: px2rem(28);
          color: #fff;
          font-size: 12px;
          border-radius: 1px;
          &:first-child {
            background: #5DB75D;
            margin-right: px2rem(36);
          }
          &:last-child {
            background: #C3C9CF;
          }
        }
      }
      img {
        margin-bottom: px2rem(10);
      }
      .close {
        color:  #C3C9D0;
        text-align: right;
        padding: 0 10px;
        font-size: 16px;
        margin-bottom: px2rem(20);
      }
    }
  }
}


.time-picker {
  .weui-cell__ft {
    display: none;
  }
}
  .btn-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: px2rem(30);
    div {
      width: px2rem(130);
      height: px2rem(35);
      text-align: center;
      line-height: px2rem(35);
      border-radius: 1px;
      color: #fff;
    }
    .hg {
      background: #5db75d;
      margin-right: px2rem(25);
    }
    .bhg {
      background: #C3C9CF;
    }
  }
thead {
  font-size: 14px;
  text-align: center;
}
.calendar-header {
  font-size: 14px !important;
}
// 重置样式选择日期
.calendar-box,
.time-picker,
.drop-down-box {
  .vux-cell-value,
  .vux-cell-placeholder {
    color: #575757;
    font-size: 12px;
    display: block;
    height: 32px;
    line-height: 32px;
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
.picker {
  .weui-cell__ft {
    display: none;
  }
}
.time-picker,
.address-box,
.drop-down-box,
.picker {
  .vux-cell-box {
    width: 100%;
    height: 32px;
    line-height: 32px;
  }
  .vux-cell-value,
  .vux-cell-placeholder {
    color: #535353;
  }
  .weui-cell__ft:after {
    position: absolute;
    top: 50%;
    margin-top: -4px;
    right: px2rem(11);
    content: "";
    display: inline-block;
    border-width: 5px;
    border-style: solid;
    border-color: #505050 transparent transparent transparent;
    transform: none;
    margin-top: -2px;
  }
  .weui-cell_access .weui-cell__ft:after {
    border-width: 5px;
    border-style: solid;
    border-color: #505050 transparent transparent transparent;
    transform: none;
    margin-top: -2px;
    width: 0;
    height: 0;
  }
  .weui-cell {
    padding: 0;
    padding-right: px2rem(10);
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
    font-size: px2rem(14);
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
  // 选中状态
  .weui-cells_checkbox .weui-icon-checked:before {
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
  font-size: 14px;
  .vux-tab-wrap {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 11;
  }
  input,
  textarea {
    font-size: px2rem(14);
  }
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
      font-size: px2rem(18);
      color: #212A33;
      font-weight: 600;
      margin-bottom: 10px;
    }
    .des {
      font-size: px2rem(15);
      color: #4a4a4a;
      letter-spacing: 0;
      text-align: justify;
      line-height: 28px;
      margin-bottom: 20px;
      img {
        width: 100%;
      }
    }
    .select-item {
      margin-bottom: 28px;
      .select-item-title {
        font-size: px2rem(16);
        color: #363636;
        font-weight: 600;
      }
      .select-item-txt {
        font-size: px2rem(13);
        color: #575757;
        margin: 6px 0 13px 0;
      }
      button {
        background: #ffffff;
        border: 1px solid #5db75d;
        font-size: px2rem(14);
        color: #5db75d;
        width: px2rem(150);
        height: px2rem(40);
        text-align: center;
        line-height: 32px;
      }
    }
    .upload-img {
      .tip {
        margin-top: 6px;
        font-size: 9px;
        color: #575757;
      }
      .upload-list {
        margin-bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .img-box-item {
          width: px2rem(70);
          height: px2rem(70);
          position: relative;
          margin-bottom: 5px;
          margin-right: px2rem(8);
          &:nth-child(3n + 0) {
            margin-right: 0;
          }
          .del-img {
            position: absolute;
            width: 13px;
            height: 13px;
            background: rgba(0, 0, 0, 0.2);
            color: #fff;
            font-size: 12px;
            right: 5px;
            top: 5px;
            border-radius: 50%;
            text-align: center;
            line-height: 13px;
          }
        }
        img {
          width: px2rem(75);
          height: px2rem(75);
        }
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
        height: 32px;
        padding: 0 20px;
        box-sizing: border-box;
      }
    }
    .once-text {
      input {
        border: 1px solid #c3c9cf;
        width: 100%;
        height: px2rem(40);
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
        height: px2rem(40);
        border: 1px solid #c3c9cf;
        // padding: 0 10px;
        font-size: 12px;
        color: #575757;
      }
    }
    .checkbox-form {
      margin-top: 12px;
    }
    .range-box {
      .range {
        margin-top: 40px;
        .rang-slider {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
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
      font-size: px2rem(12);
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
          height: px2rem(40);
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
          height: px2rem(40);
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
          height: px2rem(40);
          // padding: 0 12px;
          background: #ffffff;
          border: 1px solid #c3c9cf;
          box-sizing: border-box;
        }
      }
    }
    .date-time-box {
      font-size: px2rem(12);
      color: #575757;
      .select-item-title {
        margin-bottom: 12px;
      }
      .weui-cell_access .weui-cell__ft:after {
        width: 0;
        height: 0;
      }
      .date-time {
        align-items: center;
        display: flex;
        justify-content: space-between;
        > div {
          overflow: hidden;
          height: px2rem(40);
          text-align: center;
          line-height: px2rem(40);
          background: #ffffff;
          border: 1px solid #c3c9cf;
          width: px2rem(150);
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
          height: px2rem(40);
          text-align: center;
          line-height: px2rem(40);
          background: #ffffff;
          border: 1px solid #c3c9cf;
        }
      }
    }
    .time-box {
      font-size: px2rem(12);
      color: #575757;
      .select-item-title {
        margin-bottom: 12px;
      }
      .time {
        .weui-cell {
          padding: 0;
          text-align: center;
        }
        .vux-popup-picker-select {
          text-align: center !important;
          color: #535353;
        }
        .vux-cell-placeholder,
        .vux-cell-value {
          color: #535353;
        }
        .weui-cell__ft {
          display: none;
        }
        > div {
          width: 100%;
          height: px2rem(40);
          text-align: center;
          line-height: px2rem(40);
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
    .img-check {
      .img-select-list {
        display: block;
        .el-checkbox-group {
          display: flex;
          flex-wrap: wrap;
          .el-checkbox__input.is-checked .el-checkbox__inner {
            background: #5db75d;
            border-color: #5db75d;
          }
          .el-checkbox__input.is-checked + .el-checkbox__label {
            color: #535353;
          }
          .is-focus,
          .el-checkbox__inner {
            border-color: #dcdfe6;
          }
        }
      }
    }
    .wj-upload {
      font-size: px2rem(14);
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
          height: px2rem(54);
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
        position: relative;
        input {
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          width: px2rem(171);
          height: 100%;
        }
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
// .history-record {
//   padding: 0 px2rem(20);
//   padding-top: 40px;
//   .list {
//     padding-bottom: 20px;
//     .item {
//       padding: 12px px2rem(20);
//       box-sizing: border-box;
//       background: #ffffff;
//       box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.06);
//       border-radius: 2px;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       margin-bottom: 10px;
//       .statu {
//         flex: 1;
//       }
//       .left {
//         width: px2rem(236);
//         .title {
//           font-size: 17px;
//           color: #333333;
//           overflow: hidden;
//           text-overflow: ellipsis;
//           white-space: nowrap;
//           margin-bottom: 7px;
//         }
//         .date {
//           font-size: 13.9px;
//           color: #939393;
//         }
//       }
//     }
//   }
// }

.other-input {
  background: #ffffff;
  border: 1px solid #c3c9cf;
  height: 30px;
  padding: 0 10px;
}

.pt-0 {
  padding-top: 0;
}
.btn-disabled {
  opacity: 0.4;
}

// 滚动条样式
::-webkit-scrollbar {
  width: 7px;
  height: 5px;
}

::-webkit-scrollbar-track-piece {
  background-color: rgba(0, 0, 0, 0.2);
  -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgba(125, 125, 125, 0.7);
  -webkit-border-radius: 6px;
}

::-webkit-scrollbar-thumb:horizontal {
  width: 7px;
  background-color: rgba(125, 125, 125, 0.7);
  -webkit-border-radius: 6px;
}
</style>