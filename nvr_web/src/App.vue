<template>
  <div id="app">
    <el-container v-if="isLogin">
      <el-header>
        <NavMenu></NavMenu>
      </el-header>
      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
    <login v-if="!isLogin"></login>
  </div>
</template>

<script>
import NavMenu from "./components/navMenu.vue";
import login from "./components/login.vue";
export default {
  name: "app",
  components: {
    NavMenu,
    login
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  } */
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
