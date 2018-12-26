<template>
  <div id="app">
    <el-container>
      <el-header>
        <NavMenu></NavMenu>
      </el-header>
      <el-container>
        <!-- <el-aside>aside</el-aside>
        <el-main>main</el-main> -->
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './components/navMenu.vue'
export default {
  name: 'app',
  components: {
    NavMenu
  }
}
</script>

<style>
/* .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  } */
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
