import { createRouter, createWebHashHistory } from 'vue-router'

//Home
import HomeView from '../views/HomeView.vue'

//Area
import CadastroArea from '../views/CadastroArea.vue'
import SelecionarArea from '../views/SelecionarArea.vue'

//Planejamento
import PlanejamentoOrçamento from '../views/PlanejamentoOrçamento'
import PlanejamentoProjeto from '../views/PlanejamentoProjeto'
import PlanejamentoCorrente from '../views/PlanejamentoCorrente'

//Orçamento
import OrcamentoPorArea from '../views/OrçamentoPorArea'

//Projeto
import ProjetosView from '../views/ProjetosView'

//Materiais
import AprovacaoMateriais from '../views/AprovaçãoMateriais'
import EntregaMateriais from '../views/EntregaMateriais'
import SolicitacaoMateriais from '../views/SolicitaçãoMateriais'

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
    name: 'CadastroArea',
    component: CadastroArea
  },
  {
    path: '/area/selecionar',
    name: 'SelecionarArea',
    component: SelecionarArea
  },

  //Planejamento
  {
    path: '/planejamento',
    name: 'PlanejamentoOrcamento',
    component: PlanejamentoOrçamento
  },
  {
    path: '/planejamento/projeto',
    name: 'PlanejamentoProjeto',
    component: PlanejamentoProjeto
  },
  {
    path: '/planejamento/corrente',
    name: 'PlanejamentoCorrente',
    component: PlanejamentoCorrente
  },



  //Orçamento

  {
    path: '/orcamento/area',
    name: 'OrcamentoArea',
    component: OrcamentoPorArea
  },


  //Projeto

  {
    path: '/projetos',
    name: 'Projetos',
    component: ProjetosView
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
