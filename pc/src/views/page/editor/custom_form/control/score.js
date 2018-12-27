export default (_self, h) => {

    if (_self.obj.isCheck) {
        let checkBoxList = _self.obj.items.map(v => {
            return h("Checkbox", {
                props: {
                    label: v.label_value
                }
            }, v.label_name+"("+(v.scoreType=='add'?'+':'-')+v.label_value+")")
        })
        return [
            h("CheckboxGroup", {
                class: {
                    positionColumn: true
                },
                props: {
                    value: _self.obj.value || []
                },
                on: {
                    // 'on-change'(arr) {
                    //     if (!_self.obj.name) {
                    //         return false;
                    //     }
                    //     _self.obj.value = arr;
                    //     _self.$emit('handleChangeVal', arr)
                    // }
                }
            }, checkBoxList)
        ];
    } else {
        let radioList = _self.obj.items.map(v => {
            return h("Radio", {
                props: {
                    label: v.label_value
                }
            }, v.label_name+"("+(v.scoreType=='add'?'+':'-')+v.label_value+")")
        })
        return [
            h("RadioGroup", {
                class: {
                    positionColumn: true
                },
                props: {
                    value: _self.obj.value || "-1"
                },
                on: {
                    // 'on-change'(value) {
                    //     if (!_self.obj.name) {
                    //         return false;
                    //     }
                    //     _self.obj = Object.assign(_self.obj, {
                    //         value
                    //     });
                    //     _self.$emit('handleChangeVal', value)
                    // }
                }
            }, radioList)
        ];
    }

};

export let scoreConf = {
    // 对应数据库内类型
    type: 'score',
        //  图标
    icons:require("@/assets/gouxuandafen_nor.png"),
    // 是否可配置
    config: true,
    // 控件左侧label内容
    label: '勾选打分',
    isCheck: false,
    // 是否显示行内元素
    inlineBlock: false,
    // 是否必填
    require: true,
    // 绑定的值
    value: "",
    valueArr:[],
    // 选项内数据
    items: [{
        "label_value": "1",
        "label_name": "选项",
        'scoreType': 'add',
    }, {
        "label_value": "2",
        "label_name": "选项",
        'scoreType': 'mins'
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
