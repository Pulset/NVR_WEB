<template>
  <el-dialog
    :title="dialogFormTitle"
    :visible.sync="dialogFormVisible"
    :close-on-click-modal="false"
  >
    <el-form label-width="80px" label-position="left">
      <el-form-item v-for="(item,index) in originForm" :key="index" :label="item.title">
        <template v-if="item.type === 'input'">
          <el-input v-model="item.value" autocomplete="off" style="width:300px;"></el-input>
        </template>
        <template v-else>
          <el-select v-model="item.value" :placeholder="'请选择'+ item.title">
            <el-option
              v-for="(option,index) in item.selectArr"
              :key="index"
              :label="option.name"
              :value="option.value"
            ></el-option>
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
//form:[{title:'网卡',value:'',type:'input'},{title:'网卡模式',value:'',type:'select',selectArr:[{name:'网卡1',value:1},'网卡2']}]
export default {
  props: {
    dialogFormTitle: {
      type: String,
      required: true
    },
    form: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      originForm: [],
      index: 0 // 选中的数据下标
    };
  },
  methods: {
    handleConfirm() {
      this.$emit("confirm", this.originForm, this.index);
      this.close();
    },
    open() {
      this.originForm = JSON.parse(JSON.stringify(this.form)); // 为了每次调用都是新的数据
      this.dialogFormVisible = true;
    },
    close() {
      this.dialogFormVisible = false;
    },
    changeForm(newForm, index) {
      this.originForm = newForm;
      this.index = index;
      this.dialogFormVisible = true;
    },
    show() {}
  }
};
</script>
<style scoped>
</style>
