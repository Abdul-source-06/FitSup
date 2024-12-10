<template>
    <div class="max-w-7xl mx-auto py-8 px-4">

      <PaymentForm />
    </div>
  </template>
  
  <script>
  import PaymentForm from '@/components/PaymentForm.vue';
  
  export default {
    name: 'Payment',
    components: {
      PaymentForm
    }
  };
  </script>
  