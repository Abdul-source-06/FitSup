<template>
  <div class="container mx-auto py-8 px-4">

    <!-- Filtro de búsqueda -->
    <search-bar :searchQuery="searchQuery" @update:searchQuery="searchQuery = $event" />

    <h1 class="text-4xl font-extrabold text-center mb-9 text-white shadow-xl transform transition-all duration-700 ease-in-out animate-fadeIn bg-black p-6 rounded-lg">
  ¡Los mejores Suplementos!
</h1>



    <!-- Lista de productos -->
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
      <product-card 
        v-for="product in filteredProducts" 
        :key="product.id" 
        :product="product" 
        @product-clicked="openProductDetail"
      />
    </div>

    <!-- Cuadro de detalles del producto (oculto inicialmente) -->
    <div v-if="selectedProduct" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div class="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 class="text-2xl font-semibold text-gray-800">{{ selectedProduct.name }}</h2>
        <img :src="selectedProduct.image" alt="Imagen de producto" class="w-full h-auto object-contain rounded-md mt-4" />
        <p class="text-gray-600 mt-4">{{ selectedProduct.description }}</p>
        <p class="font-bold text-gray-900 mt-2">${{ selectedProduct.price }}</p>

        <!-- Botón Añadir a la cesta -->
        <button 
          @click="addToCart" 
          class="mt-4 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 transition duration-200"
        >
          Añadir a la cesta
        </button>
        
        <!-- Botón de cerrar -->
        <button @click="closeProductDetail" class=" ml-40 mt-4 text-gray-500 hover:text-gray-700">
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios'; // Para hacer la llamada al backend
import SearchBar from '@/components/SearchBar.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'Home',
  components: {
    SearchBar,
    ProductCard,
  },
  setup() {
    const searchQuery = ref('');
    const username = ref(localStorage.getItem('username')); // Obtener el nombre de usuario de localStorage
    const products = ref([
      { id: 1, name: 'Proteína Whey', description: 'Proteína de alta calidad para crecimiento muscular.', price: 29.99, image: '/fotos/whey.webp' },
      { id: 2, name: 'Creatina', description: 'Mejora el rendimiento físico y fuerza.', price: 19.99, image: '/fotos/creatina.jpg' },
      { id: 3, name: 'BCAA', description: 'Aminoácidos de cadena ramificada para recuperación.', price: 15.99, image: '/fotos/BCAA.avif' },
      { id: 4, name: 'Multivitaminas', description: 'Vitaminas esenciales para la salud general.', price: 12.99, image: '/fotos/Multivitaminas.jpg' },
      { id: 5, name: 'Omega 3', description: 'Aceite de pescado para la salud cardiovascular.', price: 18.99, image: '/fotos/omega3.avif' },
      { id: 6, name: 'Glutamina', description: 'Recuperación muscular y prevención de catabolismo.', price: 24.99, image: '/fotos/glutamina.avif' },
      { id: 7, name: 'Pre-entrenamiento', description: 'Energía y enfoque para tu entrenamiento.', price: 22.99, image: '/fotos/pre.jpg' },
      { id: 8, name: 'Caseína', description: 'Proteína de absorción lenta para la noche.', price: 34.99, image: '/fotos/caseina.avif' },
    ]);
    const selectedProduct = ref(null);
    const isLoggedIn = ref(false); // Para saber si el usuario está logueado

    // Filtro de productos según la búsqueda
    const filteredProducts = computed(() =>
      products.value.filter(product =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    // Función para iniciar sesión
    const loginUser = async (usernameInput, passwordInput) => {
      try {
        const response = await axios.post('http://localhost:3000/login', {
          username: usernameInput,
          password: passwordInput,
        });

        if (response.data.success) {
          username.value = response.data.username;
          localStorage.setItem('username', username.value); // Guardar en localStorage
          isLoggedIn.value = true; // El usuario ahora está logueado
        } else {
          alert('Credenciales incorrectas');
        }
      } catch (error) {
        console.error('Error al autenticar al usuario:', error.response?.data?.message || error.message);
        alert('Error al iniciar sesión');
      }
    };

    // Verificamos si el usuario está en localStorage o no
    onMounted(() => {
      if (username.value) {
        isLoggedIn.value = true; // El usuario ya está logueado
      } else {
        isLoggedIn.value = false; // No está logueado
      }
    });

    // Abrir cuadro de detalles del producto
    const openProductDetail = (product) => {
      selectedProduct.value = product;
    };

    // Cerrar cuadro de detalles del producto
    const closeProductDetail = () => {
      selectedProduct.value = null;
    };

    // Añadir producto a la cesta
    const addToCart = async () => {
      if (!selectedProduct.value || !username.value) {
        alert('Por favor, inicia sesión antes de añadir productos a la cesta');
        return;
      }

      const product = selectedProduct.value;

      try {
        // Primero, obtenemos la cesta existente del usuario
        const response = await axios.get(`http://localhost:3000/carts?username=${username.value}`);
        
        console.log('Respuesta GET carrito:', response.data);  // Verifica la respuesta

        if (response.data.length > 0) {
          // Si ya existe la cesta del usuario, la actualizamos
          const userCart = response.data[0];
          userCart.products.push(product);  // Añadir el producto a la cesta del usuario

          // Verifica si el producto se añadió correctamente
          console.log('Cesta actualizada:', userCart);

          // Enviar los datos actualizados al backend
          const putResponse = await axios.put(`http://localhost:3000/carts/${userCart.id}`, userCart);
          console.log('Respuesta PUT:', putResponse.data);  // Verifica la respuesta de PUT
        } else {
          // Si no existe la cesta del usuario, la creamos
          const postResponse = await axios.post('http://localhost:3000/carts', {
            username: username.value,
            products: [product]  // Crear un nuevo array con el producto añadido
          });
          console.log('Respuesta POST:', postResponse.data);  // Verifica la respuesta de POST
        }

        alert('Producto añadido a la cesta');
      } catch (error) {
        console.error('Error al añadir el producto a la cesta:', error.response?.data?.message || error.message);
        alert('Error al añadir el producto a la cesta');
      }
    };

    return {
      searchQuery,
      filteredProducts,
      selectedProduct,
      openProductDetail,
      closeProductDetail,
      addToCart,
      username,
      loginUser, // Función de login
      isLoggedIn, // Variable para saber si el usuario está logueado
    };
  },
};
</script>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px); /* Empieza un poco más abajo */
  }
  100% {
    opacity: 1;
    transform: translateY(0); /* Llega a su posición normal */
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}</style>
