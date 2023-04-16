<template>
  <div class="table-classic-wrapper">
    <el-card shadow="always">
      <!-- 查询栏 -->
      <el-form
        ref="searchForm"
        :inline="true"
        :model="listQuery"
        label-width="90px"
        class="search-form"
      >
      <el-form-item label="上传者ID">
        <el-input v-model="listQuery.uploaderID" placeholder="上传人ID" />
      </el-form-item>
      <el-form-item label="状态">
        <el-input v-model="listQuery.status" placeholder="状态" />
      </el-form-item>
	  <el-form-item>
	    <el-button type="primary" @click="onSubmit">查询</el-button>
	  </el-form-item>
      </el-form>
      <!-- 表格栏 -->
      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        size="medium"
      >
	  
      <el-table-column prop="uploaderID" label="上传者ID" align="center"/>
      <!-- <el-table-column prop="description" label="切片描述" align="center" /> -->
      <!--<el-table-column prop="path" label="路径" align="center" sortable />-->
      <el-table-column prop="uploadDate" label="上传时间" align="center" sortable />
      <el-table-column prop="status" label="状态" align="center" />
		<el-table-column label="操作" align="center" width="200">
		  <template slot-scope="scope">
		    <el-button size="mini" :disabled="scope.row.isVisible" @click="handleAnnotation(scope.$index, scope.row)">标注</el-button>
		  </template>
		</el-table-column>
      </el-table>
      <!-- 分页栏 -->
      <!-- <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize" @pagination="fetchData" /> -->
      <!-- 新增/编辑 弹出栏 -->
      <el-dialog
        title="切片详细信息"
        :visible.sync="formVisible"
        width="50%"
        class="dialog-form"
        :before-close="handleClose"
      >
        <el-form
          ref="dialogForm"
          :model="dialogForm"
          :rules="formRules"
          label-width="100px"
        >
        </el-form>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { getImageAll } from '@/api/annotater'
import excel from '@/utils/excel'
import Pagination from '@/components/Pagination'
import Upload from '@/components/Upload'
import Hints from '@/components/Hints'
import Bus from '@/utils/bus.js'

export default {
  name: 'Table',
  components: { Pagination, Upload, Hints },
  data() {
    return {
      // 数据列表加载动画
      listLoading: true,
      // 查询列表参数对象
      listQuery: {
        username:undefined,
		    status:undefined,
        // currentPage: 1,
        // pageSize: 10
      },
      // 新增/编辑提交表单对象
      dialogForm: {
        name: undefined,
        phone: undefined,
        married: undefined,
        hobby: []
      },
      // 数据总条数
      total: 0,
      // 表格数据数组
      Data: [],
      tableData: [],
      // 多选数据暂存数组
      multipleSelection: [],
      // 新增/编辑 弹出框显示/隐藏
      formVisible: false,
      // 防止多次连续提交表单
      isSubmit: false,
    }
  },
  created() {
    this.fetchData()
  },
  mounted(){
    window.addEventListener("storage", ({key})=> {
      if (key ==="_refreshAnnotater") {
        this.fetchData();
      }
    })
  },
  beforeDestroy(){
    window.removeEventListener("storage",()=> {});
  },
  methods: {
    // 多选操作
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 编辑数据
    handleEdit(index, row) {
      console.log(index, row)
      this.formVisible = true
      this.dialogForm.name = row.name
      this.dialogForm.phone = row.phone
      this.dialogForm.married = row.married
      this.dialogForm.hobby = row.hobby.split('、')
    },
    // 删除数据
    handleDelete(index, row) {
      console.log(index, row)
      this.$confirm('此操作将删除选中数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 此处可添加--删除接口
        // 删除成功调用fetchData方法更新列表
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 批量删除
    batchDelete() {
      if (this.multipleSelection.length < 1) {
        this.$message({
          message: '请先选择要删除的数据！',
          type: 'warning'
        })
      } else {
        this.handleDelete()
      }
    },
    // 新增/编辑弹出框 关闭时操作
    handleClose() {
      this.formVisible = false
      this.$refs.dialogForm.resetFields()
    },
    // 获取数据列表
    fetchData() {
      this.listLoading = true
      // 获取数据列表接口
      getImageAll().then(res => {
        console.log("getUserAllImage",res)
        const data = res.data

        if (res.code >= 200 && res.code < 300) {
          this.total = data.length
          this.tableData = data
          this.Data = data
          // console.log("total",this.total)
          // console.log("total",this.tableData)
          for (let d of data){
            // d.status
            // console.log("d", typeof(d.status))
            if (d.status == 0 ) {
              d.status = "未标注"
              this.$set(d, 'isVisible', false)
            } else if (d.status == 1) {
              d.status = "已审核"
              this.$set(d, 'isVisible', true)
            } else if (d.status == 2) {
              d.status = "已标注/待审核"
              this.$set(d, 'isVisible', false)
            }
            // console.log("d", typeof(d.status),d.status)
          }
          this.listLoading = false
        }
      }).catch(() => {
        this.listLoading = false
      })
    },
    handleAnnotation(index, row) {
      console.log(index, row)
      // this.$router.push('/annotation')
      let routeData = this.$router.resolve({
        name: 'annotation',
        query: {
          imageID: row.imageID,
          annotaterID: localStorage.getItem("_userID"),
          path: row.path

        }
      })
      window.open(routeData.href, '_blank')
      // let path = this.$route.matched[this.$route.matched.length - 2].path;
      // this.$route.matched[this.$route.matched.length - 1].path=this.$route.matched.meta.url
      // console.log(path)
      // console.log(this.$route.matched)
    },
    // 查询数据
    onSubmit() {
      console.log("this.tableData:",this.tableData)
      let hasValue = Object.values(this.listQuery).filter(v => v !== undefined).length > 0;
      let result  = this.Data.slice();

			 if (this.listQuery.uploaderID) {
				result = result.filter(data => {
					return data['uploaderID'] != undefined && String(data['uploaderID'])  === this.listQuery.uploaderID
				})
        console.log("result1",result)
			} 
       if (this.listQuery.status) {
				result =result.filter(data => {
					return data['status'] !== undefined && data['status'].toString().indexOf(this.listQuery.status) !== -1
				})
        console.log("result2",result)
			}  
      
      if(!hasValue){
        result = this.Data.slice();
      }

      this.tableData = result;
    },
    // 导入数据
    handleImport() {
      this.importVisible = true
    },
    // 新增/编辑表单确认提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 此处添加 新增/编辑数据的接口 新增成功后调用fetchData方法更新列表
          // 先 this.isSubmit = true 接口返回成功后 再 this.isSubmit = false
          this.formVisible = false
        } else {
          this.isSubmit = false
          return false
        }
      })
    },
    // 新增/编辑表单取消提交
    cancleForm() {
      this.$refs.dialogForm.resetFields()
      this.formVisible = false
    },
    // 导入数据弹出栏 确认操作
    confirmImport() {
      // 此处添加 后台接收的接口，将导入的数据传给后台处理
      this.importVisible = false
    },
    // 导入数据弹出栏 取消操作
    cancleImport() {
      // 将导入的数据清空
      this.importVisible = false
    },
    // 导出数据--excle格式
    exportTable(type) {
      if (this.tableData.length) {
        const params = {
          header: ['编号', '姓名', '性别', '手机', '学历', '婚姻状况', '禁止编辑', '爱好'],
          key: ['id', 'name', 'sex', 'phone', 'education', 'married', 'forbid', 'hobby'],
          data: this.tableData,
          autoWidth: true,
          fileName: '综合表格',
          bookType: type
        }
        excel.exportDataToExcel(params)
        this.exportVisible = false
      }
    },
    // 列表中婚姻状况栏，状态值改变时，调用
    selectChange(row) {
      // 此处添加后台接口，成功后调用fetchData方法更新列表
    },
    // 列表中禁止编辑栏，状态值改变时，调用
    stateChange(row) {
      // 此处添加后台接口，成功后调用fetchData方法更新列表
    }
  }
}
</script>

<style lang="less">
.table-classic-wrapper {
  .el-card {
    min-height: 656px;
  }
  .control-btns {
    margin-bottom: 20px;
  }
  .search-form {
    padding-top: 18px;
    margin-bottom: 15px;
    background-color: #f7f8fb;
  }
  .el-table thead {
    font-weight: 600;
    th {
      background-color: #f2f3f7;
    }
  }
  .dialog-form {
    .el-input {
      width: 380px;
    }
    .footer-item {
      margin-top: 50px;
      text-align: right;
    }
  }
  .upload-box,
  .export-data {
    width: 300px;
    margin: 0 auto 30px;
  }
  .upload-box {
    width: 156px;
    .files-upload {
      color: #20a0ff;
    }
  }
  .hints {
    font-size: 12px;
    color: #aaa;
    text-align: center;
  }
}
</style>
