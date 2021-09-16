import { createApp } from 'vue'
import App from './App'
import { createAppRouter } from './router'
import SvgIcon from './components/SvgIcon.vue'
import SecondaryButton from './components/SecondaryButton.vue'
import 'virtual:svg-icons-register'
import './main.css'

const app = createApp(App)

const router = createAppRouter()
app.use(router)

app.component('svg-icon', SvgIcon)
app.component('secondary-button', SecondaryButton)

app.mount('#app')
