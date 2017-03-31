<template>
    <el-col :span="18"
            :offset="1">
        <el-form ref="form"
                 :model="form"
                 label-width="80px">
            <el-form-item label="填写类别">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"
                           @click="submit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <el-table :data="tableData"
                  style="width: 100%">
            <el-table-column prop="name"
                             label="栏目名称">
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
                name: ""
            },
            tableData: []
        }
    },
    created(){
        this.$http.post('/post',{type:"query",col:"type"}).then((response)=>{
            this.tableData = response.body
        })
    },
    methods: {
        submit() {
            this.$http.post('/post', { type: 'add', col: "type", result: { "name": this.form.name } }).then((response) => {
                if (response.body.status == "success") {
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    });
                } else {
                    this.$message.error('添加失败');
                }
            })
        },
        del(index){
            this.$http.post("/post", { type: 'del', col: 'type', id: this.tableData[index]._id }).then((response) => {
                if (response.body.status == "success") {
                    this.$message.success("删除成功")
                }
            })
            this.tableData.splice(index, 1)
        }
    }
}
</script>