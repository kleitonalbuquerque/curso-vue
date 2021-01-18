import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Toolbar from './Toolbar.vue'
import List from './List.vue'
import Appbar from './Appbar.vue'
import Content from './Content.vue'
import Footer from './Footer.vue'

Vue.config.productionTip = false
Vue.component('app-toolbar', Toolbar)
Vue.component('app-list', List)
Vue.component('app-bar', Appbar)
Vue.component('app-content', Content)
Vue.component('app-footer', Footer)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
