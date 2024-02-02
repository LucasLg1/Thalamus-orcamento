<template>
       <div class="colored-theme">
        <br>   <br>   <br>
        <h4 class="titulo">Thalamus Orçamentos &nbsp;&nbsp;<i class="fa-solid fa-sack-dollar"></i></h4>
    
        <div class="buttons">
            <button class="btn-primary" @click="toggleExpenses('current')">Despesa Corrente</button>&nbsp;&nbsp;
            <button class="btn-primary" @click="toggleExpenses('projects')">Despesa de Projetos</button>
        </div>
    
        <div v-if="showCurrentExpenses" class="sub-buttons">
            <button class="btn-secondary" @click="openAction('add', 'current')">Adicionar Corrente <i class="fa-solid fa-circle-plus"></i></button>&nbsp;
            <button class="btn-secondary" @click="openAction('list', 'current')">Listar Correntes <i class="fa-solid fa-list"></i></button>
        </div>
      
        <div v-if="showProjectExpenses" class="sub-buttons">
            <button class="btn-secondary" @click="openAction('add', 'projects')">Adicionar Projeto <i class="fa-solid fa-circle-plus"></i></button>&nbsp;
            <button class="btn-secondary" @click="openAction('list', 'projects')">Listar Projetos <i class="fa-solid fa-list"></i></button>
        </div>
        <br>
    </div>
  
</template>
<script>
export default {
    name: "FinanceiroView",

    data() {
        return {
            showCurrentExpenses: false,
            showProjectExpenses: false
        };
    },
    methods: {
        toggleExpenses(type) {
            if (type === 'current') {
                this.showCurrentExpenses = !this.showCurrentExpenses;
                this.showProjectExpenses = false;
            } else if (type === 'projects') {
                this.showProjectExpenses = !this.showProjectExpenses;
                this.showCurrentExpenses = false;
            }
        },
        openAction(action, type) {
            alert(`Executar ação ${action} para despesa de ${type}`);
        }
    }
};
</script>
<style scoped>
.colored-theme {
    background-color: #f0f0f0;
    color: #333;
}

.buttons button {
    background-color: #3498db;
    color: #fff;
}

.sub-buttons button {
    background-color: #cc2e2e;
    color: #fff;
}
</style>