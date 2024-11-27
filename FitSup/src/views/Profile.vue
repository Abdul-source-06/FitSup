<template>
  <div class="profile-page flex flex-col items-center justify-center min-h-screen bg-[#F15322]">
    <!-- Capçalera -->
    <header class="flex justify-between items-center w-full px-6 mb-10">
      <div class="text-3xl font-bold text-white">FØS</div>
      <div class="menu-icon text-4xl text-white cursor-pointer">☰</div>
    </header>

    <!-- Targeta de perfil -->
    <div class="profile-card animate-slide-up w-full md:w-4/5 lg:w-3/4 bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0">
      <!-- Foto de perfil -->
      <div class="profile-image w-32 h-32 mb-6 md:mb-0 md:mr-6 flex-shrink-0">
        <img
          src="https://via.placeholder.com/150"
          alt="Usuari"
          class="rounded-full border-4 border-yellow-500 shadow-xl transform transition-transform duration-500 hover:scale-110"
        />
      </div>

      <!-- Dades d'usuari -->
      <div class="text-center md:text-left space-y-3">
        <h2 class="text-3xl font-semibold text-[#333]">Nom de l'Usuari</h2>
        <p class="text-lg text-gray-600">Barcelona, 25 anys</p>
      </div>
    </div>

    <!-- Menú d'opcions -->
    <div class="menu mt-10 w-full md:w-4/5 lg:w-3/4 space-y-4">
      <!-- Caja 1: Informació personal -->
      <div class="menu-item-box">
        <div class="menu-item">Informació personal</div>
      </div>

      <!-- Caja 2: Historial de compra y Crèdit -->
      <div class="menu-item-box">
        <div class="menu-item">Historial de compra</div>
        <div class="menu-item">Crèdit</div>
      </div>

      <!-- Caja 3: Resenyes i Missatges -->
      <div class="menu-item-box">
        <div class="menu-item">Resenyes</div>
        <div class="menu-item">Missatges</div>
      </div>

      <!-- Caja 4: Sortir -->
      <div class="menu-item-box">
        <div class="menu-item text-red-500 font-bold">Sortir</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
/* Animacions */
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

.animate-slide-up {
  animation: slide-up 1.2s ease-out;
}

/* Estils globals */
.profile-page {
  font-family: "Poppins", sans-serif;
  background-color: #F15322; /* Fondo principal */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #333;
}

/* Estil de la capçalera */
header {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.menu-icon {
  font-size: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.menu-icon:hover {
  transform: rotate(90deg);
}

/* Targeta de perfil */
.profile-card {
  background: #fff;
  border-radius: 1.5rem;
  padding: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  transition: all 0.3s ease;
  text-align: center;
}

.profile-image {
  flex-shrink: 0;
}

.profile-card img {
  display: block;
  margin: 0 auto;
  transition: transform 0.5s ease;
}

.profile-card img:hover {
  transform: scale(1.1);
}

@media (min-width: 768px) {
  .profile-card {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }

  .profile-image {
    margin-right: 2rem;
  }
}

/* Menú */
.menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;
  width: 100%;
}

/* Caja de los elementos del menú */
.menu-item-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Elementos del menú */
.menu-item {
  font-size: 1.25rem;
  padding: 1rem;
  background-color: #ff6a00;
  border-radius: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.menu-item:hover {
  background-color: #ff5722;
  transform: translateY(-3px);
}

.menu-item:last-child {
  background-color: #d32f2f;
  color: #fff;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.menu-item:last-child:hover {
  background-color: #b71c1c;
}
</style>
