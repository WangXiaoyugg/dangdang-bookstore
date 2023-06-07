import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

console.log('env', import.meta.env.VITE_Username, import.meta.env.VITE_Age);

createApp(App).mount('#app')
