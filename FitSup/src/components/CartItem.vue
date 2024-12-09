<template>
  <div class="cart-item" :key="item.id">
    <img :src="item.image" :alt="item.name" class="cart-item-image" />
    <div class="cart-item-details">
      <h3>{{ item.name }}</h3>
      <p>Preu: <span class="price">{{ item.price.toFixed(2) }} €</span></p>
      <div class="quantity-controls">
        <button @click="updateQuantity(item, -1)" :disabled="item.quantity === 1" class="quantity-btn">-</button>
        <span class="quantity">{{ item.quantity }}</span>
        <button @click="updateQuantity(item, 1)" class="quantity-btn">+</button>
      </div>
      <button class="remove-item" @click="removeItem(item.id)">🗑️ Eliminar</button>
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
.cart-item {
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 16px;
  padding: 16px;
  animation: fadeIn 0.4s ease-in-out;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 16px;
  object-fit: cover;
}

.cart-item-details {
  flex: 1;
}

.price {
  color: #ff5722;
  font-weight: bold;
}

.quantity-controls {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.quantity-btn {
  background: #ff5722;
  color: #fff;
  border: none;
  padding: 6px 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s;
}

.quantity-btn:hover {
  transform: scale(1.1);
}

.remove-item {
  background: #ff3b3b;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  transition: background 0.3s;
}

.remove-item:hover {
  background: #e01e1e;
}

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
