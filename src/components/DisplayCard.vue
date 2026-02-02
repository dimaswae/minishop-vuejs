<script setup>
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    });

    const emit = defineEmits(['add-to-cart']);
    function addToCart() {
        emit('add-to-cart', props.product);
    }
</script>

<template>
    <div class="product-card">
        <img :src="product.thumbnail" alt="gambarproduk" class="product-image"/>
        <h4>{{ product.title }}</h4>
        <p>{{ product.description }}</p>
        <p>Price: ${{ product.price }}</p>

        <button class="button" @click="addToCart">
            Add to Cart
        </button>
    </div>
</template>

<style scoped>
.product-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.button {
    background-color: #42b983;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}
</style>