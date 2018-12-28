export default (_self, h) => {
    let radioList = _self.obj.items.map(v => {
        return h("Radio", {
            props: {
                label: v.label_value
            }
        }, v.label_name)
    })
    if (_self.obj.hasOther) {
        radioList.push([
            h("Radio", {
                props: {
                    label: '其他'
                }
            }),  h("Input", {
                style: {
                    width: '50%'
                }
            })
        ])
    }

    return [
        h("RadioGroup", {
            class: {
                positionColumn: true
            },
            props: {
                value: _self.obj.value || "-1"
            },
            on: {
                'on-change'(value) {
                    if (!_self.obj.name) {
                        return false;
                    }
                    _self.obj = Object.assign(_self.obj, {
                        value
                    });
                    _self.$emit('handleChangeVal', value)
                }
            }
        }, radioList)
    ];
};

export let radioConf = {
    // 对应数据库内类型
    type: 'radio',
        //  图标
    icons:require("@/assets/danxuan_nor.png"),
    activeIcons:require("@/assets/danxuan_pre.png"),
    // 是否可配置
    config: true,
    // 控件左侧label内容
    label: '单选',
    hasOther: false,
    // 是否显示行内元素
    inlineBlock: false,
    // 是否必填
    require: true,
    // 绑定的值
    value: '',
    otherValue:"",
    // 选项内数据
    items: [{
        "label_value": "1",
        "label_name": "单选框1"
    }, {
        "label_value": "2",
        "label_name": "单选框2"
    }],
    // 表单name
    name: 'default',
    // 验证错误提示信息
    ruleError: '请选择',
    // 是否关联字段
    relation: false,
    // 关联字段name
    relation_name: '',
    // 关联字段value
    relation_value: '',
    // 是否被渲染
    visibility: true
}
