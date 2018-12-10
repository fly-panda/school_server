<template>
<div class="publish-content">
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
                status: 0,
                type: 0,
                tag_text: '单次任务',
                title: '关于《两学一做》班会的感想',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 2,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                title: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 3,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                title: '卫生检查',
                endDate: '任务已结束',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 4,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                title: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 5,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                title: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 6,
                status: 0,
                type: 0,
                tag_text: '周任务',
                title: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }]
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
}
</style>
