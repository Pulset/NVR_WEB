<template>
    <div>
        <el-col :span="24" :offset="3">
            <el-menu :default-active="activeIndex" class="aside" router>
                <el-submenu v-for="tab in tabs" v-bind:key="tab.title" index="tab.router">
                    <template slot="title">
                        <span slot="title">{{tab.title}}</span>
                    </template>    
                    <el-menu-item-group>
                        <el-menu-item  v-for="(subTab, index) in tab.children" :key="index" :index="subTab.router">{{subTab.title}}</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
            <div class="line"></div>
            <router-view class="setting-main"></router-view>
        </el-col>
    </div>
</template>
<script>
export default {
     data() {
      return {
        activeIndex: '/image',
        tabs:[
            {
                "title": "摄像头",
                "router": "/setting/image",
                "children": [{
                    "title": "远程设备",
                    "router": "/setting/image/device"
                },{
                    "title": "摄像头",
                    "router": "/setting/image/camera"
                },{
                    "title": "编码配置",
                    "router": "/setting/image/encode"
                },{
                    "title": "通道名称",
                    "router": "/setting/image/channelName"
                }]
            },{
                "title": "网络",
                "router": "setting/network",
                "children": [{
                    "title": "TCP/IP",
                    "router": "setting/network/tcpIp"
                },{
                    "title": "端口",
                    "router": "setting/network/port"
                },{
                    "title": "PPPOE",
                    "router": "setting/network/pppoe"
                },{
                    "title": "DDNS",
                    "router": "setting/network/ddns"
                }]
            }
        ]
      };
    },
    methods: {
      
    }
}
</script>
<style scoped>
.aside{
    width: 200px;
    min-height: 400px;
}
.setting-main {
    position: absolute;
        top: 100px;
        left: 280px;
}
</style>
