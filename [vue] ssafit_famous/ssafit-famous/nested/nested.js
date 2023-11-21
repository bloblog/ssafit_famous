import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './nestedApp.vue'
import router from '../src/router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

app.use(pinia);
app.use(router)

app.component('VueDatePicker', VueDatePicker);

app.mount('#app')
