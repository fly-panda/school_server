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

    props: ['previewObj','isSave'],
    data() {
        return {
            checkAllGroup: [],
        }
    },
    mounted(){
        // this.previewObj=this.$api.sGetObject("previewObj");
        // console.log(this.previewObj)
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
