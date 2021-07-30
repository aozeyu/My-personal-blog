<template>
  <div class="container">
    <Nav />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components:{
    Nav: defineAsyncComponent(() => import('./components/Nav.vue'))
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
