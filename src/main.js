import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import axios from 'axios';
import store from './store'

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;

axios.defaults.baseURL = 'http://localhost:3306';
app.config.globalProperties.axios = axios;


app.use(router).mount('#app')
app.use(store)
