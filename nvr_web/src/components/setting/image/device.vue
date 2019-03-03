<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="远程设备" name="first" class="deviceStyle">
        <el-table :data="tableData" style="width: 100%" stripe height="300">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="channel" label="通道" width="180"></el-table-column>
          <el-table-column prop="channelName" label="通道名称" width="180"></el-table-column>
          <el-table-column prop="status" label="连接状态" width="80">
            <template slot-scope="scope">
              <el-button
                icon="el-icon-circle-check"
                @click="deleteChannel(scope.row.index)"
                type="text"
              >{{scope.row.edit}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="ip" label="IP地址" width="180"></el-table-column>
          <el-table-column prop="port" label="端口" width="180"></el-table-column>
          <el-table-column prop="deviceName" label="设备名称" width="80"></el-table-column>
          <el-table-column prop="remoteChannel" label="远程通道号"></el-table-column>
          <el-table-column prop="manufacturer" label="厂商"></el-table-column>
          <el-table-column prop="type" label="设备类型"></el-table-column>
        </el-table>
        <div style class="deviceButtonStyle">
          <el-button @click="addRemoteDevice">添加</el-button>
          <el-button @click="addDevice">手动添加</el-button>
          <el-button @click="editIP">修改ip</el-button>
        </div>
        <div
          class="el-tabs__item"
          style="border: 1px solid#e6e6e6;border-bottom:none;color:#409EFF"
        >远程设备</div>
        <el-table :data="tableData" style="width: 100%" stripe height="300">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="channel" label="通道" width="180"></el-table-column>
          <el-table-column prop="channelName" label="通道名称" width="180"></el-table-column>
          <el-table-column prop="edit" label="修改" width="80">
            <template slot-scope="scope">
              <el-button
                icon="el-icon-edit"
                @click="editChannel(scope.row.index)"
                type="text"
              >{{scope.row.edit}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="delete" label="删除" width="80">
            <template slot-scope="scope">
              <el-button
                icon="el-icon-delete"
                @click="deleteChannel(scope.row.index)"
                type="text"
              >{{scope.row.edit}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="连接状态" width="80">
            <template slot-scope="scope">
              <el-button
                icon="el-icon-circle-check"
                @click="deleteChannel(scope.row.index)"
                type="text"
              >{{scope.row.edit}}</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="ip" label="IP地址" width="180"></el-table-column>
          <el-table-column prop="port" label="端口" width="180"></el-table-column>
          <el-table-column prop="deviceName" label="设备名称" width="80"></el-table-column>
          <el-table-column prop="remoteChannel" label="远程通道号"></el-table-column>
          <el-table-column prop="manufacturer" label="厂商"></el-table-column>
          <el-table-column prop="type" label="设备类型"></el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!-- <el-form style="margin-left:40px;margin-top:100px;" label-width="150px" label-position="left">
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
    <tcp-ip-dialog :dialogFormTitle="title" :form="editValue" @confirm="confirm" ref="dialog"></tcp-ip-dialog>-->
  </div>
</template>
  <script>
// import TcpIpDialog from "../../common/dialog.vue";
export default {
  data() {
    return {
      activeName: "first",
      currentIndex: 0,
      ipType: "IPv4",
      defaultNetworkCard: "0",
      tableData: [
        {
          channel: "D1",
          channelName: "IPC1",
          edit: "",
          delete: "",
          status: "",
          ip: "172.12.123.1",
          port: "37777",
          deviceName: "1231234CS123",
          remoteChannel: "1",
          manufacturer: "私有",
          type: "IPC-123"
        },
        {
          channelName: "IPC2",
          channel: "D1",
          edit: "",
          delete: "",
          status: "",
          ip: "172.12.123.1",
          port: "37777",
          deviceName: "1231234CS123",
          remoteChannel: "1",
          type: "IPC-123",
          manufacturer: "私有"
        },
        {
          channelName: "IPC3",
          channel: "D1",
          edit: "",
          delete: "",
          status: "",
          ip: "172.12.123.1",
          port: "37777",
          deviceName: "1231234CS123",
          remoteChannel: "1",
          type: "IPC-123",
          manufacturer: "私有"
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
  created: function() {
    this.ajax.post("http://yapi.demo.qunar.com/mock/47298/login", {
      userName: "virus",
      password: 12
    }).then(function (res) {
      console.log(res);
    })
  },
  methods: {
    editChannel() {},
    deleteChannel() {},
    addRemoteDevice() {},
    addDevice() {},
    editIP() {}
    // confirm(event) {
    //   this.tableData[this.currentIndex].networkCard = event[0].value;
    //   this.tableData[this.currentIndex].ip = event[1].value;
    //   this.tableData[this.currentIndex].model = event[2].value;
    // },
    // onConfirm() {
    //   console.log("onConfirm");
    // },
    // onRefresh() {
    //   console.log("onRefresh");
    // },
    // onDefault() {
    //   console.log("onDefault");
    // }
  }
};
</script>
<style>
/* .tcpipStyle .cell {
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
} */
.el-table .cell {
  text-align: center;
}
.deviceStyle .el-table {
  border: 1px solid#e6e6e6;
}
/* .tcpipStyle .el-table:nth-child(1) {
  margin-bottom: 20px;
}
.tcpipStyle .el-table:nth-child(2) {
  margin-top: 20px;
} */
.deviceButtonStyle {
  margin: 20px 0;
}
.deviceButtonStyle button {
  width: 100px;
  margin: 0 10px;
}
</style>
  