<template>
    <div class="router">
        <br><br><br>

        <router-view/>

    </div>
    <FooterComponent></FooterComponent>
</template>


<script>
import FooterComponent from "@/components/footer/FooterComponent"


export default {
    data() {
        return {

        }
    },

    components: {
        FooterComponent: FooterComponent,
    }
}
</script>

<style>
:root {
    --dark-color: #292A2A;
    --botao: #f1ae2b;
    --botao-hover: #f1ae2b;
    --botao-vermelho: #bc0b27;
    --botao-secondary: #AAAAAA;
    --botao-secondary-hover: #C2BFBF;
    --menu-lateral-background: #333;
    --menu-lateral-botao: #444;
    --menu-lateral-borda: #555;
}

.router{
    margin-bottom: 100px;   

}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #F89E31;
}

.btn-primary {
    width: 20%;
    font-size: large;
    background-color: var(--dark-color) !important;
    color: rgb(255, 255, 255) !important;
    padding: 20px !important;
    margin: 10px 0 !important;
    border: none !important;
    border-radius: 20px !important;
    cursor: pointer;
}

.btn-primary:hover {
    background-color: var(--botao-secondary) !important;
}

.btn-secondary {
    background-color: var(--botao);
    color: white;
    border: none;
    border-radius: 10px !important;
    width: 15%;
    height: 45px;
}

.btn-secondary:hover {
    background-color: var(--dark-color);
}

.btn-secondary-2 {
    background-color: var(--botao-vermelho);
    color: white;
    border: none;
    border-radius: 10px !important;
    width: 15%;
    height: 45px;
}

.btn-secondary-2:hover {
    background-color: var(--dark-color);
}

.btn-secondary:hover {
    background-color: var(--dark-color);
}

.button-default {
    width: 100%;
    background-color: var(--dark-color) !important;
    color: rgb(255, 255, 255) !important;
    padding: 10px !important;
    margin: 6px 0 !important;
    border: none !important;
    border-radius: 6px !important;
    cursor: pointer;
}

.button-default:hover {
    background-color: var(--botao-hover) !important;
}

.button-cadastro{
    background-color: var(--botao-secondary);
    color: white;
    border: none;
    border-radius: 4px !important;
    padding: 5px;

}

.button-cadastro:hover{
    background-color: var(--botao-hover) !important;
}


</style>


