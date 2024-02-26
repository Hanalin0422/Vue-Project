import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/Detail'
import Author from './components/Author.vue'
import Comments from './components/Comments.vue'

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
        children:[
            {
                path: "author",
                component :Author,
            },
            {
                path: "comment",
                component : Comments,
            }
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;