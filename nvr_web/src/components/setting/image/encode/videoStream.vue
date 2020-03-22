<template>
  <el-form ref="form" :model="form" label-width="80px" label-position="left">
    <el-form-item label="通道">
      <el-select @change="changeChannel" v-model="defaultChannel">
        <el-option
          v-for="(item, index) in channelOption"
          :label="item.text"
          :value="item.value"
          :key="index"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="码流类型">
      <el-select v-model="form.type" placeholder="请选择码流类型">
        <el-option v-for="(type, index) in types" :key="index" :value="index" :label="type"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="编码模式">
      <el-select v-model="form.encodeMode" placeholder="请选择编码模式">
        <el-option
          v-for="(encodeMode, index) in encodeModes"
          :key="index"
          :value="index"
          :label="encodeMode"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button @click="onConfirm">确定</el-button>
      <el-button @click="onRefresh">刷新</el-button>
      <el-button @click="onDefault">恢复默认</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      defaultChannel: 1,
      channelOption: [
        {
          text: "D1",
          value: 1
        },
        {
          text: "D2",
          value: 2
        },
        {
          text: "D3",
          value: 3
        },
        {
          text: "D4",
          value: 4
        },
        {
          text: "D5",
          value: 5
        },
        {
          text: "D5",
          value: 5
        },
        {
          text: "D7",
          value: 7
        },
        {
          text: "D8",
          value: 8
        }
      ],
      types: ["普通", "报警", "智能"],
      encodeModes: ["H.261", "H.263", "H.264"],
      form: {
        type: "",
        encodeMode: ""
      }
    };
  },
  created() {
    this.ajax
      .post("getVideoConfig", { channel: this.defaultChannel })
      .then(res => {
        this.form = res;
      });
  },
  methods: {
    onConfirm() {
      console.log(this.form);
    },
    onRefresh() {
      console.log("onRefresh");
    },
    onDefault() {
      console.log("onDefault");
    },
    changeChannel(val) {
      this.ajax.post("getVideoConfig", { channel: val }).then(res => {
        this.form = res;
      });
    }
  }
};
</script>
<style scoped>
</style>
