<template>
<div style="height: 400px;">
    <div class="searchContainer">
        <!-- <Input suffix="ios-search" placeholder="搜索" size="small" style="width: auto" /> -->
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
        <p slot="header" style="height: 0;padding: 0;display:none;">
        </p>
        <div class="model-content">
            <div class="left-cls">
                <h3>{{formMsg.title}}</h3>
                <p class='line-cls'></p>
                <ul class="list-cls">
                    <li v-for="(item,index) in lists" :key="index">
                        <p class="num">{{index+1}}. {{item.title}}</p>
                        <p v-if="item.type=='uploadimg'" class="img-view">
                            <img v-for="(cont,i) in item.value" :src="baseImg+cont" :key="i" @click="viewImg(cont)" alt=""/>
                        </p>
                        <p v-else class="cont">{{item.value}}</p>
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
                        <span></span>
                    </li>
                    <li>
                        <span>提交时间</span>
                        <span>：{{submitMsg.createtime}}</span>
                    </li>
                    <li>
                        <span>提交人</span>
                        <span>：{{submitMsg.submiter}}</span>
                    </li>
                </ul>
                <div class="form-view">
                    <p>
                        <Button @click="audit(1)" type="success":disabled="submitMsg.state==1">合格</Button>
                        <Button @click="audit(2)" type="error" :disabled="(reason.length==0&&submitMsg.state!=1)||submitMsg.state==1">不合格</Button>
                    </p>
                    <textarea class="txt-cls" placeholder="请输入驳回理由" v-model="reason"></textarea>    
                </div>
            </div>
        </div>
        <!-- 弹框底部占位 -->
        <div slot="footer">

        </div>
    </Modal>

    <Modal title="View Image" v-model="visible">
        <div slot="header">
            
        </div>
        <img :src="baseImg+imgSrc" v-if="visible" style="width: 100%">
        <div slot="footer">
            <span style="float: left;margin: 15px 10px;">
                {{imgSrc}}
            </span>
            <span class="viewimg-cls" >
                <Icon type="md-download" @click="downFile(imgSrc)"/>
                <Icon type="md-close" @click="visible=false"/>
            </span>
        </div>
    </Modal>
</div>

</template>
<script>
    // let imgs=require("@/assert/xiazai_ico.png");
    export default {
        data () {
            return {
                visible:false,
                imgSrc:"",
                modals: false,
                showTotal:true,
                taskid:"",
                reason:"",
                status:0,
                currentPage:1,
                totals:0,
                pagesize:10,
                formMsg:{
                    should:"",
                    submitCount:"",
                    tableTitle:"",
                    taskCreateTime:"",
                    taskEndTime:"",
                    taskStartTime:"",
                    tempid:"",
                    title:"",
                    originator:"",
                    state:""
                },
                columns8: [
                    // {
                    //     type: 'index',
                    //     width: 60,
                    //     title:"序号",
                    //     align: 'center'
                    // }
                ],
                data7: [
    
                ],
                lists:[],
                submitMsg:{
                    createtime:"",
                    submiter:""
                },
                rowIndex:'',
                baseImg:this.$api.getBase(),
                ids:""
            }
        },
        mounted(){
            this.userId=this.$api.sGetObject("userObj").userId;
            this.taskid=this.$route.query.taskid;
            this.getData();

        },
        methods: {
            downFile(res){
                let self=this;

                window.location.href=this.baseImg+"api/file/download?path="+res;
            },
            getData(){
                let self=this;
                self.columns8=[];
                self.data7=[];
                self.$api.get("/submit/taskSummary",{
                    userid:"",
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
                    
                    let columnsArr=datas.tableTitle.split(",");
                    
                    let typeArr=datas.valuetype.split(",");
                    if(columnsArr.length>0){
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
                                                            // console.log(event)
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
            getModalData(ids){
                
                let self=this;
                this.reason="";
                self.ids=ids;
                self.$api.get("/submit/submitDetails",{
                    id:ids,
                    taskid:this.taskid
                },r=>{
                    let datas=JSON.parse(r.data);
                    self.submitMsg.state=datas.state;
                    for(let i=0;i<datas.content.length;i++){
                        datas.content[i].title=self.columns8[i].title;
                        if(datas.content[i].type=="uploadimg"){
                            datas.content[i].value=datas.content[i].value.split(",");                         
                        }
                    }
                    self.submitMsg.submiter=datas.submiter;
                    self.submitMsg.createtime=datas.createtime;
                    self.lists=datas.content;
                })
            },
            audit(states){
                let self=this;
                self.$api.get("/submit/examine",{
                    id:self.ids,
                    taskid:this.taskid,
                    state:states,
                    reason:this.reason
                },r=>{
                    let datas=JSON.parse(r.data);
                    self.$Message.info('成功');
                })
            },
            viewImg(srcs){
                // console.log(srcs)
                let self=this;
                self.imgSrc=srcs;
                this.visible=true;
            },
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: this.formMsg.title+'-提交表单数据'
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
                this.rowIndex=index;
                // console.log(index);
                this.modals=true;
                console.log(data);
                this.getModalData(data.id);
                // console.log(data)
            },
            asyncOK () {
                console.log("ok")
                setTimeout(() => {
                    this.modals = false;
                }, 2000);
            },
            prevFun () {
                if(this.rowIndex==0){
                    this.$Message.warning('已经是第一个了哦');
                    return 
                }
                this.rowIndex--;
                let ids=this.data7[this.rowIndex].id;
                this.getModalData(ids);
            },
            nextFun () {

                if(this.rowIndex==(this.data7.length-1)){
                    this.$Message.warning('已经是最后一个了哦');
                    return 
                }
                this.rowIndex++;
                let ids=this.data7[this.rowIndex].id;
                this.getModalData(ids);
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
.img-view img{
    width:50px;
    height:50px;
    display: inline-block;
    margin: 2px 4px;
}

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
.viewimg-cls{
    font-size: 30px;
    color:#19be6b;
    i{
        cursor: pointer;
    }
}
</style>
<style>
    .ivu-modal-footer,.ivu-modal-header{
        border-width:0!important;
        padding: 0;
        display:none;
    }
    .ivu-table-cell,.ivu-table-small th{
        text-align: center!important;
    }
    .ivu-modal-body{
        padding:0;
    }
</style>
