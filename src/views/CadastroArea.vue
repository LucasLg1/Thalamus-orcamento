<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
              <h3><i class="fa-solid fa-hand-holding-dollar"></i></h3>
                <h3 class="titulo"> Cadastro de Área 
                 
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
                        <th scope="col">Àrea</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    <td>
                        Informática
    
                    </td>
                    <td>
                        <div>
                            <button type="button"  >
                                <i class="fa-solid fa-users"></i>&nbsp; 
                                            </button>&nbsp; | &nbsp;
                            <button type="button"  >
                                <i class="fa-solid fa-pen-to-square"></i>&nbsp; 
                                            </button>&nbsp;
                        </div>
                    </td>
                </tbody>
                <tbody style="text-align: center;">
                    <td> Material de Escritório </td>
                    <td>
                        <div>
                            <button type="button"  >
                                <i class="fa-solid fa-users"></i>&nbsp; 
                                            </button>&nbsp; | &nbsp;
                            <button type="button"  >
                                <i class="fa-solid fa-pen-to-square"></i>&nbsp; 
                                            </button>&nbsp;
                        </div>
                    </td>
                </tbody>
                <tbody style="text-align: center;">
                    <td>
    
                        Manutenção
                    </td>
                    <td>
                        <div>
                            <button type="button"  >
                                <i class="fa-solid fa-users"></i>&nbsp; 
                                            </button>&nbsp; | &nbsp;
                            <button type="button"  >
                                <i class="fa-solid fa-pen-to-square"></i>&nbsp; 
                                            </button>&nbsp;
                        </div>
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