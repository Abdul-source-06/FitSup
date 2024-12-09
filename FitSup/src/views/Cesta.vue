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

export default {
  name: "Cesta",
  components: {
    CartItem,
    CartSummary,
  },
  data() {
    return {
      cartItems: [
        { id: 1, name: "Samarreta", price: 10.5, quantity: 2, image: "https://via.placeholder.com/80" },
        { id: 2, name: "Pantalons", price: 20.0, quantity: 1, image: "https://via.placeholder.com/80" },
      ],
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
  methods: {
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
