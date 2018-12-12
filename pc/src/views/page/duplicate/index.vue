<template>
<div class="my-duplicate-container">
   <div class="duplicate-title">
        <span class="back-cls" @click="backFun"><Icon type="ios-arrow-back" /></span>{{title}}
        <img class="new-form" @click="newFun" src="@/assets/bianji_ico.png" alt="">
    </div>
    <div class="duplicate-content">
        <div class="contentTop">
            <div class="formMsg">
                <div class="title">表单信息</div>
                <div class="content">
                    <div class="item">
                        <div>表单创建时间</div>
                        <div>2018-11-21 18：00</div>
                    </div>
                    <div class="item" v-show="types">
                         <div>任务时间</div>
                        <div>周一、周二、周三</div>
                    </div>
                    <div class="item" v-show="!types">
                         <div>任务开始时间</div>
                        <div>2018-11-21 18：00</div>
                    </div>
                    <div class="item" v-show="!types">
                         <div>任务截止时间</div>
                        <div>2018-11-21 18：00</div>
                    </div>
                    <div class="item" v-show="!types">
                         <div>发起人</div>
                        <div>沈京京</div>
                    </div>
                </div>
            </div>
            <div class="submitContainer">
                <div class="number">380</div>
                <div class="text">表单数</div>
            </div>
            <div class="submitContainer">
                 <div class="number">213</div>
                <div class="text">应交人数</div>
            </div>
            <div class="submitContainer" @click="unSubmitNum()">
                <div class="number">213</div>
                <div class="text">未交人数<Icon color="red" type="md-alert" /></div>
            </div>
        </div>
        <ExcelTable/>
        <!-- 是否新建 -->
        <Modal
            width="700"
            v-model="addModal"
            :title="modalTitle"
            @on-ok="ok"
            @on-cancel="cancel">
            <h3 class="titles" >是否以《{{modalTitle}}》为基础，建立新表单？</h3>
            <div class="btns">
                <Button size="large" @click="affirmFun" type="success">确认</Button>
            </div>
        </Modal>
        <!-- 未提交人 -->
        <Modal
            width="400"
            v-model="tipModal"
            >
            <h3 class="no-cls">未提交人</h3>
            <ul class="no-list">
                <li v-for="item in noSubmit">{{item}}</li>
                <li class='center-cls'>
                    <Button size="large" @click="wxFun" type="success">微信提醒</Button>
                </li>
            </ul>
        </Modal>
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
            title: '一年级校服尺寸收集表',
            types:true,//周期
            modalTitle:"一年级尺寸收集表",
            addModal:false,
            tipModal:false,
            noSubmit:["张三","李四","王五","赵六","李四","王五","赵六","李四","王五","赵六","李四","王五","赵六","王五","赵六","李四","王五","赵六"]
        }
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
        padding: 0 215px;
        line-height: 60px;
        font-family: PingFangSC-Semibold;
        font-size: 16px;
        color: #888888;
        letter-spacing: 0.95px;
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
        height: 100%;
        padding: 10px 215px;
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
