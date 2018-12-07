import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
import Troca from './views/Troca.vue'
import TrocaUsuario from './views/TrocaUsuario.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/trocas',
      name: 'trocas',
      component: Troca
    },
    {
      path: '/troca-usuario',
      name: 'troca-usuario',
      component: TrocaUsuario
    }
  ]
})
