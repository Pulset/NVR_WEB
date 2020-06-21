<template>
  <div class="alarm-container">
    <div class="alarm-left">
      <div>报警类型</div>
      <div v-for="(item, index) in alarmType" :key="index">
        <el-checkbox v-model="item.enable" class="alarm-item">{{item.type}}</el-checkbox>
      </div>
    </div>
    <customTable :tableData="alarmData" :titleData="titleData" class="alarm-right"></customTable>
  </div>
</template>
<script>
import customTable from "../common/table";
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
      alarmData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      titleData: [
        { type: "date", label: "日期", width: 180 },
        { type: "name", label: "姓名", width: 180 },
        { type: "address", label: "地址" }
      ]
    };
  },
  components: {
    customTable
  },
  beforeRouteEnter(to, from, next) {
    console.log(arguments);
    next();
  }
};
</script>
<style scoped>
.alarm-container {
  position: absolute;
  top: 100px;
  left: 200px;
  width: 88%;
}
.alarm-item {
  margin: 10px 0;
}
.alarm-left {
  float: left;
  width: 15%;
}
.alarm-right {
  float: left;
  width: 85%;
  height: 406px;
}
</style>
