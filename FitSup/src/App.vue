<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-gray-100">
    <router-view />

  </div>


</template>

<script>
import Login from './views/Login.vue';
export default {
  name: 'App',

  components: {
    Login
  }
}
</script>
