<template>
<div style="height: 400px;">
    <div class="searchContainer">
        <Input suffix="ios-search" placeholder="搜索" size="small" style="width: auto" />
        <span  @click="exportData(1)">导出Excel</span>
    </div>
    <Table border @on-row-click="rowClick" :columns="columns8" :data="data7" size="small" ref="table"></Table>
    <div class="page-view">
        <Page prev-text="上一页" next-text="下一页" :page-size="pagesize" :current="currentPage" :total="totals" @on-change="changeFun" :show-total="showTotal"/>
    </div>
    <!-- <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon> Export source data</Button>
    <Button type="primary" size="large" @click="exportData(2)"><Icon type="ios-download-outline"></Icon> Export sorting and filtered data</Button>
    <Button type="primary" size="large" @click="exportData(3)"><Icon type="ios-download-outline"></Icon> Export custom data</Button> -->
    <Modal v-model="modals" width="855">
        <p slot="header">
            <span>header</span>
        </p>
        <div class="model-content">
            <div class="left-cls">
                <h3>一年级校服尺寸收集表</h3>
                <p class='line-cls'></p>
                <ul class="list-cls">
                    <li v-for="(item,index) in lists">
                        <p class="num">{{index+1}}. {{item.title}}</p>
                        <p class="cont">{{item.cont}}</p>
                    </li>
                </ul>
                <div class="prev-next">
                    <p @click="prevFun"><Icon type="ios-arrow-back" /></p>
                    <p @click="nextFun"><Icon type="ios-arrow-forward" /></p>
                </div>
            </div>
            <div class="right-cls">
                <ul>
                    <li>
                        <span>序号</span>
                        <span>1</span>
                    </li>
                    <li>
                        <span>提交时间</span>
                        <span>2018-11-11 18:00:01</span>
                    </li>
                    <li>
                        <span>提交人</span>
                        <span>田莎莎</span>
                    </li>
                </ul>
                <div class="form-view">
                    <p>
                        <Button @click="passFun" type="success">合格</Button>
                        <Button @click="nopassFun" type="primary" :disabled="reason.length==0">不合格</Button>
                    </p>
                    <textarea class="txt-cls" placeholder="请输入驳回理由" v-model="reason"></textarea>    
                </div>
            </div>
        </div>
        <!-- 弹框底部占位 -->
        <div slot="footer">
            <Button type="error" size="large" long >footer</Button>
        </div>
    </Modal>
</div>

</template>
<script>
    // let imgs=require("@/assert/xiazai_ico.png");
    export default {
        data () {
            return {
                modals: false,
                showTotal:true,
                taskid:"",
                reason:"",
                status:0,
                currentPage:1,
                totals:0,
                pagesize:10,
                columns8: [
                    // {
                    //     "title": "序号",
                    //     "key": "value0"
                    // },
                    // {
                    //     "title": "提交人",
                    //     "key": "value1"
                    // },
                    // {
                    //     "title": "性别",
                    //     "key": "signin"
                    // },
                    // {
                    //     "title": "尺寸",
                    //     "key": "click"
                    // },
                    // {
                    //     "title": "图片选择",
                    //     "key": "active"
                    // },
                    // {
                    //     "title": "附件",
                    //     "key": "day7"
                    // },
                    // {
                    //     "title": "未命名",
                    //     "key": "day30"
                    // },
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
                   
                    // {
                    //     "name": "Name1",
                    //     "fav": 0,
                    //     "show": 7302,
                    //     "weak": 5627,
                    //     "signin": 1563,
                    //     "click": 4254,
                    //     "active": 1438,
                    //     "day7": 274,
                    //     "day30": 285,
                    //     "tomorrow": 1727,
                         
                    // },
                    // {
                    //     "name": "Name2",
                    //     "fav": 0,
                    //     "show": 4720,
                    //     "weak": 4086,
                    //     "signin": 3792,
                    //     "click": 8690,
                    //     "active": 8470,
                    //     "day7": 8172,
                    //     "day30": 5197,
                    //     "tomorrow": 1684,
                    // },
                    // {
                    //     "name": "Name3",
                    //     "fav": 0,
                    //     "show": 7181,
                    //     "weak": 8007,
                    //     "signin": 8477,
                    //     "click": 1879,
                    //     "active": 16,
                    //     "day7": 2249,
                    //     "day30": 3450,
                    //     "tomorrow": 377,
                    // },
                    // {
                    //     "name": "Name4",
                    //     "fav": 0,
                    //     "show": 9911,
                    //     "weak": 8976,
                    //     "signin": 8807,
                    //     "click": 8050,
                    //     "active": 7668,
                    //     "day7": 1547,
                    //     "day30": 2357,
                    //     "tomorrow": 7278,
                    // },
                    // {
                    //     "name": "Name5",
                    //     "fav": 0,
                    //     "show": 934,
                    //     "weak": 1394,
                    //     "signin": 6463,
                    //     "click": 5278,
                    //     "active": 9256,
                    //     "day7": 209,
                    //     "day30": 3563,
                    //     "tomorrow": 8285,
                    // },
                    // {
                    //     "name": "Name6",
                    //     "fav": 0,
                    //     "show": 6856,
                    //     "weak": 1608,
                    //     "signin": 457,
                    //     "click": 4949,
                    //     "active": 2909,
                    //     "day7": 4525,
                    //     "day30": 6171,
                    //     "tomorrow": 1920
                    // },
                    // {
                    //     "name": "Name7",
                    //     "fav": 0,
                    //     "show": 5107,
                    //     "weak": 6407,
                    //     "signin": 4166,
                    //     "click": 7970,
                    //     "active": 1002,
                    //     "day7": 8701,
                    //     "day30": 9040,
                    //     "tomorrow": 7632,
                    // },
                    // {
                    //     "name": "Name8",
                    //     "fav": 0,
                    //     "show": 862,
                    //     "weak": 6520,
                    //     "signin": 6696,
                    //     "click": 3209,
                    //     "active": 6801,
                    //     "day7": 6364,
                    //     "day30": 6850,
                    //     "tomorrow": 9408,
                    // }
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
                ],

            }
        },
        mounted(){
            this.userId=this.$api.sGetObject("userObj").userId;
            this.taskid=this.$route.query.taskid;
            this.getData();
        },
        methods: {
            getData(){
                let self=this;
                self.$api.get("/submit/taskSummary",{
                    userid:this.userId,
                    taskid:this.taskid,
                    page:this.currentPage,
                    pagesize:this.pagesize
                },r=>{
                    let datas =JSON.parse(r.data);
                    let columnsArr=datas.title.split(",");
                    for(let i=0;i<columnsArr.length;i++){
                        self.columns8.push({
                            title:columnsArr[i],
                            key:"value"+i
                        });
                        
                    };
                    self.data7=datas.resultList;
                  
                })
            },
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: 'The original data'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: 'Sorting and filtering data',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: 'Custom data',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            },
            rowClick(data, index, event){
                this.modals=true;
                console.log(data)
            },
            asyncOK () {
                console.log("ok")
                setTimeout(() => {
                    this.modals = false;
                }, 2000);
            },
            prevFun () {
                console.log("prev")
            },
            nextFun () {
                console.log("next")
            },
            nopassFun(){
                console.log("不通过");
            },
            passFun(){
                console.log("通过");
            },     
            changeFun(page){
                console.log(page)
            }
        }
    }
</script>

<style lang='less' scoped >
.page-view{
    padding: 10px;
    text-align:right;
}
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
.model-content{
    display:flex;
    height: 548px;
    .left-cls{
        width: 607px;
        background: #FFFFFF;
        h3{
            font-family: PingFangSC-Semibold;
            font-weight: bold;
            font-size: 16px;
            color: #363636;
            height: 47px;
            letter-spacing: -0.35px;
            margin-left: 30px;
            line-height: 57px;
        }
        .line-cls{
            background: #D8D8D8;
            border: .5px solid #D9D9D9;
        }
        .list-cls{
            padding:0 30px;
            overflow-y: auto;
            height: 450px;
            li{
                border-bottom:1px solid #D9D9D9;
                .num{
                    font-family: PingFang-SC-Medium;
                    font-size: 14px;
                    color: #363636;
                    letter-spacing: -0.31px; 
                    margin-top:13px;
                }
                .cont{
                    font-family: PingFang-SC-Medium;
                    font-size: 13px;
                    color: #575757;
                    letter-spacing: -0.28px;
                    padding-left: 15px;
                    margin:5px 0;
                }
            }
        }
        .prev-next{
            border-top: 1px solid #D9D9D9;
            height: 50px;
            text-align: right;
            line-height: 50px;
            padding-right: 30px;
            cursor: pointer;
            p{
                width: 28px;
                height:25px;
                font-size: 20px;
                line-height: 25px;
                margin: 0 10px;
                display:inline-block;
                background-image: linear-gradient(-180deg, #FEFEFE 0%, #F1F1F1 100%);
                box-shadow: 0 0 0 0 rgba(0,0,0,0.10), 0 0 1px 0 rgba(0,0,0,0.20);
                border-radius: 4.48px;
                text-align: center;
            }
        }
    }
    .right-cls{
        width: 248px;
        background: #F1F1F1;
        padding:20px 24px;
        ul li{
            margin-bottom: 14px;
            font-family: PingFang-SC-Medium;
            font-size: 12px;
            color: #363636;
            letter-spacing: -0.3px;
        }
        .form-view{
            margin-top: 104px;
            p{
                display:flex;
                justify-content: space-around;
                
            }
            .txt-cls{
                width: 100%;
                height: 75px;
                background: #FFFFFF;
                border: 1px solid #C3C9D0;
                resize: none;
                margin-top: 10px;
            }
        }
    }
}
</style>
<style>
    .ivu-modal-footer,.ivu-modal-header{
        border-width:0!important;
        display:none;
    }
    .ivu-table-cell,.ivu-table-small th{
        text-align: center!important;
    }
    .ivu-modal-body{
        padding:0;
    }
</style>
