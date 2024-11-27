<template>
  <div class="profile-container bg-[#F9FAFB] text-gray-800 py-10 px-6 md:px-16">

    <!-- Caja 1: Informació personal -->
    <div class="menu-item-box mb-10">
      <h2 class="text-3xl font-semibold text-gray-900 mb-4">Informació Personal</h2>
      <p class="text-lg text-gray-600">Aquí podrás ver y actualizar tu información personal.</p>
    </div>

    <hr class="border-gray-300 mb-10" />

    <!-- Caja 2: Historial de compra y Crèdit -->
    <div class="menu-item-box mb-10">
      <h2 class="text-3xl font-semibold text-gray-900 mb-4">Historial de Compra</h2>
      <p class="text-lg text-gray-600">Consulta tu historial de compras pasadas.</p>

      <h2 class="text-3xl font-semibold text-gray-900 mt-6 mb-4">Crèdit</h2>
      <p class="text-lg text-gray-600">Gestiona el saldo y los créditos disponibles.</p>
    </div>

    <hr class="border-gray-300 mb-10" />

    <!-- Caja 3: Resenyes y Missatges -->
    <div class="menu-item-box mb-10">
      <h2 class="text-3xl font-semibold text-gray-900 mb-4">Resenyes</h2>
      <p class="text-lg text-gray-600">Lee y deja reseñas sobre productos y servicios.</p>

      <h2 class="text-3xl font-semibold text-gray-900 mt-6 mb-4">Missatges</h2>
      <p class="text-lg text-gray-600">Accede a tus mensajes y notificaciones.</p>
    </div>

    <hr class="border-gray-300 mb-10" />

    <!-- Caja 4: Sortir -->
    <div class="menu-item-box mb-10">
      <h2 class="text-3xl font-semibold text-gray-900 mb-4">Sortir</h2>
      <button class="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600 transition duration-300">Cerrar sesión</button>
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
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.6;
}

h2 {
  font-family: 'Inter', sans-serif;
}

/* Caja para agrupar las secciones */
.menu-item-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Estilos adicionales */
button {
  transition: all 0.3s ease;
}
</style>
