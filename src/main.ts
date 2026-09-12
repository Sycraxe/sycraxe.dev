import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Updates :root --bg-color
document.documentElement.style.setProperty('--sd-color-accent', '#D5D69A')