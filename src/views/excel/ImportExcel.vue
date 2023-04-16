<template>
  <div class="import-excel-wrapper">
    <el-card shadow="always">
      <UploadExcel @on-success="handleSuccess" />
      <el-table
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        size="medium"
      >
        <el-table-column v-for="item in tableHeader" :key="item" :prop="item" :label="item" align="center" />
      </el-table>
    </el-card>
  </div>
</template>

<script>
import UploadExcel from '@/components/UploadExcel'
import Hints from '@/components/Hints'

export default {
  name: 'ImportExcel',
  components: { UploadExcel, Hints },
  data() {
    return {
      tableHeader: [],
      tableData: []
    }
  },
  methods: {
    handleSuccess({ header, results }) {
      this.tableHeader = header
      this.tableData = results
    }
  }
}
</script>

<style lang="less">
.import-excel-wrapper {
  .el-card {
    min-height: 400px;
  }
  .search-form {
    padding-top: 18px;
    margin-bottom: 15px;
    background-color: #f7f8fb;
  }
  .el-table thead {
    font-weight: 600;
    th{
      background-color: #f2f3f7;
    }
  }
}
</style>
