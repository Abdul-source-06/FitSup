<template>
    <div class="cart-page">
      <h1 class="page-title">🛒 La teva Cistella</h1>
      <div v-if="cartItems.length > 0">
        <div class="cart-items">
          <CartItem
            v-for="item in cartItems"
            :key="item.id"
            :item="item"
            @update-quantity="updateQuantity"
            @remove-item="removeItem"
          />
        </div>
        <CartSummary
          :total-items="totalItems"
          :total-price="totalPrice"
          @checkout="checkout"
        />
      </div>
      <p v-else class="empty-cart">La cistella està buida 🛍️</p>
    </div>
  </template>
  
  <script>
  import CartItem from "@/components/CartItem.vue";
  import CartSummary from "@/components/CartSummary.vue";
  import axios from 'axios';
  
  export default {
    name: "cesta",
    components: {
      CartItem,
      CartSummary,
    },
    data() {
      return {
        cartItems: [], // Inicializamos la cesta como vacía
      };
    },
    computed: {
      totalItems() {
        return this.cartItems.reduce((total, item) => total + item.quantity, 0);
      },
      totalPrice() {
        return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    mounted() {
      // Aquí hacemos la petición a la API para obtener los productos de la cesta del usuario
      this.fetchCartItems();
    },
    methods: {
      async fetchCartItems() {
        const username = 'usuarioPrueba'; // O usa un valor dinámico para obtener el nombre del usuario
        
        try {
          const response = await axios.get(`http://localhost:3000/cart/${username}`);
          if (response.data && Array.isArray(response.data)) {
            this.cartItems = response.data;
          } else {
            console.error('No se encontraron productos en la cesta.');
          }
        } catch (error) {
          console.error('Error al obtener los productos de la cesta:', error.response?.data?.message || error.message);
        }
      },
      updateQuantity({ id, change }) {
        const item = this.cartItems.find((item) => item.id === id);
        if (item) {
          item.quantity += change;
        }
      },
      removeItem(id) {
        this.cartItems = this.cartItems.filter((item) => item.id !== id);
      },
      checkout() {
        alert("Compra finalitzada!");
        this.cartItems = [];
      },
    },
  };
  </script>
  
  <style scoped>
  .cart-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 16px;
    font-family: "Arial", sans-serif;
  }
  
  .page-title {
    text-align: center;
    color: #ff5722;
    margin-bottom: 20px;
  }
  
  .cart-items {
    margin-bottom: 24px;
  }
  
  .empty-cart {
    text-align: center;
    font-size: 18px;
    color: #888;
  }
  
  @media (max-width: 768px) {
    .cart-item {
      flex-direction: column;
      align-items: flex-start;
    }
    .cart-item-image {
      margin-bottom: 10px;
    }
  }
  </style>
  