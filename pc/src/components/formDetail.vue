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
                <!-- {{cont.obj.selObj}}  -->
                <div class="selectBtn" v-if="!type_student" @click="selS">    
                
                    <span v-text="cont.obj.selObj.name?cont.obj.selObj.name:'点击选择学生范围'"></span>
                </div>
                <div class="student-view" v-if="type_student">
                    <div class="title-cls flex-cls">
                        
                        <p class="posi-cls">
                            <input type="text" placeholder="请输入姓名"> 
                            <img src="@/assets/search_ico.png" alt="">
                        </p>
                        <p class="btns" @click="saveStudent(cont.obj)">确认</p>
                    </div>
                    <div class="view-list">
                        <div style="border-right:1px solid #C3C9D0;">
                            <p>部门</p>
                            <div class='cont'>
                                <div>
                                    <!-- studentData -->
                                    <Tree style="margin-left: 15px" ref="students" :data="cont.obj.items" @on-select-change="changeFun"></Tree>
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
                                       <span class="check-cls" :class="{'active-cls':item.userid==studentObj.userid}"></span>
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
                    
                    <span v-text="cont.obj.selObj.name?cont.obj.selObj.name:'点击选择老师范围'"></span>
                </div>
                <div class="teacher-view" v-if="type_teacher">
                     <div class="title-cls flex-cls">
                        
                        <p class="posi-cls">
                            <input type="text" placeholder="请输入老师"> 
                            <img src="@/assets/search_ico.png" alt="">
                        </p>
                        <p class="btns" @click="saveTeacher(cont.obj)">确认</p>
                    </div>
                     <div class="view-list">
<!--                         <div style="border-right:1px solid #C3C9D0;">
                            <p>部门</p>
                            <div class='cont'>
                                <div>
                                    <Tree style="margin-left: 15px" ref="students" :data="teacherData" @on-select-change="changeFuns" ></Tree>
                                </div>
                            </div>
                        </div> -->
                        <div>
                            <p>人员</p>
                            <div class='cont'>
                                <!-- {{studentList}} -->
                                 <ul class="peo-list">
                                   <li v-for="(item,index) in 
                                   cont.obj.items" @click="selsClick(item,index)">
                                       
                                       <span class="name-cls">{{item.name}}</span>
                                       <span class="check-cls" :class="{'active-cls':item.userid==teacherObj.userid}"></span>
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
                    
                     <span v-text="cont.obj.selObj.title?cont.obj.selObj.title:'点击选择部门范围'"></span>
                </div>
                <div class="department-view" v-if="type_department">
                     <div class="title-cls flex-cls">
                        
                        <p class="posi-cls">
                            <input type="text" placeholder="请输入部门"> 
                            <img src="@/assets/search_ico.png" alt="">
                        </p>
                        <p class="btns" @click="saveDepartment(cont.obj)">确认</p>
                    </div>
                    <div class="view-list">
                        <div style="border-right:1px solid #C3C9D0;">
                            <p>部门</p>
                            <div class='cont center-cls'>
                                <div>
                                    <!-- :data="departmentData" -->
                                    <!-- <Tree style="margin-left: 15px" ref="departmentTree" :data="cont.obj.items" show-checkbox :multiple="departmentMultiple"></Tree> -->
                                    <RadioGroup v-model="cont.obj.value">
                                        <Row v-for="(item,ind) in cont.obj.items" :key="ind">
                                            <Radio class="checkboxItem" :label="item.departid"><span>{{item.title}}</span> </Radio>
                                        </Row>
                                    </RadioGroup>
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
                    
                    <span v-text="cont.obj.selObj.title?cont.obj.selObj.title:'点击选择班级范围'"></span>
                </div>
                <div class="grade-view" v-if="type_grade">
                    <div class="title-cls flex-cls">
                        
                        <p class="posi-cls">
                            <input type="text" placeholder="请输入班级"> 
                            <img src="@/assets/search_ico.png" alt="">
                        </p>
                        <p class="btns" @click="saveGrade(cont.obj)">确认</p>
                    </div>
                    <div class="view-list">
                        <div style="border-right:1px solid #C3C9D0;">
                            <p>部门</p>
                            <div class='cont center-cls'>
                                <div>
                                     <!-- :data="gradeData" -->
                                    <!-- <Tree style="margin-left: 15px" ref="grades" :data="cont.obj.items" show-checkbox multiple="false"></Tree> -->
                                     <RadioGroup v-model="cont.obj.value">
                                        <Row v-for="(item,ind) in cont.obj.items" :key="ind">
                                            <Radio class="checkboxItem" :label="item.departid"><span>{{item.title}}</span> </Radio>
                                        </Row>
                                    </RadioGroup>
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
            <!-- 图片展示 -->
            <div class="imgPreview selectStudentContainer" v-if="cont.ele=='imgshow'">
                <p v-for="(item,ind) in cont.obj.imgArr">
                    <img :src="baseImg+item.url" alt="" @click="showImgFun(item.url)">
                </p>
                
                <!-- <img src="@/assets/logo.png" alt=""> -->
            </div>
            <!-- 图片上传 -->
            <div class="selectStudentContainer" v-if="cont.ele=='uploadimg'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <div class="imgPreview uploadimg-cls">
                    <p v-for="(item,ind) in cont.obj.uploadList">
                        <img :src="baseImg+item.url" alt="">
                        <Icon type="md-close-circle" class="delImg" @click="delImgFun(cont.obj,ind)"/>
                    </p>
                    <p class="post">
                        <Icon type="md-camera" />
                        上传图片
                        <input class="files" id="fileImg" type="file" accept="image/*" @change="addFileImg(cont.obj)"> 
                    </p>
                </div>
               
                
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

                <Select  v-model="cont.obj.value" style="width:250px;">
                    <Option v-for="(item,ind) in cont.obj.items" :value="ind" :key="item.label_value">{{ item.label_name }}</Option>
                </Select>
            </div>
            <!-- 二级下拉 -->
            <div class="selectStudentContainer" v-if="cont.ele=='selectcontact'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                 <div>
                    <Select style="width:200px;" v-model="cont.obj.value" @on-change="changeSel(cont.obj,cont.obj.value)">
                        <Option v-for="(item,ind) in cont.obj.items" :value="ind" :key="ind">{{ item.label_name }}</Option>
                    </Select>
                    <Select v-model="cont.obj.value1" style="width:200px;margin-left: 20px;">
                        <Option v-for="(a,i) in cont.obj.two_arr" :value="i" :key="i">{{ a.label_name }}</Option>
                    </Select>
                 </div>
              
            </div>
            <!-- 复选框 -->
            <div class="selectStudentContainer" v-if="cont.ele=='checkbox'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <CheckboxGroup size="large" class="positionColumn" v-model="cont.obj.value">
                    <Row v-for="(item,ind) in cont.obj.items" :key="ind">
                        <Checkbox class="checkboxItem" :label="ind"><span>{{item.label_name}}</span> </Checkbox>
                    </Row>
                    <Row v-if="cont.obj.hasOther">
                        <Col span="3">
                            <Checkbox class="checkboxItem" label="other">
                                <span>其他</span>
                            </Checkbox>
                        </Col>
                        <Col span="12">
                            <Input type="text" size="small" v-model="cont.obj.otherValue" placeholder="请输入文字"></Input>
                        </Col>
                    </Row>
                </CheckboxGroup>
            </div>
            <!-- 打分 -->
            <div class="selectStudentContainer" v-if="cont.ele=='score'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
<!--                 {{cont.obj.valueArr}} -->
                <CheckboxGroup v-if="cont.obj.isCheck" size="large" class="positionColumn" v-model="cont.obj.valueArr">
                    <Row v-for="(item,ind) in cont.obj.items" :key="ind">
                        <Checkbox class="checkboxItem" :value="item.label_value" :label="ind"><span>{{item.label_name}}
                            &nbsp;
                            <span v-text="item.scoreType=='add'?'+':'-'"></span>{{item.label_value}}分</span>
                        </Checkbox>
                    </Row>
                </CheckboxGroup>
                <RadioGroup v-if="!cont.obj.isCheck" size="large" class="positionColumn" v-model="cont.obj.value">
                    <Row v-for="(item,ind) in cont.obj.items" :key="ind">   
                        <Radio class="checkboxItem" :value="item.label_value" :label="ind">
                            <span>{{item.label_name}}
                            &nbsp;
                            <span v-text="item.scoreType=='add'?'+':'-'"></span>{{item.label_value}}分</span>
                        </Radio>
                   
                    </Row>
                </RadioGroup>
            </div>
            <!-- 单选 -->
            <div class="selectStudentContainer" v-if="cont.ele=='radio'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <RadioGroup size="large" class="positionColumn" v-model="cont.obj.value">
                    <Row v-for="(item,ind) in cont.obj.items" :key="ind">   
                        <Radio class="checkboxItem" :value="item.label_value" :label="ind">
                            <span>{{item.label_name}}</span>
                        </Radio>
                   
                    </Row>
                    <Row v-if="cont.obj.hasOther">   


                        <Col span="3">
                            <Radio class="checkboxItem" value="other" label="other">
                            <span>其他</span>
                            
                        </Radio>
                        </Col>
                        <Col span="12">
                            <Input type="text" size="small" v-model="cont.obj.otherValue" placeholder="请输入文字"></Input>
                        </Col>
                    

                    </Row>
                </RadioGroup>
            </div>
            <!-- 是否 -->
            <div class="selectStudentContainer" v-if="cont.ele=='truefalse'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <RadioGroup size="large" v-model="cont.obj.value">
                    <Radio v-for="(item,ind) in cont.obj.items" :key="ind" :label="item.label_value"><span>{{item.label_name}}</span></Radio>
                    <!-- <Radio style="margin-right: .8rem" label="1"><span>否</span></Radio> -->
                </RadioGroup>
            </div>
            <!-- 日期时间 -->
            <div class="selectStudentContainer" v-if="cont.ele=='datepicker'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <!-- <DatePicker type="date" placeholder="请选择日期" style="width: 200px"></DatePicker> -->
                 <row>
                     <!-- v-for="(item,ind) in cont.obj.chooseCheck" :key="ind" -->
                    <i-col span="8">
                        <DatePicker v-show="cont.obj.chooseCheck[0]=='date'" format="yyyy-MM-dd" :value="cont.obj.valueDate" type="date" placeholder="选择日期" style="width: 200px" @on-change="cont.obj.valueDate=$event"></DatePicker>
                    </i-col>
                    <i-col span="8">
                        <TimePicker v-show="cont.obj.chooseCheck[0]=='time'||cont.obj.chooseCheck[1]=='time'" :value="cont.obj.valueTime" type="time" placeholder="选择时间" style="width: 200px" @on-change="cont.obj.valueTime=$event"></TimePicker>
                    </i-col>
                </row>
                
                  
                
            </div>
            <!-- 详细地址 -->
<!--             <div class="selectStudentContainer" v-if="cont.ele=='address'">
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
            </div> -->

            <div v-if="cont.ele=='address'">
                <address_com :name.sync="cont"/>
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
                    <input class="files" id="files" type="file" @change="addFile(cont.obj)">            
                    <i-button type="ghost" icon="md-add">点击上传文件</i-button>
                        
                    
                </Row>
            </div>
            <!-- 手动打分 -->
            <div class="selectStudentContainer" v-if="cont.ele=='slider'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <Row style="margin-top:40px;">
                    <Col span="1">
                        <span>{{cont.obj.low}}</span>
                    </Col>
                    <Col span="14">
                        <vueSlider :min="cont.obj.low" :max="cont.obj.high" v-model="cont.obj.value"/>
                    </Col>
                    <Col span="1">
                        <span>{{cont.obj.high}}</span>
                    </Col>
                </Row>
                <Row style="margin-top:40px;">
                     <Col span="16" class="slider-img">
                        <img src="@/assets/icon-jian.png" @click="countRangeValue(-1, cont.obj)" width="40px" height="40px" alt="">
                        <img src="@/assets/icon-add.png" @click="countRangeValue(1, cont.obj)" width="40px" height="40px" alt="">
                    </Col>
                    
                    
                </Row>
            </div>
            <!-- 图片选择 -->
            <div class="selectStudentContainer" v-if="cont.ele=='imgcheck'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <div class="imgCheckPreview">
                    <CheckboxGroup v-model="cont.obj.value" style="width: 100%;display:flex;flex-direction: row;justify-content:left;">
                        <div v-for="(item,ind) in cont.obj.imgArr" style="text-align: center;">
                            
                                <img :src="baseImg+item.url" alt="">
                                <Checkbox class="checkboxItem" :label="ind">
                                    <span>{{item.labels}}</span>
                                </Checkbox>
                            
                           
                        </div>
                    </CheckboxGroup>
                </div>
            </div>
            
            
</div>
            <Row style="display: flex; justify-content: center">
                <Button type="primary" style="margin: 2rem auto; width: 8rem" @click="saveForm" :disabled="!isSave">提  交</Button>
                
                
            </Row>
        </div>
    </div>
    <Modal title="View Image" v-model="visible">
        <div slot="header">
            
        </div>
        <img :src="baseImg+imgSrc" v-if="visible" style="width: 100%">
        <div slot="footer">
            
        </div>
    </Modal>
    <Modal v-model="modalAdd" width="360" >
        <p slot="close"></p>
        <p slot="header" style="color:#f60;text-align:center">
            <!-- <Icon type="information-circled"></Icon> -->
            <!-- <span>删除确认</span> -->
        </p>
        <div style="text-align:center">
            <p>
                <img src="@/assets/tijiaochanggong_picture@.png" alt="" style="display:inline-block;height: 79px;width:79px;">
            </p>
            <p class="titlecls">提交成功</p>
            <p class="titlecont" style="margin-bottom: 50px;">修改表单请到“我的提交”中修改</p>
        </div>
        <div slot="footer" style="text-align: center;padding: 10px;">
            <i-button type="success" @click="continueFun">继续填写</i-button>
            <i-button @click="jumpBack">返回</i-button>
            
        </div>
    </Modal>
</div>
</template>

<script>
import datas from "_c/mock.js"
import address_com from "_c/address.vue"
export default {
// 'previewObj',
    props: ['isSave','types','taskid','previewObj','state','id'],
    components:{
        address_com
    },
    data() {
        return {
            checkAllGroup: [],
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
            departmentMultiple:false,
            studentObj:{},
            teacherObj:{},
            modalAdd:false,
            visible: false,
            imgSrc:""
        }
    },
    filter:{
        
    },
    mounted(){
        
        // console.log("asd",this.previewObj)
        // this.previewObj=datas.data;
        this.getData();
        // this.getSheng();

        if(this.taskid){

        }else{
            // this.previewObj=this.$api.sGetObject("previewObj");
        }


    },
    methods: {
        showImgFun(path){
            this.imgSrc= path;
            this.visible = true;
        },
        // 滑动打分
        countRangeValue(type, obj) {
            if (
                type == -1 &&
                parseInt(obj.value) > parseInt(obj.low) &&
                parseInt(obj.value) <= parseInt(obj.high)
            ) {
                
                obj.value = parseInt(obj.value) - parseInt(obj.step);

            }
            if (
                type == 1 &&
                parseInt(obj.value) >= parseInt(obj.low) &&
                parseInt(obj.value) < parseInt(obj.high)
            ) {

                obj.value = parseInt(obj.value) + parseInt(obj.step);

            }
        },
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
            res.selObj=self.studentObj;
            // console.log(res)
          
            this.type_student=!this.type_student;

        },
        saveTeacher(res){
            let self=this;
            res.selObj=self.teacherObj;
            this.type_teacher=!this.type_teacher;
        },
        saveDepartment(res){
            let self=this;
            // console.log(res)
            for(let i=0;i<res.items.length;i++){
                if(res.items[i].departid==res.value){
                    res.selObj=res.items[i];
                }
            }
            this.type_department=!this.type_department;
        },
        saveGrade(res){
            let self=this;
            for(let i=0;i<res.items.length;i++){
                if(res.items[i].departid==res.value){
                    res.selObj=res.items[i];
                }
            }
            this.type_grade=!this.type_grade;
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
                usertype:2,
                departid:r[0].departid,
                level:r[0].level
            },r=>{
                
                let arr=JSON.parse(r.data);
                for(let i=0;i<arr.length;i++){
                    self.teacherList.push({
                        // checked: false,
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
            self.studentObj=item;
            // console.log(self.studentObj)
            // item.checked=!item.checked;
        },
        selsClick(item,index){
            let self=this;
            self.teacherObj=item;
            // console.log(self.teacherObj)
            // item.checked=!item.checked;
        },
        // getSheng(){

        //     this.$api.get("/city/getCity",{
        //         pid:0
        //     },r=>{
        //         this.shengArr=JSON.parse(r.data);
        //     }) 
        // },
        // getShi(res){

        //     this.$api.get("/city/getCity",{
        //         pid:res
        //     },r=>{
        //         this.shiArr=JSON.parse(r.data);
        //     })
        // },
        // getQu(item){
        //     this.$api.get("/city/getCity",{
        //         pid:item
        //     },r=>{
        //         this.quArr=JSON.parse(r.data);
        //     })
        // },
        //二级下拉方法
        changeSel(cont,i){
            cont.two_arr=cont.items[i].arrs;

            
        },
        checkAllGroupChange() {

        },
        requireCheck(){
            let msg="";
            this.previewObj.data.some((item,i) => {
                msg="";
                if(item.obj.require){
                    if(item.ele=="input"&&!item.obj.placeholder){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    
                    if(item.ele=="text"&&!item.obj.placeholder){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="select"&&(item.obj.value<"-1")){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="checkbox"&&item.obj.value.length==0){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="truefalse"&&!item.obj.value){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="radio"&&(!toString(item.obj.value))){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="uploads"&&item.obj.value.length==0){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="datepicker"&&(!item.obj.valueDate&&!item.obj.valueTime)){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }

                    if(item.ele=="address"&&(!item.obj.shengValue&&!item.obj.shiValue&&!item.obj.quValue)){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="imgcheck"&&item.obj.value.length==0){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="selectcontact"&&((item.obj.value<"-1")&&(item.obj.value1<"-1"))){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                       return true;
                    }
                    if(item.ele=="slider"&&(!toString(item.obj.value))){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="score"&&((item.obj.value<"-1")&&item.obj.valueArr.length==0)){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="selectstudent"&&(JSON.stringify(item.obj.selObj)=="{}")){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="selectgrade"&&(JSON.stringify(item.obj.selObj)=="{}")){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="selectteacher"&&(JSON.stringify(item.obj.selObj)=="{}")){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                    if(item.ele=="selectgrade"&&(JSON.stringify(item.obj.selObj)=="{}")){
                        // this.$Message.warning(item.obj.label+"为必填项，请填写后提交!");
                        msg=item.obj.label
                        return true;
                    }
                }
            });

            if(msg==""){
                return 'success'
            }else{
                return msg
            }
        },
        saveForm(){
            let self=this;
            
            let msg=this.requireCheck();
            // console.log(JSON.stringify(self.previewObj));
            if(msg=="success"){
                if(this.id){
                    self.$api.post("/submit/update",{
                        id:this.id,
                        taskid:this.taskid,
                        title:self.previewObj.title,
                        data:self.previewObj.data,
                        describe:self.previewObj.describe
                    },r=>{
                        // console.log(r)
                        // self.cardList=JSON.parse(r.data);
                        // self.$Message.success("修改成功");
                        self.modalAdd=true;
                        // self.$router.push({
                        //     path:"/allTask"
                        // })
                    },e=>{
                        console.log(e)
                        self.$Message.warning(e.result);
                    })
                }else{
                    self.$api.post("/submit/submitTask",{
                        id:this.taskid,
                        title:self.previewObj.title,
                        data:self.previewObj.data,
                        describe:self.previewObj.describe
                    },r=>{
                        // console.log(r)
                        // self.cardList=JSON.parse(r.data);
                        // self.$Message.success("提交成功");
                        self.modalAdd=true;
                        
                    },e=>{
                        console.log(e)
                        self.$Message.warning(e.result);
                    })
                }
                

            }else{
                this.$Message.warning(msg+"为必填项，请填写后提交!");
            }
            
           
        },
        jumpBack(){
            let self=this;
            self.$router.push({
                path:"/allTask"
            })
        },
        continueFun(){

            this.$emit("continues");
            this.modalAdd=false;
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
            this.$api.delFile(res[i].url);
            res.splice(i,1)
        },
        addFileImg(res){
            let self=this;
            let fileObj=document.getElementById("fileImg").files[0];
            let sizes=self.$api.onver(fileObj.size);
            console.log(fileObj)
            self.$api.uploadFile("file/upload ", {},fileObj, (r) => {
                res.uploadList.push({
                    name:fileObj.name,
                    url:r.data,
                    size:sizes
                })            
             
            });
        },
        delImgFun(cont,i){
            this.$api.delFile(cont.uploadList[i].url);
            cont.uploadList.splice(i,1);

            console.log(cont)
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
                    margin:0 5px;
                    border: 1px solid #C3C9D0;
                }
                img {
                    width: 175px;
                    height: 175px;
                }
            }
            .uploadimg-cls{

                p,img,input {
                    padding: 0;
                    width: 150px;
                    height: 150px;
                    position: relative;
                }
                .delImg{
                    position: absolute;
                    display: inline-block;
                    width:20px;
                    height: 20px;
                    font-size: 20px;
                    top:0;
                    right:0;
                }
                .post{
                    font-size: 25px;
                    text-align: center;
                    line-height: 140px;
                    border: 1px dashed #C3C9D0;
                    input{
                        position: absolute;
                        top:0;
                        left:0;
                        opacity: 0;
                        background: red;
                    }

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
        .title-cls{
            border-bottom: 1px solid #C3C9D0;
            padding:5px 10px;
        }
    }
    .title-cls{
        // border-bottom: 1px solid #C3C9D0;
            padding:1px 10px;
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
                    border-radius: 50%;
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
        
.slider-img{
    text-align: center;
    img{
        display: inline-block;
        margin:2px 20px;
        cursor: pointer;
    }
}
.titlecls{
    font-family: PingFang-SC-Medium;
    font-size: 18px;
    color: #5DB75D;
    letter-spacing: -0.36px;
}
.titlecont{
    font-family: PingFang-SC-Medium;
    font-size: 14px;
    color: #000000;
    letter-spacing: -0.28px;

}
</style>
