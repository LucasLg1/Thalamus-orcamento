<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12" style="text-align: center;">
    
                <h3 class="titulo"> Entrega de Material &nbsp;<i class="fa-solid fa-truck-fast"></i></h3>
                <br>

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
                    <td>
                        Caderno
    
                    </td>
                    <td>
                        <div>
                            <button type="button" class="button-default" >
                                <i class="fa-solid fa-dolly"></i>&nbsp; Entregar
                                        </button>
                        </div>
                    </td>
                </tbody>
                <tbody style="text-align: center;">
                    <td> Caneta </td>
                    <td>
                        <button type="button" class="button-default" >
                            <i class="fa-solid fa-box-open"></i>&nbsp; Entregue
                                        </button>
                    </td>
                </tbody>
                <tbody style="text-align: center;">
                    <td>
    
                        Lápis
                    </td>
                    <td>
                        
                            <button type="button" class="button-default" @click="abrirModal(item)" data-bs-toggle="tooltip" data-bs-placement="top" title="Clique para cadastrar visita">
                                <i class="fa-solid fa-dolly"></i>&nbsp; Entregar
                                        </button>
                    </td>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

</script>

<style>
.button-default{
    width: 15%;
    background-color: var(--dark-color) !important;
    color: rgb(255, 255, 255) !important;
    padding: 5px !important;
    margin: 6px 0 !important;
    border: none !important;
    border-radius: 6px !important;
    cursor: pointer;
}
</style>