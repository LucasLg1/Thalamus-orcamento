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
    
    
        <div class="row">
    
            <div class="col-sm-12" style="text-align: center; border: 1px solid grey; border-radius: 10px; margin-top: 20px; background-color: white;">
                <br>
                <h5 class="table-title">Projetos &nbsp; <i class="fa-solid fa-diagram-project"></i></h5>
                <div class="form-group input-group" style="width: 100%;">
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                                                                                                                                                                                                                                                                        <i class="fa-solid fa-magnifying-glass"></i>
                                                                                                                                                                                                                                                                    </span>
                    </div>
                    <input v-model="filtroProjeto" @input="pesquisaProjeto" type="text" class="form-control" placeholder="Pesquisar projeto" />&nbsp;&nbsp;
    
    
                </div>
                <br>
                <label style="color: dimgray;">Escolha um projeto para visualizar</label>
    
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr style="text-align: center;">
                                <th scope="col">Nome</th>
                            </tr>
                        </thead>
                        <tbody style="text-align: center; cursor: pointer;">
                            <tr v-for="(projeto) in paginatedData" @click="getProjeto(projeto.Projeto)" :key="projeto.Projeto">
                                <td>{{ projeto.Nome }}</td>
                            </tr>
    
    
                        </tbody>
                    </table>
    
                </div>
    
    
    
                <br>
                <div class="d-flex justify-content-center mt-3">
                    <ul class="pagination">
                        <li class="page-item" :class="{ 'active': currentPage === page }" v-for="page in Math.ceil(projetos.length / itemsPerPage)" :key="page">
                            <a class="page-link" @click="currentPage = page">{{ page }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { devURL } from '../../services/api';

export default {
    data() {
        return {
            modalArea: false,
            mostrarInput: false,
            projetos: [],
            filtroProjeto: '',
            devURL: devURL,
            currentPage: 1,
            itemsPerPage: 5

        };
    },
    methods: {
        getProjeto(projetoId) {
            // console.log("ID do projeto clicado:", projetoId);
            if (this.projetos.length > 0) {
                const projeto = this.projetos.find(projeto => projeto.Projeto === projetoId);
                // console.log("Projeto encontrado:", projeto);
                if (projeto) {
                    console.log("Armazenando projeto no sessionStorage:", projeto);
                    sessionStorage.setItem('idProjeto', projetoId);
                    sessionStorage.setItem('nomeProjeto', projeto.Nome);
                    this.$router.push({ name: "OrcamentoProjeto" });
                }
            }
        },


        fecharModalFora(event) {
            if (event.target.classList.contains('modal-mask')) {
                this.modalArea = false;
            }
        },
        getAllProjetos() {
            axios.get(`sgi/projeto/lista`)
                .then((response) => {
                    this.projetos = response.data;
                    // console.log("Projetos loaded:", this.projetos);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
        pesquisaProjeto() {
            this.currentPage = 1;
        },
    },
    computed: {
        projetosFiltrados() {
            return this.projetos.filter(item =>
                item.Nome.toLowerCase().includes(this.filtroProjeto.trim().toLowerCase())
            );
        },
        paginatedData() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage;
            const endIndex = startIndex + this.itemsPerPage;
            return this.projetosFiltrados.slice(startIndex, endIndex);
        },
    },
    created() {
        this.getAllProjetos();
    },
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

