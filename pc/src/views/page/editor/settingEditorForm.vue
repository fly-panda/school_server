<template>
<div class="settingContainer">
    <Form style="padding: 15px;" ref="formCustom" class="settingForm" :rules="ruleValidate"  :model="settingForm" label-position="top">
        <div class="title">配置填写人</div>
        <FormItem label="">
            <Checkbox @on-change="(status)=>{
                changeCheck(status ,0, 'classTeacher')
                }" class="checkboxItem" v-model="settingForm.classTeacher" label=""><span>由相关班级的班主任来填写</span></Checkbox>
        </FormItem>
        <selectGradeForm v-if="checkStatus == 0" btnStatus="none" />
        <FormItem label="">
            <Checkbox @on-change="(status)=>{
                changeCheck(status ,1, 'teacher')
                }" class="checkboxItem" v-model="settingForm.teacher" label=""><span>选择老师填写</span></Checkbox>
        </FormItem>
        <selectStudentForm style="padding: 20px" v-if="checkStatus == 1" btnStatus="none" />
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
        <FormItem v-if="settingForm.isCycle == 0" label="选择时间范围" style="font-weight: 400">
            <Row>
                <Col span="8">
                <DatePicker type="date" placeholder="请选择起始日期" style="width: 200px"></DatePicker>
                </Col>
                <Col span="12">
                <DatePicker type="daterange" placement="bottom-end" placeholder="请选择结束日期" style="width: 200px"></DatePicker>
                </Col>
            </Row>
        </FormItem>
        <FormItem v-if="settingForm.isCycle == 1" label="设置每周执行时间段" style="font-weight: 400">
            <CheckboxGroup v-model="settingForm.week">
                <Checkbox label="1">
                    <span>周一</span>
                </Checkbox>
                <Checkbox label="2">
                    <span>周二</span>
                </Checkbox>
                <Checkbox label="3">
                    <span>周三</span>
                </Checkbox>
                <Checkbox label="4">
                    <span>周四</span>
                </Checkbox>
                <Checkbox label="5">
                    <span>周五</span>
                </Checkbox>
                <Checkbox label="6">
                    <span>周六</span>
                </Checkbox>
                <Checkbox label="7">
                    <span>周日</span>
                </Checkbox>
            </CheckboxGroup>
        </FormItem>
        <FormItem label="能否重复提交" style="font-weight: 400" prop="submitTimes">
            <RadioGroup v-model="settingForm.isRepeat">
                <Radio label="1">不限次数</Radio>
                <Radio label="0">
                    限制 <Input style="width: 90px" type="text" size="small" v-model="settingForm.submitTimes" placeholder="限制次数"></Input>次
                </Radio>
            </RadioGroup>
        </FormItem>
        <div class="title">其他配置</div>
        <FormItem>
            <Checkbox v-model="settingForm.isTemplate">设为模版</Checkbox>
        </FormItem>
        <FormItem>
            <Checkbox v-model="settingForm.resultCopy">结果抄送</Checkbox>
        </FormItem>
        <selectStudentForm v-if="settingForm.resultCopy" style="padding: 20px"  btnStatus="none" />
        <FormItem>
            <Checkbox v-model="settingForm.classRelationTeacher">结果抄送相关班主任</Checkbox>
        </FormItem>
       
    </Form>
    <div class="flexCenter">
        <Button style="width: 160px" size="small" type="primary" @click="submitResut">发布</Button>
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
                
            }
        }
    },
    methods: {
        submitResut(){
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
        }
    },
    components: {
        selectGradeForm,
        selectStudentForm
    }
}
</script>

<style lang="less" scoped>
.settingContainer {
    width: 905px;
    height: 80%;
    margin: 0 auto;
    margin-top: 20px;
    background: #fff;
    
    overflow: scroll;

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
        border-top: 1px solid #ccc;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 20px;
    }
}
</style>
