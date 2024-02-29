<template>
    <div class="container">
        <div class="row">
            <nav>
                <router-link to="/area/novo">Despesas</router-link> |
                <router-link to="/projeto/novo">Projetos</router-link>
            </nav>
            <div class="col-sm-12" style="text-align: center;">
                <h3 class="titulo"> Thalamus Orçamentos </h3>
                <br><br>
            </div>
        </div>
        <br>
    
    
        <div class="row text-center">
    
            <div class="col-sm-5" style="background-color: white; border: 1px solid grey; border-radius: 10px; padding: 1rem; margin-right: 150px;" >
                <br>
                <h5 class="table-title">Orçamento de Despesas Correntes</h5>
                <div class="form-group input-group" style="width: 100%;">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                                                 <i class="fa-solid fa-magnifying-glass"></i>
                                                </span>
                    </div>
                    <input v-model="filtroDespesa" @input="pesquisaDespesa" type="text" class="form-control" placeholder="Pesquisar despesas" />&nbsp;&nbsp;
                </div>
                <br>
    
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">Área</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody style="text-align: center;">
                            <tr v-for="(area, index) in mockupData.areas" :key="index">
                                <td>{{ area.nome }}</td>
                                <td>
                                    <div>
                                        <i title="Clique para vincular responsável" class="fa-solid fa-users" @click="modalArea = !modalArea"></i>&nbsp;
                                    </div>
                                </td>
                            </tr>
    
                        </tbody>
                    </table>
                    <!-- <nav>
                                                                                                            <ul class="pagination">
                                                                                                                <li class="page-item" :class="{disabled: currentPage === 0}">
                                           </li>
                                                                                                                <li v-for="n in numberOfPages" :key="n" class="page-item" :class="{active: n === currentPage}">
                               <a class="page-link" href="#" @click="setPage(n)">{{ n + 1 }}</a>
                                                                                                                </li>
                                                                                                                <li class="page-item" :class="{disabled: currentPage === numberOfPages - 1}">
                                                                                                                    <a class="page-link" href="#" aria-label="Next" @click="nextPage">
                                                                                                                                                                                              <span aria-hidden="true">&raquo;</span>
                                                                                                                                                                                            </a>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </nav> -->
                </div>
            </div>
    
            <div class="col-sm-5" style="border: 1px solid grey;  background-color: white; border-radius: 10px;">
                <br>
                <h5 class="table-title">Categorias</h5>
                <div class="form-group input-group" style="width: 100%;">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                                                                                                                                                                                                                <i class="fa-solid fa-magnifying-glass"></i>
                                                                                                                                                                                                            </span>
                    </div>
                    <input v-model="filtroCategoria" @input="pesquisaCategoria" type="text" class="form-control" placeholder="Pesquisar categoria" />&nbsp;&nbsp;
    
    
                </div>
                <br>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">Nome</th>
                            </tr>
                        </thead>
                        <tbody style="text-align: center;">
                            <tr v-for="(categorias, index) in mockupData.categorias" :key="index">
                                <td>{{ categorias.nome }}</td>
    
                            </tr>
    
                        </tbody>
                    </table>
                    <nav>
                        <!-- <ul class="pagination">
                                                                                                                <li class="page-item" :class="{disabled: currentPage === 0}">
                                                                                                                    <a class="page-link" href="#" aria-label="Previous" @click="prevPage">
                                                                                                                                                                                              <span aria-hidden="true">&laquo;</span>
                                                                                                                                                                                            </a>
                                                                                                                </li>
                                                                                                                <li v-for="n in numberOfPages" :key="n" class="page-item" :class="{active: n === currentPage}">
                                                                                                                    <a class="page-link" href="#" @click="setPage(n)">{{ n + 1 }}</a>
                                                                                                                </li>
                                                                                                                <li class="page-item" :class="{disabled: currentPage === numberOfPages - 1}">
                                                                                                                    <a class="page-link" href="#" aria-label="Next" @click="nextPage">
                                                                                                                                                                                              <span aria-hidden="true">&raquo;</span>
                                                                                                                                                                                            </a>
                                                                                                                </li>
                                                                                                            </ul> -->
                    </nav>
                </div>
            </div>
    
    
        </div>
    </div>
    
    <!-- modal -->
    <div class="modal-mask" v-if="modalArea" @click="fecharModalFora">
        <div class="container-modal" style="width: 60%; margin-bottom: 1rem;">
            <div style="display: flex; flex-direction: column; padding-inline: 3rem; margin-top: none; height: min-content;">
                <div class="tituloModal">
                    <h3>Vincular responsáveis</h3>
                    <br>
                </div>
    
    
                <button type="button" class="button-cadastrar" @click="mostrarInput = !mostrarInput" style="width: 10%;  margin-left: 10px; color: white; ">
                                                                                                                                                                                                       
                                                                                                                                                                                                          <i class="fa-solid fa-circle-plus" v-if="!mostrarInput" style="color: green;"></i>
                                                                                                                                                                                                          <i class="fa-solid fa-circle-minus" v-if="mostrarInput" style="color: red;"></i> 
                                                                                                                                                            
                                                                                                                                                                                                        </button>
    
                <input type="text" v-if="mostrarInput">
                <br>
    
    
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">Área</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody style="text-align: center;">
                            <tr>
                                <td>Coordenador Facilities</td>
                                <td>
                                    <div>
                                        <i class="fa-solid fa-circle-minus" style="color: red;"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Diretoria Geral</td>
                                <td>
                                    <div>
                                        <i class="fa-solid fa-circle-minus" style="color: red;"></i>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>Supervisor de Produção</td>
                                <td>
                                    <div>
                                        <i class="fa-solid fa-circle-minus" style="color: red;"></i>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    
    
            </div>
        </div>
    </div>
    
    <!-- End Modal -->
</template>

<script>
const mockupData = {
    areas: [
        { nome: 'Informática' },
        { nome: 'Marketing' },
        { nome: 'Financeiro' },
    ],
    categorias: [
        { nome: 'Impressora' },
        { nome: 'Software' },
        { nome: 'Notebook' },
    ],
    responsaveis: [
        { nome: 'Coordenador Facilities' },
        { nome: 'Diretoria Geral' },
        { nome: 'Supervisor de Produção' },
    ],
    projetos: [
        { nome: 'Thalamus - Orçamentos / Compras' },
        { nome: 'Thalamus - Catraca' },
        { nome: 'Thalamus - Projetos ' }
    ]

};
export default {
    components: {},
    data() {
        return {
            modalArea: false,
            mostrarInput: false,
            filtroCategoria: '',
            filtroDespesa: '',
            mockupData,


        }
    },
    methods: {
        fecharModalFora(event) {
            if (event.target.classList.contains('modal-mask')) {
                this.modalArea = false;
            }
        },



    },

    mounted() {

    }
}
</script>

<style>
.table-title {
    text-align: center;
    margin-bottom: 1rem;
}

.botaoSalvar {
    background-color: #343537;
    color: white;
    width: 7rem;
    height: 2rem;
    margin-bottom: 1rem;
}

.divBotoes {
    display: flex;
    width: 100%;
    align-items: flex-end;
    flex-flow: column;
    margin-top: 2rem;
}

.iconePesquisa {
    color: black;
    margin-right: 1rem;
    align-self: center;
    font-size: larger;
}

.inputPesquisa {
    text-align: center;
    width: 100%;
    height: 2rem;
}

.divFilhaPesquisa {
    display: flex;
    border-bottom: 1px solid #ACA8A8;
}

.divPaiPesquisa {
    background-color: #FFFFFF;
    margin-top: 3rem;
    border: 1px solid #ACA8A8;
    height: 10rem;
}

.inputNomeArea {
    text-align: center;
    font-size: 20px;
    width: 100%;
    height: 3rem;
    background-color: #FFFFFF
}

.tituloModal {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-modal {
    padding-inline: 3rem;
    background-color: #F6F6F6;
    border: 1px solid black;
    width: 60%;
    height: 30rem;
    overflow-y: auto;
    position: relative;
    padding: 0, 01rem;
}
</style>

