<template>
<div class="publish-content">
    <!-- <div class="addTemp" @click="addTempFun()">+</div> -->
    <CardForm v-for="item in cardList" :key="item.id" :cardItem="item" />
</div>
</template>

<script>
import CardForm from '_c/card_form'
export default {
    components: {
        CardForm
    },
    data() {
        return {
            // status 0 结束 1为开启
            // type 0 simple 1week
            cardList: [{
                id: 1,
                status: 1,
                title: '纪律检查'
            }, {
                id: 2,
                status: 1,
                title: '卫生检查'
            },{
                id: 3,
                status: 1,
                title: '纪律检查'
            }, {
                id: 4,
                status: 1,
                title: '卫生检查'
            },{
                id: 5,
                status: 1,
                title: '纪律检查'
            }, {
                id: 6,
                status: 1,
                title: '卫生检查'
            },{
                id: 7,
                status: 1,
                title: '纪律检查'
            }, {
                id: 8,
                status: 1,
                title: '卫生检查'
            },{
                id: 9,
                status: 1,
                title: '纪律检查'
            }, {
                id: 10,
                status: 1,
                title: '卫生检查'
            },{
                id: 11,
                status: 1,
                title: '纪律检查'
            }, {
                id: 12,
                status: 1,
                title: '卫生检查'
            },{
                id: 13,
                status: 1,
                title: '纪律检查'
            }, {
                id: 14,
                status: 1,
                title: '卫生检查'
            },{
                id: 15,
                status: 1,
                title: '纪律检查'
            }, {
                id: 16,
                status: 1,
                title: '卫生检查'
            }]
        }
    },
    methods: {
        addTempFun(){
            this.$router.push({
                name:"editorForm"
            })
            // let curID = this.cardList.length + 1
            // this.cardList.push(
            //     {
            //         id: curID,
            //         status: 1,
            //         title: '卫生检查'
            //     }
            // )
        }
    }
}
</script>

<style lang="less" scoped>
.publish-content {
    width: 100%;
    height: 100%;
    padding: 10px 215px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    flex-grow: 20px;
    .addTemp{
        width: 150px;
        height: 220px;
        background: #fff;
        margin: 10px;
        margin-top: 40px;
        border: 1px dashed #dadbdd;
        cursor: pointer;
        font-size: 80px;
        text-align: center;
        line-height: 220px;
        font-weight: 200;
    }
}
</style>
