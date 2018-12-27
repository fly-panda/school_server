<template>
<div class="my-publish-container">
    <!-- <Breadcrumb :style="{margin: '20px 0'}">
            <BreadcrumbItem>全部</BreadcrumbItem>
            <BreadcrumbItem>我的模板</BreadcrumbItem>
        </Breadcrumb> -->
    <div style="width: 100%;background-color: #fff;">
        <Menu 
            mode="horizontal" 
            style="width: 1170px;margin:0 auto;" 
            theme="light" 
            :active-name="$route.name"
            @on-select="changeRoure">
            <MenuItem name="cardformList">
            全部
            </MenuItem>
            <MenuItem name="allTemplate">
            我的模板
            </MenuItem>
        </Menu>
    </div>
    
    <div :style="{height:fullHeight.height}" style="overflow-y:scroll;">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
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
