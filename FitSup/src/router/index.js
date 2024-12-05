import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Register from '../views/Register.vue';
import Menu from '../views/Menu.vue';


const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/',
    redirect: '/login'  // Redirige a /login por defecto
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
