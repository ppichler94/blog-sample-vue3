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

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(ToastService)

app.component('InputText', InputText)
app.component('PvButton', Button)
app.component('PvToast', Toast)
app.component('PvTextarea', Textarea)

axios.defaults.baseURL = 'http://localhost:8080'

app.mount('#app')
