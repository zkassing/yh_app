<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="标题">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="图片">
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
        <el-form-item label="内容">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="选择栏目">
            <el-select v-model="menu" placeholder="请选择">
                <el-option
                v-if="menu"
                v-for="item in menus"
                :label="item.label"
                key="item">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="选择专业">
            <el-select v-model="subject" placeholder="请选择">
                <el-option
                v-if="subject"
                v-for="item in subjects"
                :label="item.label"
                key="item">
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="选择类目">
            <el-select v-model="type" placeholder="请选择">
                <el-option
                v-if="type"
                v-for="item in types"
                :label="item.label"
                key="item">
                </el-option>
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
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        subject:[],
        type:[],
        menu:[],
        subjects: [],
        menus: [],
        types: []
      }
    },
    methods: {
      
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>