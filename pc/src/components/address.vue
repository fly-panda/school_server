<template>
    <div class="selectStudentContainer">
        <div class="title" :class="{'require-cls':cont.obj.require}">{{cont.obj.label}}</div>
        <div class="point">{{cont.obj.describe}}</div>
        <Row>
            <Col span="7" v-show="cont.obj.chooseCheck[0]=='province'">
                <Select placeholder="省/市/区/直辖市" v-model="cont.obj.shengValue" @on-change="getShi(cont.obj.shengValue)" style="width:10rem;">
                    <Option v-for="item in shengArr" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
            </Col>
            <Col span="7" v-show="cont.obj.chooseCheck[1]=='city'">
            
                <Select placeholder="市" v-model="cont.obj.shiValue" @on-change="getQu" style="width:10rem;">
                    
                    <Option v-for="item in shiArr" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
            </Col>
            <Col span="7" v-show="cont.obj.chooseCheck[2]=='zone'">
                <Select placeholder="县/区" v-model="cont.obj.quValue" style="width:10rem;">
                     <Option v-for="item in quArr" :value="item.id" :key="item.id">{{ item.name }}</Option>
                </Select>
            </Col>
        </Row>
        <Row style="margin-top: .4rem" v-show="cont.obj.chooseCheck[3]=='detail'">
            <Input  type="text" v-model="cont.obj.value" placeholder="请输入详细地址"></Input>
        </Row>
    </div>
</template>

<script>
export default {
    props:["name"],
    data() {
        return {
            cont:this.name,
            shengArr:[],
            shiArr:[],
            quArr:[],
        }
    },
    mounted(){
        this.getSheng();

        if(this.cont.obj.shengValue){

            this.getShi(this.cont.obj.shengValue);
        }
        if(this.cont.obj.shiValue){
            this.getQu(this.cont.obj.shiValue);
        }
        
    },
    watch : {
        'name' : function(newVal, oldVal){
            this.curName = newVal;
        },
        curName : function(newVal, oldVal){
            this.$emit("update:name", newVal);
        }
    },
    methods: {
        getSheng(){

            this.$api.get("/city/getCity",{
                pid:0
            },r=>{
                this.shengArr=JSON.parse(r.data);
            }) 
        },
        getShi(res){
            // console.log(res)
            this.shiArr=[];
            this.quArr=[];
            // this.cont.obj.shiValue="";
            // this.cont.obj.quValue="";
            this.$api.get("/city/getCity",{
                pid:res
            },r=>{
                this.shiArr=JSON.parse(r.data);
            })
        },
        getQu(item){
            this.quArr=[];
            // this.cont.obj.quValue="";
            this.$api.get("/city/getCity",{
                pid:item
            },r=>{
                this.quArr=JSON.parse(r.data);
            })
        },
    }
}
</script>

<style lang='less' scoped >
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
    .require-cls:before {
        content: '*';
        display: inline-block;
        margin-right: 4px;
        line-height: 1;
        font-family: SimSun;
        font-size: 12px;
        color: #f30;

    }
</style>
