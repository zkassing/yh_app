<template>
    <el-menu :router="true" default-active="/admin/item">
      <el-menu-item index="/admin/item"><i class="el-icon-menu"></i>添加项目</el-menu-item>
      <el-menu-item index="/admin/type"><i class="el-icon-setting"></i>添加类目</el-menu-item>                   
      <el-menu-item index="/admin/menu"><i class="el-icon-setting"></i>添加栏目</el-menu-item>
      <el-menu-item index="/admin/subject"><i class="el-icon-setting"></i>添加专业</el-menu-item>
    </el-menu>
</template>
<script>
    export default {
        methods: {
           
        }
    }
</script>
<style lang="">
    a{
        text-decoration:none;
        color:#333;
    }
    .is-active a{
        color:#20a0ff;
    }
</style>