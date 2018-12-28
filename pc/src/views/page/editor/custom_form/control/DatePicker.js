import moment from 'moment';
export default (_self, h) => {
    let control = []
    if(_self.obj.chooseCheck.includes('date')){
        control.push( h(
            "Select", {
                style: {
                    width: '30%',
                    'margin-right': '15px'
                },
                props: {
                    placeholder: "请选择日期",
                    disabled: true,
                    value: _self.obj.value || ''
                },
                on: {

                }
            }
            // _self.obj.items.map(v => {
            //     return h(
            //         "Option", {
            //             props: {
            //                 value: "" + v.label_value
            //             },
            //         },
            //         v.label_name
            //     );
            // })
        ))
    }
    if(_self.obj.chooseCheck.includes('time')){
        control.push(  h(
            "Select", {
                style: {
                    width: '20%',
                    'margin-right': '15px'
                },
                props: {
                    disabled: true,
                    placeholder: "请选择时间",
                    value: _self.obj.value || ''
                },
                on: {

                }
            }
            // _self.obj.items.map(v => {
            //     return h(
            //         "Option", {
            //             props: {
            //                 value: "" + v.label_value
            //             },
            //         },
            //         v.label_name
            //     );
            // })
        ))
    }
    return control;
//   return [
//     h('DatePicker', {
//       props: {
//         placeholder: _self.obj.placeholder || (_self.obj.name ? "" : "请选择日期"),
//         type: (!_self.obj.format || _self.obj.format == 'yyyy年MM月dd日') ? 'date' : 'datetime',
//         format: _self.obj.format || 'yyyy年MM月dd日',
//         value: _self.obj.value
//       },
//       on: {
//         "on-change" (arr) {
//           if (!_self.obj.name) {
//             return false;
//           }
//           _self.obj.value = arr;
//           _self.$emit('handleChangeVal', arr)
//         }
//       }
//     })
//   ]
}


export let datePickerConf = {
  // 对应数据库内类型
  type: 'datepicker',
  //  图标
  icons:require("@/assets/shoudong_nor.png"),
  activeIcons:require("@/assets/shoudongdafen_pre.png"),
  chooseCheck: ['date', 'time'],
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '时间选择',
  placeholder: '请选择日期',
  // 是否显示行内元素
  inlineBlock: false,
  // 是否必填
  require: true,
  // 表单name
  name: 'default',
  // 绑定的值
  value: "",
  valueDate:"",
  valueTime:"",
  // 验证错误提示信息
  ruleError: '选项不能为空',
  // 是否关联字段
  relation: false,
  // 关联字段name
  relation_name: '',
  // 关联字段value
  relation_value: '',
  // 是否被渲染
  visibility: true,
  // 是否需要时分
  format: 'yyyy年MM月dd日'
}
