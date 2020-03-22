<template>
  <el-dialog :title="title" :visible.sync="isVisible" :close-on-click-modal="false">
    <el-form label-width="100px" label-position="left" :model="deviceInfo">
      <el-form-item label="设备名称">
        <el-input v-model="deviceInfo.deviceName"></el-input>
      </el-form-item>
      <el-form-item label="通道名称">
        <el-input v-model="deviceInfo.channelName"></el-input>
      </el-form-item>
      <el-form-item label="通道号">
        <el-select v-model="deviceInfo.channel" placeholder="请选择通道号">
          <el-option
            v-for="(item, index) in channelOption"
            :label="item.text"
            :value="item.value"
            :key="index"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="ip">
        <el-input v-model="deviceInfo.ip"></el-input>
      </el-form-item>
      <el-form-item label="厂商">
        <el-select v-model="deviceInfo.manufacturer" placeholder="请选择厂商">
          <el-option label="私有" value="私有"></el-option>
          <el-option label="Onvif" value="Onvif"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="端口">
        <el-input v-model="deviceInfo.port"></el-input>
      </el-form-item>
      <el-form-item label="设备类型">
        <el-select v-model="deviceInfo.type" placeholder="请选择设备类型">
          <el-option label="SD" value="SD"></el-option>
          <el-option label="IPC" value="IPC"></el-option>
          <el-option label="TPC" value="TPC"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="远程通道号">
        <el-input v-model="deviceInfo.remoteChannel"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="save">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isVisible: false,
      deviceInfo: {
        deviceName: "Donal",
        ip: "237.218.221.90",
        manufacturer: "Onvif",
        port: "72365",
        status: false,
        type: "SD",
        channel: "D1",
        remoteChannel: 3,
        channelName: "通道名称7"
      },
      channelOption: [
        {
          text: "D1",
          value: "D1"
        },
        {
          text: "D2",
          value: "D2"
        },
        {
          text: "D3",
          value: "D3"
        },
        {
          text: "D4",
          value: "D4"
        },
        {
          text: "D5",
          value: "D5"
        },
        {
          text: "D5",
          value: "D5"
        },
        {
          text: "D7",
          value: "D7"
        },
        {
          text: "D8",
          value: "D8"
        }
      ]
    };
  },
  methods: {
    save() {
      this.$emit("save", this.deviceInfo);
      this.close();
    },
    close() {
      this.isVisible = false;
    },
    show(deviceInfo) {
      this.deviceInfo = Object.assign({}, deviceInfo);
      this.isVisible = true;
    }
  }
};
</script>
<style scoped>
</style>
