<template>
    <div>
        {{fileList}}
        <Upload
        style="margin: 10px auto;"
        :before-upload="beforeUpload"
        :multiple="true"
        :default-file-list="fileList"
        show-upload-list
        :action="updateUrl || ''">
        <Button icon="md-add">点击上传文件</Button>
    </Upload>
    </div>
    
</template>
<script>
    export default {
        props: ['updateUrl','fileList'],
        data(){
            return {
                // fileList: []
            }
        },
        methods: {
            beforeUpload(file){
                console.log(file)
                this.fileList.push({
                    name: file.name,
                    url: ''
                })
                return false
            }
        }
    }
</script>

<style lang="less">

.ivu-upload .ivu-upload-select{
    button{
        border: 1px dashed #C3C9D0;
    }
 
}
.ivu-upload-list-file{
    background: #fff;
    margin: 10px auto;
     border: 1px solid #C3C9D0;
}
.ivu-upload-list-file:hover{
    background: #fff;
}
</style>
