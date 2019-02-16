<template>
  <el-form ref="form" :model="form" label-width="80px" label-position="left">
    <el-form-item label="通道">
      <el-select v-model="form.channel" placeholder="请选择通道" >
        <el-option v-for="(channel, index) in channels" :key="index" :value="index" :label="channel"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="码流类型">
      <el-select v-model="form.type" placeholder="请选择码流类型" >
        <el-option v-for="(type, index) in types" :key="index" :value="index" :label="type"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="编码模式">
      <el-select v-model="form.encodeMode" placeholder="请选择编码模式" >
        <el-option v-for="(encodeMode, index) in encodeModes" :key="index" :value="index" :label="encodeMode"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button @click="onApply">应用到</el-button>
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
      channels:['通道1','通道2','通道3','通道4','通道5','通道6','通道7'],
      types:['普通','报警','智能'],
      encodeModes:['H.261','H.263','H.264'],
      form:{
        channel:'',
        type:'',
        encodeMode:''
      }
      
    }
  },
  methods:{
    onApply() {
      console.log('onApply');
    },
    onConfirm() {
      console.log(this.form);
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
