<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
                <h3><i class="fa-solid fa-list"></i></h3>
                <h3 class="titulo">Listar Correntes</h3>
                <br><br>

    
    
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
    
                        <th scope="col">Ações</th>
    
                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    <td></td>
                    <td></td>
                </tbody>
            </table>
        </div>
    </div>
    <div class="form-group">
            <div class="col-sm-12">
                <button class="btn  float-right">Cancelar</button>
                <!-- <button @click="salvarFuncionalidade" class="btn btn-primary float-right mr-2">Salvar</button> -->
                <b-button aria-hidden="true" class="btn float-right mr-2">
                    <!-- <i class="fas fa-spinner fa-spin"></i> -->
                    <span>Salvar</span>
                    <!-- <span >&nbsp; Salvando...</span> -->
    
                </b-button>
            </div>
        </div>
</template>