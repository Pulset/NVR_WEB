<template>
  <el-table
    :data="tableData"
    stripe style="border:1px solid #909399;">
    <el-table-column v-for="(item,index) in titleData" :key="index" 
      :prop="item.type"
      :label="item.label"
      :width="item.width">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        // tableData: [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }]
      }
    },
    props:{
        tableData:Array,
        titleData:Array
    }
  }
</script>