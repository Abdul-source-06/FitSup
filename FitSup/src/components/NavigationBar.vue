<template>
  <nav class="bg-black bg-opacity-70 text-white py-5 shadow-lg relative z-50">
    <div class="container mx-auto flex justify-between items-center">

      <!-- Menú hamburguesa para pantallas pequeñas -->
      <button
        id="menuButton"
        class="text-white md:hidden focus:outline-none text-3xl"
      >
        ☰
      </button>

      <!-- Opciones del menú -->
      <ul
        id="menuOptions"
        class="hidden flex-col items-center md:flex md:flex-row md:space-x-24 mt-4 md:mt-0 md:mx-auto fixed inset-0 md:static justify-center bg-black bg-opacity-70 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out"
      >
        <li class="uppercase py-2 hover:scale-110 transform transition-all duration-200">
          <router-link to="/" class="hover:text-gray-400" @click.native="closeMenu">Home</router-link>
        </li>
        <li class="uppercase py-2 hover:scale-110 transform transition-all duration-200">
          <router-link to="/profile" class="hover:text-gray-400" @click.native="closeMenu">Perfil</router-link>
        </li>
        <li class="uppercase py-2 hover:scale-110 transform transition-all duration-200">
          <router-link to="/payment" class="hover:text-gray-400" @click.native="closeMenu">Pago</router-link>
        </li>
        <li class="uppercase py-2 hover:scale-110 transform transition-all duration-200">
          <router-link to="/login" class="hover:text-gray-400" @click.native="closeMenu">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  mounted() {
    // Script para manejar el toggle del menú hamburguesa
    const menuButton = document.getElementById('menuButton');
    const menuOptions = document.getElementById('menuOptions');

    menuButton.addEventListener('click', () => {
      if (menuOptions.classList.contains('hidden')) {
        menuOptions.classList.remove('hidden');
        menuOptions.classList.add('flex');
      } else {
        menuOptions.classList.add('hidden');
        menuOptions.classList.remove('flex');
      }
    });
  },
  methods: {
    closeMenu() {
      const menuOptions = document.getElementById('menuOptions');
      if (menuOptions.classList.contains('flex')) {
        menuOptions.classList.remove('flex');
        menuOptions.classList.add('hidden');
      }
    },
  },
};
</script>

<style scoped>

</style>
