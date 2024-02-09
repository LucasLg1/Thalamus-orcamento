<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
                <h3><i class="fa-solid fa-scale-balanced"></i></h3>
                <h3 class="titulo"> Orçamento por Área </h3>
                <h5 class="titulo"> Área : </h5>
                <br>
                <div class="buttons">
                    <button class="btn-primary">
                                            <i class="fa-solid fa-diagram-project"></i>&nbsp;&nbsp;Listar Projetos
                                        </button>&nbsp;
                    <button class="btn-primary">
                                            <i class="fa-solid fa-money-check-dollar"></i>&nbsp;&nbsp; Orçamento Mensal
                                        </button>
                </div>
            </div>
        </div>
        <br>
    
        <div class="row">
    
            <div class="col-sm-4">
                <div class="squareDisponivel">
                    <h5>Orçamento Disponível</h5>
                    R$ 485.000
                    <!-- <p>{{ SEU_VALOR_DISPONIVEL }}</p> -->
                </div>
            </div>
    
            <div class="col-sm-4">
                <div class="squareUtilizado">
                    <h5>Orçamento Utilizado</h5>
                    R$ 15.000
                    <!-- <p>{{ SEU_VALOR_UTILIZADO }}</p> -->
                </div>
            </div>
    
            <div class="col-sm-4">
                <div class="squareTotal">
                    <h5>Orçamento Total</h5>
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
            <th v-for="(month, index) in months" :key="index">{{ month }}</th>
          </tr>
        </thead>

        <tbody style="text-align: center;" v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td v-for="(value, colIndex) in row" :key="colIndex">
            <input v-model="tableData[rowIndex][colIndex]"  type="text" class="form-control" />
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      months: [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ],
      tableData: [
        new Array(12).fill(''),
      ],
    };
  },
  methods: {
    
  },
};
</script>

<style>
.squareUtilizado {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    border-color: rgb(255, 0, 0);
    background-color: rgb(250, 221, 221);
}
.squareTotal {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    border-color: rgb(0, 23, 128);
    background-color: rgb(231, 237, 255);
}

.squareDisponivel {
    border: 1px solid #ccc;
    padding: 20px;
    text-align: center;
    border-color: green;
    background-color: rgb(225, 243, 233);
}
</style>
