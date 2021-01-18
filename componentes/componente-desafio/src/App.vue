<template>
  <v-app>
    <v-navigation-drawer app>
      <app-toolbar />

      <v-divider></v-divider>

      <app-list />

    </v-navigation-drawer>

    <app-bar />

    <app-content />

    <app-footer />
  </v-app>
</template>

<script>
import Toolbar from './Toolbar.vue'
import List from './List.vue'
import Appbar from './Appbar.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'

export default {
  components: {
    'app-toolbar': Toolbar,
    'app-list': List,
    'app-bar': Appbar,
    'app-content': Content,
    'app-footer': Footer,
  },
}
</script>
