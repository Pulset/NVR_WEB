<template>
  <el-form label-width="80px">
    <el-form-item v-for="item in channels" :label="item.title" :key="item.tile">
      <el-input v-model="item.value"></el-input>
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
      channels:[{title:'通道1',value:''},{title:'通道2',value:''},{title:'通道3',value:''},{title:'通道4',value:''},{title:'通道5',value:''},{title:'通道6',value:''},{title:'通道7',value:''}],
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
