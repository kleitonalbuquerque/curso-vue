<template>
  <div id="app">
    <Contadores />
  </div>
</template>

<script>
import Contadores from './Contadores.vue'

export default {
  name: 'App',
  components: {
    Contadores
  }
}
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
