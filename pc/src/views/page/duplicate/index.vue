<template>
<div class="my-duplicate-container">
   <div class="duplicate-title">
        <div>
            <span class="back-cls" @click="backFun"><Icon type="ios-arrow-back" /></span>{{formMsg.title}}
            <img class="new-form" @click="newFun" src="@/assets/bianji_ico.png" alt="">
        </div>

    </div>
    <div class="contents" :style="{height:fullHeight.height}">


        <div class="duplicate-content">
            <div class="contentTop">
                <div class="formMsg">
                    <div class="title">表单信息</div>
                    <div class="content">
                        <div class="item">
                            <div>表单创建时间</div>
                            <div v-text="formMsg.taskCreateTime"></div>
                        </div>
    <!--                     <div class="item" v-show="types">
                             <div>任务时间</div>
                            <div>周一、周二、周三</div>
                        </div> -->
                        <div class="item" v-show="!types">
                             <div>任务开始时间</div>
                            <div v-text="formMsg.taskStartTime"></div>
                        </div>
                        <div class="item" v-show="!types">
                            <div>任务截止时间</div>
                            <div v-text="formMsg.taskEndTime"></div>
                        </div>
                        <div class="item" v-show="!types">
                            <div>发起人</div>
                            <div v-text="formMsg.originator"></div>
                        </div>
                    </div>
                </div>
                <div class="submitContainer">
                    <div class="number"  v-text="formMsg.submitCount"></div>
                    <div class="text">表单数</div>
                </div>
                <div class="submitContainer">
                     <div class="number" v-text="formMsg.should"></div>
                    <div class="text">应交人数</div>
                </div>
                <div class="submitContainer">
                    <div class="number" v-text="formMsg.should-formMsg.submitCount<0?'0':formMsg.should-formMsg.submitCount"></div>
                    <div class="text">未交人数
                        <Icon class="tipWx" color="red" type="md-alert" v-show="(formMsg.should-formMsg.submitCount)>0" @click="unSubmitNum()"/>
                    </div>
                </div>
            </div>
            <h3 style="font-size: 17px;padding: 3px 5px;">提交表单数据</h3>
            <ExcelTable ref="tableChild"/>
            <!-- 是否新建 -->
            <Modal
                width="700"
                v-model="addModal"
                :title="modalTitle"
                @on-ok="ok"
                @on-cancel="cancel">
                <div slot="header"></div>
                <h3 class="titles" >是否以《{{formMsg.title}}》为基础，建立新表单？</h3>
                <div class="btns">
                    <Button size="large" @click="affirmFun" type="success">确认</Button>
                </div>
                <div slot="footer"></div>
            </Modal>
            <!-- 未提交人 -->
            <Modal
                width="400"
                v-model="tipModal"
                >
                <h3 class="no-cls">未提交人</h3>
                <ul class="no-list">
                    <li v-for="item in noSubmit">{{item}}</li>

                </ul>
                <div slot="footer" style="text-align: center;padding:10px;">
                     <Button size="large" @click="wxFun" type="success">微信提醒</Button>
                </div>
            </Modal>
        </div>
    </div>
</div>
</template>

<script>
import ExcelTable from '_c/excel_table'
import Axios from 'axios'
export default {
    components: {
        ExcelTable
    },
    data() {
        return {
            fullHeight:{// 动态获取屏幕高度
                height: (document.documentElement.clientHeight-124)+"px"
            },
            title: '一年级校服尺寸收集表',
            types:false,//周期
            modalTitle:"一年级尺寸收集表",
            addModal:false,
            tipModal:false,
            noSubmit:["张三","李四","王五","赵六","李四","王五","赵六","李四","王五","赵六","李四","王五","赵六","王五","赵六","李四","王五","赵六"],
            formMsg:{

            }
        }
    },
    mounted(){
        this.formMsg=this.$refs.tableChild.formMsg;
        // console.log(111,)
    },
    methods: {
        unSubmitNum(){
            let self=this;
            self.tipModal=true;
        },
        backFun(){
            this.$router.go(-1);
        },
        newFun(){
            let self=this;
            self.addModal=true;
        },
        ok(){
            let self=this;
            console.log("ok");
            // self.addModal=false;
        },
        cancel(){
            let self=this;
            self.addModal=false;
        },
        affirmFun(){
            console.log("确认")
            this.$router.push({
                path:"/editorForm?tempid="+this.formMsg.tempid
            })
        },
        wxFun(){
            console.log("微信提醒")
            Axios({
                method: 'get',
                url: `http://47.93.156.129:8848/api/city/getCity?pid=0`,
                // data: formObj
                // headers: {
                //     userId: this.$store.state.user.userId
                // }
            }).then(res => {
                console.log(res)
            })
        }
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
.btns{
    text-align: center;
    padding: 20px;
    button{
        padding: 10px 40px;
    }
}
.no-cls{

    font-family: PingFangSC-Semibold;
    font-size: 16px;
    font-weight:600;
    color: #363636;
    letter-spacing: -0.35px;
        padding: 15px 30px;
    border-bottom: 1px solid #D9D9D9;
}
.no-list{
    height: 400px;
    overflow-y: auto;
    li{
        padding: 4px 37px;
    }
}
.my-duplicate-container {
    height: 100%;

    .duplicate-title{
        height: 60px;
        background: #fff;

        line-height: 60px;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #888888;
        letter-spacing: 0.95px;
        >div{
            width: 1170px;
            margin:0 auto;
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
    .contents{
        width: 100%;
        overflow-y: auto;
        height: 100%;
    }
    .duplicate-content {
        width: 1170px;
        margin:0 auto;
        height: 100%;
        padding: 10px 0;

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
                    // margin-top: 10px;
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
.tipWx{
    cursor: pointer;
}
</style>
