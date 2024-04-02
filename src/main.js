import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVueNext from 'bootstrap-vue-next'
import PrimeVue from 'primevue/config';
import axios from 'axios';



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;


const app = createApp(App)
app.use(BootstrapVueNext)
app.use(router)
app.use(PrimeVue)
app.mount('#app')

