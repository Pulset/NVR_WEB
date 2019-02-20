<template>
  <div>
    <el-form>
      <el-form-item label="labelName">
        <el-select placeholder="placeholderValue">
          <el-option
            v-for="item in selectOption"
            label="item.name"
            value="item.value"
            :key="item.value"
          ></el-option>
          <!-- <el-option label="区域二" value="beijing"></el-option> -->
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  props: {
    labelName: {
      type: String,
      required: true
    },
    placeholderValue: {
      type: String,
      required: true
    },
    selectOption: {
      type: Array,
      required: true
    }
  }
};
</script>