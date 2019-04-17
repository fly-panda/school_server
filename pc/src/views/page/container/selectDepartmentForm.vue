<template>
  <div class="checkContainer">
    <div class="title-cls">选择老师范围</div>
    <!-- :load-data="loadData" -->
    <div style="height:300px;overflow-y: auto;">
      <Tree style="text-align: left;" ref="tree" :data="data3" show-checkbox></Tree>
    </div>
    <div class="flexCenter" style="padding: 5px;">
      <Button type="primary" @click="submitResut">确定</Button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex"; //先要引入
export default {
  data() {
    return {
      data3: []
    };
  },
  computed: {
    ...mapState(["departmentList"])
  },
  mounted() {
    let self = this;
    self.getData();
  },
  methods: {
    ...mapActions(["setDepartments"]),
    getData() {
      let self = this;
      self.$api.post(
        "/campus/getDepartmentInfoList",
        {
          usertype: 2
        },
        r => {
          self.data3 = JSON.parse(r.data);
          // console.log(self.data3);
        }
      );
    },

    submitResut() {
      let selectNode = this.$api.formatTreeData(
        this.$refs.tree.getCheckedNodes(),
        "children"
      );
      this.setDepartments(selectNode);
      this.$emit("handleselect", selectNode);
    }
  }
};
</script>

<style lang="less" scoped>
.checkContainer {
  min-height: 400px;
  text-align: left;
  .title-cls {
    font-size: 20px;
    padding: 5px 15px;
    border-bottom: 1px solid #e2e5e7;
  }
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
<style>
.ivu-tree {
  text-align: left;
}
</style>
