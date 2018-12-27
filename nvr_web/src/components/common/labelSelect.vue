<template>
    <div>
        <el-form-item label="labelName">
            <el-select v-model="selectValue" placeholder="placeholderValue">
            <el-option v-for="item in selectOption" label="item.name" value="item.value" :key="item.value"></el-option>
            <!-- <el-option label="区域二" value="beijing"></el-option> -->
            </el-select>
        </el-form-item>
    </div>
</template>
<script>
export default {
    data() {
        return {
            labelName:'',
            selectValue: '',
            placeholderValue: '',
            selectOption: [{value:'', name:''}]
        }
    }
}
</script>