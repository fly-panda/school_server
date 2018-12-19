<template>
<div class="container">
   <div class="student-view">
                <div class="title-cls flex-cls">
                    <p>老师范围</p>
                    <p class="posi-cls">
                        <input type="text" placeholder="请输入姓名"> 
                        <img src="@/assets/search_ico.png" alt="">
                    </p>
                </div>
                <div class="list-view">
                    <div class="bumen">
                        <p>部门</p>
                        <div class="cont">
                            <div>
                                <Tree style="margin-left: 15px" ref="department" :data="gradeList" @on-select-change="changeFun"></Tree>
                            </div>
                        </div>
                    </div>
                    <div class="renyuan">
                        <p>
                            <span>人员</span>
                            <span class="btns" @click="allFun">全选</span>
                        </p>
                        <div class="cont">
                            <div>
                                <ul class="peo-list">
                                   <li v-for="(item,index) in studentList" @click="selClick(item,index)">
                                       
                                       <span class="name-cls">{{item.name}}</span>
                                       <span class="check-cls" :class="{'active-cls':item.checked}"></span>
                                   </li>
                               </ul>
                               <div class="flexCenters">
                                    <Button type="primary" @click="submitResut">确定</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sel" style="border:none;">
                        <p>
                            <span>已选</span>
                            <span class="btns" @click="delAll">全部删除</span>
                        </p>
                        <div class="cont">
                            <div>
                                 <div class="studentItem" v-for="(item,index) in selStudentList">
                                    <div>{{item.name}}</div>
                                    <div class="del-cls" @click="delFun(item,index)"><Icon color="red" size="18" type="md-close-circle" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</div>
</template>

<script>
import selectGradeForm from "../container/selectGradeForm"
import selectStudentForm from "../container/selectStudentForm"
const validateMobile = (rule, value, callback) => {
    if (!Number.isInteger(+value)) {
        callback(new Error('请输入数字值'));
    } else {
        callback();
    }
}
export default {
    data() {
        return {

            gradeList:[],// 班主任列表
            studentList:[],//人员
            selStudentList:[],
            
        }
    },
    components: {
        selectGradeForm,
        selectStudentForm
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            let self=this;
            self.$api.post("/campus/getDepartmentInfoList",{
                usertype:2
            },r=>{
                 console.log(r)
                self.gradeList=JSON.parse(r.data);
                // console.log(self.data3);
            },e=>{
                console.log(e)
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
                // console.log(r)
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
            self.selStudentList=self.concat_(arr,self.selStudentList);

            
           
        },
        delFun(item,i){
            let self=this;
             self.selStudentList.splice(i,1)
            
        },
        delAll(){
            let self=this;
                self.selStudentList=[];

        },
        selweek(item,i){
            let self=this;
            item.check=!item.check;
        }
    }
}
</script>

<style lang="less" scoped>

.student-view{
    margin-left: 37px;
    width: 610px;
    max-height: 339px;
    border: 1px solid #C3C9D0;
    overflow-y: auto;
}
.flex-cls{
    width:100%;
    display:flex;
    justify-content: space-between;
}
.title-cls{
    border-bottom: 1px solid #C3C9D0;
    
}
.student-view{
    .title-cls{
        padding:0 10px;
        input{
            height: 22px;
            border: 1px solid #C3C9D0;
        }
    }
    .posi-cls{
        position: relative;
        img{
            width: 20px;
            height:20px;
            cursor: pointer;
            position: absolute;
            right:0;
            top:50%;
            margin-top: -10px;
        }
    }
    .list-view{
        width: 100%;
        display:flex;
        
        >div{
            height: 298px;
            
            flex:1;
            border-right: 1px solid #C3C9D0;
            >p{
                text-align:center;
                border-bottom: 1px solid #C3C9D0;
            }
        }
        .renyuan,.sel{
            >p{
                display:flex;
                padding:0 10px;
                justify-content: space-between;
                .btns{
                    cursor: pointer;
                    color:#63a854;
                }
            }
        }
        .cont>div{
            height: 265px;
            overflow-y: auto;
        }
    }
}
.peo-list{
    li{
        text-align:left;
        display:flex;
        justify-content: space-between;
        padding:5px 40px;
        cursor: pointer;
        align-items: center;
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
    .flexCenters {
        display: flex;
        justify-content: center;
        margin:10px 0;
        button{

            padding: 5px 20px;
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
    .time-cls{
        width: 200px;
        text-align:center;
        font-size: 12px;
        color: #575757;
        letter-spacing: -0.26px;
    }
    .week-cls{
        height: 30px;
        padding: 6px 10px;
        li{
            width:56px;
            height: 30px;
            float:left;
            text-align:center;
            line-height: 30px;
            border: 1px solid #CCCCCC;
            cursor: pointer;
        }
        .active-wek{
            background: #A8BACE;
            border: 1px solid #A8BACE;
            border-radius: 2px;
        }
    }
</style>
