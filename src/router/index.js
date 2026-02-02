    import { createRouter, createWebHistory } from 'vue-router'

// Import komponen halaman (Pastikan file-file ini sudah kamu buat di folder views)
// Jika belum ada, buat file kosong dulu (misal: HomeView.vue) agar tidak error.
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      // Lazy loading: Component hanya didownload saat user membuka halaman ini
      // Lebih hemat memori dan performa lebih cepat
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ],
  // Fitur tambahan: Scroll otomatis ke atas saat pindah halaman
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router