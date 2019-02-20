<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="版本信息" name="first"></el-tab-pane>
    <div v-for="(item,index) in info" :key="index" class="infoStyle">
      <span>{{item.title}}</span>
      <span>{{item.value}}</span>
    </div>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      info: [
        { title: "设备类型", value: "DH-NVR-123" },
        { title: "录像通道", value: "32" },
        { title: "报警输入", value: "16" },
        { title: "报警输出", value: "8" },
        { title: "序列号", value: "12341234" },
        { title: "Web版本", value: "1.0" },
        { title: "系统版本", value: "1.1" }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.infoStyle span {
  font-size: 14px;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.infoStyle span:nth-child(1) {
  width: 200px;
  display: inline-block;
}
</style>
