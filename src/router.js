import {createRouter,createWebHistory} from 'vue-router';
import Home from  './pages/Home.vue'
import Calendar from  './pages/Calendar.vue'
import Heros from './pages/Heros.vue'
import Markdown from './pages/Markdown.vue'
import Slider from './pages/Slider.vue'

const routes = [
    {path:'/', component:Home},
    {path:'/calendar', component:Calendar},
    {path:'/heros', component:Heros},
    {path:'/markdown', component:Markdown},
    {path:'/slider', component:Slider},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;