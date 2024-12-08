<template>
  <div class="min-h-screen">
    <!-- Navbar -->
    <NavigationBar />

    <!-- Contenido principal -->
    <main class="pt-24"> <!-- pt-24 agrega espacio superior para que no se superponga al navbar -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";

export default {
  name: "MainLayout",
  components: {
    NavigationBar,
  },
};
</script>

<style scoped>
/*El navbar sea fijo en la parte superior */
nav {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
}
</style>
