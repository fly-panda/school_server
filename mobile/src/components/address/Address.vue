<template>
  <div class="address-components">
    <div class="select-item-title" v-html="obj.obj.label"></div>
    <div class="select-address">
      <div class="sheng">
        <popup-picker
          :data="shengArr"
          :columns="1"
          v-model="obj.obj.shengValueArr"
          placeholder="省/自治区/直辖市"
          show-name
          @on-change="getShi"
        ></popup-picker>
      </div>
      <div class="shi">
        <popup-picker
          :data="shiArr"
          :columns="1"
          v-model="obj.obj.shiValueArr"
          placeholder="市"
          @on-change="getQu"
          show-name
        ></popup-picker>
      </div>
      <div class="qu">
        <popup-picker
          :data="quArr"
          :columns="1"
          v-model="obj.obj.quValueArr"
          placeholder="区/县"
          show-name
        ></popup-picker>
      </div>
      <input
        v-if="obj.obj.chooseCheck.indexOf('address') > -1"
        type="text"
        placeholder="详细地址"
        v-model="obj.obj.value"
        style="padding: 0 12px;"
      >
    </div>
  </div>
</template>

<script>
import { PopupPicker } from "vux";
export default {
  name: "Address",
  components: {
    PopupPicker
  },
  props: ["name"],
  data() {
    return {
      obj: this.name,
      shengArr: [],
      shiArr: [],
      quArr: []
    };
  },
  watch: {
    name: function(newVal, oldVal) {
      this.curName = newVal;
    },
    curName: function(newVal, oldVal) {
      this.$emit("update:name", newVal);
    }
  },
  computed: {},
  methods: {
    dataFormat(data) {
      data.map((v, i) => {
        v.value = v.id
        v.parent = 0
      });
    },
    getSheng() {
      this.$api.get(
        "/city/getCity",
        {
          pid: 0
        },
        r => {
          this.shengArr = JSON.parse(r.data);
          this.dataFormat(this.shengArr)
        }
      );
    },
    getShi(value) {
      // console.log(value)
      this.obj.obj.shiValueArr = []
      this.obj.obj.quValueArr = []

      this.$api.get(
        "/city/getCity",
        {
          pid: value[0]
        },
        r => {
          this.shiArr = JSON.parse(r.data);
          this.dataFormat(this.shiArr)
        }
      );
    },
    getQu(item) {
      this.obj.obj.quValueArr = []
      this.$api.get(
        "/city/getCity",
        {
          pid: item[0]
        },
        r => {
          this.quArr = []
          this.quArr = JSON.parse(r.data);
          this.dataFormat(this.quArr)
        }
      );
    }
  },
  created() {},
  mounted() {
    // console.log(this.obj);
    this.getSheng();
    if (this.obj.obj.shengValue) {
      this.getShi(this.obj.obj.shengValue);
    }
    if (this.obj.obj.shiValue) {
      this.getQu(this.obj.obj.shiValue);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>