<template>
  <div class="profile-page flex flex-col items-center justify-center min-h-screen bg-[#ec3300]">
    <!-- Header / Navbar -->
    <header class="flex justify-between items-center w-full px-6 mb-10">
      <!-- Icono en vez de texto (tamaño pequeño) -->
      

    </header>

    <!-- Profile Card -->
    <div class="profile-card-container animate-slide-up w-full md:w-4/5 lg:w-3/4">
      <ProfileCard />
    </div>
  </div>
</template>

<script>
// Importar el componente del icono
import Icono from "@/components/icons/IconLogoLogin.vue";
import ProfileCard from "@/components/ProfileCard.vue";

export default {
  name: "ProfileView",
  components: {
    Icono,
    ProfileCard,
  },
};
</script>

<style scoped>
/* Animations */
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

/* Styles for menu icon hover effect */
.menu-icon:hover {
  transform: rotate(90deg);
}
</style>
