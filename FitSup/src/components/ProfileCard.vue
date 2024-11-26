<!-- src/components/Profile.vue -->
<template>
  <div class="profile-container text-black">

    <!-- Sección de información -->
    <div class="section my-8">
      <h2 class="text-3xl font-bold text-justify">Informació personal</h2>
    </div>
    <hr />

    <!-- Sección de historial -->
    <div class="section my-8">
      <h2 class="text-3xl font-bold text-justify">Historial de compra</h2>
      <h2 class="text-3xl font-bold text-justify">Credit</h2>
    </div>
    <hr />

    <!-- Sección de reseñas y mensajes -->
    <div class="section my-8">
      <h2 class="text-3xl font-bold text-justify">Resenyes</h2>
      <h2 class="text-3xl font-bold text-justify">Missatges</h2>
    </div>
    <hr />

    <!-- Sección de salida -->
    <div class="section my-8">
      <h2 class="text-3xl font-bold text-justify">Sortir</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
};
</script>

<style scoped>
.profile-container {
  font-family: 'Times New Roman', serif;
  font-size: 12pt;
}

h1 {
  font-family: 'Calibri', sans-serif;
}

h2 {
  font-family: 'Calibri', sans-serif;
}
</style>
