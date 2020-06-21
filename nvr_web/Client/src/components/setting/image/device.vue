<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="远程设备" name="first" class="deviceStyle">
        <el-table
          :data="remoteDevice"
          style="width: 100%"
          stripe
          height="300"
          @selection-change="selectedFn"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="ip" label="IP地址" width="380" sortable></el-table-column>
          <el-table-column prop="status" label="连接状态" width="80">
            <template slot-scope="scope">
              <el-button
                :icon="scope.row.status ? 'el-icon-circle-check' : 'el-icon-circle-close offLine'"
                type="text"
              ></el-button>
            </template>
          </el-table-column>
          <el-table-column prop="port" label="端口" width="180" sortable></el-table-column>
          <el-table-column prop="deviceName" label="设备名称" width="280" sortable></el-table-column>
          <el-table-column prop="manufacturer" label="厂商"></el-table-column>
          <el-table-column prop="type" label="设备类型"></el-table-column>
        </el-table>
        <div style class="deviceButtonStyle">
          <el-button @click="addRemoteDevice">添加</el-button>
          <el-button @click="manualAddDevice">手动添加</el-button>
          <el-button @click="searchRemoteDevice" :loading="isLoading">搜索设备</el-button>
          <el-button @click="routerTest">路由test</el-button>
        </div>
        <div
          class="el-tabs__item"
          style="border: 1px solid#e6e6e6;border-bottom:none;color:#409EFF"
        >远程设备</div>
        <el-table :data="localDevice" style="width: 100%" stripe height="300">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column prop="channel" label="通道" width="180"></el-table-column>
          <el-table-column prop="channelName" label="通道名称" width="180"></el-table-column>
          <el-table-column prop="edit" label="修改" width="80">
            <template slot-scope="scope">
              <el-button icon="el-icon-edit" @click="editDevice(scope.row)" type="text"></el-button>
            </template>
          </el-table-column>
          <el-table-column prop="delete" label="删除" width="80">
            <template slot-scope="scope">
              <el-button icon="el-icon-delete" @click="deleteDevice(scope.row.index)" type="text"></el-button>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="连接状态" width="80">
            <template slot-scope="scope">
              <el-button
                :icon="scope.row.status ? 'el-icon-circle-check' : 'el-icon-circle-close offLine'"
                type="text"
              ></el-button>
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
    <deviceDialog title="添加设备信息" @save="addLocalDevice" ref="addDevice"></deviceDialog>
    <deviceDialog title="编辑设备信息" @save="updateLocalDevice" ref="editDevice"></deviceDialog>
  </div>
</template>
<script>
import deviceDialog from "../../common/deviceDialog.vue";
export default {
  data() {
    return {
      activeName: "first",
      selectdDevice: [], //远程设备勾选的数据
      remoteDevice: [],
      isLoading: false, // 控制所有按钮时候出于loading
      localDevice: []
    };
  },
  components: {
    deviceDialog
  },
  created: function() {
    this.ajax.get("getLocalDevice").then(res => {
      this.localDevice = res;
      this.localDevice.forEach((item, index) => {
        item.index = index;
      });
    });
  },
  methods: {
    editDevice(val) {
      this.$refs.editDevice.show(val);
    },
    deleteDevice(index) {
      this.localDevice.forEach((item, i) => {
        if (item.index === index) {
          this.localDevice.splice(i, 1);
        }
      });
    },
    addRemoteDevice() {
      if (this.selectdDevice.length) {
        this.selectdDevice.forEach((item, index) => {
          item.index = this.localDevice.length + index;
          item.channelName = "通道" + (index + 1);
          item.channel = "D" + (index + 1);
          item.remoteChannel = 1;
          this.localDevice.push(item);
        });
      } else {
        this.$message({
          message: "至少勾选一个远程设备",
          type: "warning"
        });
      }
    },
    updateLocalDevice(res) {
      Object.assign(this.localDevice[res.index], res);
    },
    manualAddDevice() {
      this.$refs.addDevice.show({});
    },
    addLocalDevice(res) {
      res.index = this.localDevice.length;
      this.localDevice.push(res);
    },
    selectedFn(val) {
      this.selectdDevice = val;
    },
    searchRemoteDevice() {
      this.isLoading = true;
      this.ajax.get("getRemoteDevice").then(res => {
        this.remoteDevice = res;
        this.isLoading = false;
      });
    },
    routerTest() {
      this.$router.push({ name: "alarm", params: { userId: 1 } });
    }
  },
  beforeRouteEnter(to, from, next) {
    next();
    console.log(arguments);
  },
  beforeRouteUpdate(to, from, next) {
    next();
    console.log(arguments);
  },
  beforeRouteLeave(to, from, next) {
    next();
    console.log(arguments);
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
.offLine {
  color: #f56c6c;
}
</style>
  