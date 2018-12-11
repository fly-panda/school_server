<template>
<div class="editorContainer">
    <div class="slide">
        <div class="title">基础控件</div>
        <Modal
            v-model="modalStatus"
            :title="getModalTitle"
            footer-hide
            width="800"
            >
            <component  v-on:handleselect="handleSelectRes" v-bind:is="getModalContent"></component>
        </Modal>
        <draggable element="ul" :clone="cloneData" v-model="formList" :options="dragOptions1" @end="getResult">
            <transition-group type="transition" class="baseContainer" tag="div" :name="'flip-list'">
                <div v-for="item in formList" :key="item.obj.type" class="baseItem">{{item.obj.label}}</div>
            </transition-group>
        </draggable>
        <div class="title">功能控件</div>
         <draggable element="ul" :clone="cloneData" v-model="featureList" :options="dragOptions1" @end="getResult">
            <transition-group type="transition" class="baseContainer" tag="div" :name="'flip-list'">
                <div v-for="(item, index) in featureList" :key="index" class="featureItem">{{item.obj.label}}</div>
            </transition-group>
        </draggable>
        <div class="title">打分控件</div>
         <draggable element="ul" :clone="cloneData" v-model="gradesList" :options="dragOptions1" @end="getResult">
            <transition-group type="transition" class="baseContainer" tag="div" :name="'flip-list'">
                <div v-for="item in gradesList" :key="item.obj.type" class="featureItem">{{item.obj.label}}</div>
            </transition-group>
        </draggable>
    </div>
    <Form ref="formValidate" style="max-height: 100%;flex:1;margin: 30px 121px;"  class="b-a" :model="formData" label-position="top" @submit.native.prevent>
        <div class="saveContainer">
            <div @click="previewForm">
                <img src="@/assets/ico_preview.png" alt="">
                <span>预览</span>
            </div>
            <div @click="saveSoltItem">
                <img src="@/assets/ico_save.png" alt="">
                <span>保存</span>
            </div>
        </div>
        <FormItem prop="label" >
            <div class="setTitle" style="padding: 15px" v-if="setTitleStatus" ><Input @input="changeTitle" @on-blur="setFormTitle" type="text" v-model="formTitle"></Input></div>
            <div style="padding: 15px"  @dblclick="setFormTitle" v-if="!setTitleStatus" class="setTitle">{{formTitle}}<span style="color:#979797">(双击修改)</span></div>
            <!-- 富文本 -->
            <VueEditor style="width: 90%;margin:0 auto;height:200px;"
            @imageAdded="handleImageAdded"
            :editorToolbar="customToolbar"
            v-model="content"></VueEditor>
        </FormItem>
        
        <draggable element="div" v-model="sortable_item" :options="dragOptions2"  @update="moveEnd">
            <transition-group name="no" class="editorArea" tag="div" style="margin-top: 60px;">
                <renders @handleRemoveEle="removeEle"  :curIndex="curIndex" @setIndex="setIndexFun" v-for="(element,index) in sortable_item" :key="index" :index="index" :ele="element.ele" :obj="element.obj || {}" :sortableItem="sortable_item" :config-icon="true">
                </renders>
                <!-- @handleCopyEle="copyEle" -->
            </transition-group>
        </draggable>
    </Form>
    <div class="slide">
        <div class="title">控件设置</div>
        <Form v-if="curIndex !== -1" ref="formCustom" class="settingForm" :model="settingFormItem" label-position="top">
            <FormItem v-if="!(settingFormItem.type == 'describe')" label="控件名称" prop="label">
                <Input type="text" v-model="settingFormItem.label"></Input>
            </FormItem>
            <!-- <FormItem v-if="!(settingFormItem.type == 'describe')" label="属性名" prop="name">
                <Input type="text" v-model="settingFormItem.name"></Input>
            </FormItem> -->
            <FormItem v-if="!['datepicker', 'score', 'uploads', 'trueFalse', 'radio', 'checkbox', 'address', 'uploadimg', 'selectstudent', 'describe', 'title', 'selectgrade', 'selectdepartment', 'selectteacher', 'slider', 'download', 'selectcontact'].includes(settingFormItem.type)" label="默认值" prop="placeholder">
                <Input type="text" v-model="settingFormItem.placeholder"></Input>
            </FormItem>
            <FormItem v-if="!(settingFormItem.type == 'title')"  label="提示" prop="describe">
                <Input type="textarea" :rows="3" v-model="settingFormItem.describe"></Input>
            </FormItem>
            <FormItem  v-if="!(settingFormItem.type == 'describe'  || settingFormItem.type == 'title')" label="校验" :style="settingFormItem.type==='input'?{'font-weight': 400, 'border-bottom': 'none', 'padding-bottom': 0}:{'font-weight': 400}" prop="require">
                <Checkbox style="font-weight: 400" v-model="settingFormItem.require">&nbsp;&nbsp;这是一个必填选项</Checkbox>
                <Checkbox v-if="settingFormItem.type =='score'"  style="font-weight: 400" v-model="settingFormItem.isCheck">&nbsp;&nbsp;可以选择多个评分项</Checkbox>
                <Row v-if="settingFormItem.type == 'uploadimg'">
                    <Col span="3" >
                        <Checkbox style="font-weight: 400" v-model="settingFormItem.lessImgRequire"></Checkbox>
                    </Col>
                    <Col span="7" >
                    最少上传
                    </Col>
                    <Col span="10">
                    <Input type="number" v-model="settingFormItem.lessNum" placeholder="请输入上传数量"></Input>
                    </Col>
                     <Col span="3" offset="1">
                        <span>张图</span>
                    </Col>
                </Row>
            </FormItem>
            <FormItem  v-if="settingFormItem.type == 'radio'  || settingFormItem.type == 'checkbox'" label=""  prop="require">
                <Checkbox style="font-weight: 400" v-model="settingFormItem.hasOther">&nbsp;&nbsp;是否添加其他选项</Checkbox>
            </FormItem>
            <FormItem  v-if="settingFormItem.type =='input'" prop="verify">
                <span>选择验证:&nbsp;&nbsp;&nbsp;</span>
                <Select v-model="settingFormItem.verify" size="small" style="width:100px">
                    <Option v-for="item in verifyList" :value="item.dKey" :key="item.dKey">{{ item.dValue }}</Option>
                </Select>
            </FormItem>
            <!-- <FormItem label="选择上传类型"  v-if="settingFormItem.type==='uploads'" prop="uploads">
                <Select v-model="settingFormItem.updateType" size="small" style="width:100px">
                    <Option v-for="item in settingFormItem.updateTypeList" :value="item.dKey" :key="item.dKey">{{ item.dValue }}</Option>
                </Select>
            </FormItem> -->
            <!-- <FormItem label="选择时间格式"  v-if="settingFormItem.type==='datepicker'" prop="datepicker">
                <Select v-model="settingFormItem.format" size="small" style="width:100px">
                    <Option v-for="item in formatList" :value="item.dKey" :key="item.dKey">{{ item.dValue }}</Option>
                </Select>
            </FormItem> -->
            <FormItem label="选择需要选择的年级范围"  v-if="settingFormItem.type==='selectgrade'">
                <Button type="primary" ghost long size="small" @click="changeModal">点击选择年级范围</Button>
            </FormItem>
            <FormItem label="选择需要选择的学生范围"  v-if="settingFormItem.type==='selectstudent'">
                <Button type="primary" ghost long size="small" @click="changeModal">点击选择学生范围</Button>
            </FormItem>
            <FormItem label="选择需要选择的部门范围"  v-if="settingFormItem.type==='selectdepartment'">
                <Button type="primary" ghost long size="small" @click="changeModal">点击选择部门范围</Button>
            </FormItem>
            <FormItem label="选择需要选择的老师范围"  v-if="settingFormItem.type==='selectteacher'">
                <Button type="primary" ghost long size="small" @click="changeModal">点击选择老师范围</Button>
            </FormItem>
            <div v-if="settingFormItem.type =='select' || settingFormItem.type == 'radio' || settingFormItem.type == 'checkbox'">
                <span style="display:block;margin-left:15px; margin-top: 15px">选项配置</span>
                <draggable element="div" v-model="settingFormItem.items">
                    <transition-group name="no" tag="div">
                        <FormItem style="border: none" v-for="(SelectItem, index) in settingFormItem.items" :key="index">
                            <Row>
                                <Col span="9" v-if="false">
                                <Input type="text" v-model="SelectItem.label_value" placeholder="请输入选择项的ID"></Input>
                                </Col>
                                <Col span="18">
                                <Input type="text" v-model="SelectItem.label_name" placeholder="请输入选择项的值"></Input>
                                </Col>
                                <Col span="2" offset="1">
                                <Icon @click="handleRemoveSelectItem(index)" size="20" color="#FF5A49" type="md-trash" />
                                </Col>
                                <Col span="2" offset="1">
                                <Icon style="course: move" size="18"  type="md-move" />
                                </Col>
                            </Row>
                        </FormItem>
                    </transition-group>
                </draggable>
                
                <FormItem>
                    <Row>
                        <Col span="12">
                        <Button type="dashed" long @click="handleAddSelectItem" icon="md-add">增加选项</Button>
                        </Col>
                    </Row>
                </FormItem>
            </div>
            <div v-if="settingFormItem.type =='score'">
                <span style="display:block;margin-left:15px; margin-top: 15px">选项内容</span>
                <draggable element="div" v-model="settingFormItem.items">
                    <transition-group name="no" tag="div">
                        <FormItem style="border: none" v-for="(SelectItem, index) in settingFormItem.items" :key="index">
                            <Row>
                                <Col span="9">
                                <Input type="text" v-model="SelectItem.label_value" placeholder="请输入选择项的ID"></Input>
                                </Col>
                                <Col span="9">
                                <Input type="text" v-model="SelectItem.label_name" placeholder="请输入选择项的值"></Input>
                                </Col>
                                <Col span="2" offset="1">
                                <Icon @click="handleRemoveSelectItem(index)" size="20" color="#FF5A49" type="md-trash" />
                                </Col>
                                <Col span="2" offset="1">
                                <Icon style="course: move" size="18"  type="md-move" />
                                </Col>
                            </Row>
                             <RadioGroup v-model="SelectItem.scoreType">
                                <Radio label="add">加分</Radio>
                                <Radio label="mins">减分</Radio>
                            </RadioGroup>
                        </FormItem>
                    </transition-group>
                </draggable>
                
                <FormItem>
                    <Row>
                        <Col span="12">
                        <Button type="dashed" long @click="handleAddSelectItem" icon="md-add">增加选项</Button>
                        </Col>
                    </Row>
                </FormItem>
            </div>
            <div v-if="settingFormItem.type =='slider'">
                <!-- style="border: none" -->
                <FormItem  label="选项内容">
                    <RadioGroup v-model="settingFormItem.gradesType">
                        <Radio label="add">加分</Radio>
                        <Radio label="mins">减分</Radio>
                    </RadioGroup>
                    <Row>
                        <Col span="9">
                        <span>最高分</span>
                        </Col>
                        <Col span="9">
                        <Input type="text" v-model="settingFormItem.high" placeholder="请输入最高分"></Input>
                        </Col>
                    </Row>
                    <Row>
                        <Col span="9">
                        <span>最低分</span>
                        </Col>
                        <Col span="9">
                        <Input type="text" v-model="settingFormItem.low" placeholder="请输入最低分"></Input>
                        </Col>
                    </Row>
                </FormItem>
                <FormItem  label="选项内容">
                    <RadioGroup v-model="settingFormItem.step">
                        <Radio :label="0.1">0.1</Radio>
                        <Radio :label="0.5">0.5</Radio>
                        <Radio :label="1">1</Radio>
                    </RadioGroup>
                </FormItem>
            </div>
            <FormItem v-if="settingFormItem.type == 'download'" label="已上传文件"   prop="selectgrade">
                 <uploadList/>
            </FormItem>
             <FormItem v-if="settingFormItem.type == 'address'" >
                    <CheckboxGroup size="large" class="positionColumn" v-model="settingFormItem.chooseCheck">
                        <Checkbox class="checkboxItem" label="province">省/直辖市</Checkbox>
                        <Checkbox class="checkboxItem" label="city">市</Checkbox>
                        <Checkbox class="checkboxItem" label="zone">区</Checkbox>
                        <Checkbox class="checkboxItem" label="detail">详细地址</Checkbox>
                    </CheckboxGroup>
                </FormItem>
                  <FormItem v-if="settingFormItem.type == 'datepicker'" >
                    <CheckboxGroup size="large" class="positionColumn" v-model="settingFormItem.chooseCheck">
                        <Checkbox class="checkboxItem" label="date">日期</Checkbox>
                        <Checkbox class="checkboxItem" label="time">时间</Checkbox>
                    </CheckboxGroup>
                </FormItem>
             <!-- <FormItem v-if="settingFormItem.type =='title'" label="调整字体大小">
                    <Rate v-model="settingFormItem.level" character="A" />
            </FormItem> -->
           
            <!-- <FormItem>
                <Button type="primary" @click="handleSubmit('formCustom')">保存</Button>
                <Button @click="handleReset('formCustom')" style="margin-left: 8px">重置</Button>
            </FormItem> -->
        </Form>
    </div>

</div>
</template>

<script>
import draggable from "vuedraggable";
import formList from "./custom_form/FormList";
import featureList from "./custom_form/FeatureList";
import gradesList from "./custom_form/GradesList";
import renders from "./custom_form/Render";
import selectGradeForm from "../container/selectGradeForm";
import selectStudentForm from "../container/selectStudentForm";
import selectTeacherForm from "../container/selectTeacherForm";
import selectDepartmentForm from "../container/selectDepartmentForm";
import { VueEditor } from "vue2-editor";
export default {
    data() {
        return {
            content: '<h1> 富文本编辑器</h1>',
            content:'',
            customToolbar:[
                    ['bold', 'italic', 'underline'],
                    [{'align':''},{'align':'center'},{'align':'right'}],
                    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
                    [{'background':[]},{'color':[]}],
                    ['image','link'],
                    ['strike'],
                    ['clean'],
            ],//更多工具栏选项在下面
            formTitle: '未命名表单',
            setTitleStatus: false,
            isDragging: false,
            modalStatus: false,
            formList: formList,
            featureList: featureList,
            gradesList: gradesList,
            editable: true,
            curIndex: -1,
            sortable_item: [],
            formData: {},
            curSettingType: '',
            settingFormItem: {},
            verifyList: [{
                    dKey: 'none',
                    dValue: '不添加验证'
                },
                {
                    dKey: 'phone',
                    dValue: '手机验证'
                },
                {
                    dKey: 'email',
                    dValue: '邮箱验证'
                }
            ],
            formatList: [{
                    dKey: 'yyyy年MM月dd日',
                    dValue: '日期'
                },
                {
                    dKey: 'yyyy年MM月dd日 HH时mm分',
                    dValue: '日期加时间'
                }
                // {
                //     dKey: 'hour',
                //     dValue: '时间'
                // }
            ]
        }
    },
    components: {
        draggable,
        renders,
        selectGradeForm,
        selectStudentForm,
        selectTeacherForm,
        selectDepartmentForm,
        VueEditor
    },
    computed: {
        // 拖拽表单1
        dragOptions1() {
            return {
                animation: 0,
                ghostClass: "ghost",
                // 分组
                group: {
                    name: "shared",
                    pull: "clone",
                    revertClone: false
                },
                // 禁止拖动排序
                sort: false
            };
        },
        // 拖拽表单2
        dragOptions2() {
            return {
                animation: 0,
                ghostClass: "ghost",
                group: {
                    // 只允许放置shared的控件,禁止pull
                    put: ["shared"]
                }
            };
        },
        getModalTitle(){
            return this.sortable_item[this.curIndex]?this.sortable_item[this.curIndex]['obj']['label']: ''
        },
        getModalContent(){
            // console.log(this.sortable_item[this.curIndex] && this.sortable_item[this.curIndex]['obj']['modal']?this.sortable_item[this.curIndex]['obj']['modal']: 'Input')
            return this.sortable_item[this.curIndex] && this.sortable_item[this.curIndex]['obj']['modal']?this.sortable_item[this.curIndex]['obj']['modal']: 'Input'
        }
    },
    mounted(){
        console.log(this.sortable_item)
    },
    methods: {
                // 预览效果
        previewForm(){
            // let cur_modal = this.$store.state.preview
            // console.log(new Date().getTime())
            // cur_modal.curtime = new Date().getTime()
            // cur_modal.status = true
            // cur_modal.data = this.sortable_item
            // this.$store.commit('previewStatus', cur_modal);
            this.$router.push(
                "/preview"
            )
        },
        handleImageAdded:function(file,Editor,cursorLocation){
            //上传图片操作

            //把获取到的图片url 插入到鼠标所在位置 回显图片
            Editor.insertEmbed(cursorLocation, 'image', url);
        },
        saveSoltItem(){
            let formObj = {}
            formObj.title = this.formTitle
            formObj.data = this.sortable_item;
            formObj.describe = this.content;
            console.log(this.content)
            console.log(this.sortable_item)
            console.log(JSON.stringify(formObj))
            // this.$api.post("/cform/addForm",
            //     formObj,
            //     r=>{
            //         console.log(r)
            //     }
            // )
            // Axios({
            //     method: 'post',
            //     url: `http://47.93.156.129:8848/api/cform/addForm?objectid=EzQ319HuHN8done&objType=2&userid=nHoIlS9HDYodone`,
            //     data: formObj
            //     // headers: {
            //     //     userId: this.$store.state.user.userId
            //     // }
            // }).then(res => {
            //     console.log(res)
            // })
            // console.log(this.sortable_item)
        },
        changeTitle(title){
            this.formTitle = title
        },
        setFormTitle(){
            this.setTitleStatus = !this.setTitleStatus
        },
        handleSelectRes(result){
            this.modalStatus = false;
        },
        changeModal(){
            this.modalStatus = true
        },
        getResult(curObj) {
            // this.curIndex = curObj.newIndex
        },
        handleRemoveSelectItem(index) {
            let curRemoveObj = this.sortable_item[this.curIndex].obj.items
            if(curRemoveObj.length == 1){
                this.$Message.error('至少保留一个选项')
                return false
            }
            curRemoveObj.splice(index, 1)
        },
        handleAddSelectItem() {
            let curRemoveObj = this.sortable_item[this.curIndex].obj.items
            curRemoveObj.push({
                "label_value": curRemoveObj.length + 1,
                "label_name": ''
            })
        },
        // 点击更改
        setIndexFun(index) {
            console.log(index);
            if (this.curIndex === index) return;
            this.curIndex = index
            let curClickItem = this.sortable_item[index]
            if (curClickItem === undefined) return
            this.curSettingType = curClickItem.ele
            this.settingFormItem = curClickItem.obj
        },
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        },
        cloneData(original) {
            // 添加一个modal标题
            original.obj.modalTitle = original.obj.label || "";
            // 深拷贝对象，防止默认空对象被更改
            return JSON.parse(JSON.stringify(original));
        },
        // 删除
        removeEle(index) {
            // console.log(index)
            // let temp = index - 1
            // if(index == 0){
            //   this.sortable_item.splice(index, index+1)
            //   return
            // }
            // this.curIndex = -1
            console.log(this.curIndex == index)
            if(this.curIndex == index){
                this.curIndex = -1  
                console.log(this.curIndex)
            }
            this.sortable_item.splice(index, 1)
        },
        // 复制
        copyEle(index){
            let self=this;
            let objs=this.sortable_item[index];
            console.log(this.sortable_item[index])
            self.sortable_item.push(objs);
            console.log(index)
        },
        moveEnd(relatedContext) {
            if(relatedContext.oldIndex == this.curIndex){
                this.curIndex = relatedContext.newIndex
            }else if(relatedContext.newIndex == this.curIndex){
                this.curIndex = relatedContext.oldIndex
            }
            // console.log(relatedContext.index)
            // this.curIndex = relatedContext.index
            //  console.log(relatedContext,draggedContext)
            // const relatedElement = relatedContext.element;
            // const draggedElement = draggedContext.element;
            // return (
            //     (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
            // );
        }

    }
}
</script>

<style lang="less">
.ivu-form-label-top .ivu-form-item-label{
    padding: 0;
    font-size: 13px;
    font-weight: 700;
    color: #363636;
    letter-spacing: 0.66px;
    line-height: 13px;
}
.positionColumn {
    display: flex;
    flex-direction: column;
    // .checkboxItem{
    //     margin: 15px;
    // }
}
</style>
<style lang="less" scoped>


.editorContainer {
    .saveContainer{
        width: 100px;
        height: 50px;
        position: absolute;
        top: 153px;
        right: 273px;
        display: flex;
        z-index: 1000;
        justify-content: space-between;
        &>div{
            width: 40px;
            height: 100%;
            box-shadow: 0 1px 1px rgba(0, 0, 0, .2);
            display: flex;
            padding: 5px 0;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background: #fff;
        }
    }
    .b-a{
        background: #fff;
    }
    height: 100%;
    display: flex;
    justify-content: space-between;
    .setTitle{
        margin-top: 11px;
        margin-left: 11px;
        // width: 100%;
        font-size: 18px;
        font-weight: 700;
        color: #363636;
        letter-spacing: 1.07px;
        line-height: 18px;
    }
    .slide {
        width: 256px;
        height: 87%;
        overflow-y: auto;
        background: #F1F1F1;
        padding-bottom:30px;

        .title {
            background: #d8d8d8;
            font-size: 14px;
            // color: #363636;
            text-align: center;
            height: 35px;
            line-height: 35px;
        }

        .baseContainer {
            padding: 12px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            .baseItem {
                margin-top: 6px;
                width: 98px;
                height: 26px;
                line-height: 26px;
                background: #FFFFFF;
                border: 1px solid #DADADA;
                border-radius: 2px;
                text-align: center;
                cursor: pointer;
            }
            .featureItem{
                margin:0 auto;
                 margin-top: 6px;
                 font-size: 14px;
                background: #FFFFFF;
                border: 1px solid #DADADA;
                border-radius: 2px;
                text-align: center;
                cursor: move;
                width: 206px;
                height: 40px;
                line-height: 40px;

            }
        }

        .settingForm {
            .ivu-form-item {
                padding: 15px;
                border-bottom: 1px solid #E5E5E5;
                margin-bottom: 0;
            }

            .ivu-form-item:last-child {
                border-bottom: none;
            }
        }
    }

    .editorArea {
        width: 100%;
        height: 700px;
        background: #FFFFFF;
        overflow-y: auto !important;
        min-height: 400px;
        padding-bottom: 70px;
        .itemsForm {
            padding: 30px 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

    }

    .form-list-group {
        min-height: 200px;
        padding: 20px !important;
    }

}

.delete-icon-form {
    transition: all 2s ease;
    position: absolute;
    top: 0px;
    right: 0px;
    opacity: 0;
    max-height: 0;
    background: red !important;
    overflow: hidden;
}

/* 配置按钮样式 */

.delete-icon-form i {
    cursor: pointer !important;
    margin-right: 5px;
    display:none;
}
.ivu-icon .ivu-icon-md-trash{
    color:#fff!important;
}
.saveContainer img{
    width: 24px; height: 28px;
    cursor: pointer;
}

</style>



