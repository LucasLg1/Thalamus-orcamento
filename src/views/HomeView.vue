<template>
    <div id="app">
        <h4>Controle de Despesas&nbsp;&nbsp;<i class="fa-solid fa-sack-dollar"></i></h4>
    
    
        <div class="buttons">
            <button class="btn-primary" @click="toggleExpenses('current')"><i class="fa-solid fa-chart-line"></i>&nbsp;&nbsp;Despesa Corrente</button>&nbsp;
            <button class="btn-primary" @click="toggleExpenses('projects')"><i class="fa-solid fa-money-check-dollar"></i>&nbsp;&nbsp;Despesa de Projetos</button>
        </div>
    
        <div v-if="showCurrentExpenses" class="sub-buttons">
            <button class="btn-secondary" @click="openAction('add', 'current')">Adicionar Corrente&nbsp;&nbsp;<i class="fa-solid fa-circle-plus"></i></button>&nbsp;
            <button class="btn-secondary" @click="openAction('list', 'current')">Listar Correntes&nbsp;&nbsp;<i class="fa-solid fa-list"></i></button>
        </div>
    
        <div v-if="showProjectExpenses" class="sub-buttons">
            <button class="btn-secondary" @click="openAction('add', 'projects')">Adicionar Projeto&nbsp;&nbsp;<i class="fa-solid fa-circle-plus"></i></button>&nbsp;
            <button class="btn-secondary" @click="openAction('list', 'projects')">Listar Projetos&nbsp;&nbsp;<i class="fa-solid fa-list"></i></button>
        </div>
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

<style>
#app {
    text-align: center;
    margin-top: 60px;
}

.buttons {
    margin-top: 20px;
}

.sub-buttons {
    margin-top: 10px;
}
</style>
