export default (_self, h) => {
    let icons = []
     // 删除按钮
//   icons.push(h('Icon', {
//     style: {
//         'font-size': '18px',
//         'color': '#c1c1c1',
//         'margin-bottom': '4px',
//         'margin-right': '5px',
//         'cursor': 'pointer  '
//     },
//     props: {
//       type: 'ios-add-circle-outline'
//     }
//   }));

  icons.push(h('span', '点击选择老师'))
    return [
        h("div", {
            style: {
                width: '142px',
                height: '28px',
                'line-height': '28px',
                background: '#FFFFFF',
                border: '1px solid #C1C1C1',
                color: '#C1C1C1',
                'border-radius': '2px',
                'text-align': 'center',
                cursor: 'pointer'
            },
            props: {
             
            }
        }, icons)
    ];
};


export let selectTeacherConf = {
    // 对应数据库内类型
    type: 'selectteacher',
                //  图标
    icons:require("@/assets/laoshi_nor.png"),
    activeIcons:require("@/assets/xuanzelaoshi_pre.png"),
    modal: 'selectTeacherForm',
    // 是否可配置
    config: true,
    // 控件左侧label内容
    label: '选择老师',
    placeholder: '',
    // 是否显示行内元素
    inlineBlock: false,
    // 是否必填
    require: true,
    // 最大长度
    maxLength: 2000,
    describe: '',
    // 选项内数据
    items: [{
    }],
    verify: 'none',
    value: '',
    valueArr:[],
    selObj:{},
    // 表单name
    name: 'default',
    // 验证错误提示信息
    ruleError: '该字段不能为空',
    // 是否关联字段
    relation: false,
    // 关联字段name
    relation_name: '',
    // 关联字段value
    relation_value: '',
    // 是否被渲染
    visibility: true
}
