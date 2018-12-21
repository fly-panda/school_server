<template>
<div class="previewContioner">
     <div class="btn-view">
        <p :class="['btns',active==1?'activeCls':'']" @click="preview('1')"><img :src="active==1?activeImg1:img1" alt=""></p>
        <p :class="['btns',active==2?'activeCls':'']" @click="preview('2')"><img :src="active==2?activeImg2:img2" alt=""></p>
        <p :class="['btns',active==3?'activeCls':'']" @click="preview('3')"><img :src="active==3?activeImg3:img3" alt=""></p>
    </div>
    <div v-show="active==1" class="previewContent" :style="{height:fullHeight.height}">
        <formDetail :previewObj="previewObj" :types="'edits'" :isSave="false"/>
    </div>
    <div v-show="active==2" class="previewMobile">
        <previewMobile :ids="ids"/>
    </div>
    
</div>
</template>

<script>
import previewMobile from "./previewMobile.vue";
import formDetail from "_c/formDetail.vue";
export default {
    components:{
        previewMobile,
        formDetail
    },
    data() {
        return {
            
            fullHeight:{// 动态获取屏幕高度
                height: (document.documentElement.clientHeight-60)+"px"
            },
            active:1,//pc 1,mobile  2,quit   3
            img1:require("@/assets/pcyulan_ico_nor.png"),
            activeImg1:require("@/assets/pcyulan_icon_pre.png"),
            img2:require("@/assets/shoujiyulan_ico_nor.png"),
            activeImg2:require("@/assets/shoujiyulan_ico-pre.png"),
            img3:require("@/assets/tuichu_ico_nor.png"),
            activeImg3:require("@/assets/tuichu_ico_pre.png"),
            previewObj:{},
            ids:""

        }
    },
    mounted(){
        this.previewObj=this.$api.sGetObject("previewObj");
        this.ids=this.$route.query.ids;
        // console.log(this.ids);
        // console.log(this.previewObj)
    },
    methods: {
        getData(){
            let self=this;
            self.$api.get("/cform/getpreview",{
                tempid:this.ids
            },r=>{
                self.previewOb=JSON.parse(r.data);
                console.log(r)
            })
        },    
        preview(type){
            let self=this;
            if(type=="1"){
                self.active=type;
            }else if(type=="2"){
                self.active=type;
            }else if(type=="3"){
                self.$router.go(-1);
            }
        }
    }
}
</script>

<style lang="less" scoped>
.previewContioner {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 1000;
    background: #F1F1F1;

    .btn-view{
            position: absolute;
            top:40px;
            right:120px;
            .btns{
                display: inline-block;
                margin-left: 10px;
                width:40px;
                height:40px;
                background: #FFFFFF;
                box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
                border-radius: 1.5px;
                cursor: pointer;
            }
            .activeCls{
                background: #5DB75D;
            }
        }
        
    .positionColumn {
        display: flex;
        flex-direction: column;
        .checkboxItem{
            margin: .6rem;
        }
    }
    .previewContent {
        width: 760px;
        position: relative;
        background: #fff;
        margin: 30px auto;
        overflow-y: auto;
        
    //     // .header {
    //     //     height: 50px;
    //     //     font-size: 16px;
    //     //     background: #5DB75D;
    //     //     color: #fff;
    //     //     font-weight: 700;
    //     //     text-align: center;
    //     //     line-height: 50px;
    //     // }

    //     // .content {
    //     //     padding: 0 1.5rem 2rem 1.5rem;
    //     //     height: 650px;

    //     //     .discribe {
    //     //         padding: 15px 0;
    //     //         line-height: 1.3rem
    //     //     }

    //     //     .selectStudentContainer {
    //     //         margin-bottom: 1.2rem;

    //     //         .title {
    //     //             font-weight: 700;
    //     //             font-size: .9rem;
    //     //         }

    //     //         .point {
    //     //             margin-bottom: .6rem;
    //     //         }

    //     //         .selectBtn {
    //     //             background: #FFFFFF;
    //     //             border: 1px solid #5DB75D;
    //     //             color: #5DB75D;
    //     //             text-align: center;
    //     //             width: 8rem;
    //     //             height: 1.5rem;
    //     //             line-height: 1.5rem;
    //     //             cursor: pointer;
    //     //         }

    //     //         .downloadBtn {
    //     //             border: 1px dashed #c1c1c1;
    //     //             color: #5DB75D;
    //     //             display: flex;
    //     //             height: 2.2rem;
    //     //             justify-content: space-between;
    //     //             align-items: center;
    //     //             padding: 0 1.2rem 0 .4rem;
    //     //             margin-top: .6rem;
    //     //         }

    //     //     }

    //     //     .imgPreview {
    //     //         display: flex;
    //     //         flex-wrap: wrap;
    //     //         justify-content: space-between;
    //     //         img {
    //     //             width: 10rem;
    //     //             height: 10rem;
    //     //         }
    //     //     }
    //     //     .imgCheckPreview {
    //     //         display: flex;
    //     //         flex-wrap: wrap;
    //     //         justify-content: space-between;
    //     //         div{
    //     //             display: flex;
    //     //             flex-direction: column;
    //     //             justify-content: center;
    //     //             align-items: center;
    //     //         }
    //     //         img {
    //     //             width: 8rem;
    //     //             height: 8rem;
    //     //         }
    //     //     }
    //     // }
    }
    .previewMobile{
        height: 100%;
        width: 100%;
    }
}
</style>
