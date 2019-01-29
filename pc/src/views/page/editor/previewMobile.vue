<template>
    <div  class="mobile-container">
        <div class="contents">
            <iframe id="preview-html" name="preview-html" :src=srcs+ids+userId+objType+openAppID+objectid></iframe>   
        </div>
    </div>
</template>

<script>
export default {
    props:["ids"],
    data() {
        return {

            srcs:"http://172.31.56.28:8080/formPage?preview=1&ids=",
            // srcs:"http://10.108.12.74:8080/formPage?preview=1&ids=",
            
            userId:"",
            objType:"",
            openAppID:"",
            objectid:"",
            userObj:"&userObj="+this.$api.sGetObject("userObj"),
        }
    },
    mounted(){
        let userObj=this.$api.sGetObject("userObj");
        this.userId="&userId="+userObj.userId;
        this.objType="&objType="+userObj.objType;
        this.openAppID="&openAppID="+userObj.openAppID;
        this.objectid="&objectid="+userObj.objectid;
     
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