<template>
  <div class="cart-summary">
    <h3>Resum de la Cistella</h3>
    <p>Total d'articles: <span class="highlight">{{ totalItems }}</span></p>
    <p>Preu total: <span class="highlight">{{ totalPrice.toFixed(2) }} €</span></p>
    <button class="checkout-button" @click="checkout">✅ Finalitzar Compra</button>
  </div>
</template>

<script>
export default {
  name: "CartSummary",
  props: {
    totalItems: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  methods: {
    checkout() {
      this.$emit("checkout");
    },
  },
};
</script>

<style scoped>
.cart-summary {
  background: #fef7f3;
  border: 1px solid #ff5722;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  animation: fadeIn 0.5s ease-in-out;
}

.highlight {
  color: #ff5722;
  font-weight: bold;
}

.checkout-button {
  background: linear-gradient(90deg, #ff5722, #ff8c42);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.3s;
}

.checkout-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}
</style>
