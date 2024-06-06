import { createRouter, createWebHistory } from 'vue-router'
import RegisterUser from '@/components/registerUser.vue'
import LoginVue from '@/components/login.vue'
import Dashboard from '@/components/dashboard.vue'
import Personas from '@/components/Personas.vue'
import Usuarios from '@/components/Usuarios.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginVue
    },
    {
      path: '/register',
      name: 'RegisterUser',
      component: RegisterUser
    },
    {
      path: '/dahsboard',
      name: 'Dashboard',
      component: Dashboard,
      children:[
        {
        path:'/personas',
        name: 'Personas',
        component: Personas
      },

    ]
    }
    
  ]
})

export default router
