<template>
    <div class="container">
        <div class="row">
            <button style="position: absolute; width: 10rem; margin-left: 65rem; margin-top: 3.5rem;" type="button" class="button-cadastrar" @click="adicionarPessoa">
                                                                 Áreas e Projetos
                                                                </button>
            <div class="col-sm-12" style="text-align: center;">
                <h3><i class="fa-solid fa-scale-balanced"></i></h3>
                <h3 class="titulo"> Orçamento por Área: </h3>
    
                <br>
    
                <div style="display: flex; flex-direction: column; align-items: center;">
    
                    <div class="col-sm-4" style="margin-bottom: 10px;">
                        <label>Selecione uma Área: </label>
                        <select class="form-select combo" v-model="grupoSelecionado" @change="handleGrupoSelecionadoChange">
                                                  <option value="" disabled> Selecione </option>
                                                  <!-- <option v-for="item in gruposDisponiveis" :key="item.id" :value="item.id">{{ item.nome }}</option> -->
                                                </select>
                        <label>Selecione o Ano / Exercício: </label>
                        <select class="form-select combo" v-model="anoSelecionado" @change="handleAnoSelecionadoChange">
                                                  
                                                
                                                  <option value="" disabled> Selecione </option>
                                                  <!-- <option v-for="ano in anosDisponiveis" :key="ano" :value="ano">{{ ano }}</option> -->
                                                </select>
    
                        <button type="button" class="button-cadastrar" @click="modalArea = !modalArea" style="margin-left: 10px;">
                                                  <i class="fa-solid fa-plus"></i>
                                                </button>
                    </div>
    
                    <div class="col-sm-5" style="margin-bottom: 10px;">
    
                    </div>
    
    
    
                </div>
    
            </div>
        </div>
        <br>
    
    
        <div class="row">
    
            <div class="col-sm-4" style="text-align: center;">
                <h5>Orçamento Disponível</h5>
                <div class="squareDisponivel">
                    <money3 v-bind="config" style="text-align: center; width: 8rem;border: none; border-bottom: none; outline: none; background-color: transparent;"></money3>
    
                </div>
            </div>
    
            <div class="col-sm-4" style="text-align: center;">
                <h5>Orçamento Utilizado</h5>
                <div class="squareUtilizado">
    
                    R$ 15.000
                    <!-- <p>{{ valor_utilizado }}</p> -->
                </div>
            </div>
    
            <div class="col-sm-4" style="text-align: center;">
                <h5>Orçamento Total</h5>
                <div class="squareTotal">
    
                    R$ 500.000
                    <!-- <p>{{ valor_total }}</p> -->
                </div>
            </div>
        </div>
        <br>
        <div class="col-sm-12">
            <div class="form-check checkbox">
                <br>
                <input class="form-check-input" type="checkbox" id="checkUsuario" value="usuarioGerar" v-model="gerarUsuarioCheck" />
                <label class="form-check-label" for="checkUsuario">Dividir Igualmente ? </label>
            </div>
        </div>
        <br>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr style="text-align: center;">
                        <th v-for="(month, index) in months" :key="index">{{ month }}</th>
                    </tr>
                </thead>
    
                <tbody style="text-align: center;">
                    <!-- <input  type="text" class="form-control" /> -->
                </tbody>
            </table>
        </div>
    </div>
    
    <!-- modal -->
    <div class="modal-mask" v-if="modalArea" @click="fecharModalFora">
        <div class="container-modal" style="width: 60%; margin-bottom: 1rem;">
            <div style="display: flex; flex-direction: column; padding-inline: 3rem; margin-top: none; height: min-content;">
                <div class="tituloModal">
                    <h3>Criar exercício financeiro</h3>
                    <br>
                </div>
                <input v-model="filtroNome" @input="pesquisaComFiltro" type="text" class="form-control" placeholder="Adicionar ano / exercício" />&nbsp;&nbsp;
    
                <i class="fa-solid fa-circle-plus" @click="mostrarInput = !mostrarInput" style="width: 10%;  margin-left: 10px; color: green; "></i>
                <i class="fa-solid fa-circle-minus" @click="!mostrarInput" style="width: 10%;  margin-left: 10px; color: red; "></i>

    
    
                <button type="button" class="button-cadastrar" @click="mostrarInput = !mostrarInput" style="width: 10%;  margin-left: 10px; color: white; ">
                                                   
                                                   <i class="fa-solid fa-circle-plus" v-if="!mostrarInput" style="color: green;"></i>
                                                   <i class="fa-solid fa-circle-minus" v-if="mostrarInput" style="color: red;"></i> 
     
                                                 </button>
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
                                <td>2022</td>
                                <td>
                                    <div>
                                        <i class="fa-solid fa-circle-minus" style="color: red;"></i> </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2023</td>
                                <td>
                                    <div>
                                        <i class="fa-solid fa-circle-minus" style="color: red;"></i> </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2024</td>
                                <td>
                                    <div>
                                        <i class="fa-solid fa-circle-minus" style="color: red;"></i> </div>
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
import { Money3Component } from 'v-money3'

export default {
    components: { money3: Money3Component },

    data() {
        return {
            months: [
                'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
            ],
            modalArea: false,
            mostrarInput: false,
            config: {
                masked: false,
                prefix: 'R$ ',
                thousands: '.',
                decimal: ',',
                precision: 2,
            }
        };
    },
    methods: {
        fecharModalFora(event) {
            if (event.target.classList.contains('modal-mask')) {
                this.modalArea = false;
            }
        },
    },
};
</script>

<style>
.squareUtilizado {
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    border-color: rgb(255, 0, 0);
    background-color: rgb(250, 221, 221);
}

.squareTotal {
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    border-color: rgb(0, 23, 128);
    background-color: rgb(231, 237, 255);
}

.squareDisponivel {
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 30px;
    text-align: center;
    border-color: green;
    background-color: rgb(225, 243, 233);
}
</style>
