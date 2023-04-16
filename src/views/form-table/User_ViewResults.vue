<template>
  <div class="table-classic-wrapper">
    <el-card shadow="always">
      <!-- 表格栏 -->
      <el-table
        ref="multipleTable"
        v-loading="listLoading"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        size="medium"
      >
		<el-table-column prop="uploadDate" label="上传时间" align="center" sortable />
		<!-- <el-table-column prop="description" label="切片描述" align="center" /> -->
		<el-table-column prop="status" label="状态" align="center" />
		<el-table-column label="操作" align="center" width="200">
		  <template slot-scope="scope">
		    <el-button size="mini" @click="handleSelect(scope.$index, scope.row)">显示图片</el-button>
		    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
		  </template>
		</el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getUserAllImage, deleteimage } from '@/api/user'
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
        uploaderID: parseInt(localStorage.getItem("_userID")),
        // currentPage: 1,
        // pageSize: 10
      },
      // 数据总条数
      total: 0,
      // 表格数据数组
      tableData: [],
      // 多选数据暂存数组
      multipleSelection: [],
    }
  },
  created() {
    this.fetchData()
  },
  mounted(){
    this.$bus.$on('_refreshImage', (data)=>{
      this.fetchData();
    })
    // window.addEventListener("storage", ({key})=> {
    //   if (key ==="_refreshImage") {
    //     console.log(11111);
    //     this.fetchData();
    //   } else{
    //     console.log(444444)
    //   }
    // })
  },
  beforeDestroy(){
    this.$bus.$off('_refreshImage')
    // window.removeEventListener("storage",()=> {});
  },
  methods: {
    // 删除数据 todo
    handleDelete(index, row) {
      console.log(index, row)
      this.$confirm('此操作将删除选中数据, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        deleteimage(row.imageID).then(res => {
          console.log("deletimage-res:",res)
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

    // 获取数据列表
    fetchData() {
      this.listLoading = true
      // 获取数据列表接口
      getUserAllImage(this.listQuery).then(res => {
        console.log("getUserAllImage",res)
        const data = res.data
        if (res.code >= 200 && res.code < 300) {
          this.total = data.length
          this.tableData = data
          // console.log("total",this.total)
          // console.log("total",this.tableData)
          for (let d of data){
            // d.status
            // console.log("d", typeof(d.status))
            if (d.status == 0 ) {
              d.status = "待处理"
            } else if (d.status == 1) {
              d.status = "已完成"
            } else if (d.status == 2) {
              d.status = "处理中"
            }
            // console.log("d", typeof(d.status),d.status)
          }
          this.listLoading = false
        }
      }).catch(() => {
        this.listLoading = false
      })
    },
    //显示详细信息 todo
    handleSelect(index, row) {
      console.log(index, row)
      let routeData = this.$router.resolve({
        name: 'user_showannotation',
        query: {
          imageID: row.imageID,
          userID: localStorage.getItem("_userID"),
          path: row.path

        }
      })
      window.open(routeData.href, '_blank')
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
