<template>
  <div class="min-h-screen flex flex-col items-center justify-center" :style="{ backgroundColor: '#C02121' }">
    <!-- Logo, letras F y S en la parte superior -->
    <div class="text-black mb-4 flex justify-center items-center space-x-2 animate-slideDown">
      <span class="text-11xl font-bold relative group shadow-2xl">
        F
      </span>
      <div class="w-32 h-28">
        <IconLogoLogin />
      </div>
      <span class="text-11xl font-bold relative grou shadow-2xl">
        S
      </span>
    </div>

    <!-- Formulario de registro debajo del logo y las letras -->
    <div class="w-full p-6 lg:animate-slideLeft sm:animate-fadeIn">
      <RegisterForm />
    </div>
  </div>
</template>

<script>
import RegisterForm from '@/components/RegisterForm.vue'; 
import IconLogoLogin from '@/components/icons/IconLogoLogin.vue'; 

export default {
  name: 'Register',
  components: {
    RegisterForm,
    IconLogoLogin
  }
};
</script>

<style scoped>

</style>
