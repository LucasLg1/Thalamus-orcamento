<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
                <h3 class="titulo"> Solicitação de Material&nbsp;&nbsp;<i class="fa-solid fa-box"></i></h3>
                <label></label>
            </div>
        </div>
        <div class="col-lg-6 col-md-12">
            <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <span class="input-group-text">
                                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                                </span>
                </div>
                <input v-model="filtroNome" @input="pesquisaComFiltro" type="text" placeholder="Pesquisar material" class="form-control" />
            </div>
        </div>
        <br>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr style="text-align: center;">
                        <th></th>
                        <th scope="col">Nome</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    <td><input type="checkbox"></td>
                    <td>
                         Caderno
    
                    </td>
                    <td><div style="width: min-content; " v-b-tooltip.hover.top title="Produto não disponível em estoque">
                            <i style="color: red" class="fa-solid fa-circle-exclamation"></i>
                        </div></td>
                </tbody>
                <tbody style="text-align: center;">
                    <td><input type="checkbox"></td>
                    <td> Caneta </td>
                    <td></td>
                </tbody>
                <tbody style="text-align: center;">
                    <td><input type="checkbox"></td>
                    <td>
    
                       Lápis
                    </td>
                    <td><div style="width: min-content; " v-b-tooltip.hover.top title="Produto não disponível em estoque">
                            <i style="color: red" class="fa-solid fa-circle-exclamation"></i>
                        </div></td>
                </tbody>
            </table>
        </div>
        <div class="col-sm-14
                                                     text-center">
            <button class="button-default" value="Entrar">
                                                    <i v-if="loading" class="fas fa-spinner fa-spin"></i> &nbsp;
                                                                                      <span v-if="!loading">Solicitar</span>
                                                                                      <span v-if="loading">Aguarde...</span>
                </button>
        </div>
    </div>
</template>

<script>

</script>

<style>

</style>
