<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
    
                <h3 class="titulo"> Aprovação de Material&nbsp;&nbsp;<i class="fa-solid fa-clipboard-check"></i>
                    <Icon icon="material-symbols:approval-delegation" />
                </h3>
                <br>
            </div>
        </div>
        <div class="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr style="text-align: center;">
                        <th scope="col">Quantidade</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    <td></td>
                    <td>
                        Caderno
    
                    </td>
                    <td>
                       
                            <button type="button" class="button-aprovar" @click="abrirModal(item)">
                                            <i class="fa-solid fa-thumbs-up"></i>&nbsp; Aprovar
                                                    </button>&nbsp;
    
                            <button type="button" class="button-reprovar" @click="abrirModal(item)">
                                                        <i class="fa-solid fa-thumbs-down"></i>&nbsp; Reprovar
                                                    </button>&nbsp;
                            <button type="button" class="button-revisar" @click="abrirModal(item)">
                                                       <i class="fa-solid fa-pen-to-square"></i>&nbsp; Revisar
                                                    </button>&nbsp;
                        
                    </td>
                </tbody>
                <tbody style="text-align: center;">
                    <td></td>
                    <td> Caneta </td>
                    <td>
                        <button type="button" class="button-aprovar" @click="abrirModal(item)">
                                            <i class="fa-solid fa-thumbs-up"></i>&nbsp; Aprovar
                                                    </button>&nbsp;
    
                            <button type="button" class="button-reprovar" @click="abrirModal(item)">
                                                        <i class="fa-solid fa-thumbs-down"></i>&nbsp; Reprovar
                                                    </button>&nbsp;
                            <button type="button" class="button-revisar" @click="abrirModal(item)">
                                                       <i class="fa-solid fa-pen-to-square"></i>&nbsp; Revisar
                                                    </button>&nbsp;
                    </td>
                </tbody>
                <tbody style="text-align: center;">
                    <td></td>
                    <td>
    
                        Lápis
                    </td>
                    <td>
    
                        <button type="button" class="button-aprovar" @click="abrirModal(item)">
                                            <i class="fa-solid fa-thumbs-up"></i>&nbsp; Aprovar
                                                    </button>&nbsp;
    
                            <button type="button" class="button-reprovar" @click="abrirModal(item)">
                                                        <i class="fa-solid fa-thumbs-down"></i>&nbsp; Reprovar
                                                    </button>&nbsp;
                            <button type="button" class="button-revisar" @click="abrirModal(item)">
                                                       <i class="fa-solid fa-pen-to-square"></i>&nbsp; Revisar
                                                    </button>&nbsp;
                    </td>
                </tbody>
            </table>
        </div>
        <br><br>
    
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
.button-revisar {
    width: 15%;
    background-color: var(--revisar) !important;
    color: rgb(255, 255, 255) !important;
    padding: 5px !important;
    margin: 6px 0 !important;
    border: none !important;
    border-radius: 6px !important;
    cursor: pointer;
}

.button-reprovar {
    width: 15%;
    background-color: var(--reprovar) !important;
    color: rgb(255, 255, 255) !important;
    padding: 5px !important;
    margin: 6px 0 !important;
    border: none !important;
    border-radius: 6px !important;
    cursor: pointer;
}

.button-aprovar {
    width: 15%;
    background-color: var(--aprovar) !important;
    color: rgb(255, 255, 255) !important;
    padding: 5px !important;
    margin: 6px 0 !important;
    border: none !important;
    border-radius: 6px !important;
    cursor: pointer;
}
</style>