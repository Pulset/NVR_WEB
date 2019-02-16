<template>
    <el-dialog :title="dialogFormTitle" :visible.sync="dialogFormVisible">
    <el-form>
        <el-form-item v-for="(item,index) in form" :key="index" :label="item.title" >
            <template v-if="item.type === 'input'">
                <el-input v-model="item.value" autocomplete="off" style="width:300px;"></el-input>
            </template>
            <template v-else>
                <el-select v-model="item.value" placeholder="请选择活动区域">
                    <el-option v-for="(option,index) in item.selectArr" :key="index" :label="option.name" :value="option.value"></el-option>
                </el-select>
            </template>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </div>
    </el-dialog>
</template>
<script>
// form:{
//     form:[{title:'网卡',value:'',type:'input'},{title:'网卡模式',value:'',type:'select',selectArr:[{name:'网卡1',value:1},'网卡2']}]
// }
export default {
    props:{
        dialogFormTitle:{
            type: String,
            required: true
        },
        // dialogFormVisible:{
        //     type: Boolean,
        //     required: true
        // },
        form:{
            type: Array,
            required: true
        }
    },
    data() {
        return {
            dialogFormVisible: false
        }
    },
    methods:{
        handleConfirm() {
            // console.log(this.$refs.dialog);
            this.$emit('confirm', {value:this.form});
        },
        open () {
            this.dialogFormVisible = true;
        },
        close () {
            this.dialogFormVisible = false;
        }
    }
}
</script>
<style scoped>

</style>
