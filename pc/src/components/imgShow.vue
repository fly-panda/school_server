<template>
<div>
    <p v-show="false">{{defaultList}}</p>
    
    <div style="paddding-bottom:20px;display: inline-block;" v-for="item in defaultList" :key="item.name">
        <div class="demo-upload-list">

            <template v-if="item.status === 'finished'">
            
                <!-- <img v-if="item.url==''" src="@/assets/tupianshangchuan_nor.png" alt=""> -->
                <img v-if="item.url!=''" :src="baseImgUrl+item.url">
                <div class="demo-upload-list-cover">
                    <Icon type="ios-eye-outline" @click.native="handleView(item)"></Icon>
                    <!-- <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon> -->
                </div>
            </template>
            <template v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
            </template>

        </div>
        <div style="text-align:center">
            <Checkbox style="font-weight: 400;" v-if="isCheck">{{item.labels}}</Checkbox>
        </div>
    </div>
    <Upload v-show="false" ref="upload" :show-upload-list="false" :default-file-list="defaultList" :on-success="handleSuccess" :format="['jpg','jpeg','png']" :max-size="2048" :on-format-error="handleFormatError" :on-exceeded-size="handleMaxSize" :before-upload="handleBeforeUpload" multiple type="drag" action="//jsonplaceholder.typicode.com/posts/" 
        :style="isCheck?{
            display: 'inline-block',width:'58px', position: 'absolute', top: '17px'
        }:{ display: 'inline-block',width:'58px'}">
        <div style="width: 58px;height:58px;line-height: 58px;">
            <Icon type="ios-camera" size="20"></Icon>
        </div>
    </Upload>

    <Modal title="View Image" v-model="visible">
        <img :src="baseImgUrl+imgSrc" v-if="visible" style="width: 100%">
    </Modal>
</div>
</template>

<script>
import api from '../common/js/index.js'
export default {
    props: ['isCheck','defaultList'],
    data() {
        return {
            imgSrc:"",
            // defaultList: [
                // {
                //     'name': 'a42bdcc1178e62b4694c830f028db5c0',
                //     'url': require("@/assets/logo.png")
                // },
                // {
                //     'name': 'bc7521e033abdd1e92222d733590f104',
                //     'url': require("@/assets/logo.png")
                // }
            // ],
            imgName: '',
            visible: false,
            uploadList: [],
            baseImgUrl:api.getBase(),
            // noImg:require("@/assets/tupianshangchuan_nor.png")
        }
    },
    methods: {
        handleView(item) {
            this.imgSrc= item.url;
            this.imgName = item.name;
            this.visible = true;
        },
        handleRemove(file) {
            const fileList = this.$refs.upload.fileList;
            this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
        },
        handleSuccess(res, file) {
            file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
            file.name = '7eb99afb9d5f317c912f08b5212fd69a';
        },
        handleFormatError(file) {
            this.$Notice.warning({
                title: 'The file format is incorrect',
                desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
            });
        },
        handleMaxSize(file) {
            this.$Notice.warning({
                title: 'Exceeding file size limit',
                desc: 'File  ' + file.name + ' is too large, no more than 2M.'
            });
        },
        handleBeforeUpload() {
            const check = this.uploadList.length < 5;
            if (!check) {
                this.$Notice.warning({
                    title: 'Up to five pictures can be uploaded.'
                });
            }
            return check;
        }
    },
    mounted() {
        this.uploadList = this.$refs.upload.fileList;
        console.log(this.uploadList)
    }
}
</script>

<style>
.demo-upload-list {
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
    margin-right: 4px;
}

.demo-upload-list img {
    width: 100%;
    height: 100%;
}

.demo-upload-list-cover {
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .6);
}

.demo-upload-list:hover .demo-upload-list-cover {
    display: block;
}

.demo-upload-list-cover i {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
}
</style>
