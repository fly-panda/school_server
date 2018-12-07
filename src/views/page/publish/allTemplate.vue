<template>
<div class="publish-content">
    <div class="addTemp" @click="addTempFun()">
        +
    </div>
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
            }]
        }
    },
    methods: {
        addTempFun(){
            let curID = this.cardList.length + 1
            this.cardList.push(
                {
                    id: curID,
                    status: 1,
                    title: '卫生检查'
                }
            )
        }
    }
}
</script>

<style lang="less" scoped>
.publish-content {
    width: 100%;
    height: 100%;
    padding: 10px 50px;
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
