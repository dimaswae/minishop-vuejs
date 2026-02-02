<script setup>
import { ref, computed, onMounted } from 'vue' 

import DisplayCard from './components/DisplayCard.vue'
import Header from './components/Header.vue';

const dataProducts = ref({products: []});
const isLoading = ref(true);
// const seartchQuery = ref('');
// const totalCartItems = ref(0);

// Fetch products from API
onMounted(async () => {
  try {
    const response = await fetch('https://dummyjson.com/products');
    dataProducts.value = await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    isLoading.value = false;
  }
});



</script>

<template>
  <Header />
  <div class="app-container">
    display card test
    <DisplayCard
      v-for="product in dataProducts.products"
      :key="product.id"
      :product="product"
      @add-to-cart="(product) => console.log('Add to cart:', product)"
    />
    </div>
</template>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
img {
  max-width: 10%;
  height: auto;
}
</style>
