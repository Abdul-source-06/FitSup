import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/components/layouts/MainLayout.vue";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile.vue";
import Payment from "@/views/Payment.vue";
import Login from "@/views/Login.vue";
import Cesta from "@/views/Cesta.vue"



const routes = [
  {
    path: "/",
    redirect: "/login", // Redirigir a la página de login por defecto
  },
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
        name: "Login",
        component: Login,
      },
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "profile",
        name: "Profile",
        component: Profile,
      },
      {
        path: "payment",
        name: "Payment",
        component: Payment,
      },
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "cesta",
        name: "Cesta",
        component: Cesta,
      }
    ],
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
