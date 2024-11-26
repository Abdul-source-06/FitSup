<template>
  <div class="profile-page">
      <div class=" text-white">
        <h2 class="text-2xl font-bold">USUARI</h2>
        <ProfileCard />
      </div>

  </div>
</template>

<script>
import ProfileCard from '../components/ProfileCard.vue';
export default {
  name: 'Profile',
  components: {
    ProfileCard
  }
}
</script>

<style scoped>
.profile-page {
  background-color: #F15322;
  height: 100vh;
  margin: 0;
}
.h2 {

  text-align: center;
}
</style>
