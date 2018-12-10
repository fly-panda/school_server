import area from '../config/area'
export default (_self, h) => {
   let control = []
    if(_self.obj.chooseCheck.includes('province')){
        control.push( h(
            "Select", {
                style: {
                    width: '30%',
                    'margin-right': '15px'
                },
                props: {
                    placeholder: "省/直辖市",
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
    }
    if(_self.obj.chooseCheck.includes('city')){
        control.push(  h(
            "Select", {
                style: {
                    width: '20%',
                    'margin-right': '15px'
                },
                props: {
                    placeholder: "市",
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
    }
    if(_self.obj.chooseCheck.includes('zone')){
        control.push(  h(
            "Select", {
                style: {
                    width: '20%'
                },
                props: {
                    placeholder: "区",
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
    }
    if(_self.obj.chooseCheck.includes('detail')){
        if(control.length > 0){
            control.push(<br/>)
        }
        control.push(h("Input", {
            props: {
                placeholder: _self.obj.placeholder || "请输入详细地址",
                ref: 'details_address',
                value: (_self.obj.value[3] || {})
                    .name
            },
            style: {
                width: 'auto',
                display: !_self.obj.name ? 'none' : 'inline-block',
                'margin-top': '10px',
                'min-width': '300px'
            },
            on: {
                "on-change": function (val) {
                    if (!_self.obj.name) {
                        return false;
                    }
                    let temp_data = _self.obj.value.slice(0, 3);
                    _self.obj.value = temp_data.concat(val.currentTarget.value);
                    _self.$emit('handleChangeVal', _self.obj.value)
                }
            }
        }))
    }
    if (!_self.obj.details_address) {
        control.splice(1, 1);
    }
    return control;
}
export let addressConf = {
    // 对应数据库内类型
    type: 'address',
    chooseCheck: ['province', 'city', 'zone', 'detail'],
    // 是否可配置
    config: true,
    // 控件左侧label内容
    label: '详细地址',
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
