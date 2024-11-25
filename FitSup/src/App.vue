<script setup>

</script>

<template>
  <header class="flex flex-col items-center gap-6 lg:flex-row lg:items-start lg:justify-between p-6 bg-gray-100">
    <div class="text-center lg:text-left">
      <HelloWorld msg="You did it!" />

      <nav class="mt-4 space-x-4">
        <RouterLink to="/" class="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200">
          Home
        </RouterLink>
        <RouterLink to="/about" class="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-200">
          About
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
/* Puedes eliminar los estilos manuales que reemplazamos con Tailwind */
</style>
