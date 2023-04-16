<template>
  <div class="table-classic-wrapper">
    <el-card shadow="always">
      <!-- 操作栏 -->
      <div class="control-btns">
        <el-button type="primary" @click="handleCreate">新建数据</el-button>
        <!-- <el-button type="primary" @click="handleImport">导入数据</el-button>
        <el-button type="primary" @click="exportVisible = true">导出数据</el-button> -->
      </div>
      <!-- 查询栏 -->
      <el-form
        ref="searchForm"
        :inline="true"
        :model="listQuery"
        label-width="90px"
        class="search-form"
      >
        <el-form-item label="用户名">
          <el-input v-model="listQuery.username" placeholder="用户名" />
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
        <el-table-column prop="userID" label="用户ID" align="center" sortable />
        <el-table-column prop="username" label="用户名" align="center" />
        <el-table-column prop="password" label="用户密码" align="center" />
        <el-table-column prop="role" label="角色" align="center" />
        <el-table-column label="操作" align="center" width="200">
          <template slot-scope="scope">
            <el-button size="mini" :disabled="scope.row.isVisible" @click="handleEdit(scope.$index, scope.row)"
              >设置权限</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页栏 -->
      <!-- <Pagination
        :total="total"
        :page.sync="listQuery.currentPage"
        :limit.sync="listQuery.pageSize"
        @pagination="fetchData"
      /> -->
      <!-- 新建 弹出栏 -->
      <el-dialog
        title="新建"
        :visible.sync="formVisible"
        width="50%"
        class="dialog-form"
        :before-close="handleClose"
      >
        <el-form ref="dialogForm" :model="dialogForm" label-width="100px">
          <el-form-item label="用户名：" prop="username">
            <el-input v-model="dialogForm.username" placeholder="用户名" />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="dialogForm.password" placeholder="密码" />
          </el-form-item>
          <!-- <el-form-item label="角色：" prop="role">
            <el-select v-model="dialogForm.role">
              <el-option :value="0" label="普通用户" />
              <el-option :value="1" label="标注人员" />
              <el-option :value="2" label="审核人员" />
              <el-option :value="3" label="管理员" />
            </el-select>
          </el-form-item> -->
          <div class="footer-item">
            <el-button @click="cancleForm">取 消</el-button>
            <el-button
              type="primary"
              :disabled="isSubmit"
              @click="submitForm('dialogForm')"
              >确 定</el-button
            >
          </div>
        </el-form>
      </el-dialog>

      <!--编辑-->
      <el-dialog
        title="设置权限"
        :visible.sync="formEditVisible"
        width="50%"
        class="dialog-form"
        :before-close="handleClose2"
      >
        <el-form ref="dialogForm" :model="dialogForm" label-width="100px">
          <el-form-item label="用户名：" prop="username">
            <!-- <el-input v-model="dialogForm.username" placeholder="用户名"/> -->
            <span>{{ dialogForm.username }}</span>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <!-- <el-input v-model="dialogForm.password" placeholder="密码"/> -->
            <span>{{ dialogForm.password }}</span>
          </el-form-item>
          <el-form-item label="角色：" prop="role">
            <el-select v-model="dialogForm.role">
              <el-option :value="0" label="普通用户" />
              <el-option :value="1" label="标注人员" />
              <el-option :value="2" label="审核人员" />
              <el-option :value="3" label="管理员" />
            </el-select>
          </el-form-item>
          <div class="footer-item">
            <el-button @click="cancleForm2">取 消</el-button>
            <el-button
              type="primary"
              :disabled="isSubmit"
              @click="submitForm2('dialogForm')"
              >确 定</el-button
            >
          </div>
        </el-form>
      </el-dialog>

      <!-- 导入数据 弹出栏 -->
      <el-dialog title="导入数据" :visible.sync="importVisible" width="20%">
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
      <el-dialog title="导出数据" :visible.sync="exportVisible" width="30%">
        <div class="export-data">
          <el-button type="primary" @click="exportTable('xlsx')"
            >EXCEL格式</el-button
          >
          <el-button type="primary" @click="exportTable('csv')"
            >CSV格式</el-button
          >
          <el-button type="primary" @click="exportTable('txt')"
            >TXT格式</el-button
          >
        </div>
        <div class="hints">TIP：请选择要导出数据的格式。</div>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { getAllUser, deleteuser, resetRole, register } from "@/api/admin";
import excel from "@/utils/excel";
import Pagination from "@/components/Pagination";
import Upload from "@/components/Upload";
import Hints from "@/components/Hints";

export default {
  name: "Table",
  components: { Pagination, Upload, Hints },
  data() {
    return {
      // 数据列表加载动画
      listLoading: true,
      // 查询列表参数对象
      listQuery: {
        // id: undefined,
        // phone: undefined,
        // married: undefined,
        username: undefined,
        currentPage: 1,
        pageSize: 10,
      },
      // 新增/编辑提交表单对象
      dialogForm: {
        username: undefined,
        password: undefined,
        role: undefined,
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
      filesFormat: ".txt, .csv, .xls, .xlsx",
      // 导出数据 弹出框显示/隐藏
      exportVisible: false,
      //编辑
      formEditVisible: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    // 多选操作
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 新建数据
    handleCreate() {
      this.formVisible = true;
      // this.dialogForm.userID=undefined
      this.dialogForm.username = undefined;
      this.dialogForm.password = undefined;
      // this.dialogForm.role = undefined;
    },
    // 设置权限数据
    handleEdit(index, row) {
      console.log(index, row);
      this.formEditVisible = true;
      this.dialogForm.userID = row.userID;
      this.dialogForm.username = row.username;
      this.dialogForm.password = row.password;
      this.dialogForm.role = row.role;
    },
    // 删除数据
    handleDelete(index, row) {
      console.log(index, row);
      this.$confirm("此操作将删除选中数据, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          deleteuser(row.userID)
            .then((res) => {
              console.log("deleteuser-res:", res);
              this.$message({
                type: "success",
                message: "删除成功!",
              });
              this.fetchData();
            })
            .catch(() => {
              this.$message({
                type: "warning",
                message: "删除失败",
              });
              this.fetchData();
            });
          this.fetchData();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    // 新增弹出框 关闭时操作
    handleClose() {
      this.formVisible = false;
      this.$refs.dialogForm.resetFields();
    },
    // 编辑弹出框 关闭时操作
    handleClose2() {
      this.formEditVisible = false;
      this.$refs.dialogForm.resetFields();
    },
    // 获取数据列表
    fetchData() {
      this.listLoading = true;
      // 获取数据列表接口
      getAllUser().then((res) => {
          console.log("getAllUser", res);
          const data = res.data;

          if (res.code >= 200 && res.code < 300) {
            this.total = data.length;
            this.tableData = data;
            this.Data = data;
            // console.log("total",this.total)
            // console.log("total",this.tableData
            for (let d of data) {
              // d.status
              // console.log("d", typeof(d.status))
              if (d.role == "user") {
                d.role = "普通用户";
                this.$set(d, 'isVisible', false)
              } else if (d.role == "annotater") {
                d.role = "标注人员";
                this.$set(d, 'isVisible', false)
              } else if (d.role == "checker") {
                d.role = "审核人员";
                this.$set(d, 'isVisible', false)
              } else if (d.role == "admin") {
                d.role = "管理员";
                this.$set(d, 'isVisible', true)
              }
              // console.log("d", typeof(d.status),d.status)
            }
            this.listLoading = false;
          }
        }).catch(() => {
          this.listLoading = false;
        });
    },
    // 查询数据
    onSubmit() {
      // console.log("this.tableData:",this.tableData)
			 if (this.listQuery.username) {
				// console.log("input输入的搜索内容：" + this.listQuery.username)
				this.tableData = this.Data.filter(data => {
					// console.log("object:",data)
					return Object.keys(data).some(key => {
						return String(data[key]).toLowerCase().indexOf(this.listQuery.username) > -1
					})
				})
        // console.log("this.tableData1:",this.tableData)
        // console.log("ttt:",ttt)
        // console.log("tttty:",typeof(ttt))
			} else {
        this.fetchData();
      }

      console.log("this.tableData:",this.tableData)
      let hasValue = Object.values(this.listQuery).filter(v => v !== undefined).length > 0;
      let result  = this.Data.slice();
       if (this.listQuery.username) {
				result =result.filter(data => {
					return data['username'] !== undefined && data['username'].toString().indexOf(this.listQuery.username) !== -1
				})
        console.log("result",result)
			}  
      
      if(!hasValue){
        result = this.Data.slice();
      }

      this.tableData = result;

    
    },
    // 导入数据
    handleImport() {
      this.importVisible = true;
    },
    // 新增表单确认提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 此处添加 新增/编辑数据的接口 新增成功后调用fetchData方法更新列表
          // 先 this.isSubmit = true 接口返回成功后 再 this.isSubmit = false
          this.isSubmit = true;
          console.log("this.dialogForm", this.dialogForm);

          // if (this.dialogForm.role == 0) {
          //   this.dialogForm.role = "user";
          // } else if (this.dialogForm.role == 1) {
          //   this.dialogForm.role = "annotater";
          // } else if (this.dialogForm.role == 2) {
          //   this.dialogForm.role = "checker";
          // } else if (this.dialogForm.role == 3) {
          //   this.dialogForm.role = "admin";
          // }

          register(this.dialogForm).then((res) => {
            console.log("res:",res)
            this.fetchData();
            this.formEditVisible = false;
            this.isSubmit = false;
          });
          this.formVisible = false;
        } else {
          this.isSubmit = false;
          return false;
        }
      });
    },
    // 设置权限表单确认提交
    submitForm2(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 此处添加 新增/编辑数据的接口 新增成功后调用fetchData方法更新列表
          // 先 this.isSubmit = true 接口返回成功后 再 this.isSubmit = false
          this.isSubmit = true;
          console.log("this.dialogForm", this.dialogForm);

          if (this.dialogForm.role == 0) {
            this.dialogForm.role = "user";
          } else if (this.dialogForm.role == 1) {
            this.dialogForm.role = "annotater";
          } else if (this.dialogForm.role == 2) {
            this.dialogForm.role = "checker";
          } else if (this.dialogForm.role == 3) {
            this.dialogForm.role = "admin";
          }

          resetRole(this.dialogForm).then((res) => {
            // console.log("res:",res)
            this.fetchData();
            this.formEditVisible = false;
            this.isSubmit = false;
          });
        } else {
          this.isSubmit = false;
          return false;
        }
      });
    },
    // 新增表单取消提交
    cancleForm() {
      this.$refs.dialogForm.resetFields();
      this.formVisible = false;
    },
    //编辑表单取消提交
    cancleForm2() {
      this.$refs.dialogForm.resetFields();
      this.formEditVisible = false;
    },
    // 导入数据弹出栏 确认操作
    confirmImport() {
      // 此处添加 后台接收的接口，将导入的数据传给后台处理
      this.importVisible = false;
    },
    // 导入数据弹出栏 取消操作
    cancleImport() {
      // 将导入的数据清空
      this.importVisible = false;
    },
    // 导出数据--excle格式
    exportTable(type) {
      if (this.tableData.length) {
        const params = {
          header: ["用户ID", "用户名", "用户密码", "角色"],
          key: ["userId", "username", "password", "role"],
          data: this.tableData,
          autoWidth: true,
          fileName: "综合表格",
          bookType: type,
        };
        excel.exportDataToExcel(params);
        this.exportVisible = false;
      }
    },
  },
};
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
