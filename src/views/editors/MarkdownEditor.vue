<template>
  <div class="markdown-editor">
    <mavonEditor
      ref="markdownEle"
      v-model="content"
      style="min-height: 500px"
      @imgAdd="imageAdd"
      @imgDel="imageDel"
    />
  </div>
</template>

<script>
import { axios } from 'axios'
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import Hints from '@/components/Hints'

export default {
  name: 'MarkdownEditor',
  components: { mavonEditor, Hints },
  data() {
    return {
      content: '',
      imageFile: {}
    }
  },
  methods: {
    // 绑定@imgAdd event
    imageAdd(pos, file) {
      // 将图片上传到服务器
      const formData = new FormData()
      formData.append('image', file)
      this.imageFile[pos] = file
      axios({
        url: 'server url',
        method: 'post',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(res => {
        const data = res.data
        this.$refs.markdownEle.$img2Url(pos, data.url)
      })
    },
    // 绑定@imgDel event
    imageDel(pos) {
      delete this.imageFile[pos]
    }
  }
}
</script>
