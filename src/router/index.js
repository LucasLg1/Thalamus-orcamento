import { createRouter, createWebHashHistory } from 'vue-router'

//Home
import HomeView from '../views/HomeView.vue'
import Home2View from '../views/Home2View.vue'

//Corrente
import CorrenteCadastro from '../views/CorrenteCadastro'
import AddDespesaCorrente from '../views/AddDespesaCorrente'
import CorrentesView from '../views/CorrentesView'

//Categoria
import CategoriaCadastro from '../views/CategoriaCadastro'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/2',
    name: 'home2',
    component: Home2View
  },


 //Corrente
  {
    path: '/corrente/novo',
    name: 'CorrenteCadastro',
    component: CorrenteCadastro
  },
  {
    path: '/despesa/corrente/novo',
    name: 'AddDespesaCorrente',
    component: AddDespesaCorrente
  },

  {
    path: '/categoria/novo',
    name: 'Categoria',
    component: CategoriaCadastro
  },
  {
    path: '/correntes',
    name: 'Correntes',
    component: CorrentesView
  },



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
