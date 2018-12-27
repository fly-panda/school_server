import add from "@/assets/icon-add.png";
import jian from "@/assets/icon-jian.png";
export default (_self, h) => {
    
   let control = [
        h("span", {
            style: {
                position: 'absolute',
                top: '-5px',
                'margin-right': '10px'
            }
        },_self.obj.low),
        h("vueSlider", {
            style: {
                display: 'inline-block',
                'margin-left': '21px'
            },
            props: {
                value: _self.obj.value,// 值
                width: "80%",// 组件宽度
                height: 6,// 组件高度
                direction: "horizontal",// 组件方向
                dotSize: 16,// 滑块大小
                eventType: "auto",// 事件类型
                min: _self.obj.low,// 最小值
                max: _self.obj.high,// 最大值
                interval: _self.obj.step,// 分段间隔
                startAnimation: false,// 是否开启初始动画
                tooltipMerge: true,// 
                processDragable: false,// 进度条是否可拖拽（只限范围模式）
                minRange: null,// 最小范围
                maxRange: null,// 最大范围
                fixed: false,// 是否固定距离
                debug: false,// 是否为开发环境（打印错误）
                disabled: false,// 是否不可用
                show: true,// 是否显示组件
                enableCross: true,// 在范围模式中，是否允许交叉
                realTime: false,// 是否实时计算组件布局
                tooltip: "always",// 是否显示工具提示
                clickable: true,// 是否可点击的
                tooltipDir: "bottom",// 工具提示方向
                piecewise: false,// 是否显示分段样式
                lazy: false,// 是否在拖拽结束后同步值
                useKeyboard: true,// 是否使用键盘控制
                reverse: false,// 是否反向组件
                speed: 0.5,// 动画速度
            },
            on: {
                "on-change": function (val) {
                    if (!_self.obj.name) {
                        return false;
                    }

                    _self.obj.value = event.currentTarget.value;
                    // _self.obj.value = val.currentTarget.value;
                    _self.$emit('handleChangeVal', val.currentTarget.value)
                },
                "on-input": function (val) {
                    if (!_self.obj.name) {
                        return false;
                    }

                    _self.obj.value = event.currentTarget.value;
                    // _self.obj.value = val.currentTarget.value;
                    _self.$emit('handleChangeVal', val.currentTarget.value)
                },
               
            }
        },),
        h("span", {
            style: {
                position: 'absolute',
                top: '-5px'
            }
        },_self.obj.high),
        h("div", {
            style: {
                position: 'absolute',
                width:"40px",
                height:"40px",
                'background-image':`url(${jian})`,
                'background-size':"100%",
                'background-repeat':"no-repeat",
                "font-size":"30px",
                bottom: '0',
                left:"40%"
            },
            on: {
                "click": function (val) {
                   console.log("-",_self.obj.step)
                },
               
            }
        },""),
        h("div", {
            style: {
                position: 'absolute',
                width:"40px",
                height:"40px",
                'background-image':`url(${add})`,
                'background-size':"100%",
                'background-repeat':"no-repeat",
                "font-size":"30px",
                bottom: '0',
                right:"40%"
            },
            on: {
                "click": function (val) {
                   console.log("+",_self.obj.step)
                },
               
            }
        },""),
    ];

    return  [ h("div", {
        style: {
            position: 'relative',
            height:"100px"
        }
    },control)]
    
};


export let sliderConf = {
    // 对应数据库内类型
    type: 'slider',
                //  图标
    icons:require("@/assets/shoudong_nor.png"),
    // 是否可配置
    config: true,
    // 控件左侧label内容
    label: '手动填写分数',
    placeholder: '',
    // 是否显示行内元素
    inlineBlock: false,
    // 是否必填
    require: true,
    // 最大长度
    describe: '',
    gradesType: 'add',
    low: 0,
    high: 100,
    step: 1,
    verify: 'none',
    value: 0,
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
