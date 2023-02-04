<template>
  <div class="about">
    <h1>This is an about page</h1>
    <annotation/>
  </div>
</template>

<script>
// @ is an alias to /src
// import ailabel from '@/components/ailabel.vue'
import annotation from '@/components/annotation.vue'

export default {
  name: 'AboutView',
  components: {
    annotation
  }
}
</script>
