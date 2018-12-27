<template>
<div class="my-duplicate-container">

   <div class="duplicate-title">
        <p class='title-txt'><span class="back-cls" @click="backFun"><Icon type="ios-arrow-back" /></span>{{title}}</p>
       
    </div>
    <div class="duplicate-content" :style="{height:fullHeight.height}">
        <div class="previewContent">
            <!-- <ExcelTable/> -->
                <div class="searchContainer">
                    <Input suffix="ios-search" placeholder="搜索" size="small" style="width: auto" />
                    <span  @click="exportData(1)">导出Excel</span>
                </div>
                <Table border :columns="columns8" :data="data7" size="small" ref="table"></Table>
                <div class="page-view">
                    <Page prev-text="上一页" next-text="下一页" :current="currentPage" :total="totals" @on-change="changeFun"/>
                </div>
        </div>
    </div>
</div>
</template>

<script>
import ExcelTable from '_c/excel_table'
import Axios from 'axios'
import datas from "_c/mock.js"
import formDetail from "_c/formDetail.vue";

export default {
    components: {
        ExcelTable,
        formDetail
    },
    data() {
        return {
            fullHeight:{// 动态获取屏幕高度
                height: (document.documentElement.clientHeight-124)+"px"
            },
            title: '一年级校服尺寸收集表',
            previewObj:{},
            currentPage:1,
                totals:104,
                columns8: [
                    {
                        "title": "序号",
                        "key": "name",
                        width:100,
                    },
                    {
                        "title": "提交人",
                        "key": "weak"
                    },
                    {
                        "title": "性别",
                        "key": "signin"
                    },
                    {
                        "title": "尺寸",
                        "key": "click"
                    },
                    {
                        "title": "图片选择",
                        "key": "active"
                    },
                    {
                        "title": "附件",
                        "key": "day7"
                    },
                    {
                        "title": "未命名",
                        "key": "day30"
                    },
                    // {
                    //     "title": "操作",
                    //     "key": "tomorrow",
                    //     width:160,
                    //     render: (h, params) => {
                    //         return h('div', [
                    //             h('Button', {
                    //                 props: {
                    //                     type: 'primary',
                    //                     size: 'small'
                    //                 },
                    //                 style: {
                    //                     marginRight: '5px'
                    //                 },
                    //                 on: {
                    //                     click: () => {
                    //                         console.log(params)
                    //                     }
                    //                 }
                    //             }, 'View'),
                    //             h('Button', {
                    //                 props: {
                    //                     type: 'error',
                    //                     size: 'small'
                    //                 },
                    //                 on: {
                    //                     click: () => {
                    //                         console.log(params)
                    //                     }
                    //                 }
                    //             }, 'Delete')
                    //         ]);
                    //     }
                    // }
                    
                ],
                data7: [
                    {
                        "name": "Name1",
                        "fav": 0,
                        "show": 7302,
                        "weak": 5627,
                        "signin": 1563,
                        "click": 4254,
                        "active": 1438,
                        "day7": 274,
                        "day30": 285,
                        "tomorrow": 1727,
                         
                    },
                    {
                        "name": "Name2",
                        "fav": 0,
                        "show": 4720,
                        "weak": 4086,
                        "signin": 3792,
                        "click": 8690,
                        "active": 8470,
                        "day7": 8172,
                        "day30": 5197,
                        "tomorrow": 1684,
                    },
                    {
                        "name": "Name3",
                        "fav": 0,
                        "show": 7181,
                        "weak": 8007,
                        "signin": 8477,
                        "click": 1879,
                        "active": 16,
                        "day7": 2249,
                        "day30": 3450,
                        "tomorrow": 377,
                    },
                    {
                        "name": "Name4",
                        "fav": 0,
                        "show": 9911,
                        "weak": 8976,
                        "signin": 8807,
                        "click": 8050,
                        "active": 7668,
                        "day7": 1547,
                        "day30": 2357,
                        "tomorrow": 7278,
                    },
                    {
                        "name": "Name5",
                        "fav": 0,
                        "show": 934,
                        "weak": 1394,
                        "signin": 6463,
                        "click": 5278,
                        "active": 9256,
                        "day7": 209,
                        "day30": 3563,
                        "tomorrow": 8285,
                    },
                    {
                        "name": "Name6",
                        "fav": 0,
                        "show": 6856,
                        "weak": 1608,
                        "signin": 457,
                        "click": 4949,
                        "active": 2909,
                        "day7": 4525,
                        "day30": 6171,
                        "tomorrow": 1920
                    },
                    {
                        "name": "Name7",
                        "fav": 0,
                        "show": 5107,
                        "weak": 6407,
                        "signin": 4166,
                        "click": 7970,
                        "active": 1002,
                        "day7": 8701,
                        "day30": 9040,
                        "tomorrow": 7632,
                    },
                    {
                        "name": "Name8",
                        "fav": 0,
                        "show": 862,
                        "weak": 6520,
                        "signin": 6696,
                        "click": 3209,
                        "active": 6801,
                        "day7": 6364,
                        "day30": 6850,
                        "tomorrow": 9408,
                    }
                ],
                lists:[
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                    {title:"尺寸",cont:"S码"},
                ]
          
        }
    },
    mounted(){
        // this.previewObj=this.$api.sGetObject("previewObj");

        this.previewObj=datas.data;
    },
    methods: {
        del () {
            this.$Modal.confirm({
                title: '确认要删除？',
                content: '',
                onOk: () => {
                    this.$Message.info('删除成功');
                },
                onCancel: () => {
                    // this.$Message.info('Clicked cancel');
                }
            });
        },
        backFun(){
            this.$router.go(-1);
        },
        changeFun(page){
            console.log(page)
        }
    }
}
</script>

<style lang='less' scoped >
.searchContainer{
    height: 40px;
    background: #f6f6f7;
    border: 1px solid #e2e2e2;
    border-bottom: none;
    display: flex;
    justify-content: flex-end;
    align-items: center; 
    padding: 0 20px;
    span{
        cursor: pointer;
        color: #63a854;
        margin-left: 15px;
    }
}
.page-view{
    text-align:right;
    padding:10px ;
}
.center-cls{
    text-align:center;
}
.titles{
    padding: 58px 66px 20px 66px;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #333333;
    letter-spacing: 0;
}
.my-duplicate-container {
    height: 100%;
    .duplicate-title{
        display: flex;
        height: 60px;
        background: #fff;
        padding: 0 215px;
        line-height: 60px;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #888888;
        letter-spacing: 0.95px;
        .title-txt{
            flex:1;
        }
        .btn-view{
            button{
                margin:0 6px;
            }
        }
        .new-form{
            display:inline-block;
            height: 21px;
            vertical-align: middle;
            cursor: pointer;
        }
        .back-cls{
            color:#686868;
            font-size: 24px;
            margin-right: 10px;
            cursor: pointer;
        }
    }
    .duplicate-content {
        width: 100%;
        // height: 100%;
        padding: 20px 215px;
        
        overflow-y: auto;
        .nopass{
            background: #fff;
            padding:20px 30px;
            line-height: 20px;
            margin-bottom: 20px;
            font-size: 15px;
        }
        .contentTop{
            height: 160px;
            display: flex;
            justify-content: space-between;
            .formMsg{
                width: 28%;
                height: 140px;
                background: #fff;
                box-shadow: 3px 3px 3px #e2e2e2;
                padding: 0 10px;
                .title{
                    font-weight: 700;
                    margin-top: 10px; 
                    margin-left: 10px; 

                    font-size: 16px;
                    color: #363636;
                    letter-spacing: -0.56px;
                    line-height: 30px;
                }
                .content{
                    height: 84px;
                    margin-left: 10px;
                    margin-top: 8px;
                    display: flex;
                    flex-direction: column;
                    .item{
                        flex: 1;
                        display: flex;
                        // flex-direction: row;
                        justify-content: space-between;
                        font-size: 14px;
                        line-height:14px;
                        color: #363636;
                        letter-spacing: -0.49px;
                        margin-bottom: 13px;
                    }
                }
            }
            .submitContainer{
                width: 20%;
                height: 140px;
                background: #fff;
                box-shadow: 3px 3px 3px #e2e2e2;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .number{
                    font-size: 48px;
                    color: #363636;
                    letter-spacing: 1.11px;
                    line-height: 48px;
    
                }
                .text{
                    font-size: 14px;
                    color: #363636;
                    letter-spacing: -0.49px;
                    line-height: 30px;
                }
            }
        }
        
    }
}

</style>
<style>
.ivu-modal-confirm{
    text-align: center!important;
    padding: 10px;
}
.ivu-modal-confirm-footer{
    text-align: center;
}
</style>
