<template>
  <el-col :span="24" :offset="3">
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick" router>
      <el-tab-pane label="预览" name="first" index="/preview" :route="{path: '/preview'}">预览</el-tab-pane>
      <el-tab-pane label="回放" name="second" index="/playback" :route="{path: '/playback'}">回放</el-tab-pane>
      <el-tab-pane label="智能回放" name="third">'智能回放'</el-tab-pane>
      <el-tab-pane label="报警" name="fourth">报警</el-tab-pane>
      <el-tab-pane label="设置" name="fifth">设置</el-tab-pane>
      <el-tab-pane label="信息" name="sixth">信息</el-tab-pane>
      <el-tab-pane label="注销" name="seventh">注销</el-tab-pane>
    </el-tabs>
  </el-col>
</template>
<script>
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab.index);
      }
    }
  };
</script>
<style >
.el-tabs__content,.el-tab-pane{
  display: none;
}
.el-tabs__item{
  width: 150px;
  text-align: center;
}
</style>
