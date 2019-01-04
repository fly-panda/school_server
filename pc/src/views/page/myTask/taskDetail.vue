<template>
<div class="my-duplicate-container">
    
    <div class="title-cont">
        <div class="duplicate-title">
            <p class='title-txt'><span class="back-cls" @click="backFun"><Icon type="ios-arrow-back" /></span>{{previewObj.title}}</p>
            <p class="btn-view">
                <Button type="error" ghost @click="del" v-show="id&&state!=1">删除</Button>
                <Button type="success" ghost @click="history">填写记录</Button>
            </p>
        </div>
    </div>
    
    <div class="duplicate-content" :style="{height:fullHeight.height}">
        <div class="nopass" v-show="state==2">
            <h3>不合格理由:</h3>
            <p>{{reason}}</p>
        </div>
        <div class="previewContent">

            <formDetail :previewObj="previewObj" :types="'edits'" :isSave="state!=1" :taskid="taskid" :id="id"/>
            
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
            title: '',
            previewObj:{
                title:"",
                describe:"",
                data:[]
            },
            taskid:this.$route.query.taskid,
            id:this.$route.query.id,
            state:"",//审核状态 0未审核 1审核通过 2审核未通过
            reason:""
        }
    },
    mounted(){
        // this.previewObj=this.$api.sGetObject("previewObj");
        // console.log("id:",!this.$route.query.id)
        if(this.id){
            this.getData();
        }else{
            this.getTaskDetail()
        }
        
        
    },
    methods: {
        getTaskDetail(){
            let self=this;
            self.$api.get("/task/taskdetail",{
                taskid:self.taskid
            },r=>{
                let datas=JSON.parse(r.data);
                self.previewObj.title=datas.title;
                self.previewObj.describe=datas.describe;
                self.previewObj.data=datas.data;
                // console.log(1,self.previewObj)
            })
        },
        getData(){
                
                let self=this;
                self.$api.get("/task/taskdetail",{
                    taskid:self.taskid
                },r=>{
                    let datas=JSON.parse(r.data);
                    self.previewObj.title=datas.title;
                    self.previewObj.describe=datas.describe;
                    // console.log(1,self.previewObj)
                });
                self.$api.get("/submit/submitDetails",{
                    id:this.id,
                    taskid:this.taskid
                },r=>{
                    let datas=JSON.parse(r.data);
                    self.previewObj.data=datas.data;
                    self.reason=datas.reason;
                    self.state=datas.state;

                });
            },
        del () {
            let self=this;
            self.$Modal.confirm({
                title: '确认要删除？',
                content: '',
                onOk: () => {

                    self.$api.get("/submit/delete",{
                        taskid:self.taskid,
                        id:self.id
                    },r=>{
                        let datas=JSON.parse(r.data);
                        self.$Message.info('删除成功');
                        setTimeout(() => {
                            self.$router.push({
                                path:"/record?taskid="+self.taskid
                            })
                        }, 400)
                        
                        // console.log(1,self.previewObj)
                    })
                    
                },
                onCancel: () => {
                    // this.$Message.info('Clicked cancel');
                }
            });
        },
        history(){
            this.$router.push({
                path:"/record?taskid="+this.taskid
            })
        },
        backFun(){
            this.$router.go(-1);
        },
      
    }
}
</script>

<style lang='less' scoped >
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
    .title-cont{
        width: 100%;
        background: #fff;
        .duplicate-title{
            display: flex;
            height: 60px;
            
            margin:0 auto;
            width: 1170px;
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
    }
    .duplicate-content {
        width:1170px;
        margin:0 auto;
        // height: 100%;
        padding: 20px 0;
        
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
