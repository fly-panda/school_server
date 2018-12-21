<template>
    <div  class="mobile-container">
        <div class="contents">
            <iframe id="preview-html" name="preview-html" src="http://47.93.156.129:8080/formPage?preview=1"></iframe>   
        </div>
    </div>
</template>

<script>
export default {
    props:["ids"],
    data() {
        return {

        }
    },
    mounted(){
        console.log(this.ids)
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
        padding: 121px 65px;
        transform: translateX(-50%);
        .contents{
            // width: 100%;
            height: 513px;
            position: relative;
            background: #fff;
        }
    }
    #preview-html{
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 5px;
        outline: none;
        background-color: #fff;
    }

</style>