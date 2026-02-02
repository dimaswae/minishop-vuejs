<script setup>
import NavBar from './NavBar.vue';

defineProps({
  cartCount: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <header class="site-header">
    <div class="container">
      <h1 class="logo">MiniShop</h1>
      
      <NavBar :count="cartCount" />
    </div>
  </header>
</template>

<style scoped>
.site-header {
  background-color: #ffffff; 
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05); 
  position: sticky; 
  top: 0;
  z-index: 1000;
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto; 
  padding: 1rem 2rem;
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #42b983; 
  letter-spacing: -0.5px; 
  cursor: pointer;
}

/* Responsif untuk layar kecil (HP) */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
</style>