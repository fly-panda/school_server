
<template>
    <div :style="{height:fullHeight.height}" class="cont">
        <div class="publish-content">
            <CardForm v-for="item in cardList" :key="item.id" :cardItem="item" :temp="temps" :status="status"/>
            <div class='no-cont' v-if="cardList.length==0">
                暂无数据
            </div>
            <div class="page-view">
                <Page prev-text="上一页" next-text="下一页" :page-size="pagesize" :current="currentPage" :total="totals" @on-change="changeFun" :show-total="showTotal"/>
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
            status:1,
            fullHeight:{// 动态获取屏幕高度
                height: (document.documentElement.clientHeight-64)+"px"
            },
            temps:1,
            userId:"",
            currentPage:1,
            totals:0,
            showTotal:true,
            pagesize:18,
            // status 0 结束 1为开启
            // type 0 simple 1week
            cardList: [
                {
                    id: 1,
                    status: 1,
                    tempname: '纪律检查'
                }, {
                    id: 2,
                    status: 1,
                    tempname: '卫生检查'
                },{
                    id: 3,
                    status: 1,
                    tempname: '纪律检查'
                }
            ]
        }
    },
    mounted(){
        this.userId=this.$api.sGetObject("userObj").userId;
        this.getData();
        
    },
    methods: {
        getData(){
            let self=this;
            self.$api.get("/cform/myForm",{
                userid:this.userId,
                page:this.currentPage,
                pagesize:this.pagesize
            },r=>{
                let datas=JSON.parse(r.data);
                self.cardList=datas.result;
                self.totals=datas.count;
                console.log(r)
            },e=>{
                console.log(e)
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
    overflow-y: auto;
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
    // overflow-y:auto;
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
