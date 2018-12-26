exports.data1 = {
  state: 0,
  result: '查询成功',
  data: {
    "title": "新建表单1",
    "describe": "<p class=\"ql-align-center\">这是我新创建的表单</p>",
    'data': [
      {
        "ele": "input",
        "obj": {
          "type": "input",
          "icons": "",
          "config": true,
          "label": "单行文字",
          "placeholder": "",
          "inlineBlock": false,
          "require": true,
          "maxLength": 2000,
          "describe": "",
          "items": [{
            "label_value": "null",
            "label_name": "222"
          }],
          "verify": "none",
          "value": "",
          "name": "default",
          "ruleError": "该字段不能为空input",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "单行文字"
        }
      }, 
      {
        "ele": "text",
        "obj": {
          "type": "textarea",
          "icons": "",
          "config": true,
          "label": "多行文字",
          "placeholder": "",
          "inlineBlock": false,
          "maxLength": 2000,
          "describe": "",
          "require": true,
          "maxRows": 5,
          "value": "",
          "name": "default",
          "ruleError": "该字段不能为空text",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "verify": "none",
          "visibility": true,
          "modalTitle": "多行文字"
        }
      }, 
      {
        "ele": "p",
        "obj": {
          "config": true,
          "icons": "",
          "type": "describe",
          "describe": "请设置文字内容",
          "label": "描述文字",
          "marginTop": 0,
          "marginBottom": 24,
          "fontSize": "",
          "modalTitle": "描述文字"
        }
      }, 
      {
        "ele": "select",
        "obj": {
          "type": "select",
          "icons": "",
          "config": true,
          "label": "下拉框",
          "placeholder": "",
          "inlineBlock": false,
          "require": true,
          "items": [{
            "label_value": 1,
            "label_name": "12312"
          }, {
            "label_value": 2,
            "label_name": "324234"
          }],
          "value": "1",
          "name": "default",
          "ruleError": "请选择",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "下拉框"
        }
      }, {
        "ele": "select",
        "obj": {
          "type": "select",
          "icons": "",
          "config": true,
          "label": "下拉框1",
          "placeholder": "",
          "inlineBlock": false,
          "require": true,
          "items": [{
            "label_value": 1,
            "label_name": "12312"
          }, {
            "label_value": 2,
            "label_name": "324234"
          }],
          "value": "1",
          "name": "default",
          "ruleError": "请选择",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "下拉框"
        }
      }, {
        "ele": "truefalse",
        "obj": {
          "type": "trueFalse",
          "icons": "",
          "config": true,
          "label": "是/否",
          "hasOther": false,
          "inlineBlock": false,
          "require": true,
          "value": "",
          "items": [{
            "label_value": "1",
            "label_name": "是"
          }, {
            "label_value": "2",
            "label_name": "否"
          }],
          "name": "default",
          "ruleError": "请选择",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "是/否"
        }
      }, {
        "ele": "radio",
        "obj": {
          "type": "radio",
          "otherValue": '',
          "icons": "",
          "config": true,
          "label": "单选",
          "hasOther": true,
          "inlineBlock": false,
          "require": true,
          "value": "2",
          "items": [{
            "label_value": "1",
            "label_name": "单选框1"
          }, {
            "label_value": "2",
            "label_name": "单选框2"
          }],
          "name": "default",
          "ruleError": "请选择",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "单选"
        }
      }, {
        "ele": "checkbox",
        "obj": {
          "type": "checkbox",
          "icons": "",
          "config": true,
          "label": "多选",
          "hasOther": false,
          "inlineBlock": false,
          "require": true,
          "value": [],
          "otherValue": "",
          "items": [{
            "label_value": "1",
            "label_name": "多选框1"
          }, {
            "label_value": "2",
            "label_name": "多选框2"
          }],
          "name": "default",
          "ruleError": "该选项不能为空",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "多选"
        }
      }, {
        "ele": "uploads",
        "obj": {
          "type": "uploads",
          "icons": "",
          "config": true,
          "action": "http://workflow.test/imageupload",
          "require": true,
          "label": "文件上传",
          "maxSize": 2048,
          "value": [
            // {
            //   "name":"文件11",
            // "url":"asdadsa",
            // "size":"1kb"
            // }

          ],
          "updateType": "",
          "updateTypeList": [{
            "dKey": "1",
            "dValue": "图片类型"
          }, {
            "dKey": "2",
            "dValue": "excel类型"
          }, {
            "dKey": "3",
            "dValue": "压缩类型"
          }],
          "name": "default",
          "ruleError": "请上传图片",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "文件上传"
        }
      }, {
        "ele": "datepicker",
        "obj": {
          "type": "datepicker",
          "icons": "",
          "chooseCheck": ["date", "time"],
          "config": true,
          "label": "时间选择",
          "placeholder": "请选择日期",
          "inlineBlock": false,
          "require": true,
          "name": "default",
          "value": "",
          "valueDate": '',
          "valueTime": "",
          "ruleError": "选项不能为空",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "format": "yyyy年MM月dd日",
          "modalTitle": "时间选择"
        }
      }, {
        "ele": "datepicker",
        "obj": {
          "type": "datepicker",
          "icons": "",
          "chooseCheck": ["time"],
          "config": true,
          "label": "时间选择",
          "placeholder": "请选择日期",
          "inlineBlock": false,
          "require": true,
          "name": "default",
          "value": "",
          "valueDate": '2016-01-01',
          "valueTime": "",
          "ruleError": "选项不能为空",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "format": "yyyy年MM月dd日",
          "modalTitle": "时间选择"
        }
      }, {
        "ele": "address",
        "obj": {
          "type": "address",
          "chooseCheck": ["province", "city", "zone", 'address'],
          "icons": "",
          "config": true,
          "label": "地址",
          "placeholder": "请输入详细地址",
          "inlineBlock": false,
          "require": true,
          "multiple": false,
          "name": "default",
          "value": "你坚实的发发斯蒂芬水电费水电费说的发送到",
          "sheng": [],
          "shi": [],
          "qu": [],
          "shengValue": "",
          "shiValue": "",
          "quValue": "",
          "ruleError": "请选择并输入详细地址",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "details_address": true,
          "modalTitle": "地址"
        }
      }, {
        "ele": "address",
        "obj": {
          "type": "address",
          "chooseCheck": ["province", "city", "zone"],
          "icons": "",
          "config": true,
          "label": "地址",
          "placeholder": "请输入详细地址",
          "inlineBlock": false,
          "require": true,
          "multiple": false,
          "name": "default",
          "value": "你坚实的发发斯蒂芬水电费水电费说的发送到",
          "sheng": [],
          "shi": [],
          "qu": [],
          "shengValue": "",
          "shiValue": "",
          "quValue": "",
          "ruleError": "请选择并输入详细地址",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "details_address": true,
          "modalTitle": "地址"
        }
      }, {
        "ele": "download",
        "obj": {
          "type": "download",
          "icons": "",
          "config": true,
          "label": "文件下载",
          "placeholder": "",
          "inlineBlock": false,
          "require": false,
          "describe": "",
          "items": [{
            "label_value": 1,
            "label_name": "add-form.txt",
            "url": "/files/2018/12/18/add-form.txt",
            "size": 19880
          }, {
            "label_value": 2,
            "label_name": "chrome.exe",
            "url": "",
            "size": 1587680
          }],
          "verify": "none",
          "value": "",
          "name": "default",
          "ruleError": "该字段不能为空",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "文件下载"
        }
      }, {
        "ele": "uploadimg",
        "obj": {
          "uploadList": [],
          "type": "uploadimg",
          "icons": "",
          "lessNum": 1,
          "lessImgRequire": false,
          "config": true,
          "label": "图片上传",
          "placeholder": "",
          "inlineBlock": false,
          "require": true,
          "describe": "",
          "verify": "none",
          "value": "",
          "name": "default",
          "ruleError": "该字段不能为空",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "图片上传"
        }
      }, {
        "ele": "imgshow",
        "obj": {
          "type": "imgShow",
          "icons": "",
          "config": true,
          "label": "图片展示",
          "imgArr": [{
            "titles": "图片",
            "name": "18170527.jpeg",
            "url": "/files/2018/12/18/18170527.jpeg",
            "size": 91397,
            "status": "finished",
            "percentage": 100,
            "uid": 1545140945634
          }, {
            "titles": "图片",
            "name": "00424997424706644.jpg",
            "url": "/files/2018/12/18/00424997424706644.jpg",
            "size": 223163,
            "status": "finished",
            "percentage": 100,
            "uid": 1545140945635
          }],
          "placeholder": "",
          "inlineBlock": false,
          "require": false,
          "describe": "",
          "gradesType": "add",
          "low": 0,
          "high": 100,
          "step": 1,
          "verify": "none",
          "value": "",
          "name": "default",
          "ruleError": "该字段不能为空",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "图片展示"
        }
      }, {
        "ele": "imgcheck",
        "obj": {
          "type": "imgCheck",
          "icons": "",
          "config": true,
          "label": "图片选择",
          "placeholder": "",
          "inlineBlock": false,
          "require": true,
          "maxlen": "1",
          "minlen": 0,
          "imgArr": [{
            "titles": "图片",
            "name": "00424997424706644.jpg",
            "url": "/files/2018/12/18/00424997424706644.jpg",
            "progress": 0,
            "size": 223163,
            "labels": "图片1",
            "status": "finished",
            "percentage": 100,
            "uid": 1545140964561
          }, {
            "titles": "图片",
            "name": "00424997424706644.jpg",
            "url": "/files/2018/12/18/00424997424706644.jpg",
            "progress": 0,
            "size": 223163,
            "labels": "图片2",
            "status": "finished",
            "percentage": 100,
            "uid": 1545140964562
          }],
          "describe": "",
          "gradesType": "add",
          "low": 0,
          "high": 100,
          "step": 1,
          "verify": "none",
          "value": [],
          "name": "default",
          "ruleError": "该字段不能为空",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "图片选择"
        }
      }, {
        "ele": "selectcontact",
        "obj": {
          "type": "selectcontact",
          "icons": "",
          "config": true,
          "label": "二级下拉",
          "placeholder": "请输入详细地址",
          "inlineBlock": false,
          "require": true,
          "multiple": false,
          "name": "default",
          "value": [],
          "value1": [],
          "items": [{
            "label_value": "a1v",
            "label_name": "a1",
            "arrs": [{
              "label_value": "a1_1",
              "label_name": "a1_1"
            }, {
              "label_value": "a1_2",
              "label_name": "a1_2"
            }]
          }, {
            "label_value": "a2",
            "label_name": "a2",
            "arrs": [{
              "label_value": "a2_1",
              "label_name": "a2_1"
            }, {
              "label_value": "a2_1",
              "label_name": "a2_2"
            }]
          }],
          "two_arr": [],
          "ruleError": "请选择并输入详细地址",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "details_address": true,
          "modalTitle": "二级下拉"
        }
      }, {
        "ele": "selectteacher",
        "obj": {
          "type": "selectteacher",
          "icons": "",
          "modal": "selectTeacherForm",
          "config": true,
          "label": "选择老师",
          "placeholder": "",
          "inlineBlock": false,
          "require": true,
          "maxLength": 2000,
          "describe": "",
          "items": [{
              "checked": false,
              "departid": "iCI75juneNF8T0don22e",
              "gender": "2",
              "is_subscribe": "0",
              "join_date": "2018-05-16",
              "name": "发老师",
              "other_departid": [

              ],
              "wxuserid": "campus_8097578",
              "userid": "BfbG6RkcutMdone"
            },
            {
              "checked": false,
              "departid": "iCI75juneNF8T0don12e",
              "gender": "1",
              "is_subscribe": "0",
              "join_date": "2018-05-01",
              "name": "的老师",
              "other_departid": [

              ],
              "wxuserid": "campus_8094147",
              "userid": "Nzj8ko8fqmgdone"
            },
            {
              "checked": false,
              "departid": "iCI75juneNF8T0d11one",
              "gender": "2",
              "is_subscribe": "0",
              "join_date": "2018-05-15",
              "name": "大老师",
              "other_departid": [

              ],
              "wxuserid": "campus_8094142",
              "userid": "KQJdxmasHhUdJUdone"
            },
            {
              "checked": false,
              "departid": "iCI75ju4neNF8T0done",
              "gender": "2",
              "is_subscribe": "0",
              "join_date": "2018-05-17",
              "name": "大老师",
              "other_departid": [

              ],
              "wxuserid": "campus_8094141",
              "userid": "9D83JWptNVYdone"
            },
            {
              "checked": false,
              "departid": "iCI75j1uneNF8T0done",
              "gender": "1",
              "is_subscribe": "0",
              "join_date": "2018-05-22",
              "name": "大老师",
              "other_departid": [

              ],
              "wxuserid": "campus_8094104",
              "userid": "xmas8C8GMB4plodone"
            },
            {
              "checked": false,
              "departid": "iCI75juneNF48T0done",
              "gender": "1",
              "is_subscribe": "0",
              "join_date": "2015-01-01",
              "name": "测老师",
              "other_departid": [

              ],
              "wxuserid": "campus_8073316",
              "userid": "93cenqI7Rygdone"
            }
          ],
          "verify": "none",
          "value": "",
          "valueArr": [],
          "selObj": {},
          "name": "default",
          "ruleError": "该字段不能为空",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "选择老师"
        }


      }, {
        "ele": "selectgrade",
        "obj": {
          "config": true,
          "describe": "",
          "icons": "",
          "inlineBlock": false,
          "items": [{
              "checked": true,
              "departid": "Gsj3mxffMCwdone",
              "indeterminate": false,
              "join_year": "2017",
              "level": "6",
              "nodeKey": 4,
              "title": "测试班级",
              "wxdepartid": "45"
            },
            {
              "checked": true,
              "departid": "hHuccJElV5kdone",
              "indeterminate": false,
              "join_year": "2017",
              "level": "6",
              "nodeKey": 9,
              "title": "测试班级2",
              "wxdepartid": "79"
            },
            {
              "checked": true,
              "departid": "tAgvjune2h4BgUdone",
              "indeterminate": false,
              "join_year": "2017",
              "level": "6",
              "nodeKey": 10,
              "title": "测试班级3",
              "wxdepartid": "81"
            },
            {
              "checked": true,
              "departid": "cpXeBttIWNMdone",
              "indeterminate": false,
              "join_year": "2018",
              "level": "6",
              "nodeKey": 11,
              "title": "测试班级组织架构",
              "wxdepartid": "114"
            }
          ],
          "label": "选择班级",
          "maxLength": 2000,
          "modal": "selectGradeForm",
          "modalTitle": "选择班级",
          "name": "default",
          "placeholder": "",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "require": true,
          "ruleError": "该字段不能为空",
          "selObj": {},
          "type": "selectgrade",
          "value": "",
          "valueArr": [],
          "verify": "none",
          "visibility": true
        }
      }, {
        "ele": "selectdepartment",
        "obj": {
          "config": true,
          "describe": "",
          "icons": "",
          "inlineBlock": false,
          "items": [{
              "checked": true,
              "departid": "CYxViGqoE7sdone",
              "indeterminate": false,
              "join_year": "",
              "level": "3",
              "nodeKey": 1,
              "title": "一教",
              "wxdepartid": "31"
            },
            {
              "checked": true,
              "departid": "9yxmasD0DHI9Usdone",
              "indeterminate": false,
              "join_year": "",
              "level": "3",
              "nodeKey": 2,
              "title": "二教",
              "wxdepartid": "32"
            },
            {
              "checked": true,
              "departid": "2BW6Z1rTjUcdone",
              "indeterminate": false,
              "join_year": "",
              "level": "2",
              "nodeKey": 3,
              "title": "测试用户-老师",
              "wxdepartid": "47"
            },
            {
              "checked": true,
              "departid": "bjAyOaLCRVMdone",
              "indeterminate": false,
              "join_year": "2017",
              "level": "3",
              "nodeKey": 5,
              "title": "三教",
              "wxdepartid": "108"
            },
            {
              "checked": true,
              "departid": "Oj3lq5qU8xmasMdone",
              "indeterminate": false,
              "join_year": "2017",
              "level": "3",
              "nodeKey": 6,
              "title": "qwer2",
              "wxdepartid": "109"
            },
            {
              "checked": true,
              "departid": "8vPvPdISxPwdone",
              "indeterminate": false,
              "join_year": "2017",
              "level": "3",
              "nodeKey": 7,
              "title": "四教",
              "wxdepartid": "110"
            },
            {
              "checked": true,
              "departid": "iCI75juneNF8T0done",
              "indeterminate": false,
              "join_year": "2018",
              "level": "2",
              "nodeKey": 8,
              "title": "老师组织结构",
              "wxdepartid": "116"
            }
          ],
          "label": "选择部门",
          "maxLength": 2000,
          "modal": "selectDepartmentForm",
          "modalTitle": "选择部门",
          "name": "default",
          "placeholder": "",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "require": true,
          "ruleError": "该字段不能为空",
          "selObj": {},
          "type": "selectdepartment",
          "value": "",
          "valueArr": [],
          "verify": "none",
          "visibility": true
        }
      },
      // {
      //   "ele": "selectdepartment",
      //   "obj": {
      //     "type": "selectdepartment",
      //     "icons": "",
      //     "modal": "selectDepartmentForm",
      //     "config": true,
      //     "label": "选择部门",
      //     "placeholder": "",
      //     "inlineBlock": false,
      //     "require": true,
      //     "maxLength": 2000,
      //     "describe": "",
      //     "items": [{
      //       "children": [{
      //         "departid": "bjAyOaLCRVMdone",
      //         "join_year": "2017",
      //         "level": "3",
      //         "title": "三教",
      //         "wxdepartid": "108",
      //         "nodeKey": 5,
      //         "checked": true,
      //         "indeterminate": false
      //       }, {
      //         "departid": "Oj3lq5qU8xmasMdone",
      //         "join_year": "2017",
      //         "level": "3",
      //         "title": "qwer2",
      //         "wxdepartid": "109",
      //         "nodeKey": 6,
      //         "checked": true,
      //         "indeterminate": false
      //       }, {
      //         "departid": "8vPvPdISxPwdone",
      //         "join_year": "2017",
      //         "level": "3",
      //         "title": "四教",
      //         "wxdepartid": "110",
      //         "nodeKey": 7,
      //         "checked": true,
      //         "indeterminate": false
      //       }],
      //       "departid": "Ab8Sp7xmas6Pa0done",
      //       "join_year": "2017",
      //       "level": "2",
      //       "title": "教育部2",
      //       "wxdepartid": "107",
      //       "nodeKey": 4,
      //       "checked": true,
      //       "indeterminate": false
      //     }, {
      //       "departid": "bjAyOaLCRVMdone",
      //       "join_year": "2017",
      //       "level": "3",
      //       "title": "三教",
      //       "wxdepartid": "108",
      //       "nodeKey": 5,
      //       "checked": true,
      //       "indeterminate": false
      //     }, {
      //       "departid": "Oj3lq5qU8xmasMdone",
      //       "join_year": "2017",
      //       "level": "3",
      //       "title": "qwer2",
      //       "wxdepartid": "109",
      //       "nodeKey": 6,
      //       "checked": true,
      //       "indeterminate": false
      //     }, {
      //       "departid": "8vPvPdISxPwdone",
      //       "join_year": "2017",
      //       "level": "3",
      //       "title": "四教",
      //       "wxdepartid": "110",
      //       "nodeKey": 7,
      //       "checked": true,
      //       "indeterminate": false
      //     }, {
      //       "departid": "iCI75juneNF8T0done",
      //       "join_year": "2018",
      //       "level": "2",
      //       "title": "老师组织结构",
      //       "wxdepartid": "116",
      //       "nodeKey": 8,
      //       "checked": true,
      //       "indeterminate": false
      //     }],
      //     "verify": "none",
      //     "selObj": {},
      //     "value": "",
      //     "name": "default",
      //     "ruleError": "该字段不能为空",
      //     "relation": false,
      //     "relation_name": "",
      //     "relation_value": "",
      //     "visibility": true,
      //     "modalTitle": "选择部门"
      //   }
      // },
      {
        "ele": "slider",
        "obj": {
          "type": "slider",
          "icons": "",
          "config": true,
          "label": "手动填写分数",
          "placeholder": "",
          "inlineBlock": false,
          "require": true,
          "describe": "",
          "gradesType": "add",
          "low": 0,
          "high": 10,
          "step": 1,
          "verify": "none",
          "value": 0,
          "name": "default",
          "ruleError": "该字段不能为空",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "手动填写分数"
        }
      },
      {
        "ele": "score",
        "obj": {
          "type": "score",
          "icons": "",
          "config": true,
          "label": "勾选打分",
          "isCheck": false,
          "inlineBlock": false,
          "require": true,
          "value": "",
          "valueArr": [],
          "items": [{
            "label_value": "1",
            "label_name": "加分",
            "scoreType": "add"
          }, {
            "label_value": "2",
            "label_name": "减分",
            "scoreType": "mins"
          }],
          "name": "default",
          "ruleError": "请选择",
          "relation": false,
          "relation_name": "",
          "relation_value": "",
          "visibility": true,
          "modalTitle": "勾选打分"
        }
      }
    ]
  }
}

// 预览数据
exports.data2 = {
  state: 0,
  result: '查询成功',
  data: {
    id: {},
    "data": [{
      "ele": "imgshow",
      "obj": {
        "config": true,
        "describe": "",
        "gradesType": "add",
        "high": 100,
        "icons": "",
        "imgArr": [{
          "name": "QQ浏览器截图20180904203100.png",
          "percentage": 100,
          "size": "25.44KB",
          "status": "finished",
          "titles": "图片",
          "uid": 1545714915274,
          "url": "/files/2018/12/25/QQ浏览器截图20180904203100.png"
        }, {
          "name": "QQ浏览器截图20181010171429.png",
          "percentage": 100,
          "size": "43.45KB",
          "status": "finished",
          "titles": "图片",
          "uid": 1545714915275,
          "url": "/files/2018/12/25/QQ浏览器截图20181010171429.png"
        }],
        "inlineBlock": false,
        "label": "图片展示",
        "low": 0,
        "modalTitle": "图片展示",
        "name": "default",
        "placeholder": "",
        "relation": false,
        "relation_name": "",
        "relation_value": "",
        "require": false,
        "ruleError": "该字段不能为空",
        "step": 1,
        "type": "imgShow",
        "value": "",
        "verify": "none",
        "visibility": true
      }
    }, {
      "ele": "selectstudent",
      "obj": {
        "config": true,
        "describe": "",
        "icons": "",
        "inlineBlock": false,
        "items": [{
          "checked": true,
          "departid": "hHuccJElV5kdone",
          "indeterminate": false,
          "join_year": "2017",
          "level": "6",
          "nodeKey": 9,
          "title": "测试班级2",
          "wxdepartid": "79"
        }, {
          "checked": true,
          "departid": "tAgvjune2h4BgUdone",
          "indeterminate": false,
          "join_year": "2017",
          "level": "6",
          "nodeKey": 10,
          "title": "测试班级3",
          "wxdepartid": "81"
        }],
        "label": "选择学生",
        "maxLength": 2000,
        "modal": "selectStudentForm",
        "modalTitle": "选择学生",
        "name": "default",
        "placeholder": "",
        "relation": false,
        "relation_name": "",
        "relation_value": "",
        "require": true,
        "ruleError": "该字段不能为空",
        "selArr": [],
        "selObj": {},
        "type": "selectstudent",
        "value": "",
        "valueArr": [],
        "verify": "none",
        "visibility": true
      }
    }, {
      "ele": "selectteacher",
      "obj": {
        "config": true,
        "describe": "",
        "icons": "",
        "inlineBlock": false,
        "items": [],
        "label": "选择老师",
        "maxLength": 2000,
        "modal": "selectTeacherForm",
        "modalTitle": "选择老师",
        "name": "default",
        "placeholder": "",
        "relation": false,
        "relation_name": "",
        "relation_value": "",
        "require": true,
        "ruleError": "该字段不能为空",
        "selObj": {},
        "type": "selectteacher",
        "value": "",
        "valueArr": [],
        "verify": "none",
        "visibility": true
      }
    }],
    "describe": "这个是一个表单描述",
    "title": "这是一个表单标题"
  }
}
