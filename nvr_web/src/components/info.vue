<template>
  <div>
    <el-col :span="24" :offset="3">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" router>
        <el-menu-item v-for="tab in tabs" v-bind:key="tab.title" :index="tab.router">{{tab.title}}</el-menu-item>
      </el-menu>
      <div class="line"></div>
    </el-col>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "/baseInfo",
      tabs: [
        {
          title: "基本信息",
          router: "/info/baseInfo"
        },
        {
          title: "日志",
          router: "/info/log"
        },
        {
          title: "在线用户",
          router: "/info/onlineAccount"
        },
        {
          title: "硬盘信息",
          router: "/info/hdd"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style scoped>
.el-menu-item {
  width: 150px;
  text-align: center;
}
</style>
