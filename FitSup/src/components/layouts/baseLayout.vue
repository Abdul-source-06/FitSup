<template>
    <div class="min-h-screen flex flex-col">

      <header class="bg-gray-800 text-white p-4">
        <div class="container mx-auto">
          <h1 class="text-2xl">App Header</h1>
        </div>
      </header>
  
      <!-- Main content area -->
      <main class="flex flex-1">
        <div class="container mx-auto p-4 w-full">
          <router-view />
        </div>
      </main>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white p-4 mt-auto">
        <div class="container mx-auto">
          <p>&copy; 2024 Mi Aplicación</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
 
    const BaseLayout = function() {
      
    };
  

    function layout() {
      return BaseLayout;
    }
  </script>
  