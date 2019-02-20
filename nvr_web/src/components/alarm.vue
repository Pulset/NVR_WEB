<template>
  <div class="alarm-container">
    <div>报警类型</div>
    <div v-for="(item, index) in alarmType" :key="index">
      <el-checkbox v-model="item.enable" class="alarm-item">{{item.type}}</el-checkbox>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      alarmType: [
        { type: "动态检测", enable: false },
        { type: "本地报警", enable: false },
        { type: "视频遮挡", enable: false },
        { type: "硬盘故障", enable: false },
        { type: "视频丢失", enable: false },
        { type: "智能检测", enable: false },
        { type: "音频检测", enable: false },
        { type: "火情报警", enable: false },
        { type: "温度告警", enable: false },
        { type: "场景变更", enable: false }
      ],
      checked: true
    };
  }
};
</script>
<style scoped>
.alarm-container {
  position: absolute;
  top: 100px;
  left: 200px;
}
.alarm-item {
  margin: 10px 0;
}
</style>
