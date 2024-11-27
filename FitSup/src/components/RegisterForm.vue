<template>
    <div class="space-y-4">
        <h2 class="text-2xl font-bold text-white">Registro</h2>

        <form @submit.prevent="handleRegister">
            <label for="username" class="block mb-2">Username</label>
            <input type="text" id="username" v-model="username"
                class="w-full p-2 mb-4 border border-gray-300 rounded-md" />

            <label for="email" class="block mb-2">Email</label>
            <input type="email" id="email" v-model="email" class="w-full p-2 mb-4 border border-gray-300 rounded-md" />

            <label for="password" class="block mb-2">Password</label>
            <input type="password" id="password" v-model="password"
                class="w-full p-2 mb-4 border border-gray-300 rounded-md" />

            <button type="submit" class="bg-blue-500 text-white w-full py-2 px-4 rounded-md">Registrarse</button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Register',
  setup() {
    const username = ref('');
    const password = ref('');

    const handleRegister = () => {
      console.log('Registrando:', username.value, password.value);
      // Lógica de registro aquí
    };

    return {
      username,
      password,
      handleRegister
    };
  }
};
</script>