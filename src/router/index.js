import { createRouter, createWebHistory } from 'vue-router'
import InsertarVehiculo from '../pages/InsertarVehiculoPage.vue'
import ListarVehiPage from '../pages/ListarVehiPage.vue'

const routes = [
  {
    path: '/ingresar',

    component: InsertarVehiculo
  },
  {
    path: '/listar',
    component: ListarVehiPage
  }
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
