<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
                <h3><i class="fa-solid fa-scale-balanced"></i></h3>
                <h3 class="titulo"> Orçamento por Área </h3>
                <h5 class="titulo">  Área :  </h5>
                <br>
                <div class="buttons">
                    <button class="btn-primary" @click="toggleExpenses('current')">
                                        <i class="fa-solid fa-diagram-project"></i>&nbsp;&nbsp;Listar Projetos
                                    </button>&nbsp;
                    <button class="btn-primary" @click="toggleExpenses('projects')">
                                        <i class="fa-solid fa-money-check-dollar"></i>&nbsp;&nbsp; Orçamento Mensal
                                    </button>
                </div>
            </div>
        </div>
        <br>
    
        <div class="row">
    
            <div class="col-sm-4">
                <div class="square">
                    <h3>Orçamento Disponível</h3>
                    R$ 485.000
                    <!-- <p>{{ SEU_VALOR_DISPONIVEL }}</p> -->
                </div>
            </div>
    
            <div class="col-sm-4">
                <div class="square">
                    <h3>Orçamento Utilizado</h3>
                    R$ 15.000
                    <!-- <p>{{ SEU_VALOR_UTILIZADO }}</p> -->
                </div>
            </div>
    
            <div class="col-sm-4">
                <div class="square">
                    <h3>Orçamento Total</h3>
                    R$ 500.000
                    <!-- <p>{{ SEU_VALOR_TOTAL }}</p> -->
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
                    <td> 25.000 </td>
                    <td></td>
    
                </tbody>
                <tbody style="text-align: center;">
                    <td> 15.000 </td>
                    <td> </td>
                </tbody>
                <tbody style="text-align: center;">
                    <td> 10.000</td>
                    <td> </td>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

</script>

<style>
.square {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
}
</style>
