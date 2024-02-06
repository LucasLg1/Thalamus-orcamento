<template>
    <div class="box">
        <h3><i class="fa-solid fa-piggy-bank"></i></h3>
        <h3 class="titulo"> Adicionar Categoria</h3>
        <br><br>
        <div style="display: flex; flex-flow: row;">
            <div style="width: 100%; display: flex; flex-flow: column;">
                <label for="nomeCompleto">Nome da Categoria&nbsp;<i style="color: red;">*</i></label>
                <input type="text" id="nomeCompleto" v-model="nomeCompleto" autocomplete="off" class="form-control">
            </div>
        </div>
        <br>
       
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

<style scoped>
.box {
    text-align: center;
    max-width: 30%;
    margin: auto;
    border: 2px solid #ddd;
    margin-top: 10px;
    padding: 50px;
    border-radius: 20px;
}
</style>