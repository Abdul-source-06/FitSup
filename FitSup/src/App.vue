<template>
  <div class="min-h-screen" :style="{ backgroundColor: '#C02121' }"> <!-- El fondo rojo cubre toda la pantalla -->
    <router-view></router-view> <!-- Esto renderiza las vistas -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
