<template>
<div class="my-duplicate-container">

   <div class="duplicate-title">
        <span class="back-cls" @click="backFun"><Icon type="ios-arrow-back" /></span>{{title}}
    </div>
    <div class="duplicate-content" :style="{height:fullHeight.height}">
       
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
          
        }
    },
    methods: {
       
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
        overflow-y: auto;
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
