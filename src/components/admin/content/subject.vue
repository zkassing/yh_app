<template>
<el-col :span="18"
            :offset="1">
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="填写专业">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        
        <el-form-item>
            <el-button type="primary" @click="submit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
    </el-col>
</template>
<script>
    export default{
        data(){
            return{
                form:{
                    name:""
                }
            }
        },
        methods:{
            submit(){
                this.$http.post('/post',{type:'add',col:"subject",result:{"subject":this.form.name}}).then((response)=>{
                    if(response.body.status=="success"){
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                    }else{
                        this.$message.error('添加失败');
                    }
                })
            }
        }
    }
</script>