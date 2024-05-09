<template>
  <div class="home">
    <h1>Hello, This is Home Page.</h1>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/service">服務項目</RouterLink>
    <RouterLink to="/works">作品集</RouterLink>
    <RouterLink to="/blog">部落格</RouterLink>
    <RouterLink to="/blog">聯絡我</RouterLink>
    <hr>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
</style>
