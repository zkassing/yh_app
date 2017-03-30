<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="图片">
            <el-upload
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
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
                <el-option v-for="menu in form.menu.items" :label="menu.label" :value="menu.value" key="menu.id"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="选择专业">
            <el-select v-model="form.subject.value" placeholder="请选择专业">
                <el-option v-for="subject in form.subject.items" :label="subject.label" :value="subject.value" key="subject"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="选择类别">
            <el-select v-model="form.type.value" placeholder="请选择类别">
                <el-option v-for="type in form.type.items" :label="type.label" :value="type.value" key="type"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">立即创建</el-button>
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
                id:"",
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
            }
        },
        
      }
    }
  }
</script>