<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
    
                <h3 class="titulo"> Aprovação de Material&nbsp;&nbsp;<i class="fa-solid fa-clipboard-check"></i>
                    <Icon icon="material-symbols:approval-delegation" />
                </h3>
            </div>
        </div>
        <div class="col-sm-12 text-center">
            <button class="button-default" value="Entrar">
                    <i v-if="loading" class="fas fa-spinner fa-spin"></i> &nbsp;
                                                      <span v-if="!loading">Salvar</span>
                                                      <span v-if="loading">Salvando...</span>
                                                    </button>
    
        </div>
    
    </div>
</template>

<script>

</script>

<style>

</style>