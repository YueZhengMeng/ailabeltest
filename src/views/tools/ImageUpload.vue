<template>
  <div class="avatar-upload">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card shadow="always" :body-style="{ padding: '0px' }">
          <div slot="header" class="title">上传病理切片</div>
          <div class="content-box">
            <el-upload
              action="http://localhost:9000/api/image/upload/"
              :data="head"
              :headers="token"
              :on-success="handlePreview"
              drag
              multiple
            >
              <i class="el-icon-upload" />
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
              <div slot="tip" class="el-upload__tip">
                只能上传jpg、jpeg、gif、png、bmp文件，且不超过500kb
              </div>
            </el-upload>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Hints from "@/components/Hints";
import { getToken } from "@/utils/cookie";
import Bus from '@/utils/bus.js'

export default {
  name: "AvatarUpload",
  components: { Hints },
  data() {
    return {
      head: {
        uploaderID: parseInt(localStorage.getItem("_userID")),
        description: "",
      },
      token: {
        Authorization: "Bearer " + getToken(),
      },
      // Authorization: 'Bearer ',s
      filesFormat: ".jpg, .jpeg, .gif, .png, .bmp",
      fileList: [
        {
          name: "beautiful-girl.jpg",
          url: "https://cdn.jsdelivr.net/gh/baimingxuan/media-store/images/img04.jpg",
        },
      ],
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    handlePreview() {
      this.$message({
        type: "success",
        message: "上传成功!",
      });
      this.$bus.$emit('_refreshImage',  Math.random());
      // localStorage.setItem("_refreshImage", Math.random())
      // this.dialogImageUrl = file.url
      // this.dialogVisible = true
    },
  },
};
</script>

<style lang="less">
.avatar-upload {
  .content-box {
    height: 320px;
    .el-upload {
      display: block;
    }
    .icon-small {
      padding: 8px 24px;
      .el-icon-upload {
        font-size: 14px;
        margin-right: 3px;
      }
    }
  }
}
</style>
