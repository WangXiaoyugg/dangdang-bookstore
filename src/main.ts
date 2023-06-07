import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ImgUtil } from './utils/imgUtil'

ImgUtil.storageImgList();
const app = createApp(App)
app.config.globalProperties.getImg = ImgUtil.getImg.bind(ImgUtil);
app.mount('#app')
