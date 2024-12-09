<template>
  <div class="menu">
    <h1>Menú</h1>
    <!-- Aquí irá el componente MenuForm -->
    <MenuForm />
  </div>
</template>

<script>
import MenuForm from '@/components/MenuForm.vue';

export default {
  name: 'MenuView',
  components: {
    MenuForm,
  },
};
</script>

<style scoped>
/* Estilos básicos para el menú */
.menu {
  background-color: #f0e2c2; /* Color crema como fondo */
  padding: 20px;
  border-radius: 10px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para dar profundidad */
  text-align: center;
}

h1 {
  color: #444; /* Color del título */
  font-family: Arial, sans-serif;
  font-size: 2rem;
  margin-bottom: 20px;
}
</style>
