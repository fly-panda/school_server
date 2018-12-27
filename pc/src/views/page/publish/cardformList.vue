<template>
    <div>
        <div class="publish-content">
            <CardForm v-for="item in cardList" :key="item.id" :cardItem="item" :status="status"/>
            <div class='no-cont' v-if="cardList.length==0">
                暂无数据
            </div>
            <div class="page-view">
                <Page prev-text="上一页" next-text="下一页" :page-size="pagesize" :current="currentPage" :total="totals" @on-change="changeFun" :show-total="showTotal"/>
            </div>
        </div>
        
    </div>

<!-- 
participants 参与人数
submitcount提交人数
submitpeople  提交人
endtime 结束时间
state 任务状态(0 任务未开始 1 任务进行中 2 任务已结束)
isloop 是否循环任务 0是 1否
-->

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
            showTotal:true,
            currentPage:1,
            totals:0,
            // status 0 结束 1为开启
            // type 0 simple 1week
            cardList: [],
            pagesize:18
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
                userid:this.userId,
                page:this.currentPage,
                pagesize:this.pagesize
            },r=>{
                let datas=JSON.parse(r.data);
                self.cardList=datas.result;
                self.totals=datas.count;
                console.log(r)
            })
        },
        changeFun(page){
            this.currentPage=page;
            this.getData();
        }
    }
}
</script>

<style lang="less" scoped>
.no-cont{
    font-size: 18px;
    width: 100%;
    text-align:center;
    color:#ccc;
}
.list-view{
    width:100%;
}
.page-view{
    width:100%;
    padding: 10px;
    text-align:center;
}
.publish-content {
    width:1170px;
    margin:0 auto;
    height: 100%;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    flex-grow: 20px;
}
</style>
