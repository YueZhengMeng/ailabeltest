<template>
  <div class="table-classic-wrapper">
    <el-card shadow="always">
      <!-- 操作栏 -->
      <!-- <div class="control-btns">
        <el-button type="primary" @click="handleCreate">新建数据</el-button>
        <el-button type="primary" @click="handleImport">导入数据</el-button>
        <el-button type="primary" @click="exportVisible = true">导出数据</el-button>
      </div> -->
      <!-- 查询栏 -->
      <el-form
        ref="searchForm"
        :inline="true"
        :model="listQuery"
        label-width="90px"
        class="search-form"
      >
        <el-form-item label="标注者ID">
          <el-input  v-model="listQuery.annotaterID" placeholder="标注人ID" />
        </el-form-item>
        <el-form-item label="审核者ID">
          <el-input v-model="listQuery.checkerID" placeholder="审核人ID" />
        </el-form-item>
        <el-form-item label="审核结果">
          <el-input v-model="listQuery.checkResult" placeholder="审核结果" />
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
      <el-table-column prop="annotaterID" label="标注者ID" align="center"/>
		<el-table-column prop="annotationDate" label="标注时间" align="center" sortable />
		<el-table-column prop="checkerID" label="审核者ID" align="center"/>
		<el-table-column prop="checkDate" label="审核时间" align="center" sortable />
		<!-- <el-table-column prop="checkOpinion" label="审核建议" align="center"  /> -->
		<el-table-column prop="checkResult" label="审核结果" align="center"  />
        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleSelect(scope.$index, scope.row)">详细信息</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
				
      </el-table>
      <!-- 分页栏 -->
      <!-- <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize" @pagination="fetchData" /> -->
      <!-- 新增/编辑 弹出栏 -->
      <el-dialog
        title="编辑"
        :visible.sync="formVisible"
        width="45%"
        class="dialog-form"
        :before-close="handleClose"
      >
        <el-form
          ref="dialogForm"
          :model="dialogForm"
          :rules="formRules"
          label-width="100px"
        >
        <el-form-item label="标注者ID：" prop="annotaterID">
          <el-input v-model="dialogForm.annotaterID" placeholder="标注人ID"/>
        </el-form-item>
        <el-form-item label="审核者ID：" prop="checkerID">
          <el-input v-model="dialogForm.description" placeholder="审核人ID"/>
        </el-form-item>
        <el-form-item label="审核结果：" prop="checkResult">
          <el-input v-model="dialogForm.checkResult" placeholder="审核结果"/>
        </el-form-item>
          <div class="footer-item">
            <el-button @click="cancleForm">取 消</el-button>
            <el-button type="primary" :disabled="isSubmit" @click="submitForm('dialogForm')">确 定</el-button>
          </div>
        </el-form>
      </el-dialog>
      <!-- 导入数据 弹出栏 -->
      <el-dialog
        title="导入数据"
        :visible.sync="importVisible"
        width="20%"
      >
        <div class="upload-box">
          <span>选择文件：</span>
          <Upload :files-format="filesFormat">
            <i class="vue-dsn-icon-upload" />上传文件
          </Upload>
        </div>
        <div class="hints">TIP：请选择要导出数据的格式。</div>
        <span slot="footer">
          <el-button @click="cancleImport">取 消</el-button>
          <el-button type="primary" @click="confirmImport">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 导出数据 弹出栏 -->
      <el-dialog
        title="导出数据"
        :visible.sync="exportVisible"
        width="30%"
      >
        <div class="export-data">
          <el-button type="primary" @click="exportTable('xlsx')">EXCEL格式</el-button>
          <el-button type="primary" @click="exportTable('csv')">CSV格式</el-button>
          <el-button type="primary" @click="exportTable('txt')">TXT格式</el-button>
        </div>
        <div class="hints">TIP：请选择要导出数据的格式。</div>
      </el-dialog>
		<!--详细信息-->
		<el-dialog
			title="详细信息"
			:visible.sync="detailVisible"
			width="45%"
			class="dialog-form"
			:before-close="handleClose2"
		>
		<!-- <div class="footer-item">
			<el-button @click="cancleForm2">取 消</el-button>
			<el-button type="primary" :disabled="isSubmit" @click="submitForm2('dialogForm')">确 定</el-button>
		</div> -->
		</el-dialog>
    </el-card>
  </div>
</template>

<script>
import { getAllAnnotation, getImageByImageID, deleteannotation } from '@/api/admin'
import excel from '@/utils/excel'
import Pagination from '@/components/Pagination'
import Upload from '@/components/Upload'
import Hints from '@/components/Hints'

export default {
  name: 'Table',
  components: { Pagination, Upload, Hints },
  data() {
    return {
      // 数据列表加载动画
      listLoading: true,
      // 查询列表参数对象
      listQuery: {
        annotatorName:undefined,
		    username:undefined,
		    status:undefined,
		// id: undefined,
        // phone: undefined,
        // married: undefined,
      },
      paganation: {
        currentPage: 1,
        pageSize: 10
      },
      // 新增/编辑提交表单对象
      dialogForm: {
        annotaterID:undefined,
        checkerID:undefined,
        checkResult:undefined,
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
      // 表单校验 trigger: ['blur', 'change'] 为多个事件触发
      formRules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
        ]
      },
      // 防止多次连续提交表单
      isSubmit: false,
      // 导入数据 弹出框显示/隐藏
      importVisible: false,
      // 导出文件格式
      filesFormat: '.txt, .csv, .xls, .xlsx',
      // 导出数据 弹出框显示/隐藏
      exportVisible: false,
	  //详细信息
	  detailVisible:false,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    // 多选操作
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
	//显示详细信息
	showDetails(index, row){
		this.detailVisible = true
	},
    // 新建数据
    handleCreate() {
      this.formVisible = true
      // this.dialogForm.name = undefined
      // this.dialogForm.phone = undefined
      // this.dialogForm.married = undefined
      // this.dialogForm.hobby = []
	  this.dialogForm.annotatorName = undefined
	  this.dialogForm.username = undefined
	  this.dialogForm.description = undefined
	  this.dialogForm.uploadDate = undefined
	  this.dialogForm.status = undefined
    },
    // 编辑数据
    handleEdit(index, row) {
      console.log(index, row)
      this.formVisible = true
	  this.dialogForm.annotatorName = row.annotatorName
	  this.dialogForm.username = row.username
	  this.dialogForm.description = row.description
	  this.dialogForm.uploadDate = row.uploadDate
	  this.dialogForm.status = row.status
      // this.dialogForm.name = row.name
      // this.dialogForm.phone = row.phone
      // this.dialogForm.married = row.married
      // this.dialogForm.hobby = row.hobby.split('、')
    },
    // 删除数据
    handleDelete(index, row) {
      console.log(index, row)
      this.$confirm('此操作将删除选中数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteannotation(row.annotationID).then(res => {
          console.log("deleteannotation-res:",res)
          this.$message({
          type: 'success',
          message: '删除成功!'
         })
         this.fetchData()
        }).catch(() => {
        this.$message({
          type: 'warning',
          message: '删除失败'
        })
        this.fetchData()
      })
      this.fetchData()

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    
    // 新增/编辑弹出框 关闭时操作
    handleClose() {
      this.formVisible = false
      this.$refs.dialogForm.resetFields()
    },
	// 详细信息弹出框 关闭时操作
	handleClose2() {
	  this.detailVisible = false
	  this.$refs.dialogForm.resetFields()
	},
    // 获取数据列表
    fetchData() {
      this.listLoading = true
      // 获取数据列表接口
      getAllAnnotation().then(res => {
        console.log("getAllUser",res)
        const data = res.data

        if (res.code >= 200 && res.code < 300) {
          this.total = data.length
          this.tableData = data
          this.Data = data
          // console.log("total",this.total)
          // console.log("total",this.tableData)
          for (let d of data){
            // console.log("d", typeof(d.checkResult))
            if (d.checkResult == 0 ) {
              d.checkResult = "未审核"
            } else if (d.checkResult == 1) {
              d.checkResult = "通过"
            } else if (d.checkResult == 2) {
              d.checkResult = "不通过"
            }
            // console.log("d", typeof(d.checkResult),d.checkResult)
          }
          this.listLoading = false
        }
      }).catch(() => {
        this.listLoading = false
      })
    },

    handleSelect(index, row) {
      console.log(index, row)
      getImageByImageID(row.imageID).then(res => {
        console.log("getImageByImageID",res)
        const data = res.data
        let routeData = this.$router.resolve({
          name: 'other_showannotation',
          query: {
            imageID: row.imageID,
            userID: localStorage.getItem("_userID"),
            annotationResult: row.annotationResult,
            path: data.path

          }
        })
        window.open(routeData.href, '_blank')
      })
    },
    // 查询数据
    onSubmit() {
      console.log("this.tableData:",this.tableData)
      let hasValue = Object.values(this.listQuery).filter(v => v !== undefined).length > 0;
      let result  = this.Data.slice();
			 if (this.listQuery.annotaterID) {
				result = result.filter(data => {
					return data['annotaterID'] != undefined && String(data['annotaterID'])  === this.listQuery.annotaterID
				})
        console.log("result1",result)
			} 
       if (this.listQuery.checkerID) {
				result = result.filter(data => {
          console.log(data, data['checkerID'] ,this.listQuery.checkerID );
					return data['checkerID'] !== undefined && String(data['checkerID'])  === this.listQuery.checkerID
				})
        console.log("result2",result)
			} 
       if (this.listQuery.checkResult) {
				result =result.filter(data => {
					return data['checkResult'] !== undefined && data['checkResult'].toString().indexOf(this.listQuery.checkResult) !== -1
				})
        console.log("result3",result)
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
          header: ['标注者', '上传者', '切片描述', '上传时间', '状态'],
          key: ['annotatorName', 'username', 'description', 'uploadDate', 'status'],
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
