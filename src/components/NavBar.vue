<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuItems = ref([
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
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
            <router-link :to="item.path" class="nav-link" active-class="active-link">
                {{ item.name }}
            </router-link>
        </li>

        <div class="divider"></div>

        <li>
            <router-link to="/cart" class="nav-link icon" active-class="active-link">
                🛒 Cart ({{ count }})
            </router-link>
        </li>

        <li>
            <router-link to="/login" class="nav-button">
                Login
            </router-link>
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

/* active-link */

/* Active State (Style for the current page) */
.active-link {
    color: #42b983;
    font-weight: 700;
}
/* Optional: Add a small dot under active link */
.active-link::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    background: #42b983;
    border-radius: 50%;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
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