<template>
  <div class="profile-page flex flex-col items-center justify-start min-h-screen bg-gradient-to-br from-[#F15322] to-[#F1A202] px-6 py-12">
    <!-- Barra superior con logo y menú hamburguesa -->
    <div class="w-full flex items-center justify-between mb-8">
      <!-- Logo a la izquierda -->
      <div class="text-white text-2xl font-bold flex items-center space-x-2">
        <img src="" alt="Logo" class="h-10 w-auto" />
        <span>Logo</span>
      </div>

      <!-- Menú hamburguesa a la derecha -->
      <div class="md:hidden text-white text-3xl cursor-pointer" @click="toggleMenu">
        <span>&#9776;</span> <!-- Icono de hamburguesa -->
      </div>
    </div>

    <!-- Título "USUARI" y perfil -->
    <div class="flex flex-col md:flex-row w-full justify-center items-center">
      <!-- Título centrado -->
      <h1 class="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6 animate-fade-in md:mr-12">
        USUARI
      </h1>

      <!-- Perfil de usuario al lado del título -->
      <div class="profile-card animate-slide-up w-full max-w-xs bg-white p-4 rounded-lg shadow-lg">
        <div class="flex items-center space-x-4">
          <!-- Imagen de perfil -->
          <img src="" alt="Usuario" class="h-16 w-16 rounded-full border-4 border-yellow-500" />
          <!-- Detalles del usuario -->
          <div class="text-left">
            <h2 class="font-semibold text-lg">Nombre Usuario</h2>
            <p class="text-gray-600">Ubicación: Barcelona</p>
            <p class="text-gray-600">Edad: 25</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Componente ProfileCard -->
    <div class="animate-slide-up w-full max-w-4xl mt-8">
      <ProfileCard />
    </div>

    <!-- Menú móvil (desplegable) -->
    <div v-if="isMenuOpen" class="absolute top-16 right-6 bg-black text-white p-6 rounded-lg shadow-lg">
      <ul>
        <li class="mb-4 cursor-pointer">Inicio</li>
        <li class="mb-4 cursor-pointer">Perfil</li>
        <li class="mb-4 cursor-pointer">Configuración</li>
        <li class="cursor-pointer">Cerrar sesión</li>
      </ul>
    </div>
  </div>
</template>

<script>
import ProfileCard from '../components/ProfileCard.vue';

export default {
  name: 'Profile',
  components: {
    ProfileCard,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* Animaciones personalizadas */
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-up {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Clases para aplicar las animaciones */
.animate-fade-in {
  animation: fade-in 1.5s ease-out;
}

.animate-slide-up {
  animation: slide-up 1.5s ease-out;
}

/* Estilos generales */
.profile-page {
  background-color: #F15322; /* Fondo naranja */
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(to right, #F15322, #F1A202);
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 6rem;
  letter-spacing: 5px;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.6); /* Sombra de texto */
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 2rem;
}

/* Estilo refinado para el perfil */
.profile-card {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
}

.profile-card img {
  border-radius: 50%;
  border: 4px solid #F1A202;
}

.profile-card h2 {
  font-size: 1.2rem;
  font-weight: bold;
}

/* Menú hamburguesa */
.md\:hidden {
  display: block; /* Solo se muestra en dispositivos pequeños */
}

@media (min-width: 768px) {
  .md\:hidden {
    display: none;
  }

  h1 {
    font-size: 7rem;
  }

  .profile-card {
    padding: 2.5rem;
  }
}

/* Responsividad para pantallas pequeñas */
@media (max-width: 640px) {
  h1 {
    font-size: 5rem;
    letter-spacing: 4px;
  }

  .profile-page {
    padding: 1rem; /* Menos espaciado en pantallas pequeñas */
  }

  .profile-card {
    padding: 1.5rem;
    margin-top: 1rem; /* Menos separación entre título y card */
  }
}
</style>
