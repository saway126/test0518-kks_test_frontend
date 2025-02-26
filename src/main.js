import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axios // axios 글로벌 사용 가능
app.mount('#app')