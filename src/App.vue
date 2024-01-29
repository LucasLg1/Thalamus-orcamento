<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
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
    --botao: #F89E31;
    --botao-hover: #FBBF77;
    --botao-secondary: #AAAAAA;
    --botao-secondary-hover: #C2BFBF;
    --menu-lateral-background: #333;
    --menu-lateral-botao: #444;
    --menu-lateral-borda: #555;
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

.btn-primary:hover{
  background-color: var(--botao-hover) !important;
}

.btn-secondary{
  background-color: var(--botao);
    color: white;
    border: none;
    border-radius: 10px !important;
    width: 10%;
    height: 45px;
}

.btn-secondary:hover{
  background-color: var(--dark-color);

}


</style>
