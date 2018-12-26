<template>
    <div>
        <div class="publish-content" :style="{height:fullHeight.height}">
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
            currentPage:1,
            totals:104,
            fullHeight:{// 动态获取屏幕高度
                height: (document.documentElement.clientHeight-64)+"px"
            },
            // status 0 结束 1为开启
            // type 0 simple 1week
            cardList: [
            {
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
            }
            ]
        }
    },
    created(){
        
    },
    mounted(){
        this.userId=this.$api.sGetObject("userObj").userId;
        this.getData();
        
    },
    methods: {
        getData(){
            let self=this;
            self.$api.get("/task/participate",{
                userId:this.userId,
                state:0
            },r=>{
                 // self.cardList=JSON.parse(r.data);
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
    overflow-y:auto;
}
</style>
