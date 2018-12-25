<template>
  <div :class="[{ 'pt-0': preview == '1' }, 'form-page']">
    <!-- tab切换 -->
    <tab :line-width="1" custom-bar-width="60px" v-if="preview != '1'">
      <tab-item
        v-for="(item, index) in tabData"
        :selected="selectTabIndex === index"
        :key="index"
        @on-item-click="tabItemClick(index)"
      >{{ item }}</tab-item>
    </tab>
    <!-- 表单 -->
    <div class="form-wrapper" v-if="selectTabIndex == 0">

      <!-- 标题&描述 -->
      <div class="title" v-html="allListData.title"></div>
      <div class="des" v-html="allListData.describe"></div>

      <!-- 表单列表 -->
      <div v-for="(obj, idx) of allListData.data" :key="idx">
        <!-- 选择学生 -->
        <div class="select-item" v-if="obj.ele == 'selectstudent'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <button @click="selectList(0, obj.obj.items, selectStudentItem)">{{ selectStudentItem.title ? selectStudentItem.title : '点击选择学生范围' }}</button>
        </div>
        <!-- 选择老师 -->
        <div class="select-item" v-if="obj.ele == 'selectteacher'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <button @click="selectList(1, obj.obj.items, selectTeacherItem)">{{ selectTeacherItem.title ? selectTeacherItem.title : '点击选择老师范围' }}</button>
        </div>
        <!-- 选择班级 -->
        <div class="select-item" v-if="obj.ele == 'selectgrade'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <button @click="selectList(2, obj.obj.items, selectClassItem)">{{ selectClassItem.title ? selectClassItem.title : '点击选择班级范围'  }}</button>
        </div>
        <!-- 选择部门 -->
        <div class="select-item" v-if="obj.ele == 'selectdepartment'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <button @click="selectList(3, obj.obj.items, selectDepartmentItem)">{{ selectDepartmentItem.title ? selectDepartmentItem.title : '点击选择部门范围' }}</button>
        </div>
        <!-- 图片上传 -->
        <div class="select-item upload-img" v-if="obj.ele == 'uploadimg'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-item-txt" v-html="obj.obj.describe"></div>
          <div class="img-box">
            <div class="upload-list">
              <div class="img-box-item" v-for="(item, index) of obj.obj.uploadList" :key="index">
                <img :src="item.src">
                <div class="del-img" @click="delImg(obj.obj.uploadList, index)">X</div>
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
        <div class="des" v-if="obj.ele == 'p'" v-html="obj.obj.describe"></div>
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
                v-model="obj.obj.value"
                placeholder="请选择"
                show-name
                @on-change='pickerValueChange(obj.obj, obj.obj.value)'
              ></popup-picker>
            </div>
            <div class="picker-btn">
              <popup-picker
                :data="obj.obj.two_arr | dropDownFilter"
                :columns="1"
                v-model="obj.obj.value1"
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
            <input type="text" 
                    placeholder="输入文字" 
                    class="other-input"  
                    v-model="obj.obj.otherValue"
                    v-if="obj.obj.hasOther && obj.obj.value.indexOf('other')>-1">
          </div>
        </div>
        <!-- 手动填写分数 -->
        <div class="select-item range-box" v-if="obj.ele == 'slider'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="range">
            <div class="rang-slider">
              <div class="num" v-html="obj.obj.low"></div>
              <vue-slider ref="slider" 
                        v-model="obj.obj.value"
                        :max='obj.obj.high'
                        width='80%'
                        :dotSize="sliderDotSize"
                        :processStyle='siliderProcessStyle'
                        :tooltipStyle='sliderTooltipStyle'
                        ></vue-slider>
              <div class="num" v-html="obj.obj.high"></div>
            </div>
            <div class="js-btn">
              <img src="../../../assets/img/icon/icon-jian.png"  @click="countRangeValue(-1, obj.obj)">
              <img src="../../../assets/img/icon/icon-add.png" @click="countRangeValue(1, obj.obj)">
            </div>
          </div>
        </div>
        <!-- 地址 -->
        <div class="select-item address-box" v-if="obj.ele == 'address'">
          <!-- <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="select-address">
            <div class="sheng" v-if="obj.obj.chooseCheck.indexOf('province') == 0">
              <popup-picker
                :data="obj.obj.sheng"
                :columns="1"
                v-model="obj.obj.shengValueArr"
                placeholder="省/自治区/直辖市"
                show-name
                @on-show="getCity(obj.obj.sheng, ['0'])"
              ></popup-picker>
            </div>
            <div class="shi" v-if="obj.obj.chooseCheck.indexOf('city') > -1">
              <popup-picker
                :data="obj.obj.shi"
                :columns="1"
                v-model="obj.obj.shiValueArr"
                placeholder="市"
                @on-show="getCity(obj.obj.shi, obj.obj.shengValueArr)"
                show-name
              ></popup-picker>
            </div>
            <div class="qu" v-if="obj.obj.chooseCheck.indexOf('zone') > -1">
              <popup-picker
                :data="obj.obj.qu"
                :columns="1"
                v-model="obj.obj.quValueArr"
                placeholder="区/县"
                show-name
                @on-show="getCity(obj.obj.qu, obj.obj.shiValueArr)"
              ></popup-picker>
            </div>
            <input
              v-if="obj.obj.chooseCheck.indexOf('address') > -1"
              type="text"
              placeholder="详细地址"
              v-model="obj.obj.value"
              style="padding: 0 12px;"
            >
          </div> -->
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
              <popup-picker :data="timesData" 
                            v-model="obj.obj.valueTimeArr" 
                            placeholder="时间"
                            :display-format="timeFormat"></popup-picker>
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
            <popup-picker :data="timesData" 
                            v-model="obj.obj.valueTimeArr" 
                            placeholder="时间"
                            :display-format="timeFormat"></popup-picker>
          </div>
        </div>
        <!-- 文件上传 -->
        <div class="select-item wj-upload" v-if="obj.ele == 'uploads'">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="wj-upload-list">
            <div class="wj-upload-item"
                 v-for="(item, i) of obj.obj.value"
                 :key="i">
              <div class="top">
                <div class="wjm" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap"  v-html="item.name"></div>
                <div class="del" @click="delFile(obj.obj.value, i)">X</div>
              </div>
              <!-- <div class="jdt"></div> -->
              <div class="wj-size" v-html="item.size"></div>
            </div>
          </div>
          <div class="wj-upload-btn">
            <input class="files" :id="'files' + idx" type="file" @change="addFile(obj.obj, 'files' + idx)">            
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
            <mt-radio :options="obj.obj.items | radioFilter(obj.obj.hasOther)" v-model="obj.obj.value"></mt-radio>
            <input type="text" 
                   v-if='obj.obj.hasOther && obj.obj.value=="other"' 
                   v-model="obj.obj.otherValue" 
                   class="other-input">
          </div>
        </div>
        <!-- 单选 勾选打分 -->
        <div class="select-item radio" v-if="obj.ele == 'score' && obj.obj.isCheck == false">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="radio-box-form">
            <mt-radio :options="obj.obj.items | radioFilter" v-model="obj.obj.value"></mt-radio>
          </div>
        </div>
        <!-- 多选 勾选打分-->
        <div class="select-item checkbox" v-if="obj.ele == 'score' && obj.obj.isCheck">
          <div class="select-item-title" v-html="obj.obj.label"></div>
          <div class="checkbox-form">
            <checklist
              :required="obj.obj.require"
              :options="obj.obj.items | checkBoxFilter"
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
              <div class="img-select-item" v-for="(item, i) of obj.obj.imgArr" :key='i'>
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
      <button :disabled="preview == '1'" 
              :class="[preview == '1' ? 'btn-disabled' : '','submit']" 
              @click="submitForm">提交</button>
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
import vueSlider from 'vue-slider-component';
import addressMe from '../../../components/address/Address';
import { Toast, Indicator } from 'mint-ui'
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
    Previewer,
    Datetime,
    vueSlider,
    addressMe
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
          key: i + '',
          value: v.label_name
        };
        list.push(item);
      });

      if(hasOther) {
        list.push({
          key: 'other',
          value: '其他'
        })
      }
      return list;
    },
    radioFilter(r, otherValue) {
      let list = [];

      r.map((v, i) => {
        let item = {
          label: v.label_name,
          value: i + '',
        };
        list.push(item);
      });

      if(otherValue) {
        list.push({
          label: '其他',
          value: 'other'
        })
      }
      return list;
    },
    cityDatafilter(r) {
      console.log(r)
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
      test: [],
      baseUrl: "http://47.93.156.129:8848/",

      formOnlyRead: false, // 表单状态

      siliderProcessStyle: {
        "backgroundColor": "#5DB75D"
      },
      sliderTooltipStyle: {
        "backgroundColor": "#fff",
        "color": "#aab2bd",
        "font-size": '14px',
        "borderColor": '#fff',
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

      timesData:[
        ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59"]
      ],
      // 时间格式化
      timeFormat: function (value, name) {
        return `${value[0]}:${value[1]}`
      },

      previewerOptions: {},

      calendarTitle: "TODAY",

      isShowMenu: false, //是否显示悬浮菜单
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
      pullupDefaultConfig: pullupDefaultConfig,
      tabData: ["表单", "历史记录"],
      selectTabIndex: 0 // tab选中的下标
    };
  },
  computed: {},
  mounted() {
    // console.log(this);
    console.log(mockData.data1)

    let dataArr = mockData.data1

    console.log(this.allListData)


    this.dataFormat(dataArr)


    // 判断页面是不是预览 preview == '1'为预览
    this.preview = this.$route.query.preview ? this.$route.query.preview : "";
    let ids = this.$route.query.ids ? this.$route.query.ids : ''

    // 预览
    if(this.preview == 1) {
      console.log('预览模式！！！')

      this.dataFormat(mockData.data2)

      if(!ids) { return }

      // 获取预览数据
      this.$api.get('/cform/getpreview', {tempid: ids}, r=> {

        let allData = JSON.parse(r.data)
        this.dataFormat(allData)

      })

    }


    this.getFormData(ids);



    this.selectStudentItem = JSON.parse(sessionStorage.getItem("selectStudentItem"))
      ? JSON.parse(sessionStorage.getItem("selectStudentItem"))
      : this.selectStudentItem;
    this.selectTeacherItem = JSON.parse(sessionStorage.getItem("selectTeacherItem"))
      ? JSON.parse(sessionStorage.getItem("selectTeacherItem"))
      : this.selectTeacherItem;
    this.selectClassItem = JSON.parse(sessionStorage.getItem("selectClassItem"))
      ? JSON.parse(sessionStorage.getItem("selectClassItem"))
      : this.selectClassItem;
    this.selectDepartmentItem = JSON.parse(sessionStorage.getItem("selectDepartmentItem"))
      ? JSON.parse(sessionStorage.getItem("selectDepartmentItem"))
      : this.selectDepartmentItem

  },
  methods: {
    // 二级下拉
    pickerValueChange(obj, value) {
      obj.two_arr = obj.items[value[0]].arrs
    },
    // 文件下载
    downloadInfo(item) {
      window.location.href = this.baseUrl+"api/file/download?path="+item.url;
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
          src: this.baseUrl + r.data,
          // size: sizes,
          name: fileObj.name,
        });
      });
    },
    // 删除上传的图片
    delImg(list, idx) {
      // console.log(list);
      let path = list[idx].src;
      Indicator.open({
        text: '删除中',
        spinnerType: 'fading-circle'
      });
      this.$api.get("/file/deleteFile", { path: path }, r => {
        console.log(r);
        Indicator.close()
        list.splice(idx, 1);
        Toast(r.result)
      });
    },
    // 上传文件
    addFile(res, id){
      let self=this;
      let fileObj=document.getElementById(id).files[0];
      let sizes=self.$api.onver(fileObj.size);
      self.$api.uploadFile("file/upload ", {},fileObj, (r) => {
        res.value.push({
          name:fileObj.name,
          url:r.data,
          size:sizes
        })
      });
    },
    // 删除上传的文件
    delFile(res,i){
      let path = res[i].url;
      Indicator.open({
        text: '删除中',
        spinnerType: 'fading-circle'
      });
      this.$api.get("/file/deleteFile", { path: path }, r => {
        console.log(r);
        res.splice(i,1)        
        Indicator.close()
        Toast(r.result)
      });
    },
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
    selectList(type, items, selectItem) {
      // console.log(items)
      let title = "";
      let value = "";
      let typeValue = "";
      if (type == 0) {
        title = "选择学生范围";
        value =
          this.selectStudentValue == "点击选择学生范围"
            ? ""
            : this.selectStudentValue;
        typeValue = "selectStudentItem";
      }
      if (type == 1) {
        title = "选择老师范围";
        value =
          this.selectTeacherValue == "点击选择老师范围"
            ? ""
            : this.selectTeacherValue;
        typeValue = "selectTeacherItem";
      }
      if (type == 2) {
        title = "选择班级";
        value =
          this.selectClassValue == "点击选择班级范围"
            ? ""
            : this.selectClassValue;
        typeValue = "selectClassItem";
      }
      if (type == 3) {
        title = "选择分部";
        value =
          this.selectDepartmentValue == "点击选择部门范围"
            ? ""
            : this.selectDepartmentValue;
        typeValue = "selectDepartmentItem";
      }
      selectItem = JSON.stringify(selectItem)
      items = JSON.stringify(items)
      this.$router.push({
        path: "/selectList",
        query: { title: title, type: typeValue, value: value, items: items,selectItem: selectItem }
      });
    },
    // 滑动打分
    countRangeValue(type, obj) {
      if (type == -1 && parseInt(obj.value) > parseInt(obj.low) && parseInt(obj.value) <= parseInt(obj.high)) {
        obj.value = parseInt(obj.value) - parseInt(obj.step);
      }
      if (type == 1 && parseInt(obj.value) >= parseInt(obj.low) && parseInt(obj.value) < parseInt(obj.high)) {
        obj.value  = parseInt(obj.value) + parseInt(obj.step)
      }
    },
    loadMore() {},
    // 数据格式化
    dataFormat(allData) {

      let bigData = allData.data

      bigData.data.map((c, d) => {
        if(c.ele == 'select') {
          c.obj.valueArr = []
        }
        if(c.ele == 'address') {
          c.obj.shengValueArr =  []
          c.obj.shiValueArr =  []
          c.obj.quValueArr =  []
        }
        if(c.ele == 'datepicker') {
          c.obj.valueTimeArr = []
        }
      })

      this.allListData = bigData
    },
    // 提交表单
    submitForm() {
      // console.log(this.allListData)

      this.allListData.data.map((v, i) => {
        if(v.ele == 'select') {
          v.obj.value = v.obj.valueArr[0]
        }
        if(v.ele == 'address') {
          v.obj.shengValue = v.obj.shengValueArr[0]
          v.obj.shiValue = v.obj.shiValueArr[1]
          v.obj.quValue = v.obj.quValueArr[2]
        }          
        if(v.ele == 'datepicker') {
          v.obj.valueTime = v.obj.valueTimeArr.join(':')
        }
      })

      alert(this.allListData.data[0].obj.placeholder)

    },
    // 获取表单数据
    getFormData(ids) {
      this.$api.get("/cform/tempDetail", { tempid: ids }, r => {
          // console.log(2,r);
        }
      );
    },
  }
};
</script>

<style scope lang="scss">
@import "../../../assets/styles/mixins.scss";
.time-picker {
  .weui-cell__ft {
    display: none;
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
    height: 40px;
    line-height: 40px;
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
  font-size: 14px;
  input, textarea {
    font-size: 14px;
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
          &:nth-child(4n + 0) {
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
          height: 40px;
          text-align: center;
          line-height: 40px;
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
        .weui-cell {
          padding: 0;
          text-align: center;
        }
        .vux-popup-picker-select {
          text-align: center !important;
          color: #535353;
        }
        .vux-cell-placeholder,.vux-cell-value {
          color: #535353;
        }
        .weui-cell__ft {
          display: none;
        }
        > div {
          width: 100%;
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
    .img-check {
      .img-select-list {
        display: block;
        .el-checkbox-group {
          display: flex;
          .el-checkbox__input.is-checked .el-checkbox__inner {
            background: #5DB75D;
            border-color: #5DB75D;
          }
          .el-checkbox__input.is-checked+.el-checkbox__label {
            color: #535353;
          }
          .is-focus,.el-checkbox__inner {
            border-color: #dcdfe6;
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

.other-input {
  background: #FFFFFF;
  border: 1px solid #C3C9CF;
  height: 30px;
  padding: 0 10px;
}

.pt-0 {
  padding-top: 0;
}
.btn-disabled {
  opacity: .4;
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