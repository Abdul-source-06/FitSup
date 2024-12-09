<template>
  <div class="cart-item flex items-center bg-white shadow-md rounded-lg mb-4 p-4 animate-fadeIn">
    <img :src="item.image" :alt="item.name" class="cart-item-image w-20 h-20 rounded-lg mr-4 object-cover" />
    <div class="cart-item-details flex-1">
      <h3 class="text-xl font-semibold">{{ item.name }}</h3>
      <p class="text-lg">Preu: <span class="price text-amber-600 font-bold">{{ item.price.toFixed(2) }} €</span></p>
      <div class="quantity-controls flex items-center mt-2">
        <button 
          @click="updateQuantity(item, -1)" 
          :disabled="item.quantity === 1" 
          class="quantity-btn bg-amber-600 text-white p-2 rounded-md disabled:opacity-50 hover:scale-105 transition-transform">
          -
        </button>
        <span class="quantity mx-4">{{ item.quantity }}</span>
        <button 
          @click="updateQuantity(item, 1)" 
          class="quantity-btn bg-amber-600 text-white p-2 rounded-md hover:scale-105 transition-transform">
          +
        </button>
      </div>
      <button 
        class="remove-item bg-red-500 text-white p-2 rounded-md mt-2 hover:bg-red-600 transition-colors"
        @click="removeItem(item.id)">
        🗑️ Eliminar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateQuantity(item, change) {
      this.$emit("update-quantity", { id: item.id, change });
    },
    removeItem(id) {
      this.$emit("remove-item", id);
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
