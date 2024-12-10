<template>
  <div class="max-w-7xl mx-auto py-8 px-4">
    <h1 class="text-4xl font-bold text-center mb-6 text-black">Mi Cesta</h1>

    <!-- Mensaje si la cesta está vacía -->
    <div v-if="cart.length === 0" class="text-center text-xl text-white">
      <p>No tienes productos en la cesta.</p>
    </div>

    <!-- Lista de productos en la cesta -->
    <div v-else>
      <div v-for="product in cart" :key="product.id" class="flex items-center border-b border-gray-300 py-4">
        <img :src="product.image" :alt="product.name" class="w-24 h-24 object-cover rounded-md shadow-md mr-4" />
        <div class="flex-1"> 
          <h2 class="text-xl font-semibold text-gray-800">{{ product.name }}</h2>
          <p class="text-gray-600 mt-2">{{ product.description }}</p>
          <p class="text-lg font-bold text-gray-900 mt-2">Precio: ${{ product.price.toFixed(2) }}</p>
        </div>
      </div>
    </div>

    <!-- Botón para limpiar la cesta -->
    <div v-if="cart.length > 0" class="mt-6 flex justify-center">
      <button 
        @click="clearCart" 
        class="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
      >
        Limpiar Cesta
      </button>
    </div>

    <!-- Botón de Pagar -->
    <div v-if="cart.length > 0" class="mt-6 flex justify-center">
      <button 
        @click="goToPayment"
        class="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
      >
        Pagar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cesta',
  data() {
    return {
      cart: [], // Aquí se guardarán los productos de la cesta
      username: '', // Suponiendo que el usuario está identificado
    };
  },
  mounted() {
    this.loadCart();
  },
  methods: {
    // Cargar la cesta desde la base de datos o API
    loadCart() {
      // Esto es un ejemplo, sustituye por tu lógica de API real
      this.cart = [
        {
          id: 1,
          name: 'Producto 1',
          description: 'Descripción del producto 1',
          price: 10.99,
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          name: 'Producto 2',
          description: 'Descripción del producto 2',
          price: 15.49,
          image: 'https://via.placeholder.com/150',
        },
      ];
    },
    // Limpiar la cesta (vaciarla)
    clearCart() {
      this.cart = [];
    },
    // Redirigir al formulario de pago
    goToPayment() {
      this.$router.push({ name: 'Payment' }); // Redirige a la vista de pago
    }
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
