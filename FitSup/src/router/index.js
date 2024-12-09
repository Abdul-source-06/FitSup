import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/components/layouts/MainLayout.vue";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile.vue";
import Payment from "@/views/Payment.vue";
import Login from "@/views/Login.vue";
import Cesta from "@/views/Cesta.vue";
import AboutUs from "@/views/AboutUs.vue"; // Importa la vista AboutUs

const routes = [
  {
    path: "/",
    redirect: "/login",  // Redirigir a la página de login por defecto
  },
  {
    path: "/",
    component: MainLayout,
    children: [
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
      },
      {
        path: "about-us",  // Nueva ruta para About Us
        name: "AboutUs",
        component: AboutUs,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
