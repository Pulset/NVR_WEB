<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="远程设备" name="first" class="deviceStyle">
        <el-table
          :data="tableData"
          style="width: 100%"
          stripe
          height="300"
          @selection-change="selectedFn"
        >
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
          <el-button @click="manualAddDevice">手动添加</el-button>
          <el-button @click="editIP">修改ip</el-button>
        </div>
        <div
          class="el-tabs__item"
          style="border: 1px solid#e6e6e6;border-bottom:none;color:#409EFF"
        >远程设备</div>
        <el-table :data="deviceTableData" style="width: 100%" stripe height="300">
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
    <addDeviceDialog
      dialogFormTitle="添加设备"
      :form="initDeviceData"
      @confirm="addDeviceConfirm"
      ref="dialog"
    ></addDeviceDialog>
    <addDeviceDialog
      dialogFormTitle="修改设备"
      :form="initDeviceData"
      @confirm="editDialogConfirm"
      ref="editDialog"
    ></addDeviceDialog>
  </div>
</template>
<script>
import addDeviceDialog from "../../common/dialog.vue";
export default {
  data() {
    return {
      activeName: "first",
      currentIndex: 0,
      ipType: "IPv4",
      defaultNetworkCard: "0",
      selectdDevice: [], //远程设备勾选的数据
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
          index: 0,
          manufacturer: "私有",
          type: "IPC-123"
        },
        {
          channelName: "IPC2",
          channel: "D1",
          edit: "",
          delete: "",
          status: "",
          ip: "172.12.123.2",
          port: "37777",
          deviceName: "1231234CS123",
          remoteChannel: "1",
          index: 1,
          type: "IPC-123",
          manufacturer: "私有"
        },
        {
          channelName: "IPC3",
          channel: "D1",
          edit: "",
          delete: "",
          status: "",
          ip: "172.12.123.4",
          port: "37777",
          deviceName: "1231234CS123",
          remoteChannel: "1",
          index: 2,
          type: "IPC-123",
          manufacturer: "私有"
        }
      ],
      deviceTableData: [
        {
          channel: "D1",
          channelName: "IPC1",
          edit: "",
          delete: "",
          status: "",
          ip: "172.12.11.1",
          port: "37777",
          deviceName: "1231234CS123",
          remoteChannel: "1",
          index: 0,
          manufacturer: "私有",
          type: "IPC-123"
        },
        {
          channelName: "IPC2",
          channel: "D1",
          edit: "",
          delete: "",
          status: "",
          ip: "172.12.33.2",
          port: "37777",
          deviceName: "1231234CS123",
          remoteChannel: "1",
          index: 1,
          type: "IPC-123",
          manufacturer: "私有"
        },
        {
          channelName: "IPC3",
          channel: "D1",
          edit: "",
          delete: "",
          status: "",
          ip: "172.12.1.4",
          port: "37777",
          deviceName: "1231234CS123",
          remoteChannel: "1",
          index: 2,
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
      ],
      initDeviceData: [
        {
          class: "manufacturer",
          title: "厂商",
          value: "",
          type: "select",
          selectArr: [
            { name: "私有", value: 1 },
            { name: "onvif", value: 2 }
          ]
        },
        { class: "ip", title: "IP", value: "", type: "input" },
        { class: "password", title: "密码", value: "", type: "input" },
        { class: "channel", title: "远程通道", value: "", type: "input" }
      ]
    };
  },
  components: {
    addDeviceDialog
  },
  created: function() {
    this.ajax
      .post("http://yapi.demo.qunar.com/mock/47298/login", {
        userName: "virus",
        password: 12
      })
      .then(function(res) {
        console.log(res);
      });
  },
  methods: {
    editChannel(index) {
      var data = JSON.parse(JSON.stringify(this.initDeviceData));
      data.forEach(item => {
        item.value = this.deviceTableData[index][item.class];
      });
      this.$refs.editDialog.changeForm(data, index);
    },
    deleteChannel(index) {
      this.deviceTableData.splice(index, 1);
      this.deviceTableData.forEach((item, i) => {
        item.index = i;
      });
    },
    addRemoteDevice() {
      if (this.selectdDevice.length) {
        this.saveDeviceInfo(this.selectdDevice);
      } else {
        this.$message({
          message: "至少勾选一个远程设备",
          type: "warning"
        });
      }
    },
    manualAddDevice() {
      this.$refs.dialog.open();
    },
    selectedFn(val) {
      this.selectdDevice = val;
    },
    editIP() {
      if (this.selectdDevice.length) {
        var data = JSON.parse(JSON.stringify(this.initDeviceData));
        data.forEach(item => {
          item.value = this.selectdDevice[0][item.class];
        });
        this.$refs.dialog.changeForm(data);
      } else {
        this.$message({
          message: "至少勾选一个远程设备",
          type: "warning"
        });
      }
    },
    addDeviceConfirm(event) {
      let deviceInfo = {};
      deviceInfo.manufacturer = event[0].value;
      deviceInfo.ip = event[1].value;
      deviceInfo.password = event[2].value;
      deviceInfo.remoteChannel = event[3].value;
      this.saveDeviceInfo(deviceInfo);
    },
    editDialogConfirm(event, index) {
      this.deviceTableData[index].manufacturer = event[0].value;
      this.deviceTableData[index].ip = event[1].value;
      this.deviceTableData[index].password = event[2].value;
      this.deviceTableData[index].remoteChannel = event[3].value;
    },
    saveDeviceInfo(deviceInfo) {
      var _this = this;
      this.ajax
        .post("http://yapi.demo.qunar.com/mock/47298/login", deviceInfo)
        .then(function(res) {
          console.log(res);
          _this.$message({
            message: "操作成功",
            type: "success"
          });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
          _this.$message({
            message: "操作失败",
            type: "error"
          });
        });
    }
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
  