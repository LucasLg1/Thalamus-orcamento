import { createRouter, createWebHashHistory } from 'vue-router'

//Home
// import HomeView from '../views/HomeView.vue'

//Area
import GerenciamentoDeDespesa from '../views/Orçamentos/GerenciamentoDeDespesa.vue'

//Projeto
import GerenciamentoDeProjeto from '../views/Orçamentos/GerenciamentoDeProjeto.vue'


//Orçamento
import OrcamentoPorArea from '../views/Orçamentos/OrçamentoPorArea'
import OrcamentoPorMes from '../views/Orçamentos/DefinirOrçamentoMensal'
import OrcamentoPorProjeto from '../views/Orçamentos/OrçamentoPorProjeto.vue'



//Materiais
import AprovacaoMateriais from '../views/Compras/AprovaçãoMateriais'
import EntregaMateriais from '../views/Compras/EntregaMateriais'
import SolicitacaoMateriais from '../views/Compras/SolicitaçãoMateriais'

//Teste
const routes = [


  //Home
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },

  //Area
  {
    path: '/area/novo',
    name: 'GerenciamentoDeDespesa',
    component: GerenciamentoDeDespesa
  },

  //Projeto
  {
    path: '/projeto/novo',
    name: 'GerenciamentoDeProjeto',
    component: GerenciamentoDeProjeto
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
  {
    path: '/orcamento/projeto',
    name: 'OrcamentoProjeto',
    component: OrcamentoPorProjeto
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
