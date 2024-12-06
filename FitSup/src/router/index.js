import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "@/components/layouts/MainLayout.vue";
import Home from "@/views/Menu.vue";
import Register from "@/views/Register.vue";
import Profile from "@/views/Profile.vue";
import Payment from "@/views/Payment.vue";

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
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
