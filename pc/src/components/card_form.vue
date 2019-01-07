<template>
<!-- status  :1 我的任务     0 我的发布-全部 3我的任务-全部任务-->
<div>
    <!-- 我的发布 全部 -->
    <div class="cardform" v-if="status==0" @click="jumpDetails(cardItem)">
        <!-- state 任务状态(0 任务未开始 1 任务进行中 2 任务已结束) -->
        <div class="card-tag" :style="{background: cardItem.isloop==0?'#78BBFF': '#86E9D8'}">{{cardItem.isloop==0?"周任务":"单次任务"}}</div>
        <div class="cardform-title" :title="cardItem.title">{{cardItem.title}}</div>
        <img v-if="cardItem.state==0" class="cardform-img" src='@/assets/weikaishi_ico.png'/>
        <img v-if="cardItem.state==1&&cardItem.isloop==0" class="cardform-img" src='@/assets/zhourenwu_ico.png'/>
        <img v-if="cardItem.state==2" class="cardform-img" src='@/assets/jieshurenwu_ico.png'/>
        <img v-if="cardItem.state==1&&cardItem.isloop==1" class="cardform-img" src='@/assets/dancirenwu_ico.png'/>
        <!-- 根据状态可显示不同的图片 -->
        <div class="no-start" v-if="cardItem.state==0">
            <p class="title">开始时间</p>
            <p class="time">{{cardItem.starttime}}</p>
        </div>
        <!-- <img v-if="" class="cardform-img" src='@/assets/logo.png'/> -->
        <div class="cardform-submiteinfo-contioner" v-if="cardItem.state!=0">
            <div class="cardform-submiteinfo" v-if="cardItem.isloop!=0">
                <div class="title">
                    提交人
                </div>
                <div class="message">
                    {{cardItem.submitpeople}}/{{cardItem.participants}}
                </div>
            </div>
            <div class="cardform-submiteinfo">
                <div class="title">
                    提交数
                </div>
                <div class="message">
                    {{cardItem.submitcount}}
                </div>
            </div>
        </div>
        <div class="cardform-enddate" v-if="cardItem.state!=0">
            截止时间： {{cardItem.endtime}}
        </div>
    </div>
    <div class="cardform" v-if="status == 1" @click="jumpDetails(cardItem)">

        <div class="cardform-title">{{cardItem.tempname}}</div>
        <img v-if="temp" class="cardform-img" src='@/assets/moban_ico.png'/>
        <img v-if="!temp" class="cardform-img" src='@/assets/dancirenwu_ico.png'/>
        <!-- 根据状态可显示不同的图片 -->
        <!-- <img v-if="" class="cardform-img" src='@/assets/logo.png'/> -->

        <div class="cardform-enddate">
            点击修改
        </div>
    </div>
    <!-- 我的任务 全部任务 -->
    <div class="cardform" v-if="status == 3" @click="jumpForms(cardItem)">
         <!-- state 任务状态(0 任务未开始 1 任务进行中 2 任务已结束) -->
        <div class="card-tag" :style="{background: cardItem.isloop==0?'#78BBFF': '#86E9D8'}">{{cardItem.isloop==0?"周任务":"单次任务"}}</div>
        <div class="cardform-title" :title="cardItem.title">{{cardItem.title}}</div>
        <img v-if="cardItem.state==0" class="cardform-img" src='@/assets/weikaishi_ico.png'/>
        <img v-if="cardItem.state==1&&cardItem.isloop==0" class="cardform-img" src='@/assets/zhourenwu_ico.png'/>
        <img v-if="cardItem.state==2" class="cardform-img" src='@/assets/jieshurenwu_ico.png'/>
        <img v-if="cardItem.state==1&&cardItem.isloop==1" class="cardform-img" src='@/assets/dancirenwu_ico.png'/>
        <!-- <img class="cardform-img" src='@/assets/buhege_ico.png'/> -->
        <!-- <img class="cardform-img" src='@/assets/buhegeyijieshu_ico.png'/> -->
        <!-- 根据状态可显示不同的图片 -->
        <div class="no-start" v-if="cardItem.state==0">
            <p class="title">开始时间</p>
            <p class="time">{{cardItem.starttime}}</p>
        </div>
        <!-- <img v-if="" class="cardform-img" src='@/assets/logo.png'/> -->
       <!--  <div class="cardform-submiteinfo-contioner" v-if="cardItem.state!=0">
            <div class="cardform-submiteinfo" v-if="cardItem.isloop!=0">
                <div class="title">
                    提交人
                </div>
                <div class="message">
                    {{cardItem.submitpeople}}/{{cardItem.participants}}
                </div>
            </div>
            <div class="cardform-submiteinfo">
                <div class="title">
                    提交数
                </div>
                <div class="message">
                    {{cardItem.submitcount}}
                </div>
            </div>
        </div> -->
        <div class="cardform-enddate" v-if="cardItem.state!=0" style="margin-top: 15px;">
            截止时间： {{cardItem.endtime}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['cardItem','temp','status'],
    data() {
        return {}
    },
    methods:{
        jumpDetails(cardItem){
            let self=this;
            console.log(cardItem)
            if(self.status==0){
                self.$router.push({
                    path:"/duplicate?taskid="+cardItem.id
                })
            }else if(self.status==1){
                self.$router.push({
                    path:"/editorForm?tempid="+cardItem.tempid
                })
            }
            // self.$router.push({
                //     name:"taskDetail"
                // })

            

        },
        
        jumpForms(item){
            // console.log(item)
            let self=this;
            if(item.state!=0){
                self.$router.push({
                    path:"/taskDetail?taskid="+item.id
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
.cardform {
    width: 175px;
    height: 220px;
    background: #fff;
    margin: 10px;
    margin-top: 40px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    border: 1px solid #C3C9CF;
    cursor: pointer;
    border-radius: 5px;
    .card-tag {
        background: #90e1ce;
        color: #fff;
        text-align: center;
        position: absolute;
        width: 70px;
        height: 18px;
        border-radius: 4px 4px 0 0;
        top: -18px;
        right: 0;
    }

    .cardform-title {
        text-align: center;
        font-size: 15px;
        font-weight: 700;
        margin-top: 10px;
        height: 40px;
            width: 100%;
        padding: 0 10px;
        overflow: hidden; white-space: wrap; text-overflow: ellipsis;
    }

    .cardform-img {
        width: 50px;
        height: 56px;
        margin-top: 18px;
        margin-bottom: 20px;
    }

    .cardform-submiteinfo-contioner {
        display: flex;
        width: 100%;
        justify-content: space-around;

    }

    .cardform-submiteinfo {
        width: 50px;
        height: 44px;
        display: flex;
        flex-direction: column;

        .title {
            font-size: 10px;
            text-align: center;
        }

        .message {
            font-size: 14px;
            font-weight: 700;
            text-align: center;
        }
    }

    .cardform-enddate {
        text-align: center;
        font-size: 12px;
        color: #363636;
        letter-spacing: 0.46px;
    }
    .no-start{
        text-align:center;
        .title{
            font-family: PingFangSC-Semibold;
            font-size: 14px;
            color: #9B9B9B;
            letter-spacing: 0.84px;
        }
        .time{
            font-family: SourceHanSansCN-Regular;
            font-size: 12px;
            color: #A6A6A6;
            letter-spacing: 0.72px;
        }
    }
}
</style>
