<template>
 <div>
  <el-tabs v-model="activeName" type="card" >
    <el-tab-pane label="TCP/IP" name="first" class="tcpipStyle">
      <el-table :data="tableData" style="width: 100%" stripe>
        <el-table-column prop="networkCard" label="网卡" width="180"></el-table-column>
        <el-table-column prop="ip" label="IP地址" width="180"></el-table-column>
        <el-table-column prop="model" label="网卡模式" width="180"></el-table-column>
        <el-table-column prop="bind" label="编辑" width="80" >
            <template slot-scope="scope">
              <el-button icon="el-icon-setting" @click="editNetwork(scope.row.index)" type="text">{{scope.row.edit}}</el-button>
            </template>
        </el-table-column>
        <el-table-column prop="bind" label="绑定关系"></el-table-column>
      </el-table> 
    </el-tab-pane>
  </el-tabs>
  <tcp-ip-dialog :dialogFormTitle="title" :form="editValue" @confirm="confirm" ref="dialog"></tcp-ip-dialog>
 </div>
</template>
  <script>
    import TcpIpDialog from '../../common/dialog.vue'
    export default {
      data() {
        return {
          activeName:'first',
          tableData: [{
            networkCard: '网卡1',
            ip: '172.12.123.1',
            model: '单网卡',
            bind:'',
            edit:'',
            index:0
          }, {
            networkCard: '网卡1',
            ip: '172.12.123.1',
            model: '单网卡',
            bind:'',
            edit:'',
            index:1
          }, {
            networkCard: '网卡1',
            ip: '172.12.123.1',
            model: '单网卡',
            bind:'',
            edit:'',
            index:2
          }, {
            networkCard: '网卡1',
            ip: '172.12.123.1',
            model: '单网卡',
            bind:'',
            edit:'',
            index:3
          }],
          formVisible: false,
          title:'编辑网卡信息',
          editValue:[{title:'网卡',value:'',type:'input'},{title:'网卡模式',value:'',type:'select',selectArr:[{name:'网卡1',value:0},{name:'网卡2',value:1}]}]
        }
      },
      methods: {
        editNetwork (index) {
          // this.formVisible = true;
          this.$refs.dialog.open();
          // this.editValue[index]
        },
        confirm (event) {
          console.log(event);
          
        }
      },
      components: {
        TcpIpDialog
      }
    }
  </script>
  <style>
  .tcpipStyle .cell {
    text-align: center;
  }
  </style>
  