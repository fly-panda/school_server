
{
  
}
export default (_self, h) => {
return [
    h("imgShow", {
        props: {
            isCheck: false,
            defaultList:_self.obj.imgArr
        },
        on: {
        }
    })
];
};


export let imgShowConf = {
// 对应数据库内类型
type: 'imgShow',
  //  图标
icons:require("@/assets/tupianzhanshi_nor.png"),
activeIcons:require("@/assets/tupainzhanshi_pre.png"),
// 是否可配置
config: true,
// 控件左侧label内容
label: '图片展示',//图片展示
imgArr:[

],
placeholder: '',
// 是否显示行内元素
inlineBlock: false,
// 是否必填
require: false,
// 最大长度
describe: '',
gradesType: 'add',
low: 0,
high: 100,
step: 1,
verify: 'none',
value: '',
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
