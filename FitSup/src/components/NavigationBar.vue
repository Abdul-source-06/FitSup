<template>
  <nav class="bg-black bg-opacity-70 text-white py-5 shadow-lg relative z-50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Menú hamburguesa para pantallas pequeñas -->
      <button
        id="menuButton"
        class="text-white md:hidden focus:outline-none text-3xl"
        @click="toggleMenu"
      >
        ☰
      </button>

      <!-- Opciones del menú -->
      <ul
        id="menuOptions"
        :class="{'hidden': isMenuHidden, 'flex': !isMenuHidden}"
        class="flex-col items-center md:flex md:flex-row md:space-x-24 mt-4 md:mt-0 md:mx-auto fixed inset-0 md:static justify-center bg-black bg-opacity-70 md:bg-transparent p-4 md:p-0 transition-all duration-300 ease-in-out"
      >
        <li class="uppercase py-2 hover:scale-110 transform transition-all duration-200">
          <router-link to="/home" class="hover:text-gray-400" @click="closeMenu">Home</router-link>
        </li>
        <li class="uppercase py-2 hover:scale-110 transform transition-all duration-200">
          <router-link to="/profile" class="hover:text-gray-400" @click="closeMenu">Perfil</router-link>
        </li>
        <li class="uppercase py-2 hover:scale-110 transform transition-all duration-200">
          <router-link to="/Cesta" class="hover:text-gray-400" @click="closeMenu">Cesta</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      isMenuHidden: true, // Estado inicial del menú
    };
  },
  methods: {
    // Función para alternar la visibilidad del menú
    toggleMenu() {
      this.isMenuHidden = !this.isMenuHidden;
    },
    // Cerrar el menú al hacer clic en un enlace
    closeMenu() {
      this.isMenuHidden = true;
    },
  },
};
</script>
