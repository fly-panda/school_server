<template>
<div class="settingContainer">
    <Form style="padding: 15px;" ref="formCustom" class="settingForm" :rules="ruleValidate"  :model="settingForm" label-position="top">
        <div class="title">配置填写人</div>
        <FormItem label="" v-if="isTeacher">
            <Checkbox @on-change="(status)=>{
                changeCheck(status ,0, 'classTeacher')
                }" class="checkboxItem" v-model="settingForm.classTeacher" label=""><span>由相关班级的班主任来填写</span>
            </Checkbox>
            <div class="class-view" v-if="checkStatus == 0">
                <div class="title-cls padding-cls" style="border-bottom: 1px solid #C3C9D0;">本表单将有以下班主任填写</div>
                <div class="padding-cls">
                    <Tree ref="grade" :data="treeList" check-strictly="true"></Tree>
                     <!-- show-checkbox -->
                </div>
                
            </div>
        </FormItem>
        
        <FormItem label="">
            <Checkbox @on-change="(status)=>{
                changeCheck(status ,1, 'teacher')
                }" class="checkboxItem" v-model="settingForm.teacher" label="">
                <span>选择老师填写</span>
            </Checkbox>
            <div v-if="checkStatus == 1">
                <selList ref="studentList"></selList>
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
                    <DatePicker format="yyyy-MM-dd HH:mm:ss" v-model="settingForm.startTime" type="datetime" placeholder="请选择日期/时间" class="time-cls" @on-change="settingForm.startTime=$event"></DatePicker>
                </Col>
                <Col span="12">
                    <p class="time-cls">结束时间</p> 
                    <DatePicker format="yyyy-MM-dd HH:mm:ss" v-model="settingForm.endTime" type="datetime" placeholder="请选择日期/时间" class="time-cls" @on-change="settingForm.endTime=$event"></DatePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem v-if="settingForm.isCycle == 1" label="设置每周执行时间段" style="font-weight: 400">
<!--             <ul class="week-cls">
                <li v-for="(item,i) in weekList" v-text="item.name" :class="{'active-wek':item.check}" @click="selweek(item,i)" :key="i"></li>
            </ul> -->
            <Row>
                <Col span="8">
                    <p class="time-cls">开始时间</p>
                    <i-select v-model="settingForm.startWeek" style="width:200px">
                        <i-option v-for="(item,i) in weekList" :value="item.id" :key="i">{{ item.name }}</i-option>
                    </i-select>
                </Col>
                <Col span="12">
                    <p class="time-cls">结束时间</p> 
                    <i-select v-model="settingForm.endWeek" style="width:200px">
                        <i-option v-for="(item,i) in weekList" :value="item.id" :key="i">{{ item.name }}</i-option>
                    </i-select>
                </Col>
            </Row>
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
            <div v-if="settingForm.resultCopy">
                <selList ref="resultList"></selList>    
            </div>
        </FormItem>
        <FormItem v-if="checkStatus != 0 && isTeacher && settingForm.isCycle == 1">
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
import selList from "./selList"
const validateMobile = (rule, value, callback) => {
    if (!Number.isInteger(+value)) {
        callback(new Error('请输入数字值'));
    } else {
        callback();
    }
}
export default {
    props:["tempId"],
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
                classRelationTeacher: false,
                startTime:"",
                endTime:"",
                startWeek:"",
                endWeek:""
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
            weekList:[
                {name:"周一",id:1,check:false},
                {name:"周二",id:2,check:false},
                {name:"周三",id:3,check:false},
                {name:"周四",id:4,check:false},
                {name:"周五",id:5,check:false},
                {name:"周六",id:6,check:false},
                {name:"周日",id:0,check:false}
            ],
            teacherToggle:false,
            objs:{},
            isTeacher:false,
            treeList:[]
        }
    },
    components: {
        selectGradeForm,
        selectStudentForm,
        selList
    },
    mounted(){
        // this.getData();
        this.getStatus();
    },
    methods: {
        getStatus(){
            this.isTeacher=false;
            if(this.tempId!=""){
                this.objs=this.$api.sGetObject("previewObj");
                for(let i=0;i<this.objs.sortable_item.length;i++){
                    if(this.objs.sortable_item[i].ele=="selectstudent"||this.objs.sortable_item[i].ele=="selectgrade"){
                        this.isTeacher=true;
                        this.treeList=this.objs.sortable_item[i].obj.items;
                    }
                }
            }
            
        // console.log(1,this.objs)
        },
        submit(){
            let self=this;
            if(!this.tempId){
                
                self.$Message.warning('请选择表单');
                return
            }

            let settingObj={
                checkStatus:self.checkStatus,
                isCycle:self.settingForm.isCycle,
                isRepeat:self.settingForm.isRepeat,
                isTemplate:self.settingForm.isTemplate,
                classRelationTeacher:self.settingForm.classRelationTeacher,
                resultCopy:self.settingForm.resultCopy,
                id:this.tempId
            };

            if(self.checkStatus=="-1"){
                self.$Message.warning('请选择填写人');
                return
            }else if(self.checkStatus=="0"){
                settingObj.writes=self.$api.formatTreeData(self.$refs.grade.getCheckedNodes(),"children");
                
            }else if(self.checkStatus=="1"){
                settingObj.writes=self.$refs.studentList.selStudentList
            }
            if(self.settingForm.isCycle==1){
                if(self.settingForm.startWeek==""&&self.settingForm.startWeek!=0){
                    self.$Message.warning('请设置每周开始时间');
                    return
                }
                if(self.settingForm.endWeek==""&&self.settingForm.endWeek!=0){
                    self.$Message.warning('请设置每周结束时间');
                    return
                } 
            }
            
            settingObj.weekList=[self.settingForm.startWeek,self.settingForm.endWeek];
            settingObj.startTime=self.settingForm.startTime;
            settingObj.endTime=self.settingForm.endTime;
            if(self.settingForm.isRepeat==0&&self.settingForm.submitTimes==""){
                self.$Message.warning('请设置重复提交次数');
                return
            }
            settingObj.submitTimes=self.settingForm.submitTimes;
            if(self.settingForm.resultCopy){
                 settingObj.resultObj=self.$refs.resultList.selStudentList
            }
            self.submitAjax(settingObj)
        },
        submitAjax(obj){
            let self=this;
            self.$api.post("/task/addRule",obj,r=>{
                // self.$Message.success(r.result); 
                self.$router.push({
                    path:"/publishForm"
                });
            },e=>{
                console.log(e)
            })
        },
        changeCheck(status, index, type) {
            // console.log(status, index)
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
    height: 90%;
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
