<template>
    <div :style="{height:fullHeight.height}" class="cont">
        <div class="publish-content">
            <CardForm v-for="item in cardList" :key="item.id" :cardItem="item" :status="status"/>
            <NoData v-if="cardList.length==0"/>
            <div class="page-view" v-if="cardList.length!=0">
                <Page prev-text="上一页" next-text="下一页" :page-size="pagesize" :current="currentPage" :total="totals" @on-change="changeFun" :show-total="showTotal"/>
            </div>
        </div>    
    </div>

</template>

<script>
import CardForm from '_c/card_form'
import NoData from '_c/no_data'
export default {
    components: {
        CardForm,
        NoData
    },
    data() {
        return {
            status:0,
            currentPage:1,
            totals:0,
            pagesize:18,
            fullHeight:{// 动态获取屏幕高度
                height: (document.documentElement.clientHeight-64)+"px"
            },
            showTotal:true,
            // status 0 结束 1为开启
            // type 0 simple 1week
            cardList: [

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
            self.$api.get("/task/getMyTask",{
                userid:this.userId,
                state:2,
                page:this.currentPage,
                pagesize:this.pagesize
            },r=>{
                let datas =JSON.parse(r.data);
                self.cardList=datas.result;
                self.totals=datas.count;
                // console.log(r)
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
.cont{
    overflow-y:auto;
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
    width: 1170px;
    margin: 0 auto;
    height: 100%;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    align-content: flex-start;
    flex-grow: 20px;
    
}
</style>
