import api from '../../../../../common/js/index.js'
export default (_self, h) => {
    let icons = []
     // 删除按钮
  icons.push(h('Icon', {
    style: {
        'font-size': '18px',
        'color': '#c1c1c1',
        'margin-bottom': '4px',
        'margin-right': '5px',
        'cursor': 'pointer  '
    },
    props: {
      type: 'ios-add-circle-outline'
    }
  }));

  icons.push(h('span', '下载文件'))
    return [
        h("div",_self.obj.items.map(function(item,index){
            return [
                h("p",{
                    style: {
                        width: '100%',
                        height: '38px',
                        'line-height':'38px',
                        background: '#FFFFFF',
                        border: '1px dashed #C1C1C1',
                        'border-radius': '2px',
                        'text-indent': '10px',
                        cursor: 'pointer',
                        'margin':'2px 0',
                        'background-image':"url(http://47.93.156.129:8848/web/images/down_ico_dis.png)",
                        'background-repeat':'no-repeat',
                        'background-position':'95% 10px',

                    },
                    props: {

                    }
                },item.label_name)
            ]
        }), icons)
    ];
};


export let downloadConf = {
    // 对应数据库内类型
    type: 'download',
      //  图标
    icons:require("@/assets/wenjianxiazai_nor.png"),
    activeIcons:require("@/assets/wenjianxiazai_pre.png"),
    // 是否可配置
    config: true,
    // 控件左侧label内容
    label: '文件下载',
    placeholder: '',
    // 是否显示行内元素
    inlineBlock: false,
    // 是否必填
    require: false,
    // 最大长度
    describe: '',
    // 选项内数据
    items: [
        // {
        //     "label_value": '1',
        //     "label_name": "文件1",
        //     "url":"",
        //     "size":"10kb"
        // }
    ],
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
