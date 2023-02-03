<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ailabel/>
  </div>
</template>

<script>
// @ is an alias to /src
import ailabel from '@/components/ailabel.vue'

export default {
  name: 'AboutView',
  components: {
    ailabel
  }
}
</script>
