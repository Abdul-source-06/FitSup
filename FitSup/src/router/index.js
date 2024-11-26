import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Profile from '../views/Profile.vue';
import Register from '../views/Register.vue';


const routes = [
  {
    path: '/Login', 
    name: 'Login',
    component: Login,
  },
  {
    path: '/Profile',  
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
