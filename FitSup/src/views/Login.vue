<template>
  <div class="min-h-screen flex flex-col lg:flex-row items-center justify-between"
    :style="{ backgroundColor: '#C02121' }">
    <div class="w-full lg:w-1/2 flex justify-center items-center mt-5 lg:mt-0">
      <div class=" text-10xl font-bold text-black-600 animate-slideDown flex justify-center items-center space-x-2">
        <span class="text-11xl font-bold relative group lg:shadow-2xl" style="top: -0.5rem; left: 0rem;">F

          <span
            class="absolute left-10 top-[105%] opacity-0 transform translate-y-[-10px] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 delay-300 text-2xl">i</span>
          <span
            class="absolute left-10 top-[125%] opacity-0 transform translate-y-[-10px] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 delay-400 text-2xl">t</span>
        </span>
        <div class="w-32 h-28">
          <IconLogoLogin />
        </div>
        <span class="text-11xl font-bold relative group lg:shadow-2xl" style="top: -0.5rem; left: 0rem;">S
          <span
            class="absolute left-10 top-[105%] opacity-0 transform translate-y-[-20px] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 delay-300 text-2xl">u</span>
          <span
            class="absolute left-10 top-[125%] opacity-0 transform translate-y-[-20px] lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-300 delay-400 text-2xl">p</span>
        </span>
      </div>
    </div>
    <!-- Formulario a la derecha -->
    <div
      class="w-full lg:w-1/2 flex justify-center items-center p-6 lg:animate-slideLeft sm:animate-fadeIn mt-4 lg:mt-0">
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
