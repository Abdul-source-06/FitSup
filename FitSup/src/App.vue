<!-- src/App.vue -->
<template>
  <div class="min-h-screen bg-gray-100">
    <router-view></router-view>
    <Login />
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
