import './assets/css/main.css'
import 'vue-final-modal/style.css'
import { createApp } from 'vue'

import { createPinia } from 'pinia'

import { createVfm } from 'vue-final-modal'

import i18n from './plugins/i18n'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const vfm = createVfm()

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vfm)

app.mount('#app')
