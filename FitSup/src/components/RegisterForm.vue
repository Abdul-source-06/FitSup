<!-- RegisterForm.vue -->
<template>
    <form @submit.prevent="handleRegister" class="space-y-4">
      <h2 class="text-3xl font-bold text-white flex justify-center animate-slideDown mb-2">Registro</h2>
  
      <label for="username" class="block mb-2 flex justify-center font-bold">Username</label>
      <input type="text" id="username" v-model="username" class="w-full p-2 mb-4 border border-gray-300 rounded-md text-black text-center" />
  
      <label for="email" class="block mb-2 flex justify-center font-bold">Email</label>
      <input type="email" id="email" v-model="email" class="w-full p-2 mb-4 border border-gray-300 rounded-md text-black text-center" />
  
      <label for="password" class="block mb-2 flex justify-center font-bold">Password</label>
      <input type="password" id="password" v-model="password" class="w-full p-2 mb-4 border border-gray-300 rounded-md text-black text-center" />
  
      <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full">
        Registrarse
      </button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    name: 'RegisterForm',
    setup() {
      const username = ref('');
      const email = ref('');
      const password = ref('');
  
      const handleRegister = () => {
        console.log('Registrando usuario:', username.value);
        console.log('Correo:', email.value);
        console.log('Contraseña:', password.value);
        // Lógica de registro aquí
      };
  
      return {
        username,
        email,
        password,
        handleRegister
      };
    }
  };
  </script>
  