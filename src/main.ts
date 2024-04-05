import 'dayjs/locale/ru'
import '@/assets/scss/main.scss'

import App from './App.vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import dayjs from 'dayjs'
import router from './router'

dayjs.locale('ru')

const pinia = createPinia()
const app = createApp(App).use(pinia)

app.use(router)

app.mount('#app')
