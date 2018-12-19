<template>
<div>
    <div class="cardform" v-if="status==0" @click="jumpDetails(cardItem)">

        <div class="card-tag" :style="{background: cardItem.status==0?'#90e1ce': '#74aaf7'}">{{cardItem.tag_text}}</div>
        <div class="cardform-title">{{cardItem.tempname}}</div>
        <img class="cardform-img" src='@/assets/dancirenwu_ico.png'/>
        <!-- 根据状态可显示不同的图片 -->
        <!-- <img v-if="" class="cardform-img" src='@/assets/logo.png'/> -->
        <div class="cardform-submiteinfo-contioner">
            <div class="cardform-submiteinfo">
                <div class="title">
                    提交人
                </div>
                <div class="message">
                    {{cardItem.expectSubmit}}/{{cardItem.allSubmitNum}}
                </div>
            </div>
            <div class="cardform-submiteinfo">
                <div class="title">
                    提交数
                </div>
                <div class="message">
                    {{cardItem.expectSubmit}}
                </div>
            </div>
        </div>
        <div class="cardform-enddate">
            截止时间： {{cardItem.endDate}}
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
    <div class="cardform" v-if="status == 3" @click="jumpDetails(cardItem)">
        <div class="cardform-title">{{cardItem.tempname}}</div>

        <img class="cardform-img" src='@/assets/jieshurenwu_ico.png'/>
        <!-- 根据状态可显示不同的图片 -->
        <!-- <img v-if="" class="cardform-img" src='@/assets/logo.png'/> -->

        <div class="cardform-enddate">
            任务已结束
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
            console.log(cardItem);
            self.$router.push({
                name:"duplicate"
            })

        }
    }
}
</script>

<style lang="less" scoped>
.cardform {
    width: 150px;
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
    border-radius: 5px;
    cursor: pointer;
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
        padding: 0 10px;
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
        font-size: 14px;
        color: #363636;
        letter-spacing: 0.46px;
    }
}
</style>
