<template>
  <auth-layout>
    <div class="flex items-center justify-center min-h-screen">
      <form @submit.prevent="handleLogin" class="space-y-4 transform lg:translate-x-[-34%] sm:translate-x-0">
        <h2 class="text-3xl font-bold text-white flex justify-center animate-slideDown mb-2">Login</h2>

        <label for="username" class="block mb-2 flex justify-center font-bold">Username</label>
        <input type="text" id="username" v-model="username"
          class="w-full p-2 mb-4 border border-gray-300 rounded-md text-black text-center" />

        <label for="password" class="block mb-2 flex justify-center font-bold">Password</label>
        <input type="password" id="password" v-model="password"
          class="w-full p-2 mb-4 border border-gray-300 rounded-md text-black text-center" />


        <button
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">

        </button>
        <RegisterLink />
      </form>
    </div>
  </auth-layout>

</template>

<script>
import { ref } from 'vue';
import authLayout from '@/components/layouts/authLayout.vue'; // Importar el layout correctamente
import RegisterLink from '@/components/RegisterLink.vue';

export default {
  name: 'Login',
  components: {
    authLayout,
    RegisterLink
  },
  setup() {
    const username = ref('');
    const password = ref('');

    const handleLogin = () => {
      console.log('Usuario:', username.value);
      console.log('Contraseña:', password.value);
      // Lógica de inicio de sesión aquí
    };

    return {
      username,
      password,
      handleLogin
    };
  }
};
</script>
