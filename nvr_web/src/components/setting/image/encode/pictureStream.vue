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
    <el-form-item label="抓图类型">
      <el-select v-model="form.type" placeholder="请选择抓图类型">
        <el-option v-for="(type, index) in types" :key="index" :value="index" :label="type"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="图片大小">
      <el-select v-model="form.size" placeholder="请选择图片大小">
        <el-option v-for="(item, index) in sizes" :key="index" :value="index" :label="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="图片质量">
      <el-select v-model="form.quality" placeholder="请选择图片质量">
        <el-option v-for="(item, index) in qualitys" :key="index" :value="index+1" :label="item"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="抓图间隔">
      <el-select v-model="form.interval" placeholder="请选择抓图间隔">
        <el-option v-for="(item, index) in intervals" :key="index" :value="index+1" :label="item"></el-option>
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
      types: ["定时", "按时"],
      sizes: ["2K", "1080P", "720P"],
      qualitys: ["1", "2", "3", "4", "5", "6"],
      intervals: ["1秒/张", "2秒/张", "3秒/张", "4秒/张", "5秒/张"],
      form: {
        type: "",
        size: "",
        quality: "",
        interval: ""
      }
    };
  },
  created() {
    this.ajax
      .post("getPictureConfig", { channel: this.defaultChannel })
      .then(res => {
        this.form = res;
      });
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
    changeChannel(val) {
      this.ajax.post("getPictureConfig", { channel: val }).then(res => {
        this.form = res;
      });
    }
  }
};
</script>
<style>
</style>
