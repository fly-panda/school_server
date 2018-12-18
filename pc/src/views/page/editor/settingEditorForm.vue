<template>
<div class="settingContainer">
    <Form style="padding: 15px;" ref="formCustom" class="settingForm" :rules="ruleValidate"  :model="settingForm" label-position="top">
        <div class="title">配置填写人</div>
        <FormItem label="">
            <Checkbox @on-change="(status)=>{
                changeCheck(status ,0, 'classTeacher')
                }" class="checkboxItem" v-model="settingForm.classTeacher" label=""><span>由相关班级的班主任来填写</span>
            </Checkbox>
            <div class="class-view" v-if="checkStatus == 0">
                <div class="title-cls padding-cls">本表单将有一下班主任填写</div>
                <div class="padding-cls">
                    <Tree ref="grade" :data="gradeList"  show-checkbox></Tree>
                </div>
                
            </div>
        </FormItem>
        
        <FormItem label="">
            <Checkbox @on-change="(status)=>{
                changeCheck(status ,1, 'teacher')
                }" class="checkboxItem" v-model="settingForm.teacher" label="">
                <span>选择老师填写</span>
            </Checkbox>
            <div class="student-view" v-if="checkStatus == 1">
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
                                    <Button type="primary" @click="submitResut(1)">确定</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sel" style="border:none;">
                        <p>
                            <span>已选</span>
                            <span class="btns" @click="delAll(1)">全部删除</span>
                        </p>
                        <div class="cont">
                            <div>
                                 <div class="studentItem" v-for="(item,index) in selStudentList">
                                    <div>{{item.name}}</div>
                                    <div class="del-cls" @click="delFun(item,index,1)"><Icon color="red" size="18" type="md-close-circle" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FormItem>
       
        <FormItem label="">
            <Checkbox @on-change="(status)=>{
                changeCheck(status ,2, 'noSetting')
                }" class="checkboxItem" v-model="settingForm.noSetting" label=""><span>不设置执行人</span></Checkbox>
        </FormItem>

        <div class="title">配置填写时间与填写频率</div>
        <FormItem label="是否需要周期性提交？" style="font-weight: 400">
            <RadioGroup v-model="settingForm.isCycle">
                <Radio label="1">每周</Radio>
                <Radio label="0">否</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem v-if="settingForm.isCycle == 0" style="font-weight: 400">
            <Row>
                <Col span="8">
                    <p class="time-cls">开始时间</p>
                    <DatePicker type="datetime" placeholder="请选择日期/时间" class="time-cls"></DatePicker>
                </Col>
                <Col span="12">
                    <p class="time-cls">结束时间</p> 
                    <DatePicker type="datetime" placeholder="请选择日期/时间" class="time-cls"></DatePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem v-if="settingForm.isCycle == 1" label="设置每周执行时间段" style="font-weight: 400">
            <ul class="week-cls">
                <li v-for="(item,i) in weekList" v-text="item.name" :class="{'active-wek':item.check}" @click="selweek(item,i)"></li>
            </ul>
        </FormItem>
        <FormItem label="能否重复提交" style="font-weight: 400" prop="submitTimes">
            <RadioGroup v-model="settingForm.isRepeat">
                <Radio label="1">不限次数</Radio>
                <Radio label="0">
                    限制 
                    <span v-show="settingForm.isRepeat==0">
                        <Input style="width: 90px" type="number" size="small" v-model="settingForm.submitTimes" placeholder="限制次数"></Input>次
                    </span>
                </Radio>
            </RadioGroup>
        </FormItem>
        <div class="title">其他配置</div>
        <FormItem>
            <Checkbox v-model="settingForm.isTemplate">设为模版</Checkbox>
        </FormItem>
        <FormItem>
            <Checkbox v-model="settingForm.resultCopy">结果抄送</Checkbox>
            <div class="student-view" v-if="settingForm.resultCopy">
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
                                    <Button type="primary" @click="submitResut(2)">确定</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sel" style="border:none;">
                        <p>
                            <span>已选</span>
                            <span class="btns" @click="delAll(2)">全部删除</span>
                        </p>
                        <div class="cont">
                            <div>
                                 <div class="studentItem" v-for="(item,index) in resultList">
                                    <div>{{item.name}}</div>
                                    <div class="del-cls" @click="delFun(item,index,2)"><Icon color="red" size="18" type="md-close-circle" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </FormItem>
        <FormItem>
            <Checkbox v-model="settingForm.classRelationTeacher">结果抄送相关班主任</Checkbox>
        </FormItem>
       
    </Form>
    <div class="flexCenter">
        <Button style="width: 160px" size="small" type="primary" @click="submit">发布</Button>
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
            checkStatus: -1,
            settingForm: {
                classTeacher: false,
                teacher: false,
                noSetting: false,
                isCycle: '1',
                isRepeat: '1',
                week: [],
                submitTimes: '',
                isTemplate: false,
                resultCopy: false,
                classRelationTeacher: false
            },
            ruleValidate: {
                submitTimes: [{
                    message: '请输入数字',
                    trigger: 'blur'
                }, {
                    validator: validateMobile,
                    trigger: 'blur'
                }]
                
            },
            gradeList:[],// 班主任列表
            studentList:[],//人员
            selStudentList:[],
            weekList:[
                {name:"周一",id:1,check:false},
                {name:"周二",id:2,check:false},
                {name:"周三",id:3,check:false},
                {name:"周四",id:4,check:false},
                {name:"周五",id:5,check:false},
                {name:"周六",id:6,check:false},
                {name:"周日",id:7,check:false}
            ],
            resultList:[]
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
        submit(){
            console.log(this.settingForm)
        },
        changeCheck(status, index, type) {
            console.log(status, index)
            if (status) {
                this.settingForm.classTeacher = false
                this.settingForm.teacher = false
                this.settingForm.noSetting = false
                this.settingForm[type] = true
                this.checkStatus = index
            } else {
                this.checkStatus = -1
            }
        },
        getData(){
            let self=this;
            self.$api.post("/campus/getDepartmentInfoList",{
                usertype:1
            },r=>{
                 
                self.gradeList=JSON.parse(r.data);
                // console.log(self.data3);
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
                usertype:1,
                departid:r[0].departid,
                level:r[0].level
            },r=>{
                console.log(r)
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
        submitResut(type) {
            let self=this;
            let arr=[];
            
            self.studentList.forEach(item => {
                if(item.checked){
                    arr.push(item);
                }

            });
            if(type==1){
                self.selStudentList=self.concat_(arr,self.selStudentList);
                console.log(1,self.selStudentList)
            }else if(type==2){
                self.resultList=self.concat_(arr,self.resultList)
                console.log(2,self.resultList);
            }
            
           
        },
        delFun(item,i,t){
            let self=this;
            if(t==1){
                self.selStudentList.splice(i,1)
            }else if(t==2){
                self.resultList.splice(i,1)
            }
            
        },
        delAll(t){
            let self=this;
            if(t==1){
                self.selStudentList=[];
            }else if(t==2){
                self.resultList=[];
            }
        },
        selweek(item,i){
            let self=this;
            item.check=!item.check;
        }
    }
}
</script>

<style lang="less" scoped>
.settingContainer {
    width: 905px;
    height: 80%;
    background: #fff;
    margin:20px auto;
    overflow-y: auto;

    .title {
        font-size: 15px;
        font-weight: 700;
        // text-align: center;
        height: 35px;
        line-height: 35px;
        margin-bottom: 15px
    }
    .flexCenter {
        width: 100%;
        padding: 30px;
        bottom: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
}
.class-view{
    width:610px;
    border: 1px solid #C3C9D0;
    margin-left: 37px;

}
.title-cls{
    border-bottom: 1px solid #C3C9D0;
    
}
.padding-cls{
   padding-left: 20px; 
}
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
