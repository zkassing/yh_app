<template>
    <el-col :span="18"
            :offset="1">
        <el-form ref="form"
                 :model="form"
                 label-width="80px"
                 action="/insertItem">
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="图片">
                <el-upload drag
                           action="/upload"
                           :file-list="fileList"
                           :on-success="upload"
                           multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip"
                         slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="内容">
                <el-input type="textarea"
                          :rows="4"
                          placeholder="请输入内容"
                          v-model="form.content">
                </el-input>
            </el-form-item>
            <el-form-item label="选择栏目">
                <el-select v-model="form.menu"
                           placeholder="请选择栏目">
                    <el-option v-for="menu in menu"
                               :label="menu.name"
                               :value="menu.name"
                               key="menu.id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="选择专业">
                <el-select v-model="form.subject"
                           placeholder="请选择专业">
                    <el-option v-for="subject in subject"
                               :label="subject.name"
                               :value="subject.name"
                               key="subject"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="选择类别">
                <el-select v-model="form.type"
                           placeholder="请选择类别">
                    <el-option v-for="type in type"
                               :label="type.name"
                               :value="type.name"
                               key="type"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                           :loading="loading"
                           @click="submit">立即创建</el-button>
                <el-button @click="resetForm('form')">取消</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData"
                  style="width: 100%">
            <el-table-column prop="title"
                             label="标题"
                             width="180">
            </el-table-column>
            <el-table-column prop="menu"
                             label="类目"
                             width="180">
            </el-table-column>
            <el-table-column prop="subject"
                             label="专业"
                             width="180">
            </el-table-column>
            <el-table-column prop="type"
                             label="栏目"
                             width="180">
            </el-table-column>
            <el-table-column label="操作"
                             width="100"
                             fixed="right">
                <template scope="scope">
                    <el-button type="text"
                               size="small"
                               @click="edit(scope.$index)">编辑</el-button>
                    <el-button type="text"
                               size="small"
                               @click="del(scope.$index)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-col>
</template>
<script> 
export default {
    data() {
        return {
            form: {
                _id: "",
                title: "",
                content: "",
                menu: "",
                subject: "",
                type: "",
                fileList: []
            },
            fileList: [],
            loading:false,
            menu: [],
            subject: [],
            type: [],
            tableData: []
        }
    },
    created() {
        this.$http.post('/post', { type: "query", col: "menu" }).then((response) => {
            this.menu = response.body
        })
        this.$http.post('/post', { type: "query", col: "subject" }).then((respnse) => {
            this.subject = respnse.body
        })
        this.$http.post('/post', { type: "query", col: "type" }).then((response) => {
            this.type = response.body
        })
        this.$http.post('/post', { type: 'query', col: 'content' }).then((response) => {
            this.tableData = response.body
            console.log(response.body)
        })
    },
    methods: {
        submit() {
            this.loading = true
            if (!this.form._id) {
                delete this.form._id;
                this.$http.post('/post', { type: 'add', result: this.form, col: "content" }).then((response) => {
                    this.loading = false
                    if (response.body.status == "success") {
                        this.$message({
                            message: '添加成功',
                            type: 'success'
                        });
                        this.form._id = response.body.id
                        this.tableData.push(this.form)
                    } else {
                        this.$message.error('添加失败')
                    }
                }, (response) => {
                    this.$message.error('添加失败')
                })
            } else {
                this.$http.post('/post', { type: 'update', col: "content", update: { $sel: this.form }, target: this.form._id }).then((response) => {
                    if (response.body.status == "success") {
                        this.$message.success("修改成功")
                    }
                })
            }
            delete this.form._id

            // this.$http.post('/insertItem', { params: this.form }).then((response) => {
            //     if (response.body.status == "success") {
            //         this.$message({
            //             message: '添加成功',
            //             type: 'success'
            //         });
            //         this.tableData.push(this.form)
            //     } else {
            //         this.$message.error('添加失败')
            //     }

            // }, (response) => {
            //     this.$message.error('添加失败')
            // });
        },
        resetForm(formName) {
            // this.$refs[formName].resetFields();
            this.form = {}
        },
        upload(response, file, fileList) {
            this.fileList = fileList
            this.form.fileList = fileList[0].response
            console.log(fileList[0].response)

        },
        edit(index) {
            this.form = this.tableData[index]
            console.log(this.form)
        },
        del(index) {
            this.$http.post("/post", { type: 'del', col: 'content', id: this.tableData[index]._id }).then((response) => {
                if (response.body.status == "success") {
                    this.$message.success("删除成功")
                }
            })
            this.tableData.splice(index, 1)
        }
    }
}
</script>
