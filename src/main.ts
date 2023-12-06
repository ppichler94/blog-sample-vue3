import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import Textarea from 'primevue/textarea'
import axios from 'axios'
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(PrimeVue)
app.use(ToastService)
app.use(pinia)

app.component('InputText', InputText)
app.component('PvButton', Button)
app.component('PvToast', Toast)
app.component('PvTextarea', Textarea)

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

app.mount('#app')
