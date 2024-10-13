import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Persona from '../pages/Persona.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/persona/:id', name: 'Persona', component: Persona }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router