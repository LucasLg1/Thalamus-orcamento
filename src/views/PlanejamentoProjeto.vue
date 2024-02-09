<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
                <h3><i class="fa-solid fa-calendar-days"></i></h3>
                <h3 class="titulo"> Planejamento de Projetos
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
                        <th scope="col">Projeto</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    <td>
                        P1
    
                    </td>
                    <td>
    
                        <button type="button" v-b-tooltip.hover.top title="Informação Projeto">
                            <i class="fa-solid fa-circle-info"></i>&nbsp; 
                                              </button> 
                                            </td>
        </tbody>
        <tbody style="text-align: center;">
            <td> P2 </td>
            <td>
                <button type="button" v-b-tooltip.hover.top title="Informação Projeto">
                        <i class="fa-solid fa-circle-info"></i>&nbsp; 
                                              </button> 
                        
            </td>
        </tbody>
        <tbody style="text-align: center;">
            <td>
    
                P3
            </td>
            <td>
                <button type="button" v-b-tooltip.hover.top title="Informação Projeto">
                    <i class="fa-solid fa-circle-info"></i>&nbsp; 
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