<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
                <h3><i class="fa-solid fa-hand-holding-dollar"></i></h3>
                <h3 class="titulo"> Cadastro de Área

                </h3>
                <br><br>
            </div>
            <div class="col-sm-2">
                <button type="button" class="button-cadastrar" @click="adicionarPessoa">
                    <i class="fa-solid fa-plus"></i>&nbsp;&nbsp;Cadastrar</button>
            </div>

        </div>
        <br>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col">Àrea</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    <td>
                        Informática

                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <i class="fa-solid fa-users"></i>&nbsp;
                            </button>&nbsp; | &nbsp;
                            <button type="button">
                                <i class="fa-solid fa-pen-to-square"></i>&nbsp;
                            </button>&nbsp;
                        </div>
                    </td>
                </tbody>
                <tbody style="text-align: center;">
                    <td> Material de Escritório </td>
                    <td>
                        <div>
                            <button type="button">
                                <i class="fa-solid fa-users"></i>&nbsp;
                            </button>&nbsp; | &nbsp;
                            <button type="button">
                                <i class="fa-solid fa-pen-to-square"></i>&nbsp;
                            </button>&nbsp;
                        </div>
                    </td>
                </tbody>
                <tbody style="text-align: center;">
                    <td>

                        Manutenção
                    </td>
                    <td>
                        <div>
                            <button type="button">
                                <i class="fa-solid fa-users"></i>&nbsp;
                            </button>&nbsp; | &nbsp;
                            <button type="button">
                                <i class="fa-solid fa-pen-to-square"></i>&nbsp;
                            </button>&nbsp;
                        </div>
                    </td>
                </tbody>
            </table>
        </div>
        <br><br>



    </div>
    <div class="modal-mask" v-if="modalArea" @click="fecharModalFora">
        <div class="modal-container">
            <div style="padding-inline: 3rem;">
                <div class="tituloModal">
                    <h1>Adicionar Área</h1>
                </div>

                <input type="text" placeholder="Nome da área" class="inputNomeArea">

                <div class="divPaiPesquisa">
                    <div class="divFilhaPesquisa">
                        <input type="search" placeholder="Pesquisar Responsável" class="inputPesquisa">
                        <i class="bi bi-search iconePesquisa"></i>
                    </div>
                </div>

                <div class="divBotoes">

                    <button class="botaoSalvar">Salvar</button>
                    <button class="botaoCancelar">Cancelar</button>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            modalArea: false
        }
    },

    methods: {
        fecharModalFora(event) {
            if (event.target.classList.contains('modal-mask')) {
                this.modalArea = false;
            }

        },
        showModalAddArea() {
            this.modalArea = !this.modalArea
        }
    }
}
</script>

<style>
.botaoCancelar {
    background-color: #FFFFFF;
    color: black;
    width: 7rem;
    height: 2rem;
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
    align-items: center;
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
    height: 100%;
    background-color: rgba(0, 0, 0, 0);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-container {
    background-color: #F6F6F6;
    border: 1px solid black;
    width: 40rem;
    height: 30rem;
    overflow-y: auto;
    position: relative;
    margin-bottom: 3rem;
}</style>