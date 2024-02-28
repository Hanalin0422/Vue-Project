import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mitt from 'mitt'
import store from './store'
import './registerServiceWorker'

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;


app.use(router).mount('#app')
app.use(store)
