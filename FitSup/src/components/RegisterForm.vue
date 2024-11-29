<template>
  <auth-layout>
    <div class="register-form p-16 rounded-lg shadow-lg w-full mx-auto" :style="{ backgroundColor: '#C02121' }">
      <form @submit.prevent="submitForm" class="space-y-4">
        <div class="grid grid-cols-2 gap-10">
          <div>
            <label for="username" class="block mb-2 font-bold text-white">Username</label>
            <input type="text" id="username" v-model="username" class="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label for="email" class="block mb-2 font-bold text-white">Email</label>
            <input type="email" id="email" v-model="email" class="w-full p-2 border border-gray-300 rounded-md" />
          </div>
        </div>
        <div>
          <label for="password" class="block mb-2 font-bold text-white">Password</label>
          <input type="password" id="password" v-model="password" class="w-full p-2 border border-gray-300 rounded-md" />
        </div>
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">
          Registrarse
        </button>
      </form>
      <!-- Error message -->
      <div v-if="errorMessage" class="mt-4 p-4 border-2 border-red-600 bg-red-100 text-red-600 text-center font-bold rounded-md shadow-md">
  <p>{{ errorMessage }}</p>
</div>

    </div>
  </auth-layout>
</template>

<script>
import { ref } from 'vue';
import authLayout from '@/components/layouts/authLayout.vue';
import axios from 'axios';

export default {
  name: 'RegisterForm',
  components: {
    authLayout,
  },
  setup() {
    const username = ref('');
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    // Función simple para manejar el registro
    const submitForm = async () => {
      try {
        // Primero verificar si el nombre de usuario o correo ya están registrados
        const response = await axios.get('http://localhost:3000/users');
        const users = response.data;
        
        const userExists = users.some(user => user.username === username.value || user.email === email.value);

        if (userExists) {
          // Si el usuario o correo ya existe, mostrar el mensaje de error
          errorMessage.value = 'El nombre de usuario o correo electrónico ya están registrados.';
          return;
        }

        // Si el usuario no existe, continuar con el registro
        const registerResponse = await axios.post('http://localhost:3000/register', {
          username: username.value,
          email: email.value,
          password: password.value,
        });

        console.log('Usuario registrado:', registerResponse.data);
        alert('Registro exitoso');

      } catch (error) {
        console.error('Error al registrar el usuario:', error);
        errorMessage.value = 'Hubo un error al intentar registrar al usuario.';
      }
    };

    return {
      username,
      email,
      password,
      errorMessage,
      submitForm
    };
  }
};
</script>

<style scoped>
</style>
