<template>
<div>
    <div class="previewContents">
       
        <div class="header">{{previewObj.title}}</div>
        <div class="content">
            <div class="discribe" v-html="previewObj.describe">
                
            </div>
<div v-for="(cont,index) in previewObj.data">
    
            <div class="selectStudentContainer" v-if="cont.ele=='selectstudent'">
                <div class="title" :class="{'require-cls':cont.obj.require}">选择学生</div>
                <div class="point">提示内容</div>
                <!-- {{cont.obj.selArr}} -->
                <div class="selectBtn" v-if="!type_student" @click="selS">       
                    <span v-show="cont.obj.selArr.length==0">点击选择学生范围</span>
                    <span v-for="item in cont.obj.selArr">{{item.name}}、</span>
                </div>
                <div class="student-view" v-if="type_student">
                    <div class="title-cls flex-cls">
                        
                        <p class="posi-cls">
                            <input type="text" placeholder="请输入姓名"> 
                            <img src="@/assets/search_ico.png" alt="">
                        </p>
                        <p class="btns" @click="saveStudent(cont.obj.selArr)">确认</p>
                    </div>
                    <div class="view-list">
                        <div style="border-right:1px solid #C3C9D0;">
                            <p>部门</p>
                            <div class='cont'>
                                <div>
                                    <Tree style="margin-left: 15px" ref="students" :data="studentData" @on-select-change="changeFun"></Tree>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>人员</p>
                            <div class='cont'>
                                <!-- {{studentList}} -->
                                 <ul class="peo-list">
                                   <li v-for="(item,index) in studentList" @click="selClick(item,index)">
                                       
                                       <span class="name-cls">{{item.name}}</span>
                                       <span class="check-cls" :class="{'active-cls':item.checked}"></span>
                                   </li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="selectStudentContainer" v-if="cont.ele=='selectteacher'">
                <div class="title" :class="{'require-cls':cont.obj.require}">选择老师</div>
                <div class="point">提示内容</div>
                <div class="selectBtn" v-if="!type_teacher" @click="selT">    
                    点击选择老师范围
                </div>
                <div class="teacher-view" v-if="type_teacher">
                     <div class="title-cls flex-cls">
                        
                        <p class="posi-cls">
                            <input type="text" placeholder="请输入姓名"> 
                            <img src="@/assets/search_ico.png" alt="">
                        </p>
                        <p class="btns">确认</p>
                    </div>
                     <div class="view-list">
                        <div style="border-right:1px solid #C3C9D0;">
                            <p>部门</p>
                            <div class='cont'>
                                <div>
                                    <Tree style="margin-left: 15px" ref="students" :data="teacherData" @on-select-change="changeFuns" ></Tree>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>人员</p>
                            <div class='cont'>
                                <!-- {{studentList}} -->
                                 <ul class="peo-list">
                                   <li v-for="(item,index) in teacherList" @click="selsClick(item,index)">
                                       
                                       <span class="name-cls">{{item.name}}</span>
                                       <span class="check-cls" :class="{'active-cls':item.checked}"></span>
                                   </li>
                               </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="selectStudentContainer" v-if="cont.ele=='selectdepartment'">
                <div class="title" :class="{'require-cls':cont.obj.require}">选择部门</div>
                <div class="point">提示内容</div>
                <div class="selectBtn" v-if="!type_department" @click="selD">
                    点击选择部门范围
                </div>
                <div class="department-view" v-if="type_department">
                     <div class="title-cls flex-cls">
                        
                        <p class="posi-cls">
                            <input type="text" placeholder="请输入姓名"> 
                            <img src="@/assets/search_ico.png" alt="">
                        </p>
                        <p class="btns">确认</p>
                    </div>
                    <div class="view-list">
                        <div style="border-right:1px solid #C3C9D0;">
                            <p>部门</p>
                            <div class='cont center-cls'>
                                <div>
                                    <Tree style="margin-left: 15px" ref="students" :data="departmentData" show-checkbox></Tree>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="selectStudentContainer" v-if="cont.ele=='selectgrade'">
                <div class="title" :class="{'require-cls':cont.obj.require}">选择班级</div>
                <div class="point">提示内容</div>
                <div class="selectBtn" v-if="!type_grade" @click="selG">
                    点击选择班级范围
                </div>
                <div class="grade-view" v-if="type_grade">
                    <div class="title-cls flex-cls">
                        
                        <p class="posi-cls">
                            <input type="text" placeholder="请输入姓名"> 
                            <img src="@/assets/search_ico.png" alt="">
                        </p>
                        <p class="btns">确认</p>
                    </div>
                    <div class="view-list">
                        <div style="border-right:1px solid #C3C9D0;">
                            <p>部门</p>
                            <div class='cont center-cls'>
                                <div>
                                    <Tree style="margin-left: 15px" ref="students" :data="gradeData" show-checkbox></Tree>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 文件下载 -->
            <div class="selectStudentContainer" v-if="cont.ele=='download'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <div class="downloadBtn" v-for="(item,ind) in cont.obj.items" :key="ind" @click="downloadFun(item)">
                    <span >{{item.label_name}}</span>
                    <Icon size="19" type="md-download" />
                </div>
            
            </div>
            <div class="imgPreview" v-if="cont.ele=='imgshow'">
                <p v-for="(item,ind) in cont.obj.imgArr">
                    <img :src="baseImg+item.url" alt="">
                </p>
                
                <!-- <img src="@/assets/logo.png" alt=""> -->
            </div>
           
            <!-- 输入框 -->
            <div class="selectStudentContainer" v-if="cont.ele=='input'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <Input  type="text" placeholder="请输入文字" v-model="cont.obj.placeholder"></Input>
            </div>
            <!-- 长文本 -->
            <div class="selectStudentContainer" v-if="cont.ele=='text'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                 <i-input type="textarea" :rows="4" class="textarea-cls" name="" placeholder="请输入文字" v-model="cont.obj.placeholder"></i-input>
            </div>
            <!-- 描述文字 -->
            <div class="discribe" v-if="cont.ele=='p'">
                <p>{{cont.obj.describe}}</p>
            </div>
            <!-- 下拉框 -->
            <div class="selectStudentContainer" v-if="cont.ele=='select'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                {{cont.obj.value}}
                <Select  v-model="cont.obj.value" style="width:250px;">
                    <Option v-for="item in cont.obj.items" :value="item.label_value" :key="item.label_value">{{ item.label_name }}</Option>
                </Select>
            </div>
            <div class="selectStudentContainer" v-if="cont.ele=='selectcontact'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                {{cont.obj.items}}
                 <!-- v-model="cont.obj.value" -->
                 <div>
                    <Select style="width:200px;">
                        <Option v-for="item in cont.obj.items" :value="item.label_value" :key="item.label_value">{{ item.label_name }}</Option>
                    </Select>
                    <Select v-model="cont.obj.value1" style="width:200px;margin-left: 20px;">
                        <Option v-for="a in twoArrs" :value="a.label_value" :key="a.label_value">{{ a.label_name }}</Option>
                    </Select>
                 </div>
              
            </div>
            <div class="selectStudentContainer" v-if="cont.ele=='checkbox'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <CheckboxGroup size="large" class="positionColumn" :model.sync="cont.obj.value">
                    <Row v-for="(item,ind) in cont.obj.items" :key="ind">
                        <Checkbox class="checkboxItem" :label="item.label_name"></Checkbox>
                    </Row>
                    <Row>
                        <Col span="3">
                            <Checkbox class="checkboxItem" label="其他"></Checkbox>
                        </Col>
                        <Col span="12">
                            <Input  type="text" size="small" placeholder="请输入文字"></Input>
                        </Col>
                    </Row>
                </CheckboxGroup>
            </div>
            <!-- 打分 -->
            <div class="selectStudentContainer" v-if="cont.ele=='score'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
<!--                 {{cont.obj.valueArr}} -->
                <CheckboxGroup size="large" class="positionColumn" :model.sync="cont.obj.valueArr">
                    <Row v-for="(item,ind) in cont.obj.items" :key="ind">
                        <Checkbox class="checkboxItem" :value="item.label_value"><span>{{item.label_name}}
                            &nbsp;
                            <span v-text="item.scoreType=='add'?'+':'-'"></span>{{item.label_value}}分</span>
                        </Checkbox>
                    </Row>
                </CheckboxGroup>
            </div>
            <!-- 单选 -->
            <div class="selectStudentContainer" v-if="cont.ele=='radio'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <RadioGroup size="large" class="positionColumn" :model.sync="cont.obj.value">
                    <Row v-for="(item,ind) in cont.obj.items" :key="ind">   
                        <Radio class="checkboxItem" :value="item.label_value" :label="item.label_name"></Radio>
                   
                    </Row>
                </RadioGroup>
            </div>
            <!-- 是否 -->
            <div class="selectStudentContainer" v-if="cont.ele=='truefalse'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <RadioGroup size="large">
                    <Radio label="是"></Radio>
                    <Radio style="margin-right: .8rem"  label="否"></Radio>
                </RadioGroup>
            </div>
            <!-- 日期时间 -->
            <div class="selectStudentContainer" v-if="cont.ele=='datepicker'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <!-- <DatePicker type="date" placeholder="请选择日期" style="width: 200px"></DatePicker> -->
                 <row>
                    <i-col span="8" v-for="(item,ind) in cont.obj.chooseCheck" :key="ind">
                        <!-- {{cont.obj.valueDate}} -->
                        <DatePicker v-show="item=='date'" format="yyyy/MM/dd" :value="cont.obj.valueDate" type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
                        <Time-picker v-show="item=='time'" format="HH:mm:ss" :value="cont.obj.valueTime" type="time" placeholder="选择时间" style="width: 200px"></Time-picker>
                    </i-col>
                </row>
                 
            </div>
            <!-- 详细地址 -->
            <div class="selectStudentContainer" v-if="cont.ele=='address'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <Row>
                    <Col span="7">
                        <Select placeholder="省/市/区/直辖市" v-model="cont.obj.shengValue" @on-change="getShi" style="width:10rem;">
                            <Option v-for="item in shengArr" :value="item.id" :key="item.id">{{ item.name }}</Option>
                        </Select>
                    </Col>
                    <Col span="7">
                        <Select placeholder="市" v-model="cont.obj.shiValue" @on-change="getQu" style="width:10rem;">
                            
                            <Option v-for="item in shiArr" :value="item.id" :key="item.id">{{ item.name }}</Option>
                        </Select>
                    </Col>
                    <Col span="7">
                        <Select placeholder="县/区" v-model="cont.obj.quValue" style="width:10rem;">
                             <Option v-for="item in quArr" :value="item.id" :key="item.id">{{ item.name }}</Option>
                        </Select>
                    </Col>
                </Row>
                <Row style="margin-top: .4rem">
                    <Input  type="text" v-model="cont.obj.value" placeholder="请输入详细地址"></Input>
                </Row>
            </div>
            <!-- 文件上传 -->
            <div class="selectStudentContainer" v-if="cont.ele=='uploads'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <Row class="fileList-cls" v-for="(item,ind) in cont.obj.value" :key="ind">
                    <p class="flex-cls">
                        <span class="title-cls" :title="item.name">{{item.name}}</span>
                        <Icon class="close-cls" type="ios-close" @click="delFile(cont.obj.value,ind)"/>
                        <p class="size-cls">{{item.size}}</p>
                    </p>
                </Row>
                <Row class='btn-view'>
                    <input class="files" id="files" type="file" accept="image/*" @change="addFile(cont.obj)">            
                    <i-button type="ghost" icon="md-add">点击上传图片</i-button>
                        
                    
                </Row>
            </div>
            <div class="selectStudentContainer" v-if="cont.ele=='slider'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <Row style="margin-top:40px;">
                    <Col span="1">
                        <span>{{cont.obj.low}}</span>
                    </Col>
                    <Col span="14">
                        <vueSlider :min="cont.obj.low" :max="cont.obj.high" :value="cont.obj.value"/>
                    </Col>
                    <Col span="1">
                        <span>{{cont.obj.high}}</span>
                    </Col>
                </Row>
              
            </div>
            <!-- 图片选择 -->
            <div class="selectStudentContainer" v-if="cont.ele=='imgcheck'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <div class="imgCheckPreview">
                    <div v-for="(item,ind) in cont.obj.imgArr">
                        <img :src="baseImg+item.url" alt="">
                        <Checkbox class="checkboxItem" :label="item.labels"></Checkbox>
                    </div>
                    
                </div>
            </div>
            
            
</div>
            <Row style="display: flex; justify-content: center">
                 <!-- :disabled="!isSave" -->
                <Button type="primary" style="margin: 2rem auto; width: 8rem" @click="saveForm">提  交</Button>
            </Row>
        </div>
    </div>
    
</div>
</template>

<script>
import datas from "_c/mock.js"
export default {
// 'previewObj',
    props: ['isSave','types'],
    data() {
        return {
            checkAllGroup: [],
            previewObj:{},
            twoArrs:[],
            a:"",
            baseImg:this.$api.getBase(),
            shengArr:[],
            shiArr:[],
            quArr:[],
            indexs:0,
            type_student:false,
            type_teacher:false,
            type_department:false,
            type_grade:false,
            studentData:[],
            studentList:[],
            teacherData:[],
            teacherList:[],
            departmentData:[],
            departmentList:[],
            gradeData:[],
            gradeList:[],
        }
    },
    filter:{
        
    },
    mounted(){
        // this.previewObj=this.$api.sGetObject("previewObj");

        this.previewObj=datas.data;
        this.getData();
        this.getSheng();
        let arr=this.previewObj.data;

        if(this.types=='edits'){
            for(let i=0;i<arr.length;i++){
                
                if(arr[i].ele=="address"){
                    this.getShi(arr[i].obj.shengValue);
                    this.getQu(arr[i].obj.shiValue);
                }
            }
        }

    },
    methods: {
        selS(){
            let self=this;
            self.$api.post("/campus/getDepartmentInfoList",{
                usertype:1
            },r=>{
                 
                self.studentData=JSON.parse(r.data);
                // console.log(self.data3);
            })
            self.type_student=!self.type_student
        }, 
        selT(){
            let self=this;
            self.$api.post("/campus/getDepartmentInfoList",{
                usertype:2
            },r=>{
                 
                self.teacherData=JSON.parse(r.data);
                // console.log(self.data3);
            })
            self.type_teacher=!self.type_teacher
        },
        selD(){
            let self=this;
            self.$api.post("/campus/getDepartmentInfoList",{
                usertype:2
            },r=>{
                 
                self.departmentData=JSON.parse(r.data);
                // console.log(self.data3);
            })
            self.type_department=!self.type_department
        },
        selG(){
            let self=this;
            self.$api.post("/campus/getDepartmentInfoList",{
                usertype:1
            },r=>{
                 
                self.gradeData=JSON.parse(r.data);
                // console.log(self.data3);
            })
            self.type_grade=!self.type_grade
        },
        saveStudent(res){
            let self=this;
            console.log(res)
            res=[];
            self.studentList.forEach(item => {
                 if(item.checked){
                        res.push(item);
                    }
            });
            
          
            this.type_student=!this.type_student;

        },
        getData(arr,ids){
            let self=this;
            // self.$api.post("/campus/getDepartmentInfoList",{
            //     usertype:1
            // },r=>{
                 
            //     self.studentData=JSON.parse(r.data);
            //     // console.log(self.data3);
            // })
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
        // 树节点 事件
        changeFuns(r){
            let self=this;
            if(r[0].children!=undefined){
                return;
            }
            self.teacherList=[];
            self.$api.post("/campus/searchUser",{
                usertype:1,
                departid:r[0].departid,
                level:r[0].level
            },r=>{
                
                let arr=JSON.parse(r.data);
                for(let i=0;i<arr.length;i++){
                    self.teacherList.push({
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
        concat_(arr1,arr2){  
            //不要直接使用var arr = arr1，这样arr只是arr1的一个引用，两者的修改会互相影响  
            var arr = arr1.concat();  
            //或者使用slice()复制，var arr = arr1.slice(0)  
            for(var i=0;i<arr2.length;i++){  
                arr.indexOf(arr2[i]) === -1 ? arr.push(arr2[i]) : 0;  
            }  
            return arr;  
        }, 
        selClick(item,index){
            let self=this;
            item.checked=!item.checked;
        },
        selsClick(item,index){
            let self=this;
            item.checked=!item.checked;
        },
        getSheng(){

            this.$api.get("/city/getCity",{
                pid:0
            },r=>{
                this.shengArr=JSON.parse(r.data);
            }) 
        },
        getShi(res){

            this.$api.get("/city/getCity",{
                pid:res
            },r=>{
                this.shiArr=JSON.parse(r.data);
            })
        },
        getQu(item){
            this.$api.get("/city/getCity",{
                pid:item
            },r=>{
                this.quArr=JSON.parse(r.data);
            })
        },
        //二级下拉方法
        change(res){
            // console.log(res)
        },
        checkAllGroupChange() {

        },
        saveForm(){
            console.log(this.previewObj)
        },
        downloadFun(res){
            let self=this;

            window.location.href=this.baseImg+"api/file/download?path="+res.url;
        },
        addFile(res){
            let self=this;
            let fileObj=document.getElementById("files").files[0];
            let sizes=self.$api.onver(fileObj.size);
            self.$api.uploadFile("file/upload ", {},fileObj, (r) => {
                res.value.push({
                    name:fileObj.name,
                    url:r.data,
                    size:sizes
                })            
             
            });
        },
        delFile(res,i){
            let self=this;
            res.splice(i,1)
        }
    }
}
</script>

<style lang="less" scoped>
    .previewContents {
        width: 100%;

        background: #fff;
        // margin: 30px auto;
        // overflow-y: auto;
        
        .header {
            height: 50px;
            font-size: 16px;
            background: #5DB75D;
            color: #fff;
            font-weight: 700;
            text-align: center;
            line-height: 50px;
        }

        .content {
            padding: 0 1.5rem 2rem 1.5rem;
            height: auto;

            .discribe {
                padding: 15px 0;
                line-height: 1.3rem;
                overflow-x: auto;
                img{
                    width:200px;
                }
            }

            .selectStudentContainer {
                margin-bottom: 1.2rem;

                .title {
                    font-weight: 700;
                    font-size: .9rem;
                }

                .point {
                    margin-bottom: .6rem;
                }

                .selectBtn {
                    background: #FFFFFF;
                    border: 1px solid #5DB75D;
                    color: #5DB75D;
                    text-align: center;
                    display:inline-block;
                    min-width: 200px;
                    padding:5px;
                    line-height: 1.5rem;
                    cursor: pointer;
                }

                .downloadBtn {
                    border: 1px dashed #c1c1c1;
                    color: #5DB75D;
                    display: flex;
                    height: 2.2rem;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 1.2rem 0 .4rem;
                    margin-top: .6rem;
                    cursor: pointer;
                }

            }

            .imgPreview {
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-between;
                p{
                    padding:10px;
                }
                img {
                    width: 175px;
                    height: 175px;
                }
            }
            .imgCheckPreview {
                display: flex;
                flex-wrap: wrap;
                // justify-content: space-between;
                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    padding: 10px;
                }
                img {
                    width: 140px;
                    height: 140px;
                }
            }
        }
    }
    .textarea-cls{
        width: 100%;
        resize: none;
    }
    .require-cls:before {
        content: '*';
        display: inline-block;
        margin-right: 4px;
        line-height: 1;
        font-family: SimSun;
        font-size: 12px;
        color: #f30;

    }
    .ivu-select-dropdown{
        top:0!important;
    }
    .btn-view{
        position: relative;    
        margin:3px 0;
        button{
            width:252px;
            height:52px;
            background: #FFFFFF;
            border: 1px solid #dcdee2;
            border-radius: 3px;
            color: #686868;
            span{
                font-size: 18px;
            }
        }
        .files{
            width:140px;
            height:50px;
            position: absolute;
            top:0;
            left:0;
            opacity:0;
            cursor: pointer;
        }
        .dashed-cls{
            border: 1px dashed #C3C9D0;
        }
    }
    .fileList-cls{
        width: 252px;
        height: 52px;
        background: #FFFFFF;
        border-radius: 3px;
        border: 1px solid #dcdee2;
        margin: 3px 0;
    }
    .flex-cls{
        display: flex;
        justify-content:space-between;    
    }
    .close-cls{
        font-size: 20px;
        cursor: pointer;
    }
    .title-cls{
        font-family: PingFang-SC-Medium;
        font-size: 14px;
        color: #4A4A4A;
        letter-spacing: 0.84px;
        margin:3px 7px;
        overflow: hidden; white-space: nowrap; text-overflow: ellipsis
    }
    .size-cls{

        font-size: 12px;
        color: #9B9B9B;
        letter-spacing: 0.72px;
        margin:2px 7px;
    }
    .student-view,.teacher-view,.department-view,.grade-view{
        width: 362px;
        height: 339px;
        border: 1px solid #C3C9D0;
    }
    .title-cls{
        border-bottom: 1px solid #C3C9D0;
            padding:5px 10px;
        input{
            height: 22px;
            border: 1px solid #C3C9D0;
        }
        .btns{
            color: #5DB75D;
            cursor: pointer;
        }
    }

.flex-cls{
    width:100%;
    display:flex;
    justify-content: space-between;
    // padding:0;
    margin:0;
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
    .view-list{
        display:flex;
        div{
            flex:1;
            p{
                text-align:center;
                border-bottom: 1px solid #C3C9D0;
                padding:5px;

            }
            .cont{
                height: 276px;
                overflow-y: auto;
            }
        }
    }

    .peo-list{
            li{
                text-align:left;
                display:flex;
                justify-content: space-between;
                padding:5px 20px;
                cursor: pointer;
                span{
                    display:inline-block;
                    border:none;
                }
                .check-cls{
                    width: 15px;
                    height: 15px;

                    background:url("../assets/choix_nor.png");
                }
                .active-cls{
                    background:url("../assets/choix_pre.png");
                }
            }
            
        }
        .center-cls{
            margin-left: 30%;
        }
</style>
