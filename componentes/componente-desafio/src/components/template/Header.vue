<template lang="">
  <div>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span> {{ titulo }} </span>
        <span class="font-weight-light"> {{ descricao }} </span>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: ['titulo', 'descricao']
}
</script>

<style lang="">
  
</style>