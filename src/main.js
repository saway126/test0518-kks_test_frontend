import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(createPinia()) // Pinia 등록
app.mount('#app')