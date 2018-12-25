<template>
    <div>
        <div class="publish-content">
            <CardForm v-for="item in cardList" :key="item.id" :cardItem="item" :status="status"/>
            <div class="page-view">
                <Page prev-text="上一页" next-text="下一页" :current="currentPage" :total="totals" @on-change="changeFun"/>
            </div>
        </div>
        
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
            status:0,
            userId:"",
            
            currentPage:1,
            totals:104,
            // status 0 结束 1为开启
            // type 0 simple 1week
            cardList: [{
                id: 1,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                tempname: '关于《两学一做》班会的感想',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 2,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                tempname: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 3,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                tempname: '卫生检查',
                endDate: '任务已结束',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 4,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                tempname: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 5,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                tempname: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 6,
                status: 0,
                type: 0,
                tag_text: '周任务',
                tempname: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            },{
                id: 7,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                tempname: '关于《两学一做》班会的感想',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 8,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                tempname: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 9,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                tempname: '卫生检查',
                endDate: '任务已结束',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 10,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                tempname: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 11,
                status: 0,
                type: 0,
                tag_text: '单次任务',
                tempname: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }, {
                id: 12,
                status: 0,
                type: 0,
                tag_text: '周任务',
                tempname: '卫生检查',
                endDate: '11/09 18:00',
                expectSubmit: 100,
                hasSubmitNum: 10,
                allSubmitNum: 50
            }]
        }
    },
    created(){
        this.userId=this.$api.sGetObject("userObj").userId;
        this.getData();
        
    },
    methods:{
        getData(){
            let self=this;
            self.$api.get("/task/getMyTask",{
                userId:this.userId
            },r=>{
                console.log(r)
            })
        },
        changeFun(page){
                console.log(page)
            }
    }
}
</script>

<style lang="less" scoped>
.list-view{
    width:100%;
}
.page-view{
    width:100%;
    padding: 10px;
    text-align:center;
}
.publish-content {
    width: 100%;
    height: 100%;
    padding: 10px 215px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    flex-grow: 20px;
}
</style>
