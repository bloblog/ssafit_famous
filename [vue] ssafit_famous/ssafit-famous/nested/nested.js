import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './nestedApp.vue'
import router from '../src/router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate)

app.use(pinia);
app.use(router)

app.mount('#app')
