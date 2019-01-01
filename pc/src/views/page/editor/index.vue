<template>
<div  class="my-editor-container">
    <div style="background-color: #fff;">
       <Menu mode="horizontal" style="width: 1170px;margin:0 auto;" theme="light" active-name="editorForm" @on-select="changeRoure">
            <MenuItem name="editorForm">
            编写表单
            </MenuItem>
            <MenuItem name="settingEditorForm">
            设置表单规则
            </MenuItem>
        </Menu> 
    </div>
    
    <!-- <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view> -->
    <div :style="{height:fullHeight.height}">
        <editorForm :tempId="tempId" @changeId="changeIdFun($event)" ref="editorFormObj" v-show="viewType=='editorForm'"/>
        <settingEditorForm :tempId="tempId" ref="formSetting" :isTeacher="isTeacher" :treeList="treeList" v-show="viewType=='settingEditorForm'"/>
    </div>
</div>
</template>

<script>
import editorForm from "./editorForm";
import publishForm from "./publishForm";
import settingEditorForm from "./settingEditorForm";
export default {
    data() {
        return {
            viewType:'editorForm',
            fullHeight:{// 动态获取屏幕高度
                height: (document.documentElement.clientHeight-124)+"px"
            },
            tempId:"",
            isTeacher:false,
            treeList:[]
        }
    },
    components:{
        editorForm,
        publishForm,
        settingEditorForm
    },
    methods: {
        changeRoure(name){
            let self=this;
            this.viewType=name;
            
            // this.$router.push({
            //     name
            // })
            if(name=="settingEditorForm"){
                // this.$refs.formSetting.getStatus();
                this.isTeacher=false;
                this.treeList=[];
                this.$refs.editorFormObj.saveSoltItem();
                let elArr=this.$refs.editorFormObj.sortable_item;
                // this.$refs.formSetting.getStatus();
                for(let i=0;i<elArr.length;i++){
                    if(elArr[i].ele=="selectstudent"||elArr[i].ele=="selectgrade"){
                        this.isTeacher=true;
                        this.treeList=elArr[i].obj.items;
                    }
                }
               
                // this.$refs.editorFormObj.saveSoltItem().then(function(val){ 
                //     this.$refs.formSetting.getStatus(); 
                //     // 如果后面还有 fn4，5，6 就需要继续 return 
                //     // return fn3() ..
                // })
            }
        },
        changeIdFun(msg){

            this.tempId=msg;
        }
    }
}
</script>

<style lang='less' scoped >
.my-editor-container {
    height: 100%;
}
</style>
