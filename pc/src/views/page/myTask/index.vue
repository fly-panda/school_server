<template>
<div class="my-publish-container">
    <Menu 
    mode="horizontal" 
    style="padding:0 215px;" 
    theme="light" 
    active-name="allTask"
    @on-select="changeRoure">
        <MenuItem  name="allTask">
        全部任务
        </MenuItem>
        <MenuItem name="historyTask">
        历史任务
        </MenuItem>
    </Menu>
    <div :style="{height:fullHeight.height}" style="overflow-y:scroll;">
        <router-view/>
    </div>
    
   
</div>
</template>

<script>

export default {
    data() {
        return {
            
            fullHeight:{// 动态获取屏幕高度
                height: (document.documentElement.clientHeight-124)+"px"
            }
        }
    },
    methods: {
        changeRoure(name){
             this.$router.push({
                name
            })
        }
    }
}
</script>

<style lang="less" scoped>
.my-publish-container {
    height: 100%;
}
</style>
