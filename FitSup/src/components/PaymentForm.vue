<template>
    <div class="max-w-4xl mx-auto py-10 px-6">
      <div class="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-x-12 lg:space-y-0">
        
        <!-- Formulario -->
        <div class="flex-1 p-8 rounded-lg shadow-xl transition-all transform hover:scale-105 duration-300" :style="{ backgroundColor: '#C02121' }">
          <div class="flex items-center justify-between mb-8">
            <h1 class="text-3xl font-bold text-black">Formulario de Pago</h1>
          </div>
          
          <form @submit.prevent="handleSubmit">
            <!-- Número de tarjeta (Fila 1) -->
            <div class="mb-6">
              <label for="cardNumber" class="block text-lg font-semibold text-black">Número de tarjeta</label>
              <input
                ref="cardNumber"
                type="text"
                id="cardNumber"
                v-model="cardNumber"
                placeholder="1234 5678 9012 3456"
                required
                maxlength="16" 
                class="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-xl"
              />
            </div>
    
            <!-- Fecha de expiración (Fila 2) -->
            <div class="mb-6 flex flex-col lg:flex-row gap-8">
              <div class="w-full lg:w-1/2">
                <label for="expiration" class="block text-lg font-semibold text-black">Fecha de expiración</label>
                <input
                  ref="expiration"
                  type="text"
                  id="expiration"
                  v-model="expiration"
                  placeholder="MM/AA"
                  required
                  maxlength="5"
                  class="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-xl"
                />
              </div>
    
              <!-- CVV (Fila 3) -->
              <div class="w-full lg:w-1/2">
                <label for="cvv" class="block text-lg font-semibold text-black">CVV</label>
                <input
                  ref="cvv"
                  type="text"
                  id="cvv"
                  v-model="cvv"
                  placeholder="123"
                  required
                  maxlength="3"
                  class="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-xl"
                />
              </div>
            </div>
    
            <!-- Botón de confirmación -->
            <div class="mb-6">
              <button
                type="submit"
                class="w-full py-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 text-xl"
              >
                Confirmar Pago
              </button>
            </div>
          </form>
        </div>
    
        <!-- Tarjeta de crédito visual -->
        <div class="w-80 p-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl shadow-lg lg:mt-0 mt-10">
          <div class="flex justify-between items-center mb-6">
            <div class="text-2xl font-semibold">Tarjeta de Crédito</div>
            <i class="fas fa-credit-card text-5xl"></i>
          </div>
          <div class="mb-8">
            <!-- Mostrar el número de la tarjeta en tiempo real -->
            <p class="text-2xl font-bold">{{ formattedCardNumber }}</p>
          </div>
          <div class="flex justify-between items-center">
            <!-- Mostrar la fecha de expiración y el CVV -->
            <p class="text-lg">Exp: {{ formattedExpiration }}</p>
            <p class="text-lg">CVV: {{ cvv }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PaymentForm',
    data() {
      return {
        cardNumber: '',
        expiration: '',
        cvv: '',
      };
    },
    computed: {
      // Computed para formatear el número de tarjeta con espacios
      formattedCardNumber() {
        return this.cardNumber
          .replace(/\D/g, '') // Eliminar cualquier carácter no numérico
          .replace(/(\d{4})(?=\d)/g, '$1 '); // Agregar espacios cada 4 dígitos
      },
      // Computed para formatear la fecha de expiración como MM/AA
      formattedExpiration() {
        return this.expiration.replace(/(\d{2})(?=\d{1})/, '$1/'); // Añadir / entre el mes y año
      }
    },
    methods: {
      handleSubmit() {
        // Validar campos antes de enviar
        if (this.cardNumber && this.expiration && this.cvv) {
          console.log('Pago procesado con éxito');
          this.resetForm();
        } else {
          alert('Por favor, completa todos los campos');
        }
      },
      resetForm() {
        this.cardNumber = '';
        this.expiration = '';
        this.cvv = '';
        this.$refs.cardNumber.focus(); // Usar ref para enfocar el primer campo
      }
    },
    mounted() {
      // Usar ref para hacer foco en el primer campo cuando se monta el componente
      this.$refs.cardNumber.focus();
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para mejorar la apariencia y agrandar los elementos */
  button {
    transition: transform 0.3s ease-in-out;
  }
  button:hover {
    transform: scale(1.05);
  }
  input:focus {
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5); /* Azul suave */
  }
  
  /* Aumentar la tarjeta */
  .w-80 {
    width: 20rem;
  }
  
  /* Añadir margen superior a la tarjeta visual */
  .mt-10 {
    margin-top: 2.5rem; /* Ajusta el valor para más o menos espacio */
  }
  </style>
  