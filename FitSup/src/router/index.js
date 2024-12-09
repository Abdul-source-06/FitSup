import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/components/layouts/MainLayout.vue";
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile.vue";
import Payment from "@/views/Payment.vue";
import Login from "@/views/Login.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "",
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
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
