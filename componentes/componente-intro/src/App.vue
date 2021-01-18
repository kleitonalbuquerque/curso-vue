<template>
  <div id="app">
    <h1>Contadores</h1>
    <Contador />
  </div>
</template>

<script>
import Contador from './Contador.vue'

export default {
  name: 'App',
  components: {
    Contador
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
