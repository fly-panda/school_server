<template>
<div :style="{height:fullHeight.height}">
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
            status:3,
            userId:"",
            fullHeight:{// 动态获取屏幕高度
                height: (document.documentElement.clientHeight-124)+"px"
            },
            currentPage:1,
            totals:0,
            showTotal:true,
            pagesize:18,
            // status 0 结束 1为开启
            // type 0 simple 1week
            cardList: [
                // {
                //     id: 1,
                //     status: 3,
                //     tempname: '纪律检查'
                // }, {
                //     id: 2,
                //     status: 3,
                //     tempname: '卫生检查'
                // },{
                //     id: 3,
                //     status: 3,
                //     tempname: '纪律检查'
                // }, {
                //     id: 4,
                //     status: 3,
                //     tempname: '卫生检查'
                // },{
                //     id: 5,
                //     status: 3,
                //     tempname: '纪律检查'
                // }
            ]
        }
    },
    created(){
        this.userId=this.$api.sGetObject("userObj").userId;
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            let self=this;
            self.$api.get("/task/participate",{
                userid:self.userId,
                state:1,
                page:this.currentPage,
                pagesize:this.pagesize
            },r=>{
                let datas=JSON.parse(r.data);
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
