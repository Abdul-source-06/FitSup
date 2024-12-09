<template>
  <div class="relative group cursor-pointer">
    <!-- Imagen del producto -->
    <div class="overflow-hidden rounded-lg">
      <img 
        :src="product.image" 
        :alt="product.name" 
        class="w-full h-48 object-cover rounded-lg transform transition duration-300 ease-in-out group-hover:scale-110"
        @click="openModal"
      />
    </div>
    
    <!-- Nombre del producto -->
    <h3 class="text-lg font-semibold mt-4 text-center text-gray-800">{{ product.name }}</h3>
    
    <!-- Precio -->
    <p class="text-gray-500 mt-2 text-center">${{ product.price.toFixed(2) }}</p>

    <!-- Modal con la descripción -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded-lg w-11/12 md:w-96 relative">
        <!-- Cerrar el modal -->
        <button @click="closeModal" class="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700">&times;</button>
        
        <!-- Información detallada del producto -->
        <h2 class="text-2xl font-bold text-center">{{ product.name }}</h2>
        <p class="mt-4 text-gray-700">{{ product.description }}</p>
        <p class="mt-4 font-bold text-lg">Precio: ${{ product.price.toFixed(2) }}</p>
        
        <!-- Imagen más grande -->
        <img 
          :src="product.image" 
          :alt="product.name" 
          class="mt-4 w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object, // Producto pasado desde el componente padre
  },
  data() {
    return {
      isModalOpen: false, // Estado para controlar la visibilidad del modal
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true; // Abre el modal
    },
    closeModal() {
      this.isModalOpen = false; // Cierra el modal
    }
  }
};
</script>
