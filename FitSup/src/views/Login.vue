<template>
  <div class="min-h-screen flex flex-col lg:flex-row items-center justify-between"
    :style="{ backgroundColor: '#C02121' }">
    <div class="w-full lg:w-1/2 flex justify-center items-center">
      <div class=" text-10xl font-bold text-black-600 animate-slideDown flex justify-center items-center space-x-2">
        <span class="text-10xl font-bold relative" style="top: -0.5rem; left: 0rem;">F</span>
        <div class="w-32 h-28">
          <IconLogoLogin />
        </div>
        <span class="text-10xl font-bold relative" style="top: -0.5rem; left: 0rem;">S</span>
      </div>
    </div>
    <!-- Formulario a la derecha -->
    <div class="w-full lg:w-1/2 flex justify-center items-center p-6 animate-slideLeft">
      <div class="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  </div>
</template>

<script>
import RegisterLink from '@/components/RegisterLink.vue';
import LoginForm from '../components/LoginForm.vue';
import IconLogoLogin from '@/components/icons/IconLogoLogin.vue';

export default {
  name: 'Login',
  components: {
    LoginForm,
    RegisterLink,
    IconLogoLogin
  }
}
</script>
