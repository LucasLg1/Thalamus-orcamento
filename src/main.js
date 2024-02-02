import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import router from './router'
import BootstrapVueNext from 'bootstrap-vue-next'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'primevue/resources/themes/aura-light-green/theme.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'


const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
  })

app.use(router);
app.use(BootstrapVueNext);
app.use(vuetify);
app.use(PrimeVue);
app.mount('#app')

