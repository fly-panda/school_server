<template>
<div class="checkContainer">
    <!-- :load-data="loadData" -->
    <Tree ref="tree" :data="data3"  show-checkbox></Tree>
    <div class="flexCenter">
        <Button type="primary" @click="submitResut">确定</Button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            data3: [{
                title: '政教处',
                expand: true,
                loading: false,
                children: [
                    {
                        title: '语文组'
                    },
                    {
                        title: '数学组'
                    },
                    {
                        title: '英语组'
                    }
                ]
            },
            {
                title: '教务处',
                expand: true,
                loading: false,
                children: [
                    {
                        title: '教导处'
                    }
                ]
            }]
        }
    },
    methods: {
        loadData(item, callback) {
            // setTimeout(() => {
            //     const data = [{
            //             title: 'children',
            //             loading: false,
            //             children: []
            //         },
            //         {
            //             title: 'children',
            //             loading: false,
            //             children: []
            //         }
            //     ];
            //     callback(data);
            // }, 1000);
        },
        submitResut() {
            let selectNode = this.$refs.tree.getCheckedNodes()
            this.$emit('handleselect', selectNode);
        }
    }
}
</script>

<style lang="less" scoped>
.checkContainer {
    min-height: 400px;

    .positionColumn {
        display: flex;
        flex-direction: column;

        .checkboxItem {
            margin: 15px;
        }
    }

    .flexCenter {
        position: absolute;
        width: 100%;
        padding: 30px;
        bottom: 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        margin-top: 20px;
    }
}
</style>
