<template>
<div>
    <div class="previewContents">
       
        <div class="header">{{previewObj.title}}</div>
        <div class="content">
            <div class="discribe" v-html="previewObj.describe">
                
            </div>
            <div class="selectStudentContainer">
                <div class="title">选择学生</div>
                <div class="point">提示内容</div>
                <div class="selectBtn">点击选择学生范围</div>
            </div>
            <div class="selectStudentContainer">
                <div class="title">选择老师</div>
                <div class="point">提示内容</div>
                <div class="selectBtn">点击选择老师范围</div>
            </div>
            <div class="selectStudentContainer">
                <div class="title">选择部门</div>
                <div class="point">提示内容</div>
                <div class="selectBtn">点击选择部门范围</div>
            </div>
            <div class="selectStudentContainer">
                <div class="title">选择班级</div>
                <div class="point">提示内容</div>
                <div class="selectBtn">点击选择班级范围</div>
            </div>
            <div class="selectStudentContainer">
                <div class="title">资料收集</div>
                <div class="point">提示内容</div>
                <div class="downloadBtn">
                    <span>需要下载文件</span>
                    <Icon size="19" type="md-download" />
                </div>
                <div class="downloadBtn">
                    <span>需要下载文件1</span>
                    <Icon size="19" type="md-download" />
                </div>
            </div>
            <div class="imgPreview">
                <img src="@/assets/logo.png" alt="">
                <img src="@/assets/logo.png" alt="">
                <img src="@/assets/logo.png" alt="">
                <img src="@/assets/logo.png" alt="">
                <!-- <img src="@/assets/logo.png" alt=""> -->
            </div>
            <div class="discribe">
                金数据(jinshuju.net)是人人可用的在线表单工具,快速创建问卷调查、活动报名、意见反馈、信息登记、在线订单、考试测评等表单,自动化收集整理数据,节省工作时间,更聪明
            </div>
            <!-- 输入框 -->
            <div class="selectStudentContainer">
                <div class="title">单行输入</div>
                <div class="point">提示内容</div>
                <Input  type="text" placeholder="请输入文字"></Input>
            </div>
            <!-- 长文本 -->
            <div class="selectStudentContainer">
                <div class="title">多行输入框</div>
                <div class="point">提示内容</div>
                <Input  type="text" placeholder="请输入文字"></Input>
            </div>
            <!-- 下拉框 -->
            <div class="selectStudentContainer">
                <div class="title">下拉框</div>
                <div class="point">提示内容</div>
                <Select  style="width:16rem">
                        <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
                    </Select>
            </div>
            <div class="selectStudentContainer">
                <div class="title">下拉框</div>
                <div class="point">提示内容</div>
                <Select  style="width:10rem">
                        <!-- <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option> -->
                    </Select>
                <Select  style="width:10rem; margin-left: 2rem">
                    </Select>
            </div>
            <div class="selectStudentContainer">
                <div class="title">多选</div>
                <div class="point">提示内容</div>
                <CheckboxGroup size="large" class="positionColumn" v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox class="checkboxItem" label="一年级"></Checkbox>
                    <Checkbox class="checkboxItem" label="二年级"></Checkbox>
                    <Checkbox class="checkboxItem" label="三年级"></Checkbox>
                    <Row>
                        <Col span="3">
                            <Checkbox class="checkboxItem" label="其他"></Checkbox>
                        </Col>
                        <Col span="12" style="margin-top: .5rem">
                            <Input  type="text" size="small" placeholder="请输入文字"></Input>
                        </Col>
                    </Row>
                </CheckboxGroup>
            </div>
            <!-- 打分 -->
            <div class="selectStudentContainer">
                <div class="title">请打分</div>
                <div class="point">打分介绍</div>
                <CheckboxGroup size="large" class="positionColumn" v-model="checkAllGroup" @on-change="checkAllGroupChange">
                    <Checkbox class="checkboxItem" label="有人讲话 -0.1"></Checkbox>
                    <Checkbox class="checkboxItem" label="有人讲话 -1"></Checkbox>
                    <Checkbox class="checkboxItem" label="有人讲话 -5"></Checkbox>
                </CheckboxGroup>
            </div>
            <!-- 单选 -->
            <div class="selectStudentContainer">
                <div class="title">单选</div>
                <div class="point">打分介绍</div>
                <RadioGroup size="large" class="positionColumn">
                    <Radio class="checkboxItem" label="选项"></Radio>
                    <Radio class="checkboxItem" label="选项1"></Radio>
                    <Radio class="checkboxItem" label="选项2"></Radio>
                </RadioGroup>
            </div>
            <!-- 是否 -->
            <div class="selectStudentContainer">
                <div class="title">是否</div>
                <div class="point">提示内容</div>
                <RadioGroup size="large">
                    <Radio label="是"></Radio>
                    <Radio style="margin-left: .8rem"  label="否"></Radio>
                </RadioGroup>
            </div>
            <!-- 日期时间 -->
            <div class="selectStudentContainer">
                <div class="title">日期/时间</div>
                <div class="point">提示内容</div>
                <DatePicker type="date" placeholder="请选择日期" style="width: 200px"></DatePicker>
            </div>
            <!-- 详细地址 -->
            <div class="selectStudentContainer">
                <div class="title">地址</div>
                <div class="point">提示内容</div>
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
            <div class="selectStudentContainer">
                <div class="title">文件上传</div>
                <div class="point">提示内容</div>
                <Col span="24">
                    <uploadList/>
                </Col>
            </div>
            <div class="selectStudentContainer">
                <div class="title">打分</div>
                <div class="point">提示内容</div>
                <Row>
                <Col span="1">
                    <span>0</span>
                </Col>
                <Col span="14">
                    <vueSlider/>
                </Col>
                <Col span="1">
                    <span>100</span>
                </Col>
                </Row>
              
            </div>
            <!-- 图片选择 -->
            <div class="selectStudentContainer">
                <div class="title">图片选择</div>
                <div class="point">提示内容</div>
                <div class="imgCheckPreview">
                    <div>
                        <img src="@/assets/logo.png" alt="">
                        <Checkbox class="checkboxItem" label="1"></Checkbox>
                    </div>
                    <div>
                        <img src="@/assets/logo.png" alt="">
                        <Checkbox class="checkboxItem" label="1"></Checkbox>
                    </div>
                    <div>
                        <img src="@/assets/logo.png" alt="">
                        <Checkbox class="checkboxItem" label="1"></Checkbox>
                    </div>
                    <div>
                        <img src="@/assets/logo.png" alt="">
                        <Checkbox class="checkboxItem" label="1"></Checkbox>
                    </div>
                    <div>
                        <img src="@/assets/logo.png" alt="">
                        <Checkbox class="checkboxItem" label="1"></Checkbox>
                    </div>
                </div>
            </div>
            <Row style="display: flex; justify-content: center">
                <Button type="primary" :disabled="!isSave" style="margin: 2rem auto; width: 8rem">提  交</Button>
            </Row>
            

        </div>
    </div>
    
</div>
</template>

<script>

export default {
// 'previewObj',
    props: ['isSave'],
    data() {
        return {
            checkAllGroup: [],
            previewObj:{
                data: [
    {
        "ele":"input",
        "obj":{
            "type":"input",
            "icons":"",
            "config":true,
            "label":"单行文字",
            "placeholder":"",
            "inlineBlock":false,
            "require":true,
            "maxLength":2000,
            "describe":"",
            "items":[
                {
                    "label_value":"null",
                    "label_name":"222"
                }
            ],
            "verify":"none",
            "value":"",
            "name":"default",
            "ruleError":"该字段不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"单行文字"
        }
    },
    {
        "ele":"text",
        "obj":{
            "type":"textarea",
            "icons":"",
            "config":true,
            "label":"多行文字",
            "placeholder":"",
            "inlineBlock":false,
            "maxLength":2000,
            "describe":"",
            "require":true,
            "maxRows":5,
            "value":"",
            "name":"default",
            "ruleError":"该字段不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "verify":"none",
            "visibility":true,
            "modalTitle":"多行文字"
        }
    },
    {
        "ele":"p",
        "obj":{
            "config":true,
            "icons":"",
            "type":"describe",
            "describe":"请设置文字内容",
            "label":"描述文字",
            "marginTop":0,
            "marginBottom":24,
            "fontSize":"",
            "modalTitle":"描述文字"
        }
    },
    {
        "ele":"select",
        "obj":{
            "type":"select",
            "icons":"",
            "config":true,
            "label":"下拉框",
            "placeholder":"",
            "inlineBlock":false,
            "require":true,
            "items":[
                {
                    "label_value":"",
                    "label_name":"12312"
                },
                {
                    "label_value":2,
                    "label_name":"324234"
                }
            ],
            "value":"",
            "name":"default",
            "ruleError":"请选择",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"下拉框"
        }
    },
    {
        "ele":"truefalse",
        "obj":{
            "type":"trueFalse",
            "icons":"",
            "config":true,
            "label":"是/否",
            "hasOther":false,
            "inlineBlock":false,
            "require":true,
            "value":"",
            "items":[
                {
                    "label_value":"1",
                    "label_name":"是"
                },
                {
                    "label_value":"2",
                    "label_name":"否"
                }
            ],
            "name":"default",
            "ruleError":"请选择",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"是/否"
        }
    },
    {
        "ele":"radio",
        "obj":{
            "type":"radio",
            "icons":"",
            "config":true,
            "label":"单选",
            "hasOther":false,
            "inlineBlock":false,
            "require":true,
            "value":"2",
            "items":[
                {
                    "label_value":"1",
                    "label_name":"单选框1"
                },
                {
                    "label_value":"2",
                    "label_name":"单选框2"
                }
            ],
            "name":"default",
            "ruleError":"请选择",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"单选"
        }
    },
    {
        "ele":"checkbox",
        "obj":{
            "type":"checkbox",
            "icons":"",
            "config":true,
            "label":"多选",
            "hasOther":false,
            "inlineBlock":false,
            "require":true,
            "value":[

            ],
            "items":[
                {
                    "label_value":"1",
                    "label_name":"多选框1"
                },
                {
                    "label_value":"2",
                    "label_name":"多选框2"
                }
            ],
            "name":"default",
            "ruleError":"该选项不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"多选"
        }
    },
    {
        "ele":"uploads",
        "obj":{
            "type":"uploads",
            "icons":"",
            "config":true,
            "action":"http://workflow.test/imageupload",
            "require":true,
            "label":"文件上传",
            "maxSize":2048,
            "value":[

            ],
            "updateType":"",
            "updateTypeList":[
                {
                    "dKey":"1",
                    "dValue":"图片类型"
                },
                {
                    "dKey":"2",
                    "dValue":"excel类型"
                },
                {
                    "dKey":"3",
                    "dValue":"压缩类型"
                }
            ],
            "name":"default",
            "ruleError":"请上传图片",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"文件上传"
        }
    },
    {
        "ele":"datepicker",
        "obj":{
            "type":"datepicker",
            "icons":"",
            "chooseCheck":[
                "date",
                "time"
            ],
            "config":true,
            "label":"时间选择",
            "placeholder":"请选择日期",
            "inlineBlock":false,
            "require":true,
            "name":"default",
            "value":"",
            "ruleError":"选项不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "format":"yyyy年MM月dd日",
            "modalTitle":"时间选择"
        }
    },
    {
        "ele":"address",
        "obj":{
            "type":"address",
            "chooseCheck":[
                "province",
                "city",
                "zone"
            ],
            "icons":"",
            "config":true,
            "label":"地址",
            "placeholder":"请输入详细地址",
            "inlineBlock":false,
            "require":true,
            "multiple":false,
            "name":"default",
            "value":[

            ],
            "sheng":[

            ],
            "shi":[

            ],
            "qu":[

            ],
            "ruleError":"请选择并输入详细地址",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "details_address":true,
            "modalTitle":"地址"
        }
    },
    {
        "ele":"download",
        "obj":{
            "type":"download",
            "icons":"",
            "config":true,
            "label":"文件下载",
            "placeholder":"",
            "inlineBlock":false,
            "require":false,
            "describe":"",
            "items":[
                {
                    "label_value":1,
                    "label_name":"add-form.txt",
                    "url":"/files/2018/12/18/add-form.txt",
                    "size":19880
                },
                {
                    "label_value":2,
                    "label_name":"chrome.exe",
                    "url":"",
                    "size":1587680
                }
            ],
            "verify":"none",
            "value":"",
            "name":"default",
            "ruleError":"该字段不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"文件下载"
        }
    },
    {
        "ele":"uploadimg",
        "obj":{
            "type":"uploadimg",
            "icons":"",
            "lessNum":1,
            "lessImgRequire":false,
            "config":true,
            "label":"图片上传",
            "placeholder":"",
            "inlineBlock":false,
            "require":true,
            "describe":"",
            "verify":"none",
            "value":"",
            "name":"default",
            "ruleError":"该字段不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"图片上传"
        }
    },
    {
        "ele":"imgshow",
        "obj":{
            "type":"imgShow",
            "icons":"",
            "config":true,
            "label":"图片展示",
            "imgArr":[
                {
                    "titles":"图片",
                    "name":"18170527.jpeg",
                    "url":"/files/2018/12/18/18170527.jpeg",
                    "size":91397,
                    "status":"finished",
                    "percentage":100,
                    "uid":1545140945634
                },
                {
                    "titles":"图片",
                    "name":"00424997424706644.jpg",
                    "url":"/files/2018/12/18/00424997424706644.jpg",
                    "size":223163,
                    "status":"finished",
                    "percentage":100,
                    "uid":1545140945635
                }
            ],
            "placeholder":"",
            "inlineBlock":false,
            "require":false,
            "describe":"",
            "gradesType":"add",
            "low":0,
            "high":100,
            "step":1,
            "verify":"none",
            "value":"",
            "name":"default",
            "ruleError":"该字段不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"图片展示"
        }
    },
    {
        "ele":"imgcheck",
        "obj":{
            "type":"imgCheck",
            "icons":"",
            "config":true,
            "label":"图片选择",
            "placeholder":"",
            "inlineBlock":false,
            "require":true,
            "maxlen":"1",
            "minlen":0,
            "imgArr":[
                {
                    "titles":"图片",
                    "name":"00424997424706644.jpg",
                    "url":"/files/2018/12/18/00424997424706644.jpg",
                    "progress":0,
                    "size":223163,
                    "labels":"图片1",
                    "status":"finished",
                    "percentage":100,
                    "uid":1545140964561
                },
                {
                    "titles":"图片",
                    "name":"00424997424706644.jpg",
                    "url":"/files/2018/12/18/00424997424706644.jpg",
                    "progress":0,
                    "size":223163,
                    "labels":"图片2",
                    "status":"finished",
                    "percentage":100,
                    "uid":1545140964562
                }
            ],
            "describe":"",
            "gradesType":"add",
            "low":0,
            "high":100,
            "step":1,
            "verify":"none",
            "value":"",
            "name":"default",
            "ruleError":"该字段不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"图片选择"
        }
    },
    {
        "ele":"selectcontact",
        "obj":{
            "type":"selectcontact",
            "icons":"",
            "config":true,
            "label":"二级下拉",
            "placeholder":"请输入详细地址",
            "inlineBlock":false,
            "require":true,
            "multiple":false,
            "name":"default",
            "value":[

            ],
            "items":[
                {
                    "label_value":"a1v",
                    "label_name":"a1",
                    "arrs":[
                        {
                            "label_value":"a1_1",
                            "label_name":"a1_1"
                        },
                        {
                            "label_value":"a1_2",
                            "label_name":"a1_2"
                        }
                    ]
                },
                {
                    "label_value":"a2",
                    "label_name":"a2",
                    "arrs":[
                        {
                            "label_value":"a2_1",
                            "label_name":"a2_1"
                        },
                        {
                            "label_value":"a2_1",
                            "label_name":"a2_2"
                        }
                    ]
                }
            ],
            "two_arr":[

            ],
            "ruleError":"请选择并输入详细地址",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "details_address":true,
            "modalTitle":"二级下拉"
        }
    },
    {
        "ele":"selectstudent",
        "obj":{
            "type":"selectstudent",
            "icons":"",
            "modal":"selectStudentForm",
            "config":true,
            "label":"选择学生",
            "placeholder":"",
            "inlineBlock":false,
            "require":true,
            "maxLength":2000,
            "describe":"",
            "items":[
                {
                    "checked":true,
                    "departid":"cpXeBttIWNMdone",
                    "gender":"2",
                    "is_subscribe":"0",
                    "join_date":"2018-10-23",
                    "name":"测试学生5",
                    "other_departid":[

                    ],
                    "wxuserid":"campus_10674256",
                    "userid":"xmasjxmasXO3EcPkEdone"
                },
                {
                    "checked":true,
                    "departid":"cpXeBttIWNMdone",
                    "gender":"2",
                    "is_subscribe":"0",
                    "join_date":"2018-10-23",
                    "name":"测试学生4",
                    "other_departid":[

                    ],
                    "wxuserid":"campus_10674254",
                    "userid":"0vIxz6QTmOYdone"
                },
                {
                    "checked":true,
                    "departid":"cpXeBttIWNMdone",
                    "gender":"",
                    "is_subscribe":"0",
                    "join_date":"0100-01-01",
                    "name":"黄小媛",
                    "other_departid":[

                    ],
                    "wxuserid":"campus_8225758",
                    "userid":"A7lJOHxxRxmasAdone"
                }
            ],
            "verify":"none",
            "value":"",
            "name":"default",
            "ruleError":"该字段不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"选择学生"
        }
    },
    {
        "ele":"selectgrade",
        "obj":{
            "type":"selectgrade",
            "icons":"",
            "modal":"selectGradeForm",
            "config":true,
            "label":"选择年级",
            "placeholder":"",
            "inlineBlock":false,
            "require":true,
            "maxLength":2000,
            "describe":"",
            "items":[
                {
                    "children":[
                        {
                            "children":[
                                {
                                    "children":[
                                        {
                                            "children":[
                                                {
                                                    "departid":"hHuccJElV5kdone",
                                                    "join_year":"2017",
                                                    "level":"6",
                                                    "title":"测试班级2",
                                                    "wxdepartid":"79",
                                                    "nodeKey":9,
                                                    "checked":true,
                                                    "indeterminate":false
                                                },
                                                {
                                                    "departid":"tAgvjune2h4BgUdone",
                                                    "join_year":"2017",
                                                    "level":"6",
                                                    "title":"测试班级3",
                                                    "wxdepartid":"81",
                                                    "nodeKey":10,
                                                    "checked":true,
                                                    "indeterminate":false
                                                }
                                            ],
                                            "departid":"dmgT19FmVxmasIdone",
                                            "join_year":"2017",
                                            "level":"5",
                                            "title":"测试年级2",
                                            "wxdepartid":"77",
                                            "nodeKey":8,
                                            "checked":true,
                                            "indeterminate":false
                                        }
                                    ],
                                    "departid":"tpdpvxmasIiongdone",
                                    "join_year":"2017",
                                    "level":"4",
                                    "title":"测试专业2",
                                    "wxdepartid":"75",
                                    "nodeKey":7,
                                    "checked":true,
                                    "indeterminate":false
                                }
                            ],
                            "departid":"CYejunexmashVByPgdone",
                            "join_year":"2017",
                            "level":"3",
                            "title":"测试学院2",
                            "wxdepartid":"73",
                            "nodeKey":6,
                            "checked":true,
                            "indeterminate":false
                        }
                    ],
                    "departid":"IS74JSgUq9gdone",
                    "join_year":"2017",
                    "level":"2",
                    "title":"测试用户2",
                    "wxdepartid":"71",
                    "nodeKey":5,
                    "checked":true,
                    "indeterminate":false
                },
                {
                    "children":[
                        {
                            "children":[
                                {
                                    "children":[
                                        {
                                            "departid":"hHuccJElV5kdone",
                                            "join_year":"2017",
                                            "level":"6",
                                            "title":"测试班级2",
                                            "wxdepartid":"79",
                                            "nodeKey":9,
                                            "checked":true,
                                            "indeterminate":false
                                        },
                                        {
                                            "departid":"tAgvjune2h4BgUdone",
                                            "join_year":"2017",
                                            "level":"6",
                                            "title":"测试班级3",
                                            "wxdepartid":"81",
                                            "nodeKey":10,
                                            "checked":true,
                                            "indeterminate":false
                                        }
                                    ],
                                    "departid":"dmgT19FmVxmasIdone",
                                    "join_year":"2017",
                                    "level":"5",
                                    "title":"测试年级2",
                                    "wxdepartid":"77",
                                    "nodeKey":8,
                                    "checked":true,
                                    "indeterminate":false
                                }
                            ],
                            "departid":"tpdpvxmasIiongdone",
                            "join_year":"2017",
                            "level":"4",
                            "title":"测试专业2",
                            "wxdepartid":"75",
                            "nodeKey":7,
                            "checked":true,
                            "indeterminate":false
                        }
                    ],
                    "departid":"CYejunexmashVByPgdone",
                    "join_year":"2017",
                    "level":"3",
                    "title":"测试学院2",
                    "wxdepartid":"73",
                    "nodeKey":6,
                    "checked":true,
                    "indeterminate":false
                },
                {
                    "children":[
                        {
                            "children":[
                                {
                                    "departid":"hHuccJElV5kdone",
                                    "join_year":"2017",
                                    "level":"6",
                                    "title":"测试班级2",
                                    "wxdepartid":"79",
                                    "nodeKey":9,
                                    "checked":true,
                                    "indeterminate":false
                                },
                                {
                                    "departid":"tAgvjune2h4BgUdone",
                                    "join_year":"2017",
                                    "level":"6",
                                    "title":"测试班级3",
                                    "wxdepartid":"81",
                                    "nodeKey":10,
                                    "checked":true,
                                    "indeterminate":false
                                }
                            ],
                            "departid":"dmgT19FmVxmasIdone",
                            "join_year":"2017",
                            "level":"5",
                            "title":"测试年级2",
                            "wxdepartid":"77",
                            "nodeKey":8,
                            "checked":true,
                            "indeterminate":false
                        }
                    ],
                    "departid":"tpdpvxmasIiongdone",
                    "join_year":"2017",
                    "level":"4",
                    "title":"测试专业2",
                    "wxdepartid":"75",
                    "nodeKey":7,
                    "checked":true,
                    "indeterminate":false
                },
                {
                    "children":[
                        {
                            "departid":"hHuccJElV5kdone",
                            "join_year":"2017",
                            "level":"6",
                            "title":"测试班级2",
                            "wxdepartid":"79",
                            "nodeKey":9,
                            "checked":true,
                            "indeterminate":false
                        },
                        {
                            "departid":"tAgvjune2h4BgUdone",
                            "join_year":"2017",
                            "level":"6",
                            "title":"测试班级3",
                            "wxdepartid":"81",
                            "nodeKey":10,
                            "checked":true,
                            "indeterminate":false
                        }
                    ],
                    "departid":"dmgT19FmVxmasIdone",
                    "join_year":"2017",
                    "level":"5",
                    "title":"测试年级2",
                    "wxdepartid":"77",
                    "nodeKey":8,
                    "checked":true,
                    "indeterminate":false
                },
                {
                    "departid":"hHuccJElV5kdone",
                    "join_year":"2017",
                    "level":"6",
                    "title":"测试班级2",
                    "wxdepartid":"79",
                    "nodeKey":9,
                    "checked":true,
                    "indeterminate":false
                },
                {
                    "departid":"tAgvjune2h4BgUdone",
                    "join_year":"2017",
                    "level":"6",
                    "title":"测试班级3",
                    "wxdepartid":"81",
                    "nodeKey":10,
                    "checked":true,
                    "indeterminate":false
                },
                {
                    "departid":"cpXeBttIWNMdone",
                    "join_year":"2018",
                    "level":"6",
                    "title":"测试班级组织架构",
                    "wxdepartid":"114",
                    "nodeKey":11,
                    "checked":true,
                    "indeterminate":false
                }
            ],
            "verify":"none",
            "value":"",
            "name":"default",
            "ruleError":"该字段不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"选择年级"
        }
    },
    {
        "ele":"selectteacher",
        "obj":{
            "type":"selectteacher",
            "icons":"",
            "modal":"selectTeacherForm",
            "config":true,
            "label":"选择老师",
            "placeholder":"",
            "inlineBlock":false,
            "require":true,
            "maxLength":2000,
            "describe":"",
            "items":[

            ],
            "verify":"none",
            "value":"",
            "name":"default",
            "ruleError":"该字段不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"选择老师"
        }
    },
    {
        "ele":"selectdepartment",
        "obj":{
            "type":"selectdepartment",
            "icons":"",
            "modal":"selectDepartmentForm",
            "config":true,
            "label":"选择部门",
            "placeholder":"",
            "inlineBlock":false,
            "require":true,
            "maxLength":2000,
            "describe":"",
            "items":[
                {
                    "children":[
                        {
                            "departid":"bjAyOaLCRVMdone",
                            "join_year":"2017",
                            "level":"3",
                            "title":"三教",
                            "wxdepartid":"108",
                            "nodeKey":5,
                            "checked":true,
                            "indeterminate":false
                        },
                        {
                            "departid":"Oj3lq5qU8xmasMdone",
                            "join_year":"2017",
                            "level":"3",
                            "title":"qwer2",
                            "wxdepartid":"109",
                            "nodeKey":6,
                            "checked":true,
                            "indeterminate":false
                        },
                        {
                            "departid":"8vPvPdISxPwdone",
                            "join_year":"2017",
                            "level":"3",
                            "title":"四教",
                            "wxdepartid":"110",
                            "nodeKey":7,
                            "checked":true,
                            "indeterminate":false
                        }
                    ],
                    "departid":"Ab8Sp7xmas6Pa0done",
                    "join_year":"2017",
                    "level":"2",
                    "title":"教育部2",
                    "wxdepartid":"107",
                    "nodeKey":4,
                    "checked":true,
                    "indeterminate":false
                },
                {
                    "departid":"bjAyOaLCRVMdone",
                    "join_year":"2017",
                    "level":"3",
                    "title":"三教",
                    "wxdepartid":"108",
                    "nodeKey":5,
                    "checked":true,
                    "indeterminate":false
                },
                {
                    "departid":"Oj3lq5qU8xmasMdone",
                    "join_year":"2017",
                    "level":"3",
                    "title":"qwer2",
                    "wxdepartid":"109",
                    "nodeKey":6,
                    "checked":true,
                    "indeterminate":false
                },
                {
                    "departid":"8vPvPdISxPwdone",
                    "join_year":"2017",
                    "level":"3",
                    "title":"四教",
                    "wxdepartid":"110",
                    "nodeKey":7,
                    "checked":true,
                    "indeterminate":false
                },
                {
                    "departid":"iCI75juneNF8T0done",
                    "join_year":"2018",
                    "level":"2",
                    "title":"老师组织结构",
                    "wxdepartid":"116",
                    "nodeKey":8,
                    "checked":true,
                    "indeterminate":false
                }
            ],
            "verify":"none",
            "value":"",
            "name":"default",
            "ruleError":"该字段不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"选择部门"
        }
    },
    {
        "ele":"slider",
        "obj":{
            "type":"slider",
            "icons":"",
            "config":true,
            "label":"手动填写分数",
            "placeholder":"",
            "inlineBlock":false,
            "require":true,
            "describe":"",
            "gradesType":"add",
            "low":0,
            "high":"10",
            "step":1,
            "verify":"none",
            "value":"",
            "name":"default",
            "ruleError":"该字段不能为空",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"手动填写分数"
        }
    },
    {
        "ele":"score",
        "obj":{
            "type":"score",
            "icons":"",
            "config":true,
            "label":"勾选打分",
            "isCheck":false,
            "inlineBlock":false,
            "require":true,
            "value":"",
            "items":[
                {
                    "label_value":"1",
                    "label_name":"加分",
                    "scoreType":"add"
                },
                {
                    "label_value":"2",
                    "label_name":"减分",
                    "scoreType":"mins"
                }
            ],
            "name":"default",
            "ruleError":"请选择",
            "relation":false,
            "relation_name":"",
            "relation_value":"",
            "visibility":true,
            "modalTitle":"勾选打分"
        }
    }
],
                describe: "",
                title: "未命名表单"
            }
        }
    },
    mounted(){
        // this.previewObj=this.$api.sGetObject("previewObj");
        console.log(0,this.previewObj)
    },
    methods: {
        checkAllGroupChange() {

        },
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
                }

            }

            .imgPreview {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                img {
                    width: 10rem;
                    height: 10rem;
                }
            }
            .imgCheckPreview {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                div{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                img {
                    width: 8rem;
                    height: 8rem;
                }
            }
        }
    }
</style>
