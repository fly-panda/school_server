<template>
<div class="checkContainer">
    <div class="title-cls">选择老师范围</div>
    <div class="save-cls">
        <Button type="primary" @click="saveFun">保存</Button>
    </div>
<!--     <Row class="searchContainer">
        <Input suffix="ios-search" placeholder="Enter text" style="width: auto" />
        <Button style="margin-left: 360px" type="primary" size="small" @click="seearchPeople()">
             搜索
         </Button>
    </Row> -->
    <Row class="titleContainer" style="padding-top: 0;">
        <p>部门</p>
        <p class="all-sel">
            <span>人员</span>
            <span class="alls" @click="allFun">全选</span>
        </p>
        <p>已选</p>
    </Row>
    <Row style="height: 500px; " class="titleContainer">
        <div style="height: 450px;overflow-y: auto;">
            <Tree style="margin-left: 15px" ref="tree" :data="data3" @on-select-change="changeFun"></Tree>
        </div>
        <div class="clum">
            <div style="height: 500px;overflow-y: auto;"> 
               <ul class="peo-list">
                   <li v-for="(item,index) in studentList" @click="selClick(item,index)">
                       
                       <span class="name-cls">{{item.name}}</span>
                       <span class="check-cls" :class="{'active-cls':item.checked}"></span>
                   </li>
               </ul>
            </div>
            <div class="flexCenter" style="text-align:center;width:32%;padding:0;">
                <Button type="primary" @click="submitResut">确定</Button>
            </div>
        </div>
        <div class="clum" style="padding-top: 17px;height:483px;overflow-y: auto; ">
            <div>
                <div class="studentItem" v-for="(item,index) in selStudentList">
                    <div>{{item.name}}</div>
                    <div class="del-cls" @click="delFun(item,index)"><Icon color="red" size="18" type="md-close-circle" /></div>
                </div>
                
            </div>
        </div>
    </Row>
    
</div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
export default {
    data() {
        return {
            indeterminate: true,
            checkAll: false,
            checkAllGroup: [],
            data3: [],
            indeterminate: true,
            checkAll: false,
            studentList: [

            ],
            selStudentList:[]
        }
    },
     mounted(){
        let self=this;
        self.getData();
    },
    methods: {
        ...mapActions(['setTeachers']),
        getData(){
            let self=this;
            self.$api.post("/campus/getDepartmentInfoList",{
                usertype:2
            },r=>{
                
                self.data3=JSON.parse(r.data);
                console.log(self.data3);
            })
        },
        // 树节点 事件
        changeFun(r){
            let self=this;
            if(r[0].children!=undefined){
                return;
            }
            self.studentList=[];
            self.$api.post("/campus/searchUser",{
                usertype:2,
                departid:r[0].departid,
                level:r[0].level
            },r=>{
                
                let arr=JSON.parse(r.data);
                for(let i=0;i<arr.length;i++){
                    self.studentList.push({
                        checked: false,
                        departid: arr[i].departid,
                        gender: arr[i].gender,
                        is_subscribe: arr[i].is_subscribe,
                        join_date: arr[i].join_date,
                        name: arr[i].name,
                        other_departid: arr[i].other_departid,
                        wxuserid: arr[i].wxuserid,
                        userid: arr[i].userid
                    });
                }
            })
        },
        selClick(item,index){
            let self=this;
            item.checked=!item.checked;
        },
        allFun(){
            let self=this;
            let bool=false;
            self.studentList.forEach(item => {
                if(!item.checked){
                    bool=true;
                }
              
            });
            self.studentList.forEach(item => {
                if(bool){
                    item.checked = true;
                }else{
                    item.checked = false;    
                }
            });
        },
        concat_(arr1,arr2){  
            //不要直接使用var arr = arr1，这样arr只是arr1的一个引用，两者的修改会互相影响  
            var arr = arr1.concat();  
            //或者使用slice()复制，var arr = arr1.slice(0)  
            for(var i=0;i<arr2.length;i++){  
                arr.indexOf(arr2[i]) === -1 ? arr.push(arr2[i]) : 0;  
            }  
            return arr;  
        }, 
        submitResut() {
            let self=this;
            let arr=[];
            self.studentList.forEach(item => {
                if(item.checked){
                    arr.push(item);
                }

            });
            self.selStudentList=self.concat_(arr,self.selStudentList)
            console.log(self.concat_(arr,self.selStudentList));
           
        },
        delFun(item,i){
            let self=this;
            self.selStudentList.splice(i,1)
        },
        
        saveFun(){
            this.$emit('handleselect', this.selStudentList);
            console.log(this.selStudentList)
            this.setTeachers(this.selStudentList)
        },
        seearchPeople() {
            console.log(1)
        }
    }
}
</script>

<style lang="less">

.clum{
    display: flex;flex-direction: column;
}
.checkContainer {
    min-height: 400px;
    .save-cls{
        padding:5px 40px;
        text-align:right;
    }
    .title-cls{
        font-size: 20px;
        padding:5px 15px;
        border-bottom: 1px solid #e2e5e7;
    }
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
        margin:10px 0;
        button{

            padding: 5px 20px;
        }
    }

    .titleContainer {
        height: 38px;
        display: flex;
        .all-sel{
            display:flex;
            box-sizing: border-box;
            justify-content: space-between;
            span{
                margin: 0 40px;
            }
            .alls{
                color:#63a854;
                cursor: pointer;
            }
            // padding:0 40px;
        }
        &>p {
            flex: 1;
            border:1px solid #e2e5e7;
            text-align: center;
            height: 100%;   
            line-height: 38px;
        }
        .peo-list{
            li{
                text-align:left;
                display:flex;
                justify-content: space-between;
                padding:5px 40px;
                cursor: pointer;
                span{
                    display:inline-block;
                    border:none;
                }
                .check-cls{
                    width: 15px;
                    height: 15px;

                    background:url("../../../assets/choix_nor.png");
                }
                .active-cls{
                    background:url("../../../assets/choix_pre.png");
                }
            }
            
        }
        &>div {
            flex: 1;
            border-right: 1px solid #e2e5e7;
            // text-align: center;
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
        .del-cls{
            cursor: pointer;
        }
    }
}
.ivu-modal-body{
    padding: 0;
}
</style>
