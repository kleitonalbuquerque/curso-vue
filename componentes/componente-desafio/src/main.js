import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Toolbar from './Toolbar.vue'
import Menu from './components/template/Menu.vue'
import Header from './components/template/Header.vue'
import Carousel from './components/widgets/Carousel.vue'
import Footer from './components/template/Footer.vue'

Vue.config.productionTip = false
Vue.component('app-toolbar', Toolbar)
Vue.component('app-menu', Menu)
Vue.component('app-header', Header)
Vue.component('app-carousel', Carousel)
Vue.component('app-footer', Footer)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
