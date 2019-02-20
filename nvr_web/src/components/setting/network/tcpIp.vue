<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="TCP/IP" name="first" class="tcpipStyle">
        <el-table :data="tableData" style="width: 100%" stripe>
          <el-table-column prop="networkCard" label="网卡" width="180"></el-table-column>
          <el-table-column prop="ip" label="IP地址" width="180"></el-table-column>
          <el-table-column prop="model" label="网卡模式" width="180"></el-table-column>
          <el-table-column prop="bind" label="编辑" width="80">
            <template slot-scope="scope">
              <el-button
                icon="el-icon-edit"
                @click="editNetwork(scope.row.index)"
                type="text"
              >{{scope.row.edit}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="bind" label="绑定关系"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <el-form style="margin-left:40px;margin-top:100px;" label-width="150px" label-position="left">
      <el-form-item label="IP版本">
        <el-select v-model="ipType" placeholder="请选择IP版本">
          <el-option value="IPv4" label="IPv4"></el-option>
          <el-option value="IPv6" label="IPv6"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="首选DNS服务器" class="ipStyle">
        <input type="tel">
        <span>.</span>
        <input type="tel">
        <span>.</span>
        <input type="tel">
        <span>.</span>
        <input type="tel">
      </el-form-item>
      <el-form-item label="备用DNS服务器" class="ipStyle">
        <input type="tel">
        <span>.</span>
        <input type="tel">
        <span>.</span>
        <input type="tel">
        <span>.</span>
        <input type="tel">
      </el-form-item>
      <el-form-item label="默认网卡">
        <el-select v-model="defaultNetworkCard" placeholder="请选择默认网卡">
          <el-option value="0" label="网卡1"></el-option>
          <el-option value="1" label="网卡2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button @click="onConfirm">确定</el-button>
        <el-button @click="onRefresh">刷新</el-button>
        <el-button @click="onDefault">恢复默认</el-button>
      </el-form-item>
    </el-form>
    <tcp-ip-dialog :dialogFormTitle="title" :form="editValue" @confirm="confirm" ref="dialog"></tcp-ip-dialog>
  </div>
</template>
  <script>
import TcpIpDialog from "../../common/dialog.vue";
export default {
  data() {
    return {
      activeName: "first",
      currentIndex: 0,
      ipType: "IPv4",
      defaultNetworkCard: "0",
      tableData: [
        {
          networkCard: "网卡1",
          ip: "172.12.123.1",
          model: "单网卡",
          bind: "",
          edit: "",
          index: 0
        },
        {
          networkCard: "网卡1",
          ip: "172.12.123.1",
          model: "单网卡",
          bind: "",
          edit: "",
          index: 1
        },
        {
          networkCard: "网卡1",
          ip: "172.12.123.1",
          model: "单网卡",
          bind: "",
          edit: "",
          index: 2
        },
        {
          networkCard: "网卡1",
          ip: "172.12.123.1",
          model: "单网卡",
          bind: "",
          edit: "",
          index: 3
        }
      ],
      formVisible: false,
      title: "编辑网卡信息",
      editValue: [
        { title: "网卡", value: "网卡1", type: "input" },
        { title: "ip", value: "", type: "input" },
        {
          title: "网卡模式",
          value: "",
          type: "select",
          selectArr: [
            { name: "单网卡", value: 0 },
            { name: "双网卡", value: 1 }
          ]
        }
      ]
    };
  },
  methods: {
    editNetwork(index) {
      this.currentIndex = index;
      this.editValue[0].value = this.tableData[index].networkCard;
      this.editValue[1].value = this.tableData[index].ip;
      this.editValue[2].value = this.tableData[index].model;
      this.$refs.dialog.open();
    },
    confirm(event) {
      this.tableData[this.currentIndex].networkCard = event[0].value;
      this.tableData[this.currentIndex].ip = event[1].value;
      this.tableData[this.currentIndex].model = event[2].value;
    },
    onConfirm() {
      console.log("onConfirm");
    },
    onRefresh() {
      console.log("onRefresh");
    },
    onDefault() {
      console.log("onDefault");
    }
  },
  components: {
    TcpIpDialog
  }
};
</script>
  <style>
.tcpipStyle .cell {
  text-align: center;
}
.ipStyle input {
  width: 58px;
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  text-align: center;
}
.ipStyle span {
  font-size: 40px;
  vertical-align: bottom;
}
</style>
  