<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
})

const emit = defineEmits(['add-to-cart'])
function addToCart() {
  emit('add-to-cart', props.product)
}

const formattedPrice = computed(() => {
  const priceInIdr = props.product.price * 17000 // Misal kurs 1 USD = 17000 IDR
  return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    })
    .format(priceInIdr)
})
</script>

<template>
  <div class="card">
    <div class="img-container">
      <img :src="product.thumbnail" :alt="product.title" loading="lazy" />
    </div>

    <div class="card-title">
      <h3 class="product-title" :title="product.title">{{ product.title }}</h3>
    </div>

    <div class="product-desc">{{ product.description }}</div>

    <div class="card-footer">
      <span class="price">{{ formattedPrice }}</span>
      <button class="add-btn" @click="addToCart" :title="`Add to Cart`">Tambahkan +</button>
    </div>
  </div>
</template>

<style scoped>
/* card basic */
.card {
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-color: #42b983;
}

/* img */
.image-container {
    width: 100%;
    height: 100px; 
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px; 
    border-bottom: 1px solid #f5f5f5;
}

.image-container img {
    max-width: 100%;
    max-height: 100px;
    object-fit: contain; 
}

/* detail content */
.card-details {
  padding: 12px;
  display: flex;
  flex-direction: column;
  flex-grow: 1; 
  justify-content: space-between;
}

.product-title {
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;

  /* Truncate: Membatasi judul max 1 baris lalu ... */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-desc {
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 12px;
  line-height: 1.4;

  /* Line Clamp: Membatasi deskripsi max 2 baris */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* footer */
.card-footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: auto;
}

.price {
  font-weight: 700;
  color: #42b983;
  font-size: 0.95rem;
}

.add-btn {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  width: 100%;
}

.add-btn:hover {
  background-color: #3aa876;
}
</style>
