<template>
  <div>
    <!-- Mostrar el Navbar solo si no estamos en la página de Login o Register -->
    <NavigationBar v-if="!isLoginPage && !isRegisterPage" />

    <!-- Contenido de la página (router-view) -->
    <router-view />
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router"; // Importamos useRoute para acceder a la ruta actual
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  components: {
    NavigationBar,
  },
  setup() {
    const route = useRoute(); // Obtenemos el objeto de la ruta actual

    // Computed properties para verificar si estamos en la página de login o register
    const isLoginPage = computed(() => route.path === "/login");
    const isRegisterPage = computed(() => route.path === "/register");

    return {
      isLoginPage,
      isRegisterPage,
    };
  },
};
</script>
