<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">

    <Login />
  </div>

  <div>
    <Profile />
  </div>
</template>

<script>

import Login from './components/Login.vue';

export default {
  name: 'App',
  components: {
    Login // Registra el componente Login
  }
}
</script>

<style scoped>
/* Agregar estilo adicional si es necesario */
</style>
