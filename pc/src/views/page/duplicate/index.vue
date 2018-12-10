<template>
<div class="my-duplicate-container">
   <div class="duplicate-title">
        {{title}}
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
                    <div class="item">
                         <div>任务开始时间</div>
                        <div>2018-11-21 18：00</div>
                    </div>
                    <div class="item">
                         <div>任务截止时间</div>
                        <div>2018-11-21 18：00</div>
                    </div>
                    <div class="item">
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
    </div>
</div>
</template>

<script>
import ExcelTable from '_c/excel_table'
export default {
    components: {
        ExcelTable
    },
    data() {
        return {
            title: '一年级校服尺寸收集表'
        }
    },
    methods: {
        unSubmitNum(){
            let editModal = {
                type: '',
                title: '未提交人数',
                url: '/api/company/add',
                component: 'SubmitList'
            }
            editModal.curtime = new Date().getTime()
            editModal.status = true
            this.$store.commit('modalStatus', editModal)
        }
    }
}
</script>

<style lang='less' scoped >
.my-duplicate-container {
    height: 100%;
    .duplicate-title{
        height: 60px;
        background: #fff;
        padding-left: 70px;
        line-height: 60px;
        font-size: 14px;
    }
    .duplicate-content {
        width: 100%;
        height: 100%;
        padding: 10px 70px;
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
                    font-size: 14px;
                    font-weight: 700;
                    margin-top: 20px; 
                    margin-left: 10px; 
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
                    font-size: 32px;

                }
            }
        }
        
    }
}

</style>
