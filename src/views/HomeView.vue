<template>
    <div class="colored-theme">
        <br> <br> <br>
        <h4>Thalamus Orçamentos&nbsp;&nbsp;<i class="fa-solid fa-piggy-bank"></i></h4>
    
        <div class="buttons">
            <button class="btn-primary" @click="toggleExpenses('current')">
              <i class="fa-solid fa-chart-line"></i>&nbsp;&nbsp;Despesa Corrente
            </button>&nbsp;
            <button class="btn-primary" @click="toggleExpenses('projects')">
              <i class="fa-solid fa-money-check-dollar"></i>&nbsp;&nbsp;Despesa Projetos
            </button>
        </div>
    
        <div v-if="showDespesaCorrente" class="sub-buttons">
            <template v-if="!showAddButtons">
              <button class="btn-secondary" @click="toggleAddButtons">
                Adicionar &nbsp;&nbsp;<i class="fa-solid fa-circle-plus"></i>
              </button>&nbsp;
              <button class="btn-secondary" @click="openAction('list', 'current')">
                Listar Correntes&nbsp;&nbsp;<i class="fa-solid fa-list"></i>
              </button>
</template>
  
<template v-if="showAddButtons">
    <button class="btn-secondary" @click="openAction('add_current', 'current')">
                Adicionar Corrente&nbsp;&nbsp;<i class="fa-solid fa-circle-plus"></i>
              </button>
    &nbsp;
    <button class="btn-secondary" @click="openAction('add_expense', 'current')">
                Adicionar Despesa &nbsp;&nbsp;<i class="fa-solid fa-circle-plus"></i>
              </button>&nbsp;
</template>
      </div>
  
      <div v-if="showDespesaProjetos" class="sub-buttons">
<template v-if="!showAddButtons">
    <button class="btn-secondary-2" @click="toggleAddButtons">
                Adicionar &nbsp;&nbsp;<i class="fa-solid fa-circle-plus"></i>
              </button>
    &nbsp;
    <button class="btn-secondary-2" @click="openAction('list', 'projects')">
                Listar Projetos&nbsp;&nbsp;<i class="fa-solid fa-list"></i>
              </button>
</template>
  
<template v-if="showAddButtons">
    <button class="btn-secondary-2" @click="openAction('add_project', 'projects')">
                Adicionar Projeto&nbsp;&nbsp;<i class="fa-solid fa-circle-plus"></i>
              </button>
    &nbsp;
    <button class="btn-secondary-2" @click="openAction('add_expense', 'projects')">
                Adicionar Despesa &nbsp;&nbsp;<i class="fa-solid fa-circle-plus"></i>
              </button>&nbsp;
</template>
      </div>
    </div>
  </template>

<script>
export default {
    name: "FinanceiroView",

    data() {
        return {
            showDespesaCorrente: false,
            showDespesaProjetos: false,
            showAddButtons: false,
        };
    },
    methods: {
        toggleExpenses(type) {
            if (type === "current") {
                this.showDespesaCorrente = !this.showDespesaCorrente;
                this.showDespesaProjetos = false;
                this.showAddButtons = false;
            } else if (type === "projects") {
                this.showDespesaProjetos = !this.showDespesaProjetos;
                this.showDespesaCorrente = false;
            }
        },
        toggleAddButtons() {
            this.showAddButtons = !this.showAddButtons;
        },
        openAction(action, type) {
            alert(`Executar ação ${action} para despesa de ${type}`);
        },
    },
};
</script>

<style>
.colored-theme {
    text-align: center;
    margin-top: 60px;
    background-color: #f0f0f0;
    color: #333;
}

.buttons {
    margin-top: 20px;
}

.sub-buttons {
    margin-top: 10px;
}
</style>
