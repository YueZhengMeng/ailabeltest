<template>
  <div class="home">
    <annotation/>
  </div>
</template>

<script>
// @ is an alias to /src
import annotation from '@/components/annotation.vue'

export default {
  name: 'HomeView',
  components: {
    annotation
  }
}
</script>
