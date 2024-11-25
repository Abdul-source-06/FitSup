<template>
  <div class="bg-orange-500 p-6 text-black" :style="{ backgroundColor: '#C02121' }">
    <h2 class="text-2xl font-bold text-white">Login</h2>
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
