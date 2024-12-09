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
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Cesta',
  data() {
    return {
      cart: [],
      username: 'usuarioEjemplo', // Aquí debes obtener el nombre de usuario de manera dinámica, por ejemplo, con login
    };
  },
  mounted() {
    this.loadCart();
  },
  methods: {
    loadCart() {
      axios.get(`http://localhost:3000/carts?username=${this.username}`)
        .then(response => {
          if (response.data.length > 0) {
            this.cart = response.data[0].products;
          }
        })
        .catch(error => {
          console.error('Error al cargar la cesta:', error);
        });
    },
    addToCart(product) {
      const data = {
        username: this.username,
        product: product,
      };

      axios.post('http://localhost:3000/cesta', data)
        .then(response => {
          console.log('Producto añadido a la cesta:', response.data);
          this.loadCart(); // Recargar la cesta después de añadir el producto
        })
        .catch(error => {
          console.error('Error al añadir el producto a la cesta:', error);
        });
    },
    clearCart() {
      // Lógica para limpiar la cesta (si es necesario)
    }
  }
};
</script>
