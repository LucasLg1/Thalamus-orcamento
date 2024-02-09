<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
                <h3><i class="fa-solid fa-hand-holding-dollar"></i></h3>
                <h3 class="titulo"> Orçamento Mensal
    
                </h3>
                <br><br>
                <div class="col-sm-12">
                    <label>Selecione uma Área: </label>
                    <select class="form-select combo" v-model="grupoSelecionado" @change="handleGrupoSelecionadoChange">
                                             <option value="" disabled> Selecione </option>
                                              <option v-for="item in gruposDisponiveis" :key="item.id" :value="item.id">{{ item.nome }}</option></select>
                </div>
                <br><br>
            </div>
    
            
            <div class="col-sm-12">
                <div class="squareDisponivel">
                    <h5>Orçamento Disponível</h5>
                    R$ 485.000
                    <!-- <p>{{ SEU_VALOR_DISPONIVEL }}</p> -->
                </div>
            </div>
            
        </div>
        <br>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col">Janeiro</th>
                        <th scope="col">Fevereiro</th>
                        <th scope="col">Março</th>
                        <th scope="col">Abril</th>
                        <th scope="col">Maio</th>
                        <th scope="col">Junho</th>
                        <th scope="col">Julho</th>
                        <th scope="col">Agosto</th>
                        <th scope="col">Setembro</th>
                        <th scope="col">Outubro</th>
                        <th scope="col">Novembro</th>
                        <th scope="col">Dezembro</th>
    
                    </tr>
                </thead>
    
                <tbody style="text-align: center;">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tbody>
              
               
            </table>
        </div>
    </div>
</template>

<script>

</script>

<style>
.squareDisponivel {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    border-color: green;
    background-color: rgb(225, 243, 233);
}
</style>