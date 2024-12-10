<template>
  <div class="cart-summary bg-amber-50 border border-amber-600 p-5 rounded-xl text-center animate-fadeIn">
    <h3 class="text-xl font-semibold">Resum de la Cistella</h3>
    <p class="text-lg">Total d'articles: <span class="highlight text-amber-600 font-bold">{{ totalItems }}</span></p>
    <p class="text-lg">Preu total: <span class="highlight text-amber-600 font-bold">{{ totalPrice.toFixed(2) }} €</span></p>
    <button 
      class="checkout-button bg-gradient-to-r from-amber-600 to-amber-400 text-white px-6 py-3 text-lg rounded-full cursor-pointer shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
      @click="checkout">
      ✅ Finalitzar Compra
    </button>
    <button 
      class="payment-button bg-blue-500 text-white px-6 py-3 text-lg rounded-full cursor-pointer shadow-lg transform transition-all hover:scale-105 hover:shadow-xl mt-4"
      @click="goToPayment">
      💳 Pagar
    </button>
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
    // Nueva función para navegar al formulario de pago
    goToPayment() {
      this.$router.push("/payment"); // Navega a la ruta de pago
    },
  },
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
