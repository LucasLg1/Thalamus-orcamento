<template>
    <div class="container">
        <div class="row">
            <!-- <button style="position: absolute; width: 10rem; margin-left: 65rem; margin-top: 3.5rem;" type="button" class="button-cadastrar" @click="adicionarPessoa">
                                                                                                          Áreas e Projetos
                                                                                                        </button> -->
            <div class="col-sm-12" style="text-align: center;">
                <h3><i class="fa-solid fa-diagram-project"></i></h3>
                <h3 class="titulo"> Orçamento por Projeto: </h3>
    
                <br>
    
                <div class="row align-items-center justify-content-center">
                    <div class="col-sm-3" style="margin-bottom: 10px;">
                        <div style="margin-bottom: 5px;">
                            <label> Ano / Exercício: </label>
                        </div>
                        <div style="display: flex; align-items: center;">
                            <select class="form-select combo">
                                         <option value="" disabled> Selecione </option>
                                                                        <!-- <option v-for="ano in anosDisponiveis" :key="ano" :value="ano">{{ ano }}</option> -->
                                         </select> 
                        </div>
                    </div>
    
                    
    
                    <div class="col-sm-3" style="margin-bottom: 10px; display: flex; flex-direction: column; align-items: center;">
                        <div style="margin-bottom: 5px;">
                            <label> Projeto: </label>
                        </div>
                        <select id="id_projetos" v-model="id_projetos" class="form-select">
                            <option v-for="projeto in projetos" :key="projeto.id" :value="projeto.id">
                            {{ projeto.Nome }}
                        </option>
                                                                </select>
                    </div>
                    <br><br>
                </div>
                <br><br> <br><br>
            </div>
            <br><br>
    
    
            <div class="row">
    
                <div class="col-sm-4" style="text-align: center;">
                    <h5>Orçamento Total</h5>
                    <div class="quadradoTotal">
                        <money3 v-model="orcamentoTotal" v-bind="config" style="text-align: center; width: 8rem;border: none; border-bottom: none; outline: none; background-color: white;"></money3>
    
                    </div>
                </div>
                <div class="col-sm-4" style="text-align: center;">
                    <h5>Orçamento Utilizado</h5>
                    <div class="quadradoUtilizado">
                        R$ 15.000
                    </div>
                </div>
    
                <div class="col-sm-4" style="text-align: center;">
                    <h5>Orçamento Disponível</h5>
                    <div class="quadradoDisponivel">
                        R$ 500.000
                    </div>
                </div>
            </div>
            <br>
            <!-- <div class="col-sm-12">
                <div class="form-check checkbox">
                    <br>
                    <input class="form-check-input" type="checkbox" id="dividir" v-model="checkBox" @change="handleCheckboxChange" />
                    <label class="form-check-label" for="dividir">Dividir Igualmente ? </label> {{ checkBox }}
                </div>
            </div> -->
            <!-- <p>Orçamento Dividido: R$ {{ orcamentoDividido }}</p>
            {{ valorMensal }} -->
            <br><br>
            <div class="table-responsive">
                <br><br>
                <table class="table table-hover">
                    <thead>
                        <tr style="text-align: center;">
                            <th v-for="(month, index) in meses" :key="index">{{ month }}</th>
                        </tr>
                    </thead>
    
                    <tbody style="text-align: center;">
                        <tr>
                            <td v-for="(value, index) in valorMensal" :key="index">
                                <money3 v-model="valorMensal[index]" v-bind="config" style="text-align: center; width: 7rem;border: none; border-bottom: none; outline: none; background-color: white;"></money3>
                                <label >R$10,00</label>
                             

                            </td>
                           
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    <!-- Modal -->
    <div class="modal-mask" v-if="modalArea" @click="fecharModalFora">
        <div class="container-modal" style="width: 60%; margin-bottom: 1rem; display: flex; flex-direction: column; align-items: center;">
            <div class="tituloModal">
                <h3>Criar ano / exercício financeiro</h3>
                <br>
            </div>
            <div style="display: flex; align-items: center; margin-left: auto;">
                <input @keyup.enter="adicionarAno" v-model="ano" type="text" class="form-control" placeholder="Adicionar ano / exercício" />
                <i class="fa-solid fa-circle-plus" style="color: green; margin-left: 5px;" @click="mostrarInput=true"></i>
                

            </div>
            <br>
            <div class="form-group input-group" style="width: 100%;">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fa-solid fa-magnifying-glass"></i
                                                                    ></span>
                </div>
                <input v-model="filtroAno" type="text" class="form-control" placeholder="Pesquisar ano / exercício" />&nbsp;&nbsp;
            </div>
    
    
            <!-- <button type="button" class="button-cadastrar" @click="mostrarInput = !mostrarInput" style="width: 10%;  margin-left: 10px; color: white; ">
                                                                                                                                                                       
                                                                                                                                                                       <i class="fa-solid fa-circle-plus" v-if="!mostrarInput" style="color: green;"></i>
                                                                                                                                                                       <i class="fa-solid fa-circle-minus" v-if="mostrarInput" style="color: red;"></i> 
                                                                                                                         
                                                                                                                                                                     </button> -->
            <br>
            <div class="table-responsive">
                <table class="table table-hover">
    
                    <thead>
                        <tr style="text-align: center;">
                            <th scope="col">Ano</th>
                            <th scope="col"> </th>
                        </tr>
                    </thead>
                    <tbody style="text-align: center; cursor: pointer;">
                        <tr v-for="(ano, index) in mockupData.anos" :key="index">
                            <td>{{ ano.nome }}</td>
                            <td><i class="fa-solid fa-circle-minus" style="color: red;"></i> </td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
    
    <!-- End Modal -->
</template>

<script>
import axios from 'axios'
import { devURL } from '../../services/api'
import { Money3Component } from 'v-money3'

const mockupData = {
    anos: [
        { nome: 2022 },
        { nome: 2023 },
        { nome: 2024 }
    ],
    orcamentos: [
    [10000, 15000, 12000, 18000, 20000, 25000, 22000, 30000, 28000, 35000, 32000, 40000],
  ]
}

export default {
    components: { money3: Money3Component },

    data() {
        return {
            meses: [
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

            },
            orcamentoDisponivel: 0,
            orcamentoDividido: 0,
            orcamentoTotal: null,
            checkBox: true,
            valorMensal: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
            filtroAno: '',
            ano: '',
            mockupData,
            devURL: devURL,
            projetos: ''

        };
    },
    methods: {
        handleCheckboxChange(event) {
            console.log(event.target.checked);

        },

        fecharModalFora(event) {
            if (event.target.classList.contains('modal-mask')) {
                this.modalArea = false;
            }
        },

        adicionarAno(){
            console.log("tecla pressionada")
        },

        getAllProjetos(){
           

            axios.get(`${this.devURL}/sgi/projeto/lista`, {
      })
                .then((response) => {
                    this.projetos = response.data
                    console.log(this.projetos)
                })
                .catch((error) => {
                    console.error(error);
                });
        }

    },


    watch: {

    },


    mounted() {
        this.getAllProjetos()

        this.$watch('orcamentoTotal', function(newVal) {
            this.orcamentoDividido = (newVal / 12).toFixed(2);

            if (this.checkBox == true) {

                this.valorMensal = Array.from({ length: 12 }, () => this.orcamentoDividido);
            }



        });
    },

};
</script>

<style>
.quadradoUtilizado {
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    border-color: rgb(255, 0, 0);
    background-color: rgb(250, 221, 221);
}

.quadradoTotal {
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    border-color: rgb(0, 23, 128);
    background-color: rgb(231, 237, 255);
}

.quadradoDisponivel {
    border: 1px solid #ccc;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    border-color: green;
    background-color: rgb(225, 243, 233);
}
</style>
