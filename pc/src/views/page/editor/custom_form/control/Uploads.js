export default (_self, h) => {
        // h('uploadCustom', {
        //   props: {
        //     multiple: _self.obj.multiple || false,
        //     type: 'drag', //支持拖拽
        //     action: _self.obj.action || "/imageupload",
        //     'max-size': _self.obj.maxSize || 2048,
        //     defaultList: _self.obj.value,
        //     name: 'photo'
        //   },
        //   on: {
        //     handleUploadsValue(arr) {
        //       if (!_self.obj.name) {
        //         return false;
        //       }
        //       _self.obj.value = arr;
        //       _self.$emit('handleChangeVal', arr)
        //     }
        //   }
        // })
        let icons = []
        //      // 删除按钮
        icons.push(h('Icon', {
            style: {
                'font-size': '40px',
                'color': '#C1C1C1',
                'margin-bottom': '4px',
                'margin-right': '5px',
                'cursor': 'pointer  '
            },
            
            props: {
                type: 'md-cloud-upload'
            }
        }));

        icons.push()
        return [
            h("div", {
                style: {
                    width: '90px',
                    height: '90px',
                    background: '#FFFFFF',
                    border: '1px dashed #C1C1C1',
                    'border-radius': '2px',
                    'text-indent': '10px',
                    cursor: 'pointer',
                    display: 'flex',
                    'align-items': 'center',
                    'justify-content': 'center'
                },
                props: {

                }
            }, icons),
            h('div', '请选择上传的文件')
        ];
}


export const uploadsConf = {
    // 对应数据库内类型
    type: 'uploads',
    // 是否可配置
    config: true,
    // 上传地址
    action: 'http://workflow.test/imageupload',
    // 是否必填
    require: true,
    // 控件左侧label内容
    label: '文件上传',
    // 上传文件最大限制
    maxSize: 2048,
    // 绑定的值
    value: [],
    updateType: '',
    updateTypeList: [{
        dKey: '1',
        dValue: '图片类型'
    }, {
        dKey: '2',
        dValue: 'excel类型'
    }, {
        dKey: '3',
        dValue: '压缩类型'
    }],
    // 表单name
    name: 'default',
    // 验证错误提示信息
    ruleError: '请上传图片',
    // 是否关联字段
    relation: false,
    // 关联字段name
    relation_name: '',
    // 关联字段value
    relation_value: '',
    // 是否被渲染
    visibility: true
}
