<template>
<div>
    <div class="publish-content">
        <CardForm v-for="item in cardList" :key="item.id" :cardItem="item" :status="status"/>
        <div class="page-view">
            <Page prev-text="上一页" next-text="下一页" :current="currentPage" :total="totals" @on-change="changeFun" :show-total="showTotal"/>
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
            status:3,
            userId:"",
            currentPage:1,
            showTotal:true,
            totals:0,
            // status 0 结束 1为开启
            // type 0 simple 1week
            cardList: [],
            pagesize:10
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
                userid:this.userId,
                state:0,
                page:this.currentPage,
                pagesize:this.pagesize
            },r=>{
                let datas =JSON.parse(r.data);
                self.cardList=datas.result;
                self.totals=datas.count;
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
