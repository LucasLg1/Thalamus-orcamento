<template>
    <div class="container">
        <div class="row">
            <nav>
                <router-link to="/area/novo">Despesas</router-link> |
                <router-link to="/projeto/novo">Projetos</router-link>
            </nav>
            <div class="col-sm-12" style="text-align: center;">
                <h3 class="titulo"> Thalamus Orçamentos </h3>
                <br /><br />
            </div>
        </div>
        <br />
    
        <!-- COLUNA 1 -->
        <div class="row text-center">
            <div class="col-sm-10" style="background-color: white; border: 1px solid grey; border-radius: 10px; padding: 1rem; margin-right: 150px;">
                <br />
                <h5 class="table-title"> Grupo de Contas &nbsp; <i class="fa-solid fa-chart-line"></i></h5>
                <div class="form-group input-group" style="width: 100%;">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                    <input v-model="searchDespesa" @input="filterDespesas" type="text" class="form-control" placeholder="Pesquisar despesas" />&nbsp;&nbsp;
                </div>
                <br />
                <label style="color: dimgray;">Escolha um grupo, para visualizar as categorias</label>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr style="text-align: center; ">
                                <th scope="col">Grupo</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody style="text-align: center; cursor: pointer;">
                            <tr v-for="(area, index) in paginatedDespesas" :key="index" @click="carregarCategorias(area)">
                                <td>{{ area.nome }}</td>
                                <td><i title="Clique para vincular responsável" class="fa-solid fa-user-group" @click="modalArea = !modalArea"></i> &nbsp; </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-center mt-3">
                    <ul class="pagination">
                        <li class="page-item" :class="{ 'active': currentPage === page }" v-for="page in Math.ceil(filteredAreas.length / itemsPerPage)" :key="page">
                            <a class="page-link" @click="currentPage = page">{{ page }}</a>
                        </li>
                    </ul>
                </div>
                <br>
                <div class="col-sm-30" style="border: 1px solid grey;  background-color: white; border-radius: 10px;">
                <br /><br>
                <h5 class="table-title">Categorias&nbsp; <i class="fa-solid fa-list"></i></h5>
                <div class="form-group input-group" style="width: 100%;">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                    <input v-model="searchCategoria" @input="filterCategoria" type="text" class="form-control" placeholder="Pesquisar categoria" />&nbsp;&nbsp;                </div>
                <br />
                <label style="color: dimgray;">Escolha uma categoria, para visualizar o orçamento</label>
    
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">Categoria</th>
                            </tr>
                        </thead>
                        <tbody style="text-align: center; cursor: pointer;">
                            <tr v-for="(categoria, index) in paginatedCategorias" :key="index">
                                <td>{{ categoria }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-center mt-3">
                    <!-- <ul class="pagination">
                  <li class="page-item" :class="{ 'active': currentPage === page }" v-for="page in Math.ceil(filteredCategorias.length / itemsPerPage)" :key="page">
                    <a class="page-link" @click="currentPage = page">{{ page }}</a>
                  </li>
                </ul> -->
                </div>
                <br>
            </div>
            </div>
            <!--END COLUNA 1-->
    
            <!-- COLUNA 2-->
            <!-- <div class="col-sm-5" style="border: 1px solid grey;  background-color: white; border-radius: 10px;">
                <br /><br>
                <h5 class="table-title">Categorias&nbsp; <i class="fa-solid fa-list"></i></h5>
                <div class="form-group input-group" style="width: 100%;">
                    <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                    <input v-model="searchCategoria" @input="filterCategoria" type="text" class="form-control" placeholder="Pesquisar categoria" />&nbsp;&nbsp;                </div>
                <br />
                <label style="color: dimgray;">Escolha uma categoria, para visualizar os Orçamentos</label>
    
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">Nome</th>
                            </tr>
                        </thead>
                        <tbody style="text-align: center; cursor: pointer;">
                            <tr v-for="(categoria, index) in paginatedCategorias" :key="index">
                                <td>{{ categoria }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="d-flex justify-content-center mt-3">
               
                </div>
                <br>
            </div> -->
            <!--END COLUNA 2-->
    
    
        </div>
    </div>
    
    <!-- MODAL -->
    <div class="modal-mask" v-if="modalArea" @click="fecharModalFora">
        <div class="container-modal" style="width: 60%; margin-bottom: 1rem;">
            <div style="display: flex; flex-direction: column; padding-inline: 3rem; margin-top: none; height: min-content;">
                <div class="tituloModal">
                    <h3>Vincular responsáveis</h3>
                    <br>
                </div>
                <div style="display: flex; flex-flow: column; width: 100%; ">
                    <!-- <i class="fa-solid fa-circle-minus" v-if="mostrarInput" style="color: red;"></i>  -->
                    <div class="form-group input-group" style="width: 100%;">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i
                                                                        ></span>
                        </div>
                        <input v-if="mostrarInput" type="text" v-model="responsavelSelecionado" class="form-control" @focusin="this.procurar()" style="background-color: #f1f1f1; color: black;" @focusout="fecharLista" @input="this.procurar()" placeholder="Pesquisar responsável"
                        />
                        <div style="height: 11rem; overflow: auto; background-color: #f1f1f1; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; position: absolute; margin-top: 2.5rem; width: 30rem;" v-if="responsavelFiltrado">
                            <ul style="list-style: none;">
                                <li v-for="item in responsavelFiltrado" :key="item.id" style="cursor: pointer;" @click="selecionarResponsavel(item)">
                                    {{ item.nome }}
                                </li>
                            </ul>
                        </div>
                        <!-- {{ responsavelSelecionado }} -->
    
                    </div>
                </div>
    
                <!-- <button type="button" class="button-cadastrar" @click="mostrarInput = !mostrarInput" style="width: 10%;  margin-left: 10px; color: white; ">
                                                         <i class="fa-solid fa-circle-plus" v-if="!mostrarInput" style="color: green;"></i></button> -->
    
    
    
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">Responsável</th>
                                <th scope="col"> </th>
                            </tr>
                        </thead>
                        <tbody style="text-align: center; cursor: pointer;">
                            <tr v-for="(responsavel, index) in mockupData.responsaveis" :key="index">
                                <td>{{ responsavel.nome }}</td>
                                <td><i class="fa-solid fa-circle-minus" style="color: red;"></i> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    
    
            </div>
        </div>
    </div>
    
    <!-- END MODAL -->
</template>

<script>
import axios from 'axios';

const mockupData = {
    areas: [
        { nome: 'Informática', categorias: ['Impressora', 'Software', 'Notebook'] },
        { nome: 'Marketing', categorias: ['Publicidade', 'Pesquisa de Mercado', 'Eventos', 'Externo', 'Interno', 'Rede Social'] },
        { nome: 'Financeiro', categorias: ['Contabilidade', 'Folha de Pagamento', 'Investimentos'] },
        { nome: 'Pesquisa e Desenvolvimento', categorias: ['Ferramental produtivo'] },
        { nome: 'Sustentabilidade', categorias: ['Projetos Sociais'] },
        { nome: 'Compliance', categorias: ['Advogados', 'Ceriticação Digital', 'Cartórios'] },
        { nome: 'Recursos Humanos', categorias: ['Endomarketing'] },
        { nome: 'Facilities', categorias: ['IPTU', 'TFLF'] },

    ],
    categorias: [
      
    ],
    // categorias: [],
    responsaveis: [
        { nome: 'Coordenador Facilities' },
        { nome: 'Diretoria Geral' },
        { nome: 'Supervisor de Produção' },
        { nome: 'Assistente Diretoria' },

    ],
    projetos: [
        { nome: 'Thalamus - Orçamentos / Compras' },
        { nome: 'Thalamus - Catraca' },
        { nome: 'Thalamus - Projetos ' }
    ],

};
export default {
    components: {},
    data() {
        return {
            modalArea: false,
            mostrarInput: true,
            searchCategoria: '',
            filtroDespesa: '',
            mockupData,
            responsavelSelecionado: null,
            responsavelFiltrado: null,
            gerente: [],
            setores: [],
            categorias: [],
            filteredAreas: [],
            filteredCategorias: [],
            categoriasDaArea: [],
            currentPage: 1,
            itemsPerPage: 5,
            searchDespesa: ''

        }
    },
    methods: {
        filterDespesas() {
            this.filteredAreas = this.mockupData.areas.filter(area =>
                area.nome.toLowerCase().includes(this.searchDespesa.toLowerCase())
            );
        },
        filterCategoria() {
    // console.log('Search Categoria:', this.searchCategoria);
    this.filteredCategorias = this.mockupData.categorias.filter(categoria =>
        categoria.nome.toLowerCase().includes(this.searchCategoria.toLowerCase())
    );
    // console.log('Filtered Categorias:', this.filteredCategorias);
},

        carregarCategorias(area) {
            this.categoriasDaArea = area.categorias;
        },
        selecionarArea(area) {
            this.modalArea = false;
            this.carregarCategorias(area);
        },
        fecharModalFora(event) {
            if (event.target.classList.contains('modal-mask')) {
                this.modalArea = false;
            }
        },
        procurar() {
            if (!this.responsavelSelecionado) {
                this.responsavelFiltrado = this.gerente
                // console.log(this.responsavelFiltrado)
            } else {
                if (this.responsavelFiltrado !== null) {

                    this.responsavelFiltrado = this.responsavelFiltrado.filter(nome => nome.nome.toLowerCase().startsWith(this.responsavelSelecionado.toLowerCase()));
                    // console.log(this.listaPessoasFiltrada = this.listaPessoasFiltrada.filter(nome => nome.nomeCompleto.toLowerCase().startsWith(this.pessoaSelecionada.toLowerCase())))
                }
            }

        },
        fecharLista() {
            setTimeout(() => {
                this.responsavelFiltrado = null;
                this.responsavelSelecionado = null;
            }, 200);
        },
        getGerenteseSetor() {
            axios.get('setor/', {})
                .then((response) => {
                    this.gerente = response.data
                    this.gerente = this.gerente.map(item => ({
                        id: item.id,
                        nome: item.nome,

                    }))
                })
                .catch((error) => {
                    console.error(error);
                });

            axios.get('setor', {})
                .then((response) => {
                    this.setores = response.data
                })
                .catch((error) => {
                    console.error(error);
                });
        },

        selecionarResponsavel(responsavel) {
            console.log('Responsável selecionado:', responsavel.nome);
        },

        pesquisaDespesa() {
            this.mockupData.filteredAreas = this.mockupData.areas.filter(area =>
                area.nome.toLowerCase().includes(this.filtroDespesa.toLowerCase())
            );
        },





    },

    mounted() {
        this.getGerenteseSetor();
        this.filterDespesas();
        this.filterCategoria();

    },



    computed: {
        paginatedDespesas() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.filteredAreas.slice(startIndex, endIndex);
        },
        paginatedCategorias() {

            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.categoriasDaArea.slice(startIndex, endIndex);

            // return this.categoriasDaArea.slice(0, this.itemsPerPage);
        },
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

