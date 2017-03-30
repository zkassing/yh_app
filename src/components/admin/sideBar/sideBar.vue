<template>
    <el-menu>
      <router-link to="/admin/item"><el-menu-item index="1"><i class="el-icon-menu"></i>添加项目</el-menu-item></router-link>
      <router-link to="/admin/type"><el-menu-item index="2"><i class="el-icon-setting"></i>添加类目</el-menu-item></router-link>
      <router-link to="/admin/menu"><el-menu-item index="3"><i class="el-icon-setting"></i>添加栏目</el-menu-item></router-link>
      <router-link to="/admin/subject"><el-menu-item index="4"><i class="el-icon-setting"></i>添加专业</el-menu-item></router-link>
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