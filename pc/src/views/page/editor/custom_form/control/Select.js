export default (_self, h) => {
  return [
    h(
      "Select", {
        props: {
          placeholder: _self.obj.placeholder || "这是一个下拉选项框",
          value: _self.obj.value || ''
        },
        on: {
          'on-change' (value) {
            if (!_self.obj.name) {
              return false;
            }
            _self.obj.value = value;
            _self.$emit('handleChangeVal', value)
          }
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
    )
  ];
};

export let selectConf = {
  // 对应数据库内类型
  type: 'select',
      //  图标
  icons:require("@/assets/xialakuang_nor.png"),
  activeIcons:require("@/assets/xialakuang_ico_pre.png"),
  // 是否可配置
  config: true,
  // 控件左侧label内容
  label: '下拉框',
  placeholder: '',
  // 是否显示行内元素
  inlineBlock: false,
  // 是否必填
  require: true,
  // 选项内数据
  items: [{
    "label_value": '',
    "label_name": ''
    }],
  // 绑定的值
  value: '',
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
