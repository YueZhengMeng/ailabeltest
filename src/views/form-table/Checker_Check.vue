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
			<el-form-item label="标注者ID">
        <el-input v-model="listQuery.annotaterID" placeholder="标注人ID" />
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
		  <el-table-column prop="checkResult" label="审核结果" align="center"  />
	  
		<el-table-column label="操作" align="center" width="200">
		  <template slot-scope="scope">
		    <el-button size="mini" :disabled="scope.row.isVisible" @click="handleCheck(scope.$index, scope.row)">审核</el-button>
		  </template>
		</el-table-column>
      </el-table>
      <!-- 分页栏 -->
      <!-- <Pagination :total="total" :page.sync="listQuery.currentPage" :limit.sync="listQuery.pageSize" @pagination="fetchData" /> -->
      
    </el-card>
  </div>
</template>

<script>
import { getAllAnnotation } from '@/api/checker'
import { getImageByImageID } from '@/api/admin'
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
		    username:undefined,
        annotatorName:undefined,
        status:undefined,
        // currentPage: 1,
        // pageSize: 10
      },
      // 数据总条数
      total: 0,
      // 表格数据数组
      Data: [],
      tableData: [],
      // 多选数据暂存数组
      multipleSelection: [],
    }
  },
  created() {
    this.fetchData()
  },
  mounted(){
    window.addEventListener("storage", ({key})=> {
      if (key ==="_refreshChecker") {
        this.fetchData();
      }
    })
  },
  beforeDestroy(){
    window.removeEventListener("storage",()=> {});
  },
  methods: {
    
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
    // 获取数据列表
    fetchData() {
      this.listLoading = true
      // 获取数据列表接口
      getAllAnnotation().then(res => {
        console.log("getUAllAnnotation",res)
        const data = res.data

        if (res.code >= 200 && res.code < 300) {
          
          // console.log("total",this.total)
          // console.log("total",this.tableData)
          for (let d of data){
            // console.log("d", typeof(d.checkResult))
            if (d.checkResult == 0 ) {
              d.checkResult = "未审核"
              this.$set(d, 'isVisible', false)
            } else if (d.checkResult == 1) {
              d.checkResult = "通过"
              this.$set(d, 'isVisible', true)
            } else if (d.checkResult == 2) {
              d.checkResult = "不通过"
              this.$set(d, 'isVisible', true)
            }
            // console.log("d", typeof(d.checkResult),d.checkResult)
          }
          this.total = data.length
          this.tableData = data
          this.Data = data
          this.listLoading = false
        }
      }).catch(() => {
        this.listLoading = false
      })
    },

    handleCheck(index, row) {
      console.log(index, row)
      getImageByImageID(row.imageID).then(res => {
        console.log("getImageByImageID",res)
        const data = res.data
        let routeData = this.$router.resolve({
          name: 'checkannotation',
          query: {
            imageID: row.imageID,
            userID: localStorage.getItem("_userID"),
            annotationResult: row.annotationResult,
            path: data.path,
            annotationID: row.annotationID,

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
       if (this.listQuery.checkResult) {
				result =result.filter(data => {
					return data['checkResult'] !== undefined && data['checkResult'].toString().indexOf(this.listQuery.checkResult) !== -1
				})
        console.log("result2",result)
			}  
      
      if(!hasValue){
        result = this.Data.slice();
      }

      this.tableData = result;
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
