<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="摄像头" name="first">
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
        <el-form-item label="亮度" class="cameraStyle">
          <el-slider v-model="form.brightness"></el-slider>
        </el-form-item>
        <el-form-item label="对比度" class="cameraStyle">
          <el-slider v-model="form.contrast"></el-slider>
        </el-form-item>
        <el-form-item label="饱和度" class="cameraStyle">
          <el-slider v-model="form.saturability"></el-slider>
        </el-form-item>
        <el-form-item label="锐度" class="cameraStyle">
          <el-slider v-model="form.acuity.acuity"></el-slider>
        </el-form-item>
        <el-form-item label="锐度" class="cameraStyle">
          <el-radio-group v-model="form.acuity.enable">
            <el-radio :label="true">开启</el-radio>
            <el-radio :label="false">关闭</el-radio>
          </el-radio-group>
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
      defaultChannel: 1,
      activeName: "first",
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
      form: {
        brightness: 33,
        contrast: 22,
        saturability: 12,
        acuity: { enable: false, acuity: 80 }
      }
    };
  },
  created() {
    this.ajax
      .post("getCameraConfig", { channel: this.defaultChannel })
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
      this.ajax.post("getCameraConfig", { channel: val }).then(res => {
        this.form = res;
      });
    }
  }
};
</script>
<style scoped>
.cameraStyle {
  width: 333px;
}
</style>
