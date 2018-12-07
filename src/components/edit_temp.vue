<template>
<div class="cardform">
    <div class="cardform-title">{{cardItem.title}}</div>
    <img class="cardform-img" src='@/assets/logo.png'/>
    <!-- 根据状态可显示不同的图片 -->
    <!-- <img v-if="" class="cardform-img" src='@/assets/logo.png'/> -->
   
    <div class="cardform-enddate">
        点击修改
    </div>
</div>
</template>

<script>
export default {
    props: ['cardItem'],
    data() {
        return {}
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
    cursor: pointer;
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
    .cardform-enddate{
        font-size: 10px;
        margin-top: 30px;
        text-align: center;
    }
}
</style>
