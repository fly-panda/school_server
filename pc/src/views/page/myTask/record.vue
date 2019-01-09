<template>
<div class="my-duplicate-container">

   <div class="duplicate-title">
        <p class='title-txt'><span class="back-cls" @click="backFun"><Icon type="ios-arrow-back" /></span>{{formMsg.title}}</p>
       
    </div>
    <div class="duplicate-content" :style="{height:fullHeight.height}">
        <div class="previewContent">
            <!-- <ExcelTable/> -->
                <div class="searchContainer">
                    <!-- <Input suffix="ios-search" placeholder="搜索" size="small" style="width: auto" /> -->
                    <span  @click="exportData(1)">导出Excel</span>
                </div>
                <Table border :columns="columns8" :data="data7" size="small" ref="table" @on-row-click="rowClick"></Table>
                <div class="page-view">
                    <Page prev-text="上一页" next-text="下一页" :page-size="pagesize" :current="currentPage" :total="totals" @on-change="changeFun" :show-total="showTotal"/>
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
            showTotal:true,
            currentPage:1,
            pagesize:10,
            taskid:"",
            totals:0,
            formMsg:{
                    should:"",
                    submitCount:"",
                    tableTitle:"",
                    taskCreateTime:"",
                    taskEndTime:"",
                    taskStartTime:"",
                    tempid:"",
                    title:"",
                    originator:""
                },
            columns8: [
            ],
            data7: [

            ],
            baseImg:this.$api.getBase(),    
          
        }
    },
    mounted(){
        // this.previewObj=this.$api.sGetObject("previewObj");
        this.userId=this.$api.sGetObject("userObj").userId;
        this.taskid=this.$route.query.taskid;
        // this.previewObj=datas.data;
        this.getData();
    },
    methods: {
        rowClick(data, index, event){
            this.$router.push({
                path:`/taskDetail?taskid=${this.taskid}&id=${data.id}`
            })    
            console.log(data);
        },
        getData(){
            let self=this;
            self.columns8=[];
            self.data7=[];
            self.$api.get("/submit/taskSummary",{
                userid:this.userId,
                taskid:this.taskid,
                page:this.currentPage,
                pagesize:this.pagesize
            },r=>{
                let datas =JSON.parse(r.data);
                self.totals=datas.count;
                self.formMsg.should=datas.should;
                self.formMsg.submitCount=datas.submitCount;
                self.formMsg.tableTitle=datas.tableTitle;
                self.formMsg.taskCreateTime=datas.taskCreateTime;
                self.formMsg.taskEndTime=datas.taskEndTime;
                self.formMsg.taskStartTime=datas.taskStartTime;
                self.formMsg.tempid=datas.tempid;
                self.formMsg.title=datas.title;
                self.formMsg.originator=datas.originator;
                
                let columnsArr=[];
                if(datas.tableTitle){
                    columnsArr=datas.tableTitle.split(",")
                }
                
                let typeArr=datas.valuetype.split(",");
                if(columnsArr.length>0){
                    self.columns8.push({
                        type: 'index2',
                        width: 60,
                        title:"序号",
                        align: 'center',

                        render: (h, params) => {
                            return h('span', params.index + (this.currentPage- 1) * this.pagesize + 1);
                        }
                    });
                    for(let i=0;i<columnsArr.length;i++){
                        let objs={};
                        if(typeArr[i]=="uploadimg"){
                            objs={
                                title:columnsArr[i],
                                key:"value"+i,
                                minWidth:200,
                                render: (h,params) => {
                                    let keys="value"+i;
                                        
                                    let arr=[];
                                    if(params.row[keys]!=""){
                                        let arrs=params.row[keys].split(",");
                                        arrs.map((item,index)=>{
                                            arr.push(h("img",{
                                                attrs:{
                                                    src: self.baseImg+item,
                                                    style: 'width: 40px;display:inline-block;'
                                                },
                                                on:{
                                                    click:()=>{
                                                        // event.stopPropagetion();
                                                        console.log(item)
                                                    }
                                                }
                                            }))
                                        })
                                    }
                                    
                                        return h("div",arr)
                                }
                                
                            }
                        }else if(typeArr[i]=="uploads"){
                                objs={
                                    title:columnsArr[i],
                                    key:"value"+i,
                                    minWidth:200,
                                    render: (h,params) => {
                                        let keys="value"+i;                                        
                                        let arr=[];
                                        if(params.row[keys]!=""){
                                            let arrs=params.row[keys].split(",");
                                            arrs.map((item,index)=>{
                                                arr.push(h("a",{
                                                    attrs:{
                                                        // src:self.baseImg+"api/file/download?path="+item,
                                                        style: 'margin:0 2px;color:#5DB75D;cursor:pointer;'
                                                    },
                                                    on:{
                                                        click:()=>{
                                                            window.location.href=this.baseImg+"api/file/download?path="+item;
                                                        }
                                                    }
                                                },"附件"+(index+1)))
                                            })
                                        }                                       
                                        return h("div",arr)                                      
                                    }
                                    
                                }
                        }else{
                            objs={
                                title:columnsArr[i],
                                minWidth:100,
                                key:"value"+i
                            }
                        }
                        self.columns8.push(objs);
                        
                    };
                }
                
                self.data7=datas.resultList;
              
            })
        },
       
        backFun(){
            this.$router.go(-1);
        },
        changeFun(page){
            this.currentPage=page;
            this.getData();
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
