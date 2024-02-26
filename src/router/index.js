import { createRouter, createWebHashHistory } from 'vue-router'

//Home
import HomeView from '../views/HomeView.vue'

//Area
import GerenciamentoDeArea from '../views/Orçamentos/GerenciamentoDeArea.vue'

//Orçamento
import OrcamentoPorArea from '../views/Orçamentos/OrçamentoPorArea'
import OrcamentoPorMes from '../views/Orçamentos/DefinirOrçamentoMensal'


//Materiais
import AprovacaoMateriais from '../views/Compras/AprovaçãoMateriais'
import EntregaMateriais from '../views/Compras/EntregaMateriais'
import SolicitacaoMateriais from '../views/Compras/SolicitaçãoMateriais'

const routes = [
  //Home
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  //Area
  {
    path: '/area/novo',
    name: 'GerenciamentoDeArea',
    component: GerenciamentoDeArea
  },




  //Orçamento

  {
    path: '/orcamento/area',
    name: 'OrcamentoArea',
    component: OrcamentoPorArea
  },

  {
    path: '/orcamento/mensal',
    name: 'OrcamentoMes',
    component: OrcamentoPorMes
  },


  //Materiais
  {
    path: '/materiais/solicitacao',
    name: 'SolicitacaoMateriais',
    component: SolicitacaoMateriais
  },

  {
    path: '/materiais/entrega',
    name: 'EntregaMateriais',
    component: EntregaMateriais
  },
  {
    path: '/materiais/aprovacao',
    name: 'AprovacaoMateriais',
    component: AprovacaoMateriais
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
