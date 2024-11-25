<template>
  <div class="p-6 text-black" :style="{ backgroundColor: '#C02121' }">
    <h2 class="text-2xl font-bold text-white flex justify-center">Login</h2>
    <LoginForm />
  </div>


</template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>
