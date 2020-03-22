<template>
  <div>
    <el-button type="warning" icon="el-icon-circle-close" @click="loginOut">注销</el-button>
  </div>
</template>


<script>
export default {
  methods: {
    loginOut() {
      this.$store.commit("loginOut");
    }
  }
};
</script>
<style scoped>
div {
  height: 100px;
  width: 100px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: 50px;
}
</style>