<template>
  <el-tabs v-model="activeName" type="card">
    <el-tab-pane label="视频码流" name="first"><video-stream></video-stream></el-tab-pane>
    <el-tab-pane label="图片码流" name="second"><picture-stream></picture-stream></el-tab-pane>
  </el-tabs>
</template>
<script>
import videoStream from './encode/videoStream.vue'
import pictureStream from './encode/pictureStream.vue'
  export default {
    data() {
      return {
        activeName: 'first'
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
.el-tabs__content {
  position: relative;
  width: 1500px;
  left: 40px;
}
.el-tabs__item {
  text-align: center;
  width: 130px;
}
</style>
