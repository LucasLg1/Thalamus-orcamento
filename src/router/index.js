import { createRouter, createWebHashHistory } from 'vue-router'

//Home
import HomeView from '../views/HomeView.vue'
import Home2View from '../views/Home2View.vue'

//Corrente
import AddOrçamentoCorrente from '../views/AddOrçamentoCorrente'
import AddCorrente from '../views/AddCorrente'
import CorrentesView from '../views/CorrentesView'

//Categoria
import AddCategoria from '../views/AddCategoria'

//Projeto
import AddOrçamentoProjeto from '../views/AddOrçamentoProjeto'
import AddProjeto from '../views/AddProjeto'
import ProjetosView from '../views/ProjetosView'


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




  //Categoria
  {
    path: '/categoria/novo',
    name: 'AddCategoria',
    component: AddCategoria
  },



 //Corrente

  {
    path: '/orcamento/corrente',
    name: 'AddOrçamentoCorrente',
    component: AddOrçamentoCorrente
  },
  {
    path: '/corrente/novo',
    name: 'AddCorrente',
    component: AddCorrente
  },

  {
    path: '/correntes',
    name: 'Correntes',
    component: CorrentesView
  },

  //Projeto

  {
    path: '/orcamento/projeto',
    name: 'AddOrçamentoProjeto',
    component: AddOrçamentoProjeto
  },

  {
    path: '/projeto/novo',
    name: 'AddProjeto',
    component: AddProjeto
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: ProjetosView
  },




]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
