<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
                <h3><i class="fa-solid fa-calendar-days"></i></h3>
                <h3 class="titulo"> Planejamento de Orçamentos
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
                        <th scope="col">Ano</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    <td>
                        2022
    
                    </td>
                    <td>
    
                        <button type="button" v-b-tooltip.hover.top title="Projetos">
                                            <i class="fa-solid fa-diagram-project"></i>&nbsp; 
                                                  </button> &nbsp; | &nbsp;
    
                        <button type="button" v-b-tooltip.hover.top title="Corrente">
                                     <i class="fa-solid fa-money-bill-trend-up"></i>&nbsp; 
                                                                </button> | &nbsp;
                        <button type="button" v-b-tooltip.hover.top title="Editar">
                                                    <i class="fa-solid fa-pen-to-square"></i>&nbsp; 
                                                                </button>
                    </td>
                </tbody>
                <tbody style="text-align: center;">
                    <td> 2023 </td>
                    <td>
                        <button type="button" v-b-tooltip.hover.top title="Projetos">
                                            <i class="fa-solid fa-diagram-project"></i>&nbsp; 
                                                  </button> &nbsp; | &nbsp;
    
                        <button type="button" v-b-tooltip.hover.top title="Corrente">
                                     <i class="fa-solid fa-money-bill-trend-up"></i>&nbsp; 
                                                                </button> | &nbsp;
                        <button type="button" v-b-tooltip.hover.top title="Editar">
                                                    <i class="fa-solid fa-pen-to-square"></i>&nbsp; 
                                                                </button>
                    </td>
                </tbody>
                <tbody style="text-align: center;">
                    <td>
    
                        2024
                    </td>
                    <td>
                        <button type="button" v-b-tooltip.hover.top title="Projetos">
                                            <i class="fa-solid fa-diagram-project"></i>&nbsp; 
                                                  </button> &nbsp; | &nbsp;
    
                        <button type="button" v-b-tooltip.hover.top title="Corrente">
                                     <i class="fa-solid fa-money-bill-trend-up"></i>&nbsp; 
                                                                </button> | &nbsp;
                        <button type="button" v-b-tooltip.hover.top title="Editar">
                                                    <i class="fa-solid fa-pen-to-square"></i>&nbsp; 
                                                                </button>
                    </td>
                </tbody>
            </table>
        </div>
        <br><br>
    
    
    
    </div>
</template>

<script>

</script>

<style>

</style>