(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bd43d60"],{3673:function(t,a,e){},"82c1":function(t,a,e){},d51e:function(t,a,e){"use strict";var i=e("3673"),s=e.n(i);s.a},f382:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-duplicate-container"},[e("div",{staticClass:"duplicate-title"},[t._v("\n        "+t._s(t.title)+"\n    ")]),e("div",{staticClass:"duplicate-content"},[e("div",{staticClass:"contentTop"},[t._m(0),t._m(1),t._m(2),e("div",{staticClass:"submitContainer",on:{click:function(a){t.unSubmitNum()}}},[e("div",{staticClass:"number"},[t._v("213")]),e("div",{staticClass:"text"},[t._v("未交人数"),e("Icon",{attrs:{color:"red",type:"md-alert"}})],1)])]),e("ExcelTable")],1)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"formMsg"},[e("div",{staticClass:"title"},[t._v("表单信息")]),e("div",{staticClass:"content"},[e("div",{staticClass:"item"},[e("div",[t._v("表单创建时间")]),e("div",[t._v("2018-11-21 18：00")])]),e("div",{staticClass:"item"},[e("div",[t._v("任务开始时间")]),e("div",[t._v("2018-11-21 18：00")])]),e("div",{staticClass:"item"},[e("div",[t._v("任务截止时间")]),e("div",[t._v("2018-11-21 18：00")])]),e("div",{staticClass:"item"},[e("div",[t._v("发起人")]),e("div",[t._v("沈京京")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"submitContainer"},[e("div",{staticClass:"number"},[t._v("380")]),e("div",{staticClass:"text"},[t._v("表单数")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"submitContainer"},[e("div",{staticClass:"number"},[t._v("213")]),e("div",{staticClass:"text"},[t._v("应交人数")])])}],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticStyle:{height:"400px"}},[e("div",{staticClass:"searchContainer"},[e("Input",{staticStyle:{width:"auto"},attrs:{suffix:"ios-search",placeholder:"请输入搜索内容",size:"small"}}),e("span",{on:{click:function(a){t.exportData(1)}}},[t._v("导出Excel")])],1),e("Table",{ref:"table",attrs:{columns:t.columns8,data:t.data7,size:"small"}})],1)},c=[],l={data:function(){return{columns8:[{title:"Name",key:"name"},{title:"Weak",key:"weak",sortable:!0},{title:"Signin",key:"signin",sortable:!0},{title:"Click",key:"click",sortable:!0},{title:"Active",key:"active",sortable:!0},{title:"7, retained",key:"day7",sortable:!0},{title:"30, retained",key:"day30",sortable:!0},{title:"The next day left",key:"tomorrow",sortable:!0}],data7:[{name:"Name1",fav:0,show:7302,weak:5627,signin:1563,click:4254,active:1438,day7:274,day30:285,tomorrow:1727},{name:"Name2",fav:0,show:4720,weak:4086,signin:3792,click:8690,active:8470,day7:8172,day30:5197,tomorrow:1684},{name:"Name3",fav:0,show:7181,weak:8007,signin:8477,click:1879,active:16,day7:2249,day30:3450,tomorrow:377},{name:"Name4",fav:0,show:9911,weak:8976,signin:8807,click:8050,active:7668,day7:1547,day30:2357,tomorrow:7278},{name:"Name5",fav:0,show:934,weak:1394,signin:6463,click:5278,active:9256,day7:209,day30:3563,tomorrow:8285},{name:"Name6",fav:0,show:6856,weak:1608,signin:457,click:4949,active:2909,day7:4525,day30:6171,tomorrow:1920},{name:"Name7",fav:0,show:5107,weak:6407,signin:4166,click:7970,active:1002,day7:8701,day30:9040,tomorrow:7632},{name:"Name8",fav:0,show:862,weak:6520,signin:6696,click:3209,active:6801,day7:6364,day30:6850,tomorrow:9408}]}},methods:{exportData:function(t){1===t?this.$refs.table.exportCsv({filename:"The original data"}):2===t?this.$refs.table.exportCsv({filename:"Sorting and filtering data",original:!1}):3===t&&this.$refs.table.exportCsv({filename:"Custom data",columns:this.columns8.filter(function(t,a){return a<4}),data:this.data7.filter(function(t,a){return a<4})})}}},o=l,r=(e("fc51"),e("2877")),d=Object(r["a"])(o,n,c,!1,null,"4166b4ae",null);d.options.__file="excel_table.vue";var v=d.exports,m={components:{ExcelTable:v},data:function(){return{title:"一年级校服尺寸收集表"}},methods:{unSubmitNum:function(){var t={type:"",title:"未提交人数",url:"/api/company/add",component:"SubmitList"};t.curtime=(new Date).getTime(),t.status=!0,this.$store.commit("modalStatus",t)}}},u=m,f=(e("d51e"),Object(r["a"])(u,i,s,!1,null,"2af4fe6c",null));f.options.__file="index.vue";a["default"]=f.exports},fc51:function(t,a,e){"use strict";var i=e("82c1"),s=e.n(i);s.a}}]);
//# sourceMappingURL=chunk-1bd43d60.787891c7.js.map