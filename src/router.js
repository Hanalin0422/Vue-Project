import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail';

const routes = [
    {
        path: "/",
        component:Home,
    },
    {
        path: "/list",
        component: List,
        meta: { transition: 'fade' },
    },
    {
        path: "/detail/:id",
        component : Detail,
        name : 'Detail',
        meta:{ transition : 'fade'},
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;