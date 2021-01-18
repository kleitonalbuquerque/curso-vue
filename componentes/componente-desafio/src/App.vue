<template>
  <v-app>
    <v-navigation-drawer app>
      <app-toolbar />

      <v-divider></v-divider>

      <app-menu />

    </v-navigation-drawer>

    <app-header />

    <app-carousel />

    <app-footer />
  </v-app>
</template>

<script>
import Toolbar from '@/Toolbar.vue'
import Menu from '@/components/template/Menu.vue'
import Header from '@/components/template/Header.vue'
import Carousel from '@/components/widgets/Carousel.vue'
import Footer from '@/components/template/Footer.vue'

export default {
  components: {
    'app-toolbar': Toolbar,
    'app-menu': Menu,
    'app-header': Header,
    'app-carousel': Carousel,
    'app-footer': Footer,
  },
}
</script>
