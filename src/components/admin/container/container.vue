<template>
    <el-row>
        <el-col :span="4">
            <sideBar></sideBar>
        </el-col>
        <el-col :span="18" :offset="1">
        
        </el-col>
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
<style lang="">
    
</style>