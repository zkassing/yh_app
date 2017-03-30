<template>
    <el-form ref="form" :model="form" label-width="80px" action="/insertItem">
        <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="图片">
            <el-upload
            drag
            action="/upload"
            :file-list="form.fileList"
            :on-success="upload"
            multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
        <el-form-item label="内容">
            <el-input
            type="textarea"
            :rows="4"
            placeholder="请输入内容"
            v-model="form.content">
            </el-input>
        </el-form-item>
        <el-form-item label="选择栏目">
            <el-select v-model="form.menu.value" placeholder="请选择栏目">
                <el-option v-for="menu in form.menu.items" :label="menu.menu" :value="menu.value" key="menu.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="选择专业">
            <el-select v-model="form.subject.value" placeholder="请选择专业">
                <el-option v-for="subject in form.subject.items" :label="subject.subject" :value="subject.value" key="subject"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="选择类别">
            <el-select v-model="form.type.value" placeholder="请选择类别">
                <el-option v-for="type in form.type.items" :label="type.type" :value="type.value" key="type"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
            title:"",
            content:"",
            menu:{
                value:"",
                items:[]
            },
            subject:{
                value:"",
                items:[]
            },
            type:{
                value:"",
                items:[]
            },
            fileList: []
        }
        
      }
    },
    created(){
        this.$http.post('/menu',{type:"query"}).then((response)=>{
            this.form.menu.items = response.body
            console.log(this.form.menu)

        })
    },
    methods:{
        submit(){
            this.$http.post('/insertItem',{params:this.form}).then((response)=>{
                if(response.body.status=="success"){
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    });
                }else{
                    this.$message.error('添加失败');
                }
                
            },(response) => {
                this.$message.error('添加失败');
            });
        },
        upload(response, file, fileList){
            this.form.fileList = fileList;
        }
    }
  }
</script>