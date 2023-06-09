import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import VForm3 from 'vform3-builds'

import 'element-plus/theme-chalk/dark/css-vars.css'
import 'vform3-builds/dist/designer.style.css'

const app = createApp(App)
app.use(createPinia())
app.use(ElementPlus)
app.use(VForm3)
app.use(router)

app.mount('#app')
