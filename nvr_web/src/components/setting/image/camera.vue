<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="摄像头" name="first">
      <el-form ref="form" :model="form" label-width="80px" label-position="left">
        <el-form-item label="通道">
          <el-select v-model="form.channel" placeholder="请选择通道">
            <el-option
              v-for="(channel, index) in channels"
              :key="index"
              :value="index"
              :label="channel"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="配置文件">
          <el-select v-model="form.config" placeholder="请选择配置文件" @change="onChangeConfig">
            <el-option v-for="(item, index) in configs" :key="index" :value="index" :label="item"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="亮度">
          <el-slider v-model="form.brightness"></el-slider>
        </el-form-item>
        <el-form-item label="对比度">
          <el-slider v-model="form.contrast"></el-slider>
        </el-form-item>
        <el-form-item label="饱和度">
          <el-slider v-model="form.saturation"></el-slider>
        </el-form-item>
        <el-form-item label="锐度">
          <el-slider v-model="form.acuity"></el-slider>
        </el-form-item>
        <el-form-item label="锐度">
          <el-radio v-model="form.denoise" label="1">开启</el-radio>
          <el-radio v-model="form.denoise" label="2">关闭</el-radio>
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
      channels: ["通道1", "通道2", "通道3", "通道4", "通道5", "通道6", "通道7"],
      configs: ["配置1", "配置2", "配置3"],
      form: {
        channel: "",
        config: "",
        brightness: 0,
        contrast: 0,
        saturation: 0,
        acuity: 10,
        denoise: ""
      }
    };
  },
  methods: {
    onApply() {
      console.log("onApply");
    },
    onConfirm() {
      console.log(this.form);
    },
    onRefresh() {
      console.log("onRefresh");
    },
    onDefault() {
      console.log("onDefault");
    },
    onChangeConfig(value) {
      console.log(value);
    }
  }
};
</script>
<style scoped>
</style>
