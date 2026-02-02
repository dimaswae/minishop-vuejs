<script setup>
import NavBar from './reusable/NavBar.vue';


</script>

<template>
    <h1>MiniShop</h1>
    <NavBar class="navbar" />
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: flex-start; 
    flex-direction: row;
}

h1 {
    font-size: 2rem;
    color: #42b983;
    margin: 20px;
    flex: auto;
}

.navbar {
    width: 100%;
    flex: auto;
    height: auto;

}
</style>