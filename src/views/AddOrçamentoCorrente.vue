<template>
    <div class="box">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
                <h3><i class="fa-solid fa-piggy-bank"></i></h3>
                <h3 class="titulo" style="white-space: pre-line;"> Adicionar Despesa Corrente</h3>
                <br>
                <h6>Adicionar Orçamento de Corrente</h6>
    
            </div>
        </div>
        <br>
        <div class="row">
            <div class="col-sm-6">
                <div class="row">
                    <div class="col-sm-12">
    
                        <label for="nomeCompleto">Data da Despesa&nbsp;<i style="color: red;">*</i></label>
                        <input type="text" id="nomeCompleto" class="form-control">
                        <br>
                        <label for="nomeCompleto">Categoria&nbsp;<i style="color: red;">*</i></label>
                        <div class="row">
                            <div class="col-sm-9">
                                <input type="text" id="nomeCompleto" class="form-control">
                            </div>
                            <div class="col-sm-3">
                                <button type="button" class="button-cadastro" title="Cadastrar Categoria" data-bs-toggle="tooltip" data-bs-placement="top">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                                <br><br>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
    
    
                <label for="total">Valor Total&nbsp;<i style="color: red;">*</i></label>
                <input type="text" id="nomeCompleto" class="form-control">
                <br>
                <span>Total</span>
            </div>
        </div>
        <div class="form-group">
        <div class="col-sm-12">
            <button class="btn  float-right">Cancelar</button>
            <!-- <button @click="salvarFuncionalidade" class="btn btn-primary float-right mr-2">Salvar</button> -->
            <b-button aria-hidden="true" class=" button-cadastro float-right mr-2">
                <!-- <i class="fas fa-spinner fa-spin"></i> -->
                <span>Salvar</span>
                <!-- <span >&nbsp; Salvando...</span> -->
    
            </b-button>
        </div>
    </div>
    
    </div>
   
</template>

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
