import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';


const routes = [
  {
    path: '/Login',  // Usar '/login' en minúsculas
    name: 'Login',
    component: Login,
  },
  {
    path: '/Profile',  // Usar '/profile' en minúsculas
    name: 'Profile',
    component: Profile,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
