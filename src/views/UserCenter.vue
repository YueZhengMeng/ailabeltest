<template>
  <div class="user-center-wrapper clear-fix">
    <el-card shadow="always" :body-style="{padding: '50px'}">
      <div class="user-avatar">
        <img src="../assets/img/avatar.png" alt="avatar">
      </div>
      <ul class="user-info">
        <!-- <li>
          <label>用户ID：</label>
          <span>{{ userInfo.userID }}</span>
        </li> -->
        <li>
          <label>用户名：</label>
          <span>{{ userInfo.username }}</span>
        </li>
        <li>
          <label>密  码：</label>
          <span>{{ userInfo.password }}</span>
        </li>
        <li>
          <label>角  色：</label>
          <span>{{ userInfo.role }}</span>
        </li>
        <div>
          <!-- <el-button size="mini" type="primary" @click="handleresetUserName">更改名称</el-button> -->
          <el-button size="mini" type="primary" @click="handleresetPassword">更改密码</el-button>
        </div>
      </ul>
      <!-- 更改名称 弹出栏 -->
      <!-- <el-dialog
        title="更改名称"
        :visible.sync="formVisible"
        width="50%"
        class="dialog-form"
        :before-close="handleClose"
      >
        <el-form ref="dialogForm" :model="dialogForm" label-width="100px">
          <el-form-item label="用户名：" prop="username">
            <el-input v-model="dialogForm.username" placeholder="用户名" />
          </el-form-item>
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
      </el-dialog> -->

      <!-- 更改密码 弹出栏 -->
      <el-dialog
        title="更改密码"
        :visible.sync="formVisible1"
        width="50%"
        class="dialog-form"
        :before-close="handleClose1"
      >
        <el-form ref="dialogForm" :model="dialogForm" label-width="100px">
          <!-- <el-form-item label="用户名：" prop="username">
            <el-input v-model="dialogForm.username" placeholder="用户名" />
          </el-form-item> -->
          <el-form-item label="密码：" prop="password">
            <el-input v-model="dialogForm.password" placeholder="密码" />
          </el-form-item>
          <div class="footer-item">
            <el-button @click="cancleForm1">取 消</el-button>
            <el-button
              type="primary"
              :disabled="isSubmit"
              @click="submitForm1('dialogForm')"
              >确 定</el-button
            >
          </div>
        </el-form>
      </el-dialog>
    </el-card>
  </div>
</template>

<script>
import { getUserInfo, resetUserName, resetPassword } from '@/api/login'

export default {
  name: 'UserCenter',
  data() {
    return {
      userInfo: {
        userID: "",
        username: "",
        password: "",
        role: ""
      },
      dialogForm: {
        userID: "",
        username: "",
        password: "",
        role: ""
      },
      formVisible: false,
      formVisible1: false,
      // 防止多次连续提交表单
      isSubmit: false,
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getUserInfo().then(res => {
      this.userInfo = res.data
      if (this.userInfo.role == "user") {
        this.userInfo.role = "普通用户";
      } else if (this.userInfo.role == "annotater") {
        this.userInfo.role = "标注人员";
      } else if (this.userInfo.role == "checker") {
        this.userInfo.role = "审核人员";
      } else if (this.userInfo.role == "admin") {
        this.userInfo.role = "管理员";
      }
    })
    },
    handleresetUserName() {
      this.formVisible = true;
      this.dialogForm.userID = this.userInfo.userID;
      this.dialogForm.username = this.userInfo.username;
      this.dialogForm.password = this.userInfo.password;
      this.dialogForm.role = this.userInfo.role;
    },
    handleresetPassword() {
      this.formVisible1 = true;
      this.dialogForm.userID = this.userInfo.userID;
      this.dialogForm.username = this.userInfo.username;
      this.dialogForm.password = this.userInfo.password;
      this.dialogForm.role = this.userInfo.role;
    },
    // 新增弹出框 关闭时操作
    handleClose() {
      this.formVisible = false;
      this.$refs.dialogForm.resetFields();
    },
    handleClose1() {
      this.formVisible1 = false;
      this.$refs.dialogForm.resetFields();
    },
    // 更改名称确认提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isSubmit = true;
          console.log("this.dialogForm", this.dialogForm);

          resetUserName(this.dialogForm).then((res) => {
            console.log("res:",res)
            this.$message({
              type: "success",
              message: "更改成功!",
            });
            this.fetchData();
            this.isSubmit = false;
          });
          this.formVisible = false;
        } else {
          this.isSubmit = false;
          return false;
        }
      });
    },
    // 更改密码确认提交
    submitForm1(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isSubmit = true;
          console.log("this.dialogForm", this.dialogForm);

          resetPassword(this.dialogForm).then((res) => {
            console.log("res:",res)
            this.$message({
              type: "success",
              message: "更改成功!",
            });
            this.fetchData();
            this.isSubmit = false;
          });
          this.formVisible1 = false;
        } else {
          this.isSubmit = false;
          return false;
        }
      });
    },
    cancleForm() {
      this.$refs.dialogForm.resetFields();
      this.formVisible = false;
    },
    cancleForm1() {
      this.$refs.dialogForm.resetFields();
      this.formVisible1 = false;
    },
  }
}
</script>

<style lang="less">
.user-center-wrapper {
  .user-avatar {
    float: left;
    width: 150px;
    height: 150px;
  }
  .user-info {
    float: left;
    width: 800px;
    margin-left: 50px;
    margin-bottom: 50px;
    li {
      height: 34px;
      line-height: 34px;
      label,
      span {
        display: inline-block;
        vertical-align: middle;
      }
      label {
        width: 80px;
        margin-right: 12px;
        text-align: right;
      }
    }
  }
}
</style>
