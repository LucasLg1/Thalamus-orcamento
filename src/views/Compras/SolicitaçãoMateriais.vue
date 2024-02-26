<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
                <h3 class="titulo"> Solicitação de Material&nbsp;&nbsp;<i class="fa-solid fa-box"></i></h3>
                <label></label>
            </div>
        </div>
        <div style="display: flex; align-items: center;">
            <div class="input-group mt-3" style="width: 15rem;">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
                <select class="form-select" aria-label="select example" v-model="novoItem" @change="adicionarItem">
                    <option selected hidden>Pesquisar material</option>
                    <option :value="item" v-for="item in listaMateriais" :key="item.nome" :disabled="verificarItem(item)">{{
                        item.nome }}</option>
                </select>
            </div>
            <span style="text-decoration: underline; color: blue; margin-left: 1rem; margin-top: 0.5rem; cursor: pointer;"
                @click="showModal = true">
                O item que eu quero não está na lista
            </span>
        </div>
        <br>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr style="text-align: left;">
                        <th scope="col" style="width: 2rem; text-align: center;">Qtd.</th>
                        <th scope="col" style="width: min-content;">Item</th>
                        <th style="width: 2rem;"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in listaSolicitacao[0].itens" :key="item.nome" style="text-align: left;"
                        @mouseover="mostrarBotao(item.id, true)" @mouseleave="mostrarBotao(item.id, false)">
                        <td style="width: min-content"><input type="number" v-model="item.quantidade"
                                style="width: 100%; text-align: center;"></td>
                        <td style="display: flex">
                            {{ item.nome }}
                            <div v-if="item.estoque == false" style="width: min-content; margin-left: 1rem; "
                                v-b-tooltip.hover.top title="Produto não disponível em estoque">
                                <i style="color: red" class="fa-solid fa-circle-exclamation"></i>
                            </div>
                        </td>
                        <td><i class="bi bi-trash-fill" :id="'botaoEdicao' + item.id" style="visibility: hidden"
                                @click="excluirItem(item.id)"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-sm-14
                                                         text-center">
            <button class="button-default" value="Entrar" @click="salvarSolicitação">
                <i v-if="loading" class="fas fa-spinner fa-spin"></i> &nbsp;
                <span v-if="!loading">Solicitar</span>
                <span v-if="loading">Aguarde...</span>
            </button>
        </div>
    </div>
    <!-- MODAL-->
    <div class="modal-mask" v-if="showModal" @click="fecharModalFora">
        <div style="height: max-content; width: 50rem; background-color: white; padding: 2rem; border-radius: 5px;">
            <div style="width: 100%; text-align: center;">
                <h2>
                    Solicitação de material não cadastrado no OMIE
                </h2>
            </div>
            <div>
                Descrição:
                <textarea class="form-control" style="width: 30rem;"></textarea>
            </div>
            <div>
                Justificativa:
                <textarea class="form-control" style="width: 30rem;"></textarea>
            </div>
            <div>
                Anexos:
                <input type="file" class="form-control">
            </div>
            <div style="text-align: right;" @click="this.showModal = false">
                <button class="button-default">
                    Salvar
                </button>
            </div>
        </div>
    </div>
    <!--END MODAL -->
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            teste: null,
            novoItem: 'Pesquisar material',
            listaMateriais: [
                { id: 0, nome: 'Régua', estoque: false, medida: 'un.', quantidade: 1 },
                { id: 1, nome: 'Apontador', estoque: true, medida: 'un.', quantidade: 1 },
                { id: 2, nome: 'Borracha', estoque: true, medida: 'un.', quantidade: 1 },
                { id: 3, nome: 'Cola', estoque: false, medida: 'un.', quantidade: 1 },
                { id: 4, nome: 'Caderno', estoque: true, medida: 'un.', quantidade: 1 },
                { id: 5, nome: 'Lápis', estoque: false, medida: 'un.', quantidade: 5 },
                { id: 6, nome: 'Caneta', estoque: true, medida: 'un.', quantidade: 5 },
            ],

            listaSolicitacao: [{
                id: 0,
                nome: 'solicitação 1', 
                itens: [
                    { id: 0, nome: 'Caderno', estoque: true, medida: 'un.', quantidade: 1 },
                    { id: 1, nome: 'Lápis', estoque: false, medida: 'un.', quantidade: 5 },
                    { id: 2, nome: 'Caneta', estoque: true, medida: 'un.', quantidade: 5 },
                ]
            }
            ]
        }
    },

    methods: {
        fecharModalFora(event) {
            if (event.target.classList.contains('modal-mask')) {
                this.showModal = false;
            }
        },

        mostrarBotao(id, mostrar) {
            if (mostrar == true) {
                document.getElementById('botaoEdicao' + id).style.visibility = ''
            }
            if (mostrar == false) {
                document.getElementById('botaoEdicao' + id).style.visibility = 'hidden'
            }
        },

        adicionarItem() {
            this.novoItem.id = this.listaSolicitacao.length
            this.listaSolicitacao[0].itens.push(this.novoItem);

            this.novoItem = 'Pesquisar material'
        },

        excluirItem(id) {
            this.listaSolicitacao = this.listaSolicitacao.filter(item => item.id !== id);
        },

        salvarSolicitação() {
            sessionStorage.setItem('listaSolicitacao', JSON.stringify(this.listaSolicitacao));
            this.$router.push('aprovacao')
        },

        verificarItem(material) {
            const itemExiste = this.listaSolicitacao.some(
                (item) =>
                    item.nome === material.nome
            );

            return itemExiste;
        },
    }
}
</script>

<style></style>
