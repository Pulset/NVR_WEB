<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="端口" name="first">
      <el-form label-width="100px" label-position="left">
        <el-form-item v-for="item in channels" :label="item.title" :key="item.tile">
          <el-input v-model="item.value" :min="item.min" :max="item.max" type="number"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="onConfirm">确定</el-button>
          <el-button @click="onRefresh">刷新</el-button>
          <el-button @click="onDefault">恢复默认</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      channels: [
        { title: "最大连接数", value: "", min: 0, max: 65535 },
        { title: "TCP端口", value: "", min: 0, max: 65535 },
        { title: "UDP端口", value: "", min: 0, max: 65535 },
        { title: "HTTP端口", value: "", min: 0, max: 65535 },
        { title: "HTTPS端口", value: "", min: 0, max: 65535 },
        { title: "RTSP端口", value: "", min: 0, max: 65535 },
        { title: "POS端口", value: "", min: 0, max: 65535 }
      ]
    };
  },
  methods: {
    onApply() {
      console.log("onApply");
    },
    onConfirm() {
      console.log(this.channels);
    },
    onRefresh() {
      console.log("onRefresh");
    },
    onDefault() {
      console.log("onDefault");
    }
  }
};
</script>
<style scoped>
</style>
