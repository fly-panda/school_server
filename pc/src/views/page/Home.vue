<template>
<div class="layout">
    <Layout style="height: 100%;">
        <Header class="padding-cls" style="background: #272A34;">
            <Menu mode="horizontal" theme="dark" @on-select="changeRoure" active-name="1">
                <div class="layout-logo">
                    
                </div>
                <div class="layout-nav">
                    <MenuItem name="home">
                    <!-- <Icon type="ios-navigate"></Icon> -->
                    我的发布
                    </MenuItem>
                    <MenuItem name="myTask">
                    <!-- <Icon type="ios-keypad"></Icon> -->
                    我的任务
                    </MenuItem>
                    <MenuItem name="duplicate">
                    <!-- <Icon type="ios-analytics"></Icon> -->
                    我的抄送
                    </MenuItem>
                    <MenuItem name="publicTemp">
                    <!-- <Icon type="ios-paper"></Icon> -->
                    公共模板
                    </MenuItem>
                    <MenuItem name="editor">
                    <!-- <Icon type="ios-paper"></Icon> -->
                    
                        <button type="button" class="add-btn">新建任务</button>
                    
                        
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Content :style="{height: '100%'}">
            <Modal v-model="modalStatus"  :title="madalTitle" footer-hide @on-cancel="cancelModal()">
                <component v-bind:is="currentView"></component>
            </Modal>
            <router-view />
        </Content>
        <!-- <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer> -->
    </Layout>
</div>
</template>

<script>
import SubmitList from '_c/submitList'
export default {
    components: {
        SubmitList
    },
    data() {
        return {
            madalTitle: '',
            modalStatus: false,
            currentView: 'Input'
        }
    },
    methods: {
        changeRoure(name) {
            this.$router.push({
                name
            })
        },
        cancelModal() {
            let cur_modal = this.$store.state.modal
            cur_modal.curtime = new Date().getTime()
            cur_modal.status = false
            cur_modal.component = 'Input'
            this.$store.commit('modalStatus', cur_modal)
        }
    },
    computed: {
        getModal () {
            return this.$store.state.modal.curtime
        }
    },
    watch: {
        getModal () {
            this.modalStatus = this.$store.state.modal.status
            this.currentView = this.$store.state.modal.component
            this.madalTitle = this.$store.state.modal.title
        }
    }
}
</script>

<style lang="less" scoped>
.layout {
    height: 100%;
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}

.layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}

.layout-nav {
    width: 70%;
    margin: 0 auto;
    margin-right: 20px;
}

.layout-footer-center {
    text-align: center;
}

.logoText {
    color: #fff;
}

.ivu-menu-dark {
    background: transparent
}
.add-btn{
    background: #5DB75D;
    border: 1px solid #5DB75D;
    border-radius: 1px;
    width:104px;
    height: 33px;
    margin-top: 13px;
    line-height: 33px;
    color:#fff;
    outline:none;
    cursor: pointer;
}
</style>
