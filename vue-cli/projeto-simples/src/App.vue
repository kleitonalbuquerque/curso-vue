<template>
  <div id="app"> 
    {{ titulo }} 
    <button @click="titulo +='#'">Clique</button>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        titulo: 'Teste Data usando VueJS!!!'
      }
    }
  }
</script>

<style>
  #app {
    background-color: chocolate;
    color: #ffffff;
  }
</style>