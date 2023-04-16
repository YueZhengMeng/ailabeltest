<template>
  <div class="rich-text-editor">
    <Editor v-model="content" />
  </div>
</template>

<script>
import Hints from '@/components/Hints'
import Editor from '@/components/Editor'

export default {
  name: 'RichTextEditor',
  components: { Editor, Hints },
  data() {
    return {
      content: '请输入内容...'
    }
  }
}
</script>
