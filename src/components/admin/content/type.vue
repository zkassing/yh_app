<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="填写类目">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default{
        data(){
            return{
                form:{
                    name:""
                }
            }
        }
    }
</script>