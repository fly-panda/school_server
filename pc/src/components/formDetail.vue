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
                <div class="selectBtn">点击选择学生范围</div>
            </div>
            <div class="selectStudentContainer" v-if="cont.ele=='selectteacher'">
                <div class="title" :class="{'require-cls':cont.obj.require}">选择老师</div>
                <div class="point">提示内容</div>
                <div class="selectBtn">点击选择老师范围</div>
            </div>
            <div class="selectStudentContainer" v-if="cont.ele=='selectdepartment'">
                <div class="title" :class="{'require-cls':cont.obj.require}">选择部门</div>
                <div class="point">提示内容</div>
                <div class="selectBtn">点击选择部门范围</div>
            </div>
            <div class="selectStudentContainer" v-if="cont.ele=='selectgrade'">
                <div class="title" :class="{'require-cls':cont.obj.require}">选择班级</div>
                <div class="point">提示内容</div>
                <div class="selectBtn">点击选择班级范围</div>
            </div>
            <!-- 文件下载 -->
            <div class="selectStudentContainer" v-if="cont.ele=='download'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <div class="downloadBtn" v-for="(item,ind) in cont.obj.items" @click="downloadFun(item)">
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
                <Select  :model.sync="cont.obj.value" style="width:250px;">
                    <Option v-for="item in cont.obj.items" :value="item.label_value" :key="item.label_value">{{ item.label_name }}</Option>
                </Select>
            </div>
            <div class="selectStudentContainer" v-if="cont.ele=='selectcontact'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <Select :model.sync="cont.obj.value" style="width:200px;">
                    <Option v-for="a in cont.obj.items" :value="a.label_value" :key="a.label_value">{{ a.label_name }}</Option>
                </Select>
                <Select  style="width:200px;margin-left: 20px;">
                    <Option v-for="a in twoArrs" :value="a.label_value" :key="a.label_value">{{ a.label_name }}</Option>
                </Select>
            </div>
            <div class="selectStudentContainer" v-if="cont.ele=='checkbox'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <CheckboxGroup size="large" class="positionColumn" :model.sync="cont.obj.value">
                    <Row v-for="(item,ind) in cont.obj.items">
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
                    <Row v-for="(item,ind) in cont.obj.items">
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
                    <Row v-for="(item,ind) in cont.obj.items">   
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
                    <i-col span="8" v-for="(item,ind) in cont.obj.chooseCheck">
                        <DatePicker v-show="item=='date'" v-model="cont.obj.valueDate" type="date" placeholder="选择日期" style="width: 200px"></DatePicker>
                        <Time-picker v-show="item=='time'" v-model="cont.obj.valueTime" type="time" placeholder="选择时间" style="width: 200px"></Time-picker>
                    </i-col>
                </row>
                 
            </div>
            <!-- 详细地址 -->
            <div class="selectStudentContainer" v-if="cont.ele=='address'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <Row>
                    <Col span="7">
                        <Select placeholder="省/市/区/直辖市"   style="width:10rem;">
                        </Select>
                    </Col>
                    <Col span="5">
                        <Select placeholder="市"   style="width:6rem;">
                        </Select>
                    </Col>
                    <Col span="7">
                        <Select placeholder="县/区"   style="width:6rem;">
                        </Select>
                    </Col>
                </Row>
                <Row style="margin-top: .4rem">
                    <Input  type="text" placeholder="请输入详细地址"></Input>
                </Row>
            </div>
            <!-- 文件上传 -->
            <div class="selectStudentContainer" v-if="cont.ele=='uploads'">
                <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
                <div class="point">{{cont.obj.describe}}</div>
                <Row class="fileList-cls" v-for="(item,ind) in cont.obj.value">
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
    props: ['isSave'],
    data() {
        return {
            checkAllGroup: [],
            previewObj:{},
            twoArrs:[],
            a:"",
            baseImg:this.$api.getBase()
        }
    },
    mounted(){
        // this.previewObj=this.$api.sGetObject("previewObj");
        this.previewObj=datas.data;
        console.log(0,this.previewObj)
    },
    methods: {
        //二级下拉方法
        change(res){
            console.log(res)
        },
        checkAllGroupChange() {

        },
        saveForm(){
            console.log(this.previewObj)
        },
        downloadFun(res){
            console.log(res);
            let self=this;
            // self.$api.get("/file/download",{
            //     path:res.url
            // },function(r){

            // })
            window.location.href=this.baseImg+"api/file/download?path="+res.url;
        },
        addFile(res){
            let self=this;
            let fileObj=document.getElementById("files").files[0];
            console.log(self.$api.onver(fileObj.size))
            self.$api.uploadFile("file/upload ", {},fileObj, (r) => {
                res.value.push({
                    name:fileObj.name,
                    url:r.data,
                    size:fileObj.size
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
                    width: 8rem;
                    height: 1.5rem;
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
</style>
