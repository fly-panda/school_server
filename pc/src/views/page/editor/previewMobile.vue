<template>
    <div  class="mobile-container">
        <div class="contents">
            <div style="height:1000px;">
                    
            </div>   
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {

    }
}
</script>

<style lang='less' scoped > 
    .mobile-container{
        position: fixed;
        width: 421px;
        height: 755px;
        background: url('../../../assets/iphone-bg.png') no-repeat;
         background-size:cover;
        z-index: 9999;
        // margin:0 auto;
        top:30px;
        left:50%;
        padding: 122px 65px;
        transform: translateX(-50%);
        .contents{
            // width: 100%;
            height: 511px;
            overflow-y: auto;
            position: relative;
            background: #fff;
        }
    }
</style>