<template>
<div class="checkContainer">
    <Row class="searchContainer">
        <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
        <Button style="margin-left: 360px" type="primary" size="small" @click="seearchPeople()">
             搜索
         </Button>
    </Row>
    <Row class="titleContainer">
        <span>部门</span>
        <span>人员</span>
        <span>已选</span>
    </Row>
    <Row style="height: 500px; " class="titleContainer">
        <div>
            <Tree style="margin-left: 15px" ref="tree" :data="data3"></Tree>
        </div>
        <div style="display: flex;flex-direction: column">
            <Row style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                <Checkbox style="float: left; margin-left: 30px" :indeterminate="indeterminate" :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
            </Row>
            <div>
                <CheckboxGroup size="large" class="positionColumn" v-model="studentList" @on-change="checkAllGroupChange">
                    <Checkbox v-for="item in studentList" :key="item.id" class="checkboxItem" :label="item.id"><span>{{item.name}}</span></Checkbox>
                </CheckboxGroup>
            </div>
           
        </div>
        <div style="display: flex;flex-direction: column;padding-top: 17px">
            <Row style="border-bottom: 1px solid #e9e9e9;margin-bottom:6px;display: flex; align-items: center; justify-content:center">
                <Button size="small" type="ghost" style="color: #63a854;border:none" icon="md-trash">删除全部</Button>
            </Row>
            <div>
                <div class="studentItem">
                    <div>易恒</div>
                    <div><Icon color="red" size="18" type="md-close-circle" /></div>
                </div>
                <div class="studentItem">
                    <div>易恒</div>
                    <div><Icon color="red" size="18" type="md-close-circle" /></div>
                </div>
                <div class="studentItem">
                    <div>易恒</div>
                    <div><Icon color="red" size="18" type="md-close-circle" /></div>
                </div>
                <div class="studentItem">
                    <div>易恒</div>
                    <div><Icon color="red" size="18" type="md-close-circle" /></div>
                </div>
                <div class="studentItem">
                    <div>易恒</div>
                    <div><Icon color="red" size="18" type="md-close-circle" /></div>
                </div>
            </div>
        </div>
    </Row>
    <div class="flexCenter">
        <Button type="primary" @click="submitResut">确定</Button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            indeterminate: true,
            checkAll: false,
            checkAllGroup: [],
            data3: [{
                    title: '一年级',
                    expand: true,
                    loading: false,
                    children: [{
                            title: '一年一班'
                        },
                        {
                            title: '一年二班'
                        },
                        {
                            title: '一年三班'
                        }
                    ]
                },
                {
                    title: '二年级',
                    expand: true,
                    loading: false,
                    children: [{
                            title: '二年一班'
                        },
                        {
                            title: '二年二班'
                        },
                        {
                            title: '二年三班'
                        }
                    ]
                }
            ],
            indeterminate: true,
            checkAll: false,
            studentList: [{
                id: 0,
                name: '小明'
            },{
                id: 1,
                name: '小红'
            },{
                id: 0,
                name: '小青'
            }]
        }
    },
     mounted(){
        let self=this;
        self.getData();
    },
    methods: {
        getData(){
            let self=this;
            self.$api.post("/campus/getDepartmentInfoList",{
                usertype:1
            },r=>{
                
                self.data3=JSON.parse(r.data);
                console.log(self.data3);
            })
        },
        handleCheckAll() {
            if (this.indeterminate) {
                this.checkAll = false;
            } else {
                this.checkAll = !this.checkAll;
            }
            this.indeterminate = false;

            if (this.checkAll) {
                // let idList = []
                // this.studentList.map((item)=>{

                // })
                // this.checkAllGroup = this.studentList;
                this.checkAllGroup = ['0'];
            } else {
                this.checkAllGroup = [];
            }
        },
        checkAllGroupChange(data) {
            if (data.length === this.studentList.length) {
                this.indeterminate = false;
                this.checkAll = true;
            } else if (data.length > 0) {
                this.indeterminate = true;
                this.checkAll = false;
            } else {
                this.indeterminate = false;
                this.checkAll = false;
            }
        },
        submitResut() {
            this.$emit('handleselect', this.checkAllGroup);
        },
        seearchPeople() {
            console.log(1)
        }
    }
}
</script>

<style lang="less">
.checkContainer {
    min-height: 400px;

    .positionColumn {
        display: flex;
        flex-direction: column;
        .checkboxItem{
            margin: 15px;
        }
    }
    .searchContainer {
        display: flex;
        align-items: center;
        // justify-content: space-between;
        border-bottom: 1px solid #e2e5e7;
        padding-bottom: 6px;
    }

    .flexCenter {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .titleContainer {
        height: 38px;
        display: flex;

        &>span {
            flex: 1;
            border-right: 1px solid #e2e5e7;
            border-bottom: 1px solid #e2e5e7;
            text-align: center;
            height: 100%;
            line-height: 38px;
        }

        &>div {
            flex: 1;
            border-right: 1px solid #e2e5e7;
            text-align: center;
            display: flex;
            padding-top: 15px;
        }

        &>span:last-child {
            border-right: none;
        }

        &>div:last-child {
            border-right: none;
        }
    }
    .studentItem{
        height: 38px;
        line-height: 38px;
        display: flex;
        justify-content: space-between;
        width: 70%;
        font-size: 14px;
        margin: 0 auto;
    }
}
</style>
