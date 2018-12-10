<template>
<div  class="my-editor-container">
    <Menu mode="horizontal" style="padding-left: 50px;" theme="light" active-name="editorForm" @on-select="changeRoure">
        <MenuItem name="editorForm">
        编辑表单
        </MenuItem>
        <MenuItem name="settingEditorForm">
        设置表单规则
        </MenuItem>
        <MenuItem name="publishForm">
        发布设置
        </MenuItem>
    </Menu>
    <router-view/>
</div>
</template>

<script>
export default {
    data() {
        return {}
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

<style lang='less' scoped >
.my-editor-container {
    height: 100%;
}
</style>
