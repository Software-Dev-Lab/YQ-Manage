import {createApp} from 'vue'
import './styles/index.scss'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import App from "./App.vue";
//@ts-ignore
import 'virtual:svg-icons-register';
import router from "./router/index.ts";
import gloablComponent from './components/index';
import ElementPlus from 'element-plus'
import pinia from "./store/index.ts"
import './permisstion'
const app = createApp(App)
app.use(ElementPlus, {
    locale: zhCn,
})
console.log(import.meta.env)
app.use(pinia)
app.use(router)
app.use(gloablComponent);
app.mount('#app')
