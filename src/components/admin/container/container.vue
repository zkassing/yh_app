<template>
    <el-row>
        <el-col :span="24">
            
        </el-col>
        <el-col :span="4">
            <sideBar></sideBar>
        </el-col>
       
        <router-view></router-view>
    </el-row>
</template>
<script>
    import sideBar from '../sideBar/sideBar'
    export default{
        components:{
            sideBar
        }
    }
</script>
<style lang="" scoped>
    .el-row{
        margin: 100px;
    }
</style>