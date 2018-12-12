import area from '../config/area'
export default (_self, h) => {
    let control = []
    control.push(h(
        "Select", {
            style: {
                width: '30%',
                'margin-right': '15px'
            },
            props: {
                placeholder: "",
                value: _self.obj.value || ''
            },
            on: {

            }
        },
        _self.obj.items.map(v => {
            return h(
                "Option", {
                    props: {
                        value: "" + v.label_value
                    },
                },
                v.label_name
            );
        })
    ))
    control.push(h(
        "Select", {
            style: {
                width: '20%',
                'margin-right': '15px'
            },
            props: {
                placeholder: "",
                value: _self.obj.value || ''
            },
            on: {

            }
        },
        _self.obj.items.map(v => {
            return h(
                "Option", {
                    props: {
                        value: "" + v.label_value
                    },
                },
                v.label_name
            );
        })
    ))
    return control;
}
export let selectContactConf = {
    // 对应数据库内类型
    type: 'selectcontact',
        //  图标
  icons:require("@/assets/erjixiala_nor.png"),
    // 是否可配置
    config: true,
    // 控件左侧label内容
    label: '二级下拉',
    placeholder: '请输入详细地址',
    // 是否显示行内元素
    inlineBlock: false,
    // 是否必填
    require: true,
    // 是否多选
    multiple: false,
    // 表单name
    name: 'default',
    // 绑定的值
    value: [],
    items: [{
        "label_value": 'a',
        "label_name": 'v'
    }],
    // 验证错误提示信息
    ruleError: '请选择并输入详细地址',
    // 是否关联字段
    relation: false,
    // 关联字段name
    relation_name: '',
    // 关联字段value
    relation_value: '',
    // 是否被渲染
    visibility: true,
    // 是否需要详细地址
    details_address: true
}
