<template>
    <div>
        <div class="publish-content">
            <CardForm v-for="(item,i) in cardList" :key="item.id" :cardItem="item" :status="status"/>
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
            // status 0 结束 1为开启
            // type 0 simple 1week
            cardList: [
                // {
                //     id: 1,
                //     status: 1,
                //     title: '纪律检查'
                // },
                // {
                //     id: 1,
                //     status: 1,
                //     title: '纪律检查'
                // },
                // {
                //     id: 1,
                //     status: 1,
                //     title: '纪律检查'
                // }
            ],
            status:1,
            userId:"",
            currentPage:1,
            totals:104,
        }
    },
    mounted(){
        this.getData();
        this.userId=this.$api.sGetObject("userObj").userId;
    },
    methods: {
        getData(){
            let self=this;
            self.$api.post("/cform/myForm",{},r=>{
                 console.log(r)
                self.cardList=JSON.parse(r.data);
                // console.log(self.data3);
            },e=>{
                console.log(e)
            })
        },
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
