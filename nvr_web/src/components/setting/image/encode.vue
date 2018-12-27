<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first"><videoStream></videoStream></el-tab-pane>
    <el-tab-pane label="配置管理" name="second"><pictureStream></pictureStream></el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>
<script>
import videoStream from './videoStream.vue'
import pictureStream from './pictureStream.vue'
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick() {
        // console.log(tab.index);
        // switch (tab.index) {
        //     case 0:
        //         this.router.push({ path: 'videoStream' })
        //         break;
        //     case 1:
        //         this.router.push({ path: 'pictureStream' })    
        //             break;

        //     default:
        //         break;
        // }
      }
    },
    components: {
        videoStream,
        pictureStream
    }
  };
</script>
<style>
.el-tabs__content{
    position: relative;
    width: 1500px;
}
</style>
