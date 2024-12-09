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
          Login
        </button>

        <!-- Enlace de Registro -->
        <RegisterLink />

        <!-- Error message -->
        <div v-if="errorMessage" class="mt-4 p-4 border-2 border-red-600 bg-red-100 text-red-600 text-center font-bold rounded-md shadow-md">
          <p>{{ errorMessage }}</p>
        </div>
      </form>
    </div>
  </auth-layout>
</template>

<script>
import { ref } from 'vue';
import authLayout from '@/components/layouts/authLayout.vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import RegisterLink from '@/components/RegisterLink.vue'; 

export default {
  name: 'LoginForm',
  components: {
    authLayout,
    RegisterLink
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');
    const router = useRouter();  // Instancia el router para la navegación

    const handleLogin = async () => {
      try {
        // Obtener los usuarios desde el archivo data.json
        const response = await axios.get('http://localhost:3000/users');
        const users = response.data;

        // Verificar si el usuario existe
        const user = users.find(u => u.username === username.value && u.password === password.value);

        if (user) {
          // Si las credenciales son correctas, redirigir al menú
          router.push('/home');  // Redirige a la ruta Home
        } else {
          // Si el usuario no se encuentra o la contraseña es incorrecta
          errorMessage.value = 'Nombre de usuario o contraseña incorrectos.';
        }
      } catch (error) {
        console.error('Error al verificar el login:', error);
        errorMessage.value = 'Hubo un error al intentar iniciar sesión.';
      }
    };

    return {
      username,
      password,
      errorMessage,
      handleLogin
    };
  }
};
</script>

<style scoped>
</style>
