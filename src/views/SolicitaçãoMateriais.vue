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
                        <input v-model="filtroNome" @input="pesquisaComFiltro" type="text" placeholder="Pesquisar material"
                            class="form-control" />
                    </div>
                </div>
                <div class="col-sm-6
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

<style></style>
