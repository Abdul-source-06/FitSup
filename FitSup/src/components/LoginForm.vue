<template>
  <div class="flex items-center justify-center min-h-screen">
    <form @submit.prevent="handleLogin" class="space-y-4">
      <h2 class="text-3xl font-bold text-white flex justify-center animate-slideDown">Login</h2>
      <label for="username" class="block mb-2 flex justify-center font-bold">Username</label>
      <input type="text" id="username" v-model="username"
        class="w-full p-2 mb-4 border border-gray-300 rounded-md text-black text-center" />

      <label for="password" class="block mb-2 flex justify-center font-bold">Password</label>
      <input type="password" id="password" v-model="password"
        class="w-full p-2 mb-4 border border-gray-300 rounded-md text-black text-center" />

      <button
        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">
        Login
      </button>
      <RegisterLink />
    </form>
  </div>
</template>

<script>

import RegisterLink from '@/components/RegisterLink.vue';

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

    }
  },
  components: {
    RegisterLink
  }
}
</script>
