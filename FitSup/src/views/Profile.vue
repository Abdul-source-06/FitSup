<template>
  <div class="profile-page flex flex-col items-center justify-center min-h-screen bg-[#F15322]">
    <!-- Header -->
    <header class="flex justify-between items-center w-full px-6 mb-10">
      <div class="text-3xl font-bold text-white">FØS</div>
      <div class="menu-icon text-4xl text-white cursor-pointer">☰</div>
    </header>

    <!-- Profile Card -->
    <div class="profile-card-container animate-slide-up w-full md:w-4/5 lg:w-3/4">
      <ProfileCard />
    </div>

    <!-- Profile Info -->
    <div class="profile-info mt-10 text-center text-white">
      <h2 class="text-3xl font-bold">Benvingut, Usuari!</h2>
      <p class="text-lg">Barcelona, 25 anys</p>
    </div>
  </div>
</template>

<script>
import ProfileCard from "@/components/ProfileCard.vue";

export default {
  name: "ProfileView",
  components: {
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

/* Global Styles */
.profile-page {
  font-family: "Poppins", sans-serif;
  background-color: #f15322;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.header {
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

/* Profile Card Styles */
.profile-card-container {
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
