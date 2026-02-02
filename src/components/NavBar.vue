<script setup>
import { ref } from 'vue';

const menuItems = ref([
    { name: 'Home', link: '#' },
    { name: 'Products', link: '#' },
    { name: 'About', link: '#' },
    { name: 'Contact', link: '#' },
])

defineProps({
    count: {
        type: Number,
        required: true,
    },
});
</script>

<template>
<nav class="navbar">
    <ul class="menu-list">
        <li v-for="(item, index) in menuItems" :key="index">
            <a :href="item.link" class="nav-link">{{ item.name }}</a>
        </li>

        <div class="divider"></div>
        <li>
            <a href="#cart" class="nav-link icon">🛒 Cart ({{ count }})</a>
        </li>
        <li>
            <a href="#login" class="nav-button">Login</a>
        </li>
    </ul>
</nav>
</template>

<style scoped>
.menu-list {
  display: flex; /* Mengatur item menu ngejajar ke samping */
  list-style: none; /* Hilangin bullet points */
  gap: 2rem;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none; 
  color: #333;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease; 
}

.nav-link:hover {
  color: #42b983; 
  text-shadow: 0 0 12px #5affb5, 0 0 25px #5affb5;
    color: #5affb5;
}

.divider {
    width: 1px;
    height: 24px;
    background-color: #e0e0e0;
    margin: 0 1rem;
}

.nav-button {
    background-color: #42b983;
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 20px;
    text-decoration: none;
    font-weight: 600;
    transition: background-color 0.3s ease;
}

.nav-button:hover {
    background-color: #369870;
}

@media (max-width: 768px) {
  .menu-list {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .divider {
    display: none;
  }
}
</style>