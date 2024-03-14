<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
                <h3><i class="fa-solid fa-diagram-project"></i></h3>
                <h3 class="titulo"> Orçamento por Projeto: {{ codProjeto }} </h3>
                <br>
                <div class="row align-items-center justify-content-center">
                    <div class="col-sm-3" style="margin-bottom: 10px;">
                        <div style="margin-bottom: 5px;">
                            <label> Ano / Exercício: </label>
                        </div>
                        <div style="display: flex; align-items: center; ">
                            <select v-model="anoSelecionado" class="form-select combo" @change="carregarDadosProjeto">
                                                                                                <option value="" disabled> Selecione </option>
                                                                                                <option v-for="ano in mockupData.anos" :key="ano.nome">
                                                                                                    {{ ano.nome }}
                                                                                                </option>
                                                                                            </select>
                        </div>
                    </div>
    
                    <div class="col-sm-3" style="margin-bottom: 10px; display: flex; flex-direction: column; align-items: center;">
                        <div style="margin-bottom: 5px;">
                            <label> Projeto: </label>
                        </div>
                        <select v-model="projetoSelecionado" @change="carregarDadosProjeto" class="form-select combo">
                                                                    <option value="" disabled> Selecione </option>
                                                                    <option :value="projeto.Projeto" v-for="projeto in listaProjetos" :key="projeto.id">
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
                        <money3 :disabled="false" v-bind="config" style="color: black; text-align: center; width: 8rem;border: none; border-bottom: none; outline: none; background-color: white;"></money3>
    
                    </div>
                </div>
                <div class="col-sm-4" style="text-align: center;">
                    <h5>Orçamento Utilizado</h5>
                    <div class="quadradoUtilizado">
                        <money3 v-model="orcamentoTotal" :disabled="true" v-bind="config" style="color: black; text-align: center; width: 8rem;border: none; border-bottom: none; outline: none; background-color: transparent;"></money3> 

                        <!-- <money3 :model-value="projetos && projetos[2] && projetos[1].totais && projetos[1].totais.ValorTotalProjeto" :disabled="true" v-bind="config" style="color: black; text-align: center; width: 8rem;border: none; border-bottom: none; outline: none; background-color: transparent;"></money3> -->
                    </div>
                </div>
    
                <div class="col-sm-4" style="text-align: center;">
                    <h5>Orçamento Disponível</h5>
                    <div class="quadradoDisponivel">
                        <money3 :disabled="true" v-bind="config" style="color: black; text-align: center; width: 8rem;border: none; border-bottom: none; outline: none; background-color: transparent;"></money3>
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
    
            <div>
                <br><br>
                <table class="table">
                    <thead>
                        <tr>
                            <th v-for="(month, index) in meses" :key="index">{{ month }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-for="(valor, index) in totalMeses" :key="index" @click="modalArea=true, this.mesDetalhe = index + 1">{{ real(parseFloat(valor)) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    
            <!-- <div class="table-responsive">
                                            <br><br>
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr style="text-align: center;">
                                                        <th v-for="(month, index) in meses" :key="index">{{ month }}</th>
                                                    </tr>
                                                </thead>
                                
                                                <tbody style="text-align: center;">
                                <tr>
                                    <td v-for="(valor, index) in totalMeses" :key="index">{{ real(parseFloat(valor)) }}</td>
                                </tr>
                                <tr>
                                    <td v-for="(reqs, monthIndex) in valorMensal" :key="monthIndex">
                                        <div v-if="reqs && Object.keys(reqs).length > 0">
                                            <div v-for="(req, reqKey) in reqs" :key="reqKey">
                                               <p>
                                                    <span v-if="req && req.itens && req.itens.length > 0">
                                                        <span>{{ real(parseFloat(calcularTotalItensRequisicao(req.itens))) }}</span>
                                                    </span>
                                                    <span v-else>
                                                        Sem itens na requisição
                                                    </span>
                                                </p> 
                                            </div>
                                        </div>
                                        <div v-else>
                                            N/A requisições
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                                            </table>
                                        </div> -->
        </div>
    </div>
    
    <!-- MODAL REQUISIÇÕES -->
    <div class="modal-mask" @click="fecharModalFora" v-if="modalArea">
        <div style="max-height: 60%;" class="modal-container">
            <div style="width: 50rem;">
                <h3>
                    {{codProjeto}}
                </h3>
            </div>
            <template v-for="(reqSet, setIndex) in filtrarRequisicoesPorMes(detalheProjeto, this.mesDetalhe)" :key="setIndex">
                        <div v-if="setIndex !== 'totais'"> 
                            <div v-for="(req, reqKey) in reqSet" :key="reqKey">
                                <br>
                                <div :style="{'display' : (req.Requisição == null) ? 'none' : ''}">
    
                                    <h5>
                                        Requisição: {{ req.Requisição }}
                                    </h5>
                                    <b>Solicitante:</b> {{ req.Solicitante }} <br>
                                    <b>Aprovação:</b> {{ req.Aprovação }} <br>
                                    <b>Fornecedor:</b> {{ req.Fornecedor }}<br>
                                    <b>Data:</b> {{ (req.Data) }}<br>
                                    
                                    <h7><b>Item(s):</b></h7>
                                    <div v-for="item in req.itens" :key="item.Nome">
                                        <b>Nome:</b> {{ item.Nome }}<br>
                                        <b>Valor:</b> {{ real(parseFloat(item.Valor)) }}<br>
                                    </div>
                                </div>
                            </div>
                        </div>
</template>
    </div>
</div>
    <!-- END MODAL REQUISIÇÕES -->
    
    
    
    <!-- MODAL ANO -->
    <!-- <div class="modal-mask"  @click="fecharModalFora">
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
    </div> -->
    <!-- END MODAL ANO -->
    
</template>

<script>
import moment from 'moment-timezone';

import axios from 'axios'
import { devURL } from '../../services/api'
import { prodURL } from '../../services/api'
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
            mesDetalhe: '',
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
            prodURL: prodURL,
            projetos: '',
            listaProjetos: '',
            // codProjeto: 'NEO10003',
            // anoProjeto: 2023,
            projetoSelecionado: '',
            anoSelecionado: '',
            totalMeses: [],
            detalheProjeto: [],
            nomeModal: ''

        };
    },

    methods: {

        filtrarRequisicoesPorMes(requisicoes, mesDesejado) {
            const requisicoesFiltradas = {};
            if (mesDesejado in requisicoes) {
                requisicoesFiltradas[mesDesejado] = requisicoes[mesDesejado];
            }
            return requisicoesFiltradas;
        },


        formatarDataHora(valor) {
            if (valor) {
                const dataHoraGTM3 = moment.utc(valor).tz('America/Sao_Paulo');
                return dataHoraGTM3.format('DD/MM/YYYY');
            }
            return '';
        },


        tooltipInfo(index) {

            return `Informações para ${this.meses[index]}`;
        },

        calcularTotalItensRequisicao(itens) {
            return itens.reduce((total, item) => total + parseFloat(item.Valor), 0).toFixed(2);
        },



        real(num) {
            return num.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        },

        handleCheckboxChange(event) {
            console.log(event.target.checked);

        },

        fecharModalFora(event) {
            if (event.target.classList.contains('modal-mask')) {
                this.modalArea = false;
            }
        },

        adicionarAno() {
            console.log("tecla pressionada")
        },

        getAllProjetos() {
            axios.get(`${this.prodURL}/sgi/projeto/lista`)
                .then((response) => {
                    this.listaProjetos = response.data;
                })
                .catch((error) => {
                    console.error('Error fetching projetos:', error);
                });
        },

        carregarDadosProjeto() {
    if (this.projetoSelecionado && this.anoSelecionado) {

        const projetoSelecionado = this.listaProjetos.find(projeto => projeto.Projeto === this.projetoSelecionado);
if (projetoSelecionado) {
    this.codProjeto = projetoSelecionado.Projeto; 
    this.anoProjeto = this.anoSelecionado;
    this.getRequisicoes();
} else {
    console.error('Project not found:', this.projetoSelecionado);
}

    }
},

        getRequisicoes() {
            axios.post(`${this.prodURL}/orcamento/projeto/mensal`, {
                    codProjeto: this.codProjeto,
                    anoProjeto: this.anoProjeto
                })
                .then((response) => {
                    this.projetos = response.data;
                    this.detalheProjeto = response.data;
                    // console.log(this.detalheProjeto)
                    const primeiraChave = Object.keys(response.data)[0];
        const orcamentoTotal = response.data[primeiraChave]?.totais?.ValorTotalProjeto;
        console.log(orcamentoTotal); 

        this.orcamentoTotal = orcamentoTotal || 0;

                    this.valorMensal = Array.from({ length: 12 }, (_, index) => {
                        const monthData = this.projetos[index + 1];
                        const requisicoes = monthData ? Object.values(monthData).filter(item => item && item.Requisição) : [];

                        if (monthData && monthData.totais) {
                            this.totalMeses[index] = monthData.totais.valorTotalMeses;
                            // console.log(`Valor total do mês: ${monthData.totais.valorTotalMeses}`);
                        } else {
                            this.totalMeses[index] = 0;
                        }

                        return requisicoes;
                    });
                })
                .catch((error) => {
                    console.error(error);
                });
        }


    },

    watch: {

    },


    mounted() {
        this.getRequisicoes()
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
