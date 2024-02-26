<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">

                <h3 class="titulo"> Aprovação de Material&nbsp;&nbsp;<i class="fa-solid fa-clipboard-check"></i>
                    <Icon icon="material-symbols:approval-delegation" />
                </h3>
                <br>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col" style="width: 10rem;">Solicitante</th>
                        <th scope="col" style="width: 5rem; text-align: center;">Qtd.</th>
                        <th scope="col" style="text-align: left;">Item</th>
                        <th scope="col" style="width: 33rem"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="text-justify: center; ali" v-for="item in listaSolicitacao" :key="item.id">
                        <td>
                            Fulano - Produção
                        </td>
                        <td style="width: 2rem; text-align: center">
                            {{ item.quantidade }} {{ item.medida }}
                        </td>
                        <td style="text-align: left;">
                            <div style="display:  flex;">
                                {{ item.nome }}
                                <div v-if="item.estoque == false" style="width: min-content; margin-left: 1rem; "
                                    v-b-tooltip.hover.top title="Produto não disponível em estoque">
                                    <i style="color: red" class="fa-solid fa-circle-exclamation"></i>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div style="width: 100%; text-align: right;">
                                <button type="button" class="button-aprovar">
                                    <i class="fa-solid fa-thumbs-up"></i>&nbsp; Aprovar
                                </button>&nbsp;

                                <button type="button" class="button-reprovar">
                                    <i class="fa-solid fa-thumbs-down"></i>&nbsp; Reprovar
                                </button>&nbsp;

                                <button type="button" class="button-revisar"
                                    @click="this.itemEmEdicao = item; this.showModal = true">
                                    <i class="fa-solid fa-pen-to-square"></i>&nbsp; Revisar
                                </button>&nbsp;
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br><br>

        <div class="col-sm-12 text-center">
            <button class="button-default" value="Entrar">
                <i v-if="loading" class="fas fa-spinner fa-spin"></i> &nbsp;
                <span v-if="!loading">Salvar</span>
                <span v-if="loading">Salvando...</span>
            </button>

        </div>
        <button @click="this.showModal = true">
            teste
        </button>
    </div>
    <!-- MODAL-->
    <div class="modal-mask" v-if="showModal" @click="fecharModalFora">
        <div style="height: max-content; width: 50rem; background-color: white; padding: 2rem; border-radius: 5px;">
            <table class="table table-hover">
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col" style="width: 10rem;">Solicitante</th>
                        <th scope="col" style="width: 5rem; text-align: center;">Qtd.</th>
                        <th scope="col" style="text-align: left;">Item</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="text-justify: center;">
                        <td>
                            Fulano - Produção
                        </td>
                        <td style="width: 2rem; text-align: center">
                            <input type="number" v-model="itemEmEdicao.quantidade" style="width: 2rem; text-align: right;">
                        </td>
                        <td style="text-align: left;">
                            <div style="display:  flex;">
                                {{ itemEmEdicao.nome }}
                                <div v-if="itemEmEdicao.estoque == false" style="width: min-content; margin-left: 1rem; "
                                    v-b-tooltip.hover.top title="Produto não disponível em estoque">
                                    <i style="color: red" class="fa-solid fa-circle-exclamation"></i>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!--END MODAL -->
</template>

<script>
export default {
    data() {
        return {
            showModal: false,
            listaSolicitacao: [],
            itemEmEdicao: {},
        }
    },

    mounted() {
        this.listaSolicitacao = JSON.parse(sessionStorage.getItem('listaSolicitacao'));
    },

    methods: {
        fecharModalFora(event) {
            if (event.target.classList.contains('modal-mask')) {
                this.showModal = false;
            }
        },
    }
}
</script>

<style>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal-container {
    background-color: #fff;
    border-radius: 8px;
    padding: 100px;
    width: 90%;
    max-width: 1500px;
    max-height: 80%;
    overflow-y: auto;
    position: relative;
}

.button-revisar {
    width: 10rem;
    background-color: var(--revisar) !important;
    color: rgb(255, 255, 255) !important;
    padding: 5px !important;
    /* margin: 6px 0 !important; */
    border: none !important;
    border-radius: 6px !important;
    cursor: pointer;
}

.button-reprovar {
    width: 10rem;
    background-color: var(--reprovar) !important;
    color: rgb(255, 255, 255) !important;
    padding: 5px !important;
    /* margin: 6px 0 !important; */
    border: none !important;
    border-radius: 6px !important;
    cursor: pointer;
}

.button-aprovar {
    width: 10rem;
    background-color: var(--aprovar) !important;
    color: rgb(255, 255, 255) !important;
    padding: 5px !important;
    /* margin: 6px 0 !important; */
    border: none !important;
    border-radius: 6px !important;
    cursor: pointer;
}
</style>