<template>
<el-tabs v-model="activeName" type="card">
  <el-tab-pane label="PPPOE" name="first">
    <el-form label-width="80px" label-position="left">
      <el-form-item v-for="item in channels" :label="item.title" :key="item.tile">
        <el-input v-model="item.value"></el-input>
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
      activeName:'first',
      channels:[{title:'最大连接数',value:''},{title:'TCP端口',value:''},{title:'UDP端口',value:''},{title:'HTTP端口',value:''},{title:'HTTPS端口',value:''},{title:'RTSP端口',value:''},{title:'POS端口',value:''}],
    }
  },
  methods:{
    onApply() {
      console.log('onApply');
    },
    onConfirm() {
      console.log(this.channels);
    },
    onRefresh() {
      console.log('onRefresh');
    },
    onDefault() {
      console.log('onDefault');
    }
  }
}
</script>
<style scoped>

</style>
