<template>
  <form @submit.prevent="handleLogin" class="space-y-4">
    <label for="username" class="block mb-2">Username</label>
    <input type="text" id="username" v-model="username" class="w-full p-2 mb-4 border border-gray-300 rounded-md text-black" />

    <label for="password" class="block mb-2">Password</label>
    <input type="password" id="password" v-model="password" class="w-full p-2 mb-4 border border-gray-300 rounded-md text-black" />

    <button type="submit" class="w-full p-2 bg-blue-500 text-white rounded-md">Login</button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleLogin() {
      console.log('Usuario:', this.username);
      console.log('Contraseña:', this.password);
      // Lógica de login, validación, etc.
    }
  }
}
</script>
