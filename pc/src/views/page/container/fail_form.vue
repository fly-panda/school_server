<template>
<div class="failContiner">
    <div>
        <div class="formContent">
            <div class="textTop">
                <span>1.尺码</span>
                <span style="text-indent:8px">S</span>
            </div>
            <div class="textTop">
                <span>2.季节</span>
                <span style="text-indent:8px">春季</span>
            </div>
        </div>
        <div class="formfooter">
            <div class="arrowContainer">
                <Icon style="box-shadow: 0 1px 1px rgba(0, 0, 0, .2)" size="24" type="ios-arrow-back" />
                <Icon style="box-shadow: 0 1px 1px rgba(0, 0, 0, .2);margin-left: 10px"  size="24" type="ios-arrow-forward" />
            </div>
        </div>
    </div>
    <div>
        <div class="textLine">
            <span>序号</span>
            <span>1</span>
        </div>
        <div class="textLine">
            <span>提交时间</span>
            <span>2018-11-11  18:00:01</span>
        </div>
        <div class="textLine">
            <span>提交人</span>
            <span>田莎莎</span>
        </div>
        <div class="buttonContainer">
            <Button style="width:69px" :disabled="!isPass" type="primary">合格</Button>
            <Button style="width:69px"  :disabled="isPass" type="primary">不合格</Button>
        </div>
        <Input v-model="noPassReason" type="textarea" :autosize="{minRows: 4,maxRows: 5}" placeholder="请输入驳回理由" />
    </div>
</div>
</template>
<script>
export default {
data() {
return {
    isPass: true,
    noPassReason: ''
}
}
}
</script>
<style>
    .ivu-modal-body{
        padding:  0
    }
</style>

<style lang='less' scoped >
.failContiner{
    width: 850px;
    height: 560px;
    display: flex;
    &>div:first-child{
        height: 100%;
        width: 600px;
        background: #fff;
        .formContent{
            padding: 25px;
            height: 508px;
            overflow: scroll;
            
            .textTop{
                display: flex;
                flex-direction: column;
                margin-bottom: 15px;
                border-bottom: 1px solid #D9D9D9;
                padding-bottom: 10px;

            }
        }
        .formfooter{
            border-top: 1px solid #D9D9D9;
            position: relative;
            .arrowContainer{
                position: absolute;
                right: 25px;
                top: 10px;
                width: 60px;
                cursor: pointer;
            }
        }
    }
    &>div:last-child{
        height: 100%;
        width: 250px;
        background: #f1f1f1;
        padding: 25px;
        .textLine{
            display: flex;
            margin-bottom: 15px;
            span{
                width: 45%
            }
        }
        .buttonContainer{
            display: flex;
            margin-top: 102px;
            justify-content: space-between;
            margin-bottom: 15px;
        }
    }
}
</style>