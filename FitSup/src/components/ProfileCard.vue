<template>
  <div class="profile-container bg-gray-50 text-gray-800 py-10 px-6 md:px-16 rounded-xl shadow-lg">
    <!-- Personal Information Section -->
    <section class="menu-item-box mb-10">
      <h2 class="section-title">Informació Personal</h2>
      <p class="section-description">
        Aquí podràs veure i actualitzar la teva informació personal.
      </p>
    </section>

    <hr class="separator mb-10" />

    <!-- Purchase History and Credit Section -->
    <section class="menu-item-box mb-10">
      <h2 class="section-title">Historial de Compra</h2>
      <p class="section-description">
        Consulta el teu historial de compres passades.
      </p>

      <h2 class="section-title mt-6">Crèdit</h2>
      <p class="section-description">
        Gestiona el saldo i els crèdits disponibles.
      </p>
    </section>

    <hr class="separator mb-10" />

    <!-- Reviews and Messages Section -->
    <section class="menu-item-box mb-10">
      <h2 class="section-title">Resenyes</h2>
      <p class="section-description">
        Llegeix i deixa ressenyes sobre productes i serveis.
      </p>

      <h2 class="section-title mt-6">Missatges</h2>
      <p class="section-description">
        Accedeix als teus missatges i notificacions.
      </p>
    </section>

    <hr class="separator mb-10" />

    <!-- Logout Section -->
    <section class="menu-item-box mb-10">
      <h2 class="section-title text-red-600">Sortir</h2>
      <button class="logout-button">Tancar sessió</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProfileCard",
};
</script>

<style scoped>
.profile-container {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.6;
}

.section-title {
  font-size: 1.875rem; /* text-3xl */
  font-weight: 600; /* font-semibold */
  color: #1f2937; /* text-gray-900 */
  margin-bottom: 1rem; /* mb-4 */
}

.section-description {
  font-size: 1.125rem; /* text-lg */
  color: #4b5563; /* text-gray-600 */
}

.separator {
  border-color: #d1d5db; /* border-gray-300 */
}

.menu-item-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.logout-button {
  background-color: #ef4444; /* bg-red-500 */
  color: white;
  font-weight: bold; /* font-bold */
  padding: 0.5rem 1.5rem; /* py-2 px-6 */
  border-radius: 0.375rem; /* rounded-lg */
  transition: background-color 0.3s ease;
}

.logout-button:hover {
  background-color: #dc2626; /* hover:bg-red-600 */
}
</style>
