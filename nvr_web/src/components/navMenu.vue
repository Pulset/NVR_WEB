<template>
    <div>
        <el-col :span="24" :offset="3">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
                <el-menu-item v-for="tab in tabs" v-bind:key="tab.title" :index="tab.router">{{tab.title}}</el-menu-item>
            </el-menu>
            <div class="line"></div>
        </el-col>
    </div>
</template>
<script>
export default {
     data() {
      return {
        activeIndex: '/preview',
        tabs:[
            {
                "title": "预览",
                "router": "/preview"
            },
            {
                "title": "回放",
                "router": "/playback"
            },
            {
                "title": "智能回放",
                "router": "/intelligent"
            },
            {
                "title": "报警",
                "router": "/alarm"
            },
            {
                "title": "设置",
                "router": "/setting"
            },
            {
                "title": "信息",
                "router": "/info"
            },
            {
                "title": "注销",
                "router": "/loginOut"
            }
        ]
      };
    },
    methods: {
      
    }
}
</script>
<style scoped>
.el-menu-item{
    width: 150px;
    text-align: center;
}
</style>
