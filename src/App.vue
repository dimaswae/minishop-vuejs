<script setup>
import { ref, onMounted } from 'vue' 

import DisplayCard from './components/DisplayCard.vue'
import Header from './components/Header.vue';

const dataProducts = ref({products: []});
const isLoading = ref(true);

const cart = ref([]);

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

const handleCart = (product) => {
  cart.value.push(product);
  alert(`Berhasil menambahkan ${product.title} ke keranjang!`);
  // console.log(cart.value);
}
</script>

<template>
  <Header :cart-count="cart.length"/>

  <div v-if="isLoading" class="loading-text">
    Loading Products...
  </div>

  <div v-else class="container">
    <div class="product-grid">
      <DisplayCard 
      v-for="item in dataProducts.products" 
      :key="item.id" 
      :product="item" 
      @add-to-cart="handleCart"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
}

.loading-text {
  text-align: center;
  padding: 50px;
  font-size: 1.5rem;
  color: #666;
}

.product-grid {
  display: grid;
  gap: 20px;
  padding: 20px 0;
  grid-template-columns: repeat(1, 1fr);
} 

/* Tablet (2 kolom) */
@media (min-width: 600px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop Besar (6 KOLOM) */
@media (min-width: 1200px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
