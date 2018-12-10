<template>
<div class="publishContainer">
    <img  class="banner" src="@/assets/publishForm.png" alt="">
    <div class="qrContainer">
        <img  class="qrContent" src="@/assets/publishForm.png" alt=""></img>
        <Button type="text" style="color: #63a854;border:none" icon="md-download">下载二维码</Button>
    </div>
    <div class="title">表单地址</div>
    <Input style="width: 60%;margin: 10px 0 0 30px" v-model="urlText">
    <Button
     v-clipboard:copy="urlText"
     v-clipboard:success="onCopy"
     v-clipboard:error="onError"
      slot="append" icon="md-copy">复制地址</Button>
    </Input>
    <Button style="margin: 30px 0 0 30px" type="default" icon="md-copy">保存设置</Button>
</div>
</template>

<script>
export default {
    data() {
        return {
            // qrImg: qrImg,
            urlText: 'https://www.iviewui.com/components/icon'
        }
    },
    methods: {
        onCopy: function (e) {
            this.$Message.success('复制成功!')
            console.log('复制成功！', this.urlText)
        },
        onError: function (e) {
            console.log('复制失败！')
        }
    }
}
</script>

<style lang="less" scoped>
.publishContainer {
    width: 573px;
    height: 570px;
    margin: 30px auto;
    background: #fff;

    .banner {
        width: 100%;
        height: 230px;
    }

    .qrContainer {
        width: 230px;
        height: 140px;
        margin-left: 30px;
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .qrContent {
            width: 100px;
            height: 100px;
        }
    }

    .title {
        font-size: 14px;
        font-weight: 700;
        margin-left: 30px;
    }
}
</style>
