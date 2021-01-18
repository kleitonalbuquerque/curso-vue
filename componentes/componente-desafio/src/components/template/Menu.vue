<template lang="">
  <div>
    <v-list dense class="pt-0">
        <v-list-item v-for="item in itensMenu" :key="item.titulo">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.titulo }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itensMenu: [
        { titulo: "Início", icon: "mdi-view-dashboard" },
        { titulo: "Sobre", icon: "mdi-forum" },
      ],
    };
  },
};
</script>

<style lang="">
</style>