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
		<el-table-column prop="path" label="路径" align="center" sortable />
		<el-table-column prop="uploadDate" label="上传时间" align="center" sortable />
		<el-table-column prop="status" label="状态" align="center" />
        <el-table-column label="操作" align="center" width="250">
          <template slot-scope="scope">
            <el-button size="mini" @click="showDetails(scope.$index, scope.row)">查看图片</el-button>
			<!-- <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
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
		  <el-form-item label="上传者：" prop="uploaderID">
		    <!-- <el-input v-model="dialogForm.uploaderID" placeholder="上传人名"/> -->
        <span>{{ dialogForm.uploaderID }}</span>
		  </el-form-item>
		  <!-- <el-form-item label="切片描述：" prop="description">
        <span>{{ dialogForm.description }}</span>
		  </el-form-item> -->
		  <el-form-item label="上传时间：" prop="uploadDate">
		    <!-- <el-input v-model="dialogForm.uploadDate" placeholder="上传时间"/> -->
        <span>{{ dialogForm.uploadDate }}</span>
		  </el-form-item>
		  <el-form-item label="状态：" prop="status">
		    <el-select v-model="dialogForm.status" placeholder="状态">
		      <el-option :value="0" label="未标注" />
		      <el-option :value="1" label="已审核" />
		      <el-option :value="2" label="已标注/待审核" />
		    </el-select>
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
import { getImageAll, deleteimage } from '@/api/admin'
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
        uploaderID:undefined,
        status:undefined,
		// id: undefined,
        // phone: undefined,
        // married: undefined,
        currentPage: 1,
        pageSize: 10
      },
      // 新增/编辑提交表单对象
      dialogForm: {
        uploaderID:undefined,
        description:undefined,
        uploadDate:undefined,
        status:undefined,
		// name: undefined,
        // phone: undefined,
        // married: undefined,
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
	  let routeData = process.env.VUE_APP_BASE_API + row.path;
    window.open(routeData, '_blank')
	},
    // 新建数据
    handleCreate() {
      this.formVisible = true
      this.dialogForm.uploaderID = undefined
      this.dialogForm.description = undefined
      this.dialogForm.uploadDate = undefined
      this.dialogForm.status = undefined
    },
    // 编辑数据
    handleEdit(index, row) {
      console.log(index, row)
      this.formVisible = true
	    this.dialogForm.uploaderID = row.uploaderID
	    this.dialogForm.description = row.description
	    this.dialogForm.uploadDate = row.uploadDate
	    this.dialogForm.status = row.status
    },
    // 删除数据
    handleDelete(index, row) {
      console.log(index, row)
      this.$confirm('此操作将删除选中数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteimage(row.imageID).then(res => {
          console.log("deleteimage-res:",res)
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
    
    // 新增弹出框 关闭时操作
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
      getImageAll().then(res => {
        console.log("getImageAll",res)
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
            } else if (d.status == 1) {
              d.status = "已审核"
            } else if (d.status == 2) {
              d.status = "已标注/待审核"
            }
            // console.log("d", typeof(d.status),d.status)
           }
          this.listLoading = false
        }
      }).catch(() => {
        this.listLoading = false
      })
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
          console.log("tvalid",valid)
          console.log("this.dialogForm",this.dialogForm)


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
          header: ['上传者', '切片描述', '上传时间', '状态'],
          key: ['uploaderID', 'description', 'uploadDate', 'status'],
          data: this.tableData,
          autoWidth: true,
          fileName: '综合表格',
          bookType: type
        }
        excel.exportDataToExcel(params)
        this.exportVisible = false
      }
    },
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
