<template>
    <nav class="bg-black bg-opacity-70 text-white py-6  shadow-lg transform transition-all hover:scale-105 hover:bg-opacity-90">
      <div class="container mx-auto">
        <ul class="flex justify-center space-x-8">
          <li class="uppercase">
            <router-link to="/" class="hover:text-gray-400">Menu</router-link>
          </li>
          <li class="uppercase">
            <router-link to="/register" class="hover:text-gray-400">Register</router-link>
          </li>
          <li class="uppercase">
            <router-link to="/profile" class="hover:text-gray-400">Perfil</router-link>
          </li>
          <li class="uppercase">
            <router-link to="/payment" class="hover:text-gray-400">Pago</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavigationBar",
  };
  </script>
  